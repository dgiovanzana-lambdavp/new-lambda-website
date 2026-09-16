import type { ChoiceQuestion } from "./types";

/**
 * The last question on every branch, without exception.
 *
 * This is what closes the loop from content to closed deal. UTM tags
 * catch the traffic that arrives through a tagged link; this catches
 * everything else — the podcast listener who typed the URL, the
 * referral, the person who asked an AI assistant. Neither alone is
 * sufficient.
 *
 * Defined once and shared by all four trees so the option set cannot
 * drift between branches. Drifted options are a silent killer for
 * attribution reporting: you end up with "LinkedIn" and "Linkedin" as
 * separate rows and no way to tell they were the same channel.
 */
export const heardAboutQuestion: ChoiceQuestion = {
  id: "heard_about",
  type: "choice",
  title: "How did you hear about Lambda?",
  required: true,
  options: [
    { value: "referral", label: "Referral" },
    { value: "x_twitter", label: "X / Twitter" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "podcast_video", label: "Podcast or video" },
    { value: "search_engine", label: "Search engine" },
    // A real and growing referral channel that almost nobody
    // instruments. If it turns out to be material, that is worth
    // knowing early.
    { value: "ai_assistant", label: "AI assistant (ChatGPT, Claude, etc.)" },
    { value: "event_conference", label: "Event or conference" },
    { value: "portfolio_company", label: "Portfolio company" },
    { value: "other", label: "Other" },
  ],
  // Always terminal.
  next: () => null,
};
