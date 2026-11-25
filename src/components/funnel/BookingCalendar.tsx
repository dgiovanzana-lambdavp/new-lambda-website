"use client";

import { useCallback, useEffect, useRef } from "react";
import { BOOKING_CONFIG } from "@/config/funnel";
import { track } from "@/lib/analytics";
import type { Persona } from "@/lib/leads/types";

interface BookingCalendarProps {
  bookingLink: string;
  persona: Persona;
  utmSource?: string;
}

type CalendlyMessage = {
  event?: string;
  payload?: Record<string, unknown>;
};

function readCalendlyEvent(data: unknown): string | null {
  if (!data || typeof data !== "object") return null;
  const msg = data as CalendlyMessage;
  if (typeof msg.event === "string" && msg.event.startsWith("calendly.")) {
    return msg.event;
  }
  return null;
}

/**
 * Tier A inline booking: Google Appointment Schedule embed plus Calendly
 * postMessage hooks when the embed URL is Calendly-backed.
 */
export function BookingCalendar({
  bookingLink,
  persona,
  utmSource,
}: BookingCalendarProps) {
  const embedSrc = bookingLink.includes("gv=true")
    ? bookingLink
    : BOOKING_CONFIG.embedUrl;
  const openHref = BOOKING_CONFIG.bookingUrl;
  const bookingStartedRef = useRef(false);

  const emitBookingStarted = useCallback(
    (source: string) => {
      if (bookingStartedRef.current) return;
      bookingStartedRef.current = true;
      track("booking_started", {
        persona,
        tier: "A",
        utm_source: utmSource,
        booking_surface: source,
      });
    },
    [persona, utmSource],
  );

  useEffect(() => {
    track("funnel_calendar_shown", {
      persona,
      tier: "A",
      utm_source: utmSource,
    });
  }, [persona, utmSource]);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      const calendlyEvent = readCalendlyEvent(event.data);
      if (!calendlyEvent) return;

      if (calendlyEvent === "calendly.date_and_time_selected") {
        track("booking_started", {
          persona,
          tier: "A",
          utm_source: utmSource,
          booking_surface: "calendly_date_and_time_selected",
        });
      }
      if (calendlyEvent === "calendly.event_scheduled") {
        track("booking_completed", {
          persona,
          tier: "A",
          utm_source: utmSource,
          booking_surface: "calendly_event_scheduled",
        });
        track("funnel_booking_created", {
          persona,
          tier: "A",
          utm_source: utmSource,
        });
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [emitBookingStarted, persona, utmSource]);

  return (
    <div className="flex h-full flex-col">
      <iframe
        src={embedSrc}
        title="Schedule a meeting with Lambda Capital"
        className="min-h-[28rem] w-full flex-1 border-0"
        loading="lazy"
        onLoad={() => emitBookingStarted("calendar_iframe_load")}
      />
      <p className="border-t border-lambda-border px-4 py-3 text-center text-sm text-lambda-muted">
        Prefer a new tab?{" "}
        <a
          href={openHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lambda-accent underline underline-offset-4"
          onClick={() => {
            emitBookingStarted("open_in_new_tab");
            track("funnel_booking_link_clicked", {
              persona,
              tier: "A",
              utm_source: utmSource,
            });
          }}
        >
          Open the calendar
        </a>
      </p>
    </div>
  );
}