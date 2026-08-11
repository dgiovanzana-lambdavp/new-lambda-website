import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Funnel } from "@/components/funnel/Funnel";
import { FUNNEL_CONFIG } from "@/config/funnel";
import { isPersona, type Persona } from "@/lib/leads/types";

/**
 * Every branch is a deep link.
 *
 * A specific LinkedIn post, X post, or newsletter issue can point
 * straight at /contact/founder and skip the router screen. That is why
 * the slugs are human-readable and must stay stable: they end up in
 * published URLs that outlive any refactor.
 */
export const metadata: Metadata = {
  title: "Contact — Lambda Capital",
};

/** Pre-render the lanes that are actually reachable. */
export function generateStaticParams() {
  const personas: Persona[] = ["founder", "general"];
  if (FUNNEL_CONFIG.lpLaneEnabled) personas.push("lp");
  if (FUNNEL_CONFIG.servicesLaneEnabled) personas.push("services");
  return personas.map((persona) => ({ persona }));
}

/**
 * `params` is typed explicitly rather than via Next's generated
 * `PageProps` helper. The generated types depend on `.next/types`
 * existing, which makes a clean checkout fail typecheck before its
 * first build — and they may not be enabled at all in the repo this
 * merges into. Note it is a Promise: dynamic params are async in the
 * App Router from Next 15 onward.
 */
export default async function PersonaPage({
  params,
}: {
  params: Promise<{ persona: string }>;
}) {
  const { persona } = await params;

  if (!isPersona(persona)) notFound();

  /**
   * A disabled lane redirects rather than 404s.
   *
   * These are real routes that will exist later, and links to them may
   * already be in the wild. Sending someone to the router screen keeps
   * them in the funnel; a 404 loses them. The redirect is also what
   * makes the flag a genuine gate — hiding the router option alone
   * would leave the URL directly reachable.
   */
  if (persona === "services" && !FUNNEL_CONFIG.servicesLaneEnabled) {
    redirect("/contact");
  }
  if (persona === "lp" && !FUNNEL_CONFIG.lpLaneEnabled) {
    redirect("/contact");
  }

  return <Funnel persona={persona} />;
}
