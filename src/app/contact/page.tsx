import type { Metadata } from "next";
import { FUNNEL_CONFIG } from "@/config/funnel";
import type { Persona } from "@/lib/leads/types";
import { PersonaRouter } from "./PersonaRouter";

export const metadata: Metadata = {
  title: "Contact | Lambda Capital",
  description:
    "Tell us who you are and we'll route you to the right conversation.",
};

/**
 * Screen 0 — the router.
 *
 * Gated options are removed from the array entirely rather than hidden
 * with CSS. A disabled-but-present option still ships its label and
 * destination to every visitor, which for the LP lane is exactly the
 * public-solicitation exposure the flag exists to prevent.
 */
export default function ContactPage() {
  const options: { label: string; persona: Persona }[] = [
    { label: "I'm a founder raising capital", persona: "founder" },
    ...(FUNNEL_CONFIG.lpLaneEnabled
      ? [
          {
            label: "I'm an investor interested in Lambda",
            persona: "lp" as Persona,
          },
        ]
      : []),
    ...(FUNNEL_CONFIG.servicesLaneEnabled
      ? [
          {
            label: "I'm looking for operating support",
            persona: "services" as Persona,
          },
        ]
      : []),
    { label: "Something else", persona: "general" },
  ];

  return (
    <div className="flex min-h-full flex-col justify-center">
      <p className="text-sm tracking-widest text-lambda-muted uppercase">
        Lambda Capital
      </p>
      <h1 className="mt-4 text-3xl leading-tight font-semibold tracking-tight text-lambda-fg sm:text-4xl">
        What brings you here?
      </h1>

      <div className="mt-10">
        <PersonaRouter options={options} />
      </div>
    </div>
  );
}
