"use client";

import { useEffect } from "react";
import { BOOKING_CONFIG } from "@/config/funnel";
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
 * The iframe must use Google's appointment embed URL (`gv=true`). The
 * calendar.app.google short link refuses to load in a frame. The
 * "open in a new tab" link still uses the short URL, which is what
 * founders should see if they leave the thank-you screen.
 *
 * Google Appointment schedules do not expose booking webhooks or custom
 * metadata, so funnel attribution for bookings stops at "calendar shown"
 * unless matched manually.
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
        src={embedSrc}
        title="Schedule a meeting with Lambda Capital"
        className="min-h-[28rem] w-full flex-1 border-0"
        loading="lazy"
      />
      <p className="border-t border-lambda-border px-4 py-3 text-center text-sm text-lambda-muted">
        Prefer a new tab?{" "}
        <a
          href={openHref}
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
