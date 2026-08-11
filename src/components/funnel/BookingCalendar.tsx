"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { track } from "@/lib/analytics";
import type { Persona } from "@/lib/leads/types";

interface BookingCalendarProps {
  /** e.g. "lambda/intro" — from BOOKING_CONFIG.tierACalLink. */
  calLink: string;
  sessionId: string;
  persona: Persona;
  name?: string;
  email?: string;
  company?: string;
  utmSource?: string;
}

/**
 * The Tier A inline calendar.
 *
 * Embedded directly in the thank-you screen rather than linked to a
 * hosted booking page or emailed as a "click here to book". The lead is
 * at peak intent on this screen and every extra hop costs conversion —
 * an emailed link converts a decision already made back into a task
 * that competes with the rest of their inbox.
 */
export function BookingCalendar({
  calLink,
  sessionId,
  persona,
  name,
  email,
  company,
  utmSource,
}: BookingCalendarProps) {
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const cal = await getCalApi();
      if (cancelled) return;

      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      /**
       * Fires when Cal.com confirms a booking.
       *
       * This is the client-side half of measuring bookings. The
       * authoritative half is the webhook, which writes bookingId and
       * bookedAt server-side — this event can be lost to an ad blocker
       * or a closed tab, so it informs the funnel report but is never
       * the source of truth for whether a meeting exists.
       */
      cal("on", {
        action: "bookingSuccessful",
        callback: () => {
          track("funnel_booking_created", {
            persona,
            tier: "A",
            utm_source: utmSource,
          });
        },
      });
    })();

    return () => {
      cancelled = true;
    };
  }, [persona, utmSource]);

  return (
    <Cal
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{
        // Prefill from answers already given. Nobody should retype
        // anything they just typed two screens ago.
        name: name ?? "",
        email: email ?? "",
        /**
         * The join key, carried into Cal.com and returned by the
         * webhook.
         *
         * Without this you can count bookings but not attribute them,
         * which defeats the point: "which X post produced a meeting"
         * becomes matching bookings to leads by email and timestamp by
         * hand. Cal.com passes `metadata[...]` through to the webhook
         * payload untouched.
         */
        "metadata[sessionId]": sessionId,
        ...(company ? { "metadata[company]": company } : {}),
      }}
    />
  );
}
