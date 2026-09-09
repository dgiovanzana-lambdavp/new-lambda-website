"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { RESPONSE_WINDOW_COPY } from "@/config/funnel";
import type { ContactFieldName } from "@/config/questions/types";
import type { LeadResponse, Persona } from "@/lib/leads/types";
import { BookingCalendar } from "./BookingCalendar";

interface ThankYouProps {
  response: LeadResponse;
  persona: Persona;
  contact: Partial<Record<ContactFieldName, string>>;
  sessionId: string;
  utmSource?: string;
}

/**
 * The four terminal screens.
 *
 * ── The rule that governs all of them ──────────────────────────────
 *
 * None may reveal WHY. No tier, no score, no "you didn't meet our
 * criteria", no hint that a threshold exists. The visitor sees either a
 * calendar or a courteous response commitment, and nothing about the
 * machinery behind it.
 *
 * That is not only discretion. The moment a decline explains itself it
 * teaches the next visitor which answer to change, and the gate stops
 * measuring anything real.
 *
 * The component receives `outcome` and nothing else from the server —
 * no tier and no failed gates cross the wire — so there is nothing here
 * that could leak even by accident.
 */
export function ThankYou({
  response,
  persona,
  contact,
  sessionId,
  utmSource,
}: ThankYouProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstName = contact.firstName?.trim();
  const greeting = firstName ? `Thanks, ${firstName}.` : "Thanks.";

  const showCalendar =
    persona === "founder" &&
    response.outcome === "book" &&
    Boolean(response.calendarUrl);

  // Move focus to the heading, same as every step transition. Submitting
  // replaces the whole screen; without this a keyboard user is left with
  // focus on a button that no longer exists.
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <div className="flex min-h-full flex-col justify-between">
      <div>
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="text-3xl leading-tight font-semibold tracking-tight text-lambda-fg outline-none sm:text-4xl"
        >
          {greeting}
        </h1>

        <div className="mt-4">{renderBody()}</div>
      </div>

      <p className="mt-10 text-sm text-lambda-muted">
        In the meantime, have a look at{" "}
        <Link
          href="/portfolio"
          className="text-lambda-accent underline underline-offset-4"
        >
          our portfolio
        </Link>
        .
      </p>
    </div>
  );

  function renderBody() {
    // The services lane is exploratory and never scored, so its copy is
    // selected by persona rather than by outcome. It deliberately
    // promises no deliverable — Lambda has not decided whether it sells
    // these services.
    if (persona === "services") {
      return (
        <p className="max-w-prose text-lg text-lambda-body">
          We&rsquo;re actively scoping how we support operators beyond capital.
          We&rsquo;ll be in touch to learn more about what you need.
        </p>
      );
    }

    if (persona === "lp" || persona === "general") {
      return (
        <p className="max-w-prose text-lg text-lambda-body">
          We&rsquo;ve got your note and someone will get back to you{" "}
          {RESPONSE_WINDOW_COPY}.
        </p>
      );
    }

    switch (response.outcome) {
      case "book":
        return (
          <>
            {/*
              One short line, then the calendar. The spec requires the
              heading and the calendar both be visible without scrolling
              at 768px height, so this must not grow into a paragraph.
            */}
            <p className="text-lg text-lambda-body">
              Let&rsquo;s find a time to talk.
            </p>

            {showCalendar ? (
              <div className="mt-6 h-[32rem] overflow-hidden rounded-xl border border-lambda-border">
                <BookingCalendar
                  bookingLink={response.calendarUrl!}
                  persona={persona}
                  utmSource={utmSource}
                />
              </div>
            ) : (
              /* Booking link not configured — fall back to a manual promise. */
              <p className="mt-4 max-w-prose text-lg text-lambda-body">
                We&rsquo;ll follow up shortly with a time.
              </p>
            )}
          </>
        );

      case "review":
        return (
          <p className="max-w-prose text-lg text-lambda-body">
            We&rsquo;ve got the details on your company. Someone from our team
            will review them and come back to you {RESPONSE_WINDOW_COPY}.
          </p>
        );

      case "decline":
        return (
          <div className="max-w-prose">
            <p className="text-lg text-lambda-body">
              We invest in a deliberately narrow set of areas, and what
              you&rsquo;re building sits outside them. We&rsquo;d rather tell
              you now than take a meeting under false pretences.
            </p>
            <p className="mt-4 text-lg text-lambda-body">
              We&rsquo;ve kept your details. If our focus widens, or if we can
              point you toward someone better suited, we&rsquo;ll be in touch.
            </p>
          </div>
        );

      default:
        return null;
    }
  }
}
