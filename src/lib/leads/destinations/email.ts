import "server-only";

import { Resend } from "resend";
import { formatAnswers, fullName, labelFor } from "@/lib/leads/format";
import type {
  LeadDestination,
  LeadScoring,
  LeadSubmission,
} from "@/lib/leads/types";

/**
 * Internal notification email.
 *
 * A notification, not the record. If this fails the lead is still in
 * Postgres and can be re-sent; that asymmetry is why a failure here is
 * logged at warning level while a Postgres failure is logged as an
 * error.
 */

const PERSONA_LABEL: Record<string, string> = {
  founder: "Founder",
  lp: "Investor",
  services: "Operating Support",
  general: "General",
};

/**
 * The subject line does the triage.
 *
 * `[Founder] Jane Smith — Acme Corp — $3M–$10M — via LinkedIn`
 * `[REVIEW] Jane Smith — Acme Corp — $1M–$3M — FAILED: profitability`
 * `[PARTIAL] [Founder] Jane Smith — Acme Corp — abandoned at step 4`
 *
 * Everything needed to decide whether to open it is in the subject,
 * because in practice these get read on a phone between meetings.
 */
function buildSubject(lead: LeadSubmission, scoring: LeadScoring | null): string {
  const parts: string[] = [];

  if (lead.meta.isPartial) parts.push("[PARTIAL]");

  // Tier B is the queue a human actually works, so it gets its own
  // marker and names the gate that failed — triage takes seconds
  // instead of requiring the body to be read.
  if (!lead.meta.isPartial && scoring?.tier === "B") {
    parts.push("[REVIEW]");
  } else {
    parts.push(`[${PERSONA_LABEL[lead.persona] ?? lead.persona}]`);
  }

  const name = fullName(lead) || lead.contact.email;
  const segments: string[] = [name];

  if (lead.contact.company) segments.push(lead.contact.company);

  const revenue = labelFor(lead, "revenue");
  if (revenue) segments.push(revenue);

  if (lead.meta.isPartial) {
    segments.push(
      `abandoned at step ${lead.meta.completedSteps} of ${lead.meta.totalSteps}`,
    );
  } else if (scoring?.tier === "B" && scoring.failedGates.length > 0) {
    segments.push(`FAILED: ${scoring.failedGates.join(", ")}`);
  } else if (lead.attribution.utm_source) {
    segments.push(`via ${lead.attribution.utm_source}`);
  }

  return `${parts.join(" ")} ${segments.join(" | ")}`;
}

function buildPlainText(
  lead: LeadSubmission,
  scoring: LeadScoring | null,
): string {
  const lines: string[] = [];

  lines.push(fullName(lead));
  lines.push(lead.contact.email);
  if (lead.contact.phone) lines.push(lead.contact.phone);
  if (lead.contact.company) lines.push(lead.contact.company);
  if (lead.contact.companyUrl) lines.push(lead.contact.companyUrl);
  lines.push("");

  // Qualification answers ABOVE the free text, per spec. The free-text
  // field is the longest thing in the email and the least decisive; put
  // it first and the answers that determine the reply scroll away.
  const answers = formatAnswers(lead);
  if (answers.length > 0) {
    lines.push("── Answers ──");
    for (const { question, answer } of answers) {
      lines.push(`${question}`);
      lines.push(`  ${answer}`);
    }
    lines.push("");
  }

  lines.push("── Attribution ──");
  lines.push(`Source:    ${lead.attribution.utm_source ?? "-"}`);
  lines.push(`Medium:    ${lead.attribution.utm_medium ?? "-"}`);
  lines.push(`Campaign:  ${lead.attribution.utm_campaign ?? "-"}`);
  lines.push(`Content:   ${lead.attribution.utm_content ?? "-"}`);
  lines.push(`Term:      ${lead.attribution.utm_term ?? "-"}`);
  lines.push(`Referrer:  ${lead.attribution.referrer ?? "-"}`);
  lines.push(`Landed on: ${lead.attribution.landing_path ?? "-"}`);
  lines.push(`Heard via: ${lead.attribution.heard_about_us || "-"}`);
  lines.push("");

  lines.push("── Internal ──");
  lines.push(`Persona:   ${lead.persona}`);
  lines.push(`Partial:   ${lead.meta.isPartial ? "yes" : "no"}`);
  lines.push(`Progress:  ${lead.meta.completedSteps}/${lead.meta.totalSteps}`);
  lines.push(`Session:   ${lead.meta.sessionId}`);
  if (scoring) {
    lines.push(`Tier:      ${scoring.tier} (${scoring.outcome})`);
    lines.push(`Failed:    ${scoring.failedGates.join(", ") || "none"}`);
    lines.push(`Rules ver: ${scoring.scoreVersion}`);
  }

  return lines.join("\n");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml(lead: LeadSubmission, scoring: LeadScoring | null): string {
  // Everything interpolated here originates from a form submission, so
  // every value is escaped. An unescaped company name is a script tag
  // in the reader's mail client.
  return `<pre style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;line-height:1.5;white-space:pre-wrap">${escapeHtml(
    buildPlainText(lead, scoring),
  )}</pre>`;
}

export const emailDestination: LeadDestination = {
  name: "email",

  async send(lead: LeadSubmission, scoring: LeadScoring | null) {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.LEAD_NOTIFICATION_EMAIL;

    if (!apiKey || !to) {
      console.warn(
        "[leads:email] RESEND_API_KEY or LEAD_NOTIFICATION_EMAIL not set — " +
          "notification skipped. The lead is still in the database.",
      );
      return { ok: false, error: "email not configured" };
    }

    try {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        // Must be a domain verified in Resend. Overridable so the
        // sending domain can change without a code edit.
        from: process.env.LEAD_FROM_EMAIL ?? "Lambda Funnel <onboarding@resend.dev>",
        to: [to],
        replyTo: lead.contact.email,
        subject: buildSubject(lead, scoring),
        text: buildPlainText(lead, scoring),
        html: buildHtml(lead, scoring),
      });

      if (error) {
        console.warn(`[leads:email] send failed: ${error.message}`);
        return { ok: false, error: error.message };
      }
      return { ok: true };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.warn(`[leads:email] send threw: ${message}`);
      return { ok: false, error: message };
    }
  },
};
