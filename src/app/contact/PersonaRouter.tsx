"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PILL_LIST, pillClass } from "@/components/funnel/pill";
import { captureAttribution } from "@/lib/attribution";
import { applyResetIfRequested } from "@/lib/funnel/reset";
import { getSessionId } from "@/lib/session";
import type { Persona } from "@/lib/leads/types";

interface Option {
  label: string;
  persona: Persona;
}

export function PersonaRouter({ options }: { options: Option[] }) {
  const router = useRouter();

  /**
   * Capture attribution HERE, not just inside the funnel.
   *
   * A tagged link usually points at /contact, and the visitor's first
   * click takes them to /contact/founder — a URL carrying no query
   * string at all. If capture only happened on the funnel page, the
   * tags would already be gone by the time anything looked for them,
   * and every campaign would report as direct traffic.
   *
   * Capturing on the landing screen and storing it is what makes the
   * tags survive the rest of the flow.
   */
  useEffect(() => {
    // Must run BEFORE capture. Attribution is first-touch-wins, so a
    // capture that happens first would find the previous run's tags and
    // keep them — and the reset would appear to have done nothing.
    applyResetIfRequested();
    captureAttribution();
    getSessionId();
  }, []);

  return (
    <div className={PILL_LIST}>
      {options.map((option) => (
        <button
          key={option.persona}
          type="button"
          className={pillClass(false)}
          onClick={() => router.push(`/contact/${option.persona}`)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
