"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";
import type { Persona } from "@/lib/leads/types";

interface BookingCalendarProps {
  bookingLink: string;
  persona: Persona;
  utmSource?: string;
}

/**
 * The Tier A inline booking surface.
 *
 * Google Calendar appointment schedules do not expose booking webhooks
 * or custom metadata the way Cal.com did, so funnel attribution for
 * bookings stops at "calendar shown" unless matched manually.
 */
export function BookingCalendar({
  bookingLink,
  persona,
  utmSource,
}: BookingCalendarProps) {
  useEffect(() => {
    track("funnel_calendar_shown", {
      persona,
      tier: "A",
      utm_source: utmSource,
    });
  }, [persona, utmSource]);

  return (
    <div className="flex h-full flex-col">
      <iframe
        src={bookingLink}
        title="Schedule a meeting with Lambda Capital"
        className="min-h-[28rem] w-full flex-1 border-0"
        loading="lazy"
      />
      <p className="border-t border-lambda-border px-4 py-3 text-center text-sm text-lambda-muted">
        Prefer a new tab?{" "}
        <a
          href={bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lambda-accent underline underline-offset-4"
          onClick={() =>
            track("funnel_booking_link_clicked", {
              persona,
              tier: "A",
              utm_source: utmSource,
            })
          }
        >
          Open the calendar
        </a>
      </p>
    </div>
  );
}
