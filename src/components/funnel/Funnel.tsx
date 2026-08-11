"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getQuestions, resolvePath } from "@/config/questions";
import type { ContactFieldName, Question } from "@/config/questions/types";
import { initAnalytics, track } from "@/lib/analytics";
import { captureAttribution, getAttribution } from "@/lib/attribution";
import { applyResetIfRequested } from "@/lib/funnel/reset";
import {
  loadState,
  saveState,
  type PersistedState,
} from "@/lib/funnel/storage";
import { sendPartialBeacon, submitLead } from "@/lib/funnel/submit";
import { validateStep, type StepValidation } from "@/lib/funnel/validate";
import type {
  Answers,
  LeadResponse,
  LeadSubmission,
  Persona,
} from "@/lib/leads/types";
import { clearSessionId, getSessionId } from "@/lib/session";
import { StepShell } from "./StepShell";
import { ChoiceQuestion } from "./questions/ChoiceQuestion";
import { ContactQuestion } from "./questions/ContactQuestion";
import { MultiChoiceQuestion } from "./questions/MultiChoiceQuestion";
import { TextQuestion } from "./questions/TextQuestion";
import { ThankYou } from "./ThankYou";

/** Long enough to see the pill fill, short enough not to feel laggy. */
const ADVANCE_DELAY_MS = 180;

const EMPTY_VALIDATION: StepValidation = { ok: true, fieldErrors: {} };

interface FunnelProps {
  persona: Persona;
}

export function Funnel({ persona }: FunnelProps) {
  const questions = useMemo(() => getQuestions(persona), [persona]);

  const [state, setState] = useState<PersistedState>({
    answers: {},
    contact: {},
  });
  const [currentId, setCurrentId] = useState(questions[0].id);
  const [honeypot, setHoneypot] = useState("");
  const [validation, setValidation] = useState<StepValidation>(EMPTY_VALIDATION);
  const [status, setStatus] = useState<
    "loading" | "idle" | "submitting" | "done" | "error"
  >("loading");
  const [response, setResponse] = useState<LeadResponse | null>(null);
  // Captured at hydration so the thank-you screen and analytics can use
  // them without re-reading sessionStorage on every render.
  const [sessionId, setSessionId] = useState("");
  const [utmSource, setUtmSource] = useState<string | undefined>();

  const startedAtRef = useRef(Date.now());
  const advancingRef = useRef(false);
  const partialSentRef = useRef(false);
  /**
   * The beacon fires from an event handler during page teardown, where
   * reading React state would give whatever was captured when the
   * listener was registered. A ref is read at fire time, so it always
   * reflects the latest answers.
   */
  const latestRef = useRef({ state, currentId });

  /**
   * The branch the current answers imply, recomputed on every change.
   *
   * This single line is what makes "Question N of M" honest. M is the
   * length of THIS path, so a founder who answers "None of these" sees
   * a 4-question flow while a qualifying founder sees 9.
   */
  const path = useMemo(
    () => resolvePath(questions, state.answers),
    [questions, state.answers],
  );

  const currentIndex = path.indexOf(currentId);
  const current: Question | undefined = questions.find(
    (q) => q.id === currentId,
  );

  // ── Hydration ───────────────────────────────────────────────────
  // sessionStorage cannot be read during render without causing a
  // hydration mismatch, so restoring happens here and the flow renders
  // a placeholder until it's done.
  useEffect(() => {
    // Shared with the router screen so `?resetProgress=1` behaves
    // identically at both entry points. See lib/funnel/reset.ts.
    applyResetIfRequested();

    const attribution = captureAttribution();
    const id = getSessionId();
    setSessionId(id);
    setUtmSource(attribution.utm_source);

    // distinct_id = sessionId, so the client funnel and the server lead
    // row describe the same person and the two are joinable.
    initAnalytics(id);
    track("funnel_start", { persona, utm_source: attribution.utm_source });

    const restored = loadState(persona);
    setState(restored);

    // Resume at the first unanswered question on the restored path
    // rather than at the beginning — the point of persistence is not
    // re-answering what you already answered.
    const restoredPath = resolvePath(questions, restored.answers);
    const resumeId =
      restoredPath.find((id) => {
        const q = questions.find((item) => item.id === id);
        return q ? !isAnswered(q, restored) : false;
      }) ??
      restoredPath[restoredPath.length - 1] ??
      questions[0].id;

    setCurrentId(resumeId);
    setStatus("idle");
  }, [persona, questions]);

  // Persist on every change so a refresh at any moment is recoverable.
  useEffect(() => {
    if (status === "loading") return;
    saveState(persona, state);
    latestRef.current = { state, currentId };
  }, [persona, state, currentId, status]);

  /**
   * Exactly one step_view per step.
   *
   * The guard is `status === "idle"`, not `status !== "loading"`. With
   * the looser check this effect re-runs on every status transition, so
   * submitting the final question fires step_view three times for the
   * same step — once on entry, once on "submitting", once on "done".
   * The drop-off report is built by comparing step_view counts between
   * steps, so triple-counting the last one would make the final
   * question look like the best-performing screen in the funnel.
   *
   * currentId only changes while idle, so this fires once per step.
   */
  useEffect(() => {
    if (status !== "idle") return;
    track("funnel_step_view", {
      persona,
      step_id: currentId,
      utm_source: utmSource,
    });
  }, [currentId, persona, utmSource, status]);

  const buildSubmission = useCallback(
    (
      source: PersistedState,
      isPartial: boolean,
      completedSteps: number,
      totalSteps: number,
    ): LeadSubmission => {
      const attribution = getAttribution();
      const activePath = resolvePath(questions, source.answers);

      /**
       * Only answers on the live path are submitted.
       *
       * A user who picks "None of these", answers the out-of-focus
       * question, then goes back and switches to GovTech leaves a
       * stale answer behind. Sending it would put a contradictory
       * value in the JSONB blob and quietly corrupt any later
       * analysis of that question.
       */
      const prunedAnswers: Answers = {};
      for (const id of activePath) {
        if (id in source.answers) prunedAnswers[id] = source.answers[id];
      }

      return {
        persona,
        contact: {
          firstName: source.contact.firstName ?? "",
          lastName: source.contact.lastName,
          email: source.contact.email ?? "",
          phone: source.contact.phone,
          company: source.contact.company,
          companyUrl: source.contact.companyUrl,
        },
        answers: prunedAnswers,
        attribution: {
          ...attribution,
          heard_about_us:
            typeof source.answers.heard_about === "string"
              ? source.answers.heard_about
              : "",
        },
        meta: {
          submittedAt: new Date().toISOString(),
          completedSteps,
          totalSteps,
          isPartial,
          sessionId: getSessionId(),
        },
      };
    },
    [persona, questions],
  );

  const submit = useCallback(
    async (finalState: PersistedState) => {
      setStatus("submitting");
      const finalPath = resolvePath(questions, finalState.answers);
      const lead = buildSubmission(
        finalState,
        false,
        finalPath.length,
        finalPath.length,
      );

      try {
        const result = await submitLead(
          lead,
          honeypot,
          startedAtRef.current,
        );
        // A completed submission supersedes the partial; suppress any
        // beacon that would otherwise fire as the user navigates away
        // from the thank-you screen.
        partialSentRef.current = true;
        setResponse(result);
        setStatus("done");
        track("funnel_complete", {
          persona,
          utm_source: utmSource,
          // The tier the SERVER decided, echoed back. The thresholds
          // behind it never reach the browser.
          tier: result.outcome === "book" ? "A" : undefined,
        });
      } catch {
        setStatus("error");
      }
    },
    [buildSubmission, honeypot, questions],
  );

  // ── Partial capture ─────────────────────────────────────────────
  // The single highest-ROI piece of the build: most abandonment
  // happens after the email is already typed.
  useEffect(() => {
    if (status === "loading") return;

    function flush() {
      if (partialSentRef.current) return;

      const { state: latest } = latestRef.current;
      const contactQuestion = questions.find((q) => q.type === "contact");
      // Nothing to capture until contact details exist — a partial with
      // no email is a row you can never act on.
      if (!contactQuestion || !isAnswered(contactQuestion, latest)) return;

      const latestPath = resolvePath(questions, latest.answers);
      const completed = latestPath.filter((id) => {
        const q = questions.find((item) => item.id === id);
        return q ? isAnswered(q, latest) : false;
      }).length;

      // Debounced to exactly one per session: visibilitychange and
      // beforeunload both fire on most closes, and a phone switching
      // apps fires visibilitychange repeatedly.
      partialSentRef.current = true;
      track("funnel_partial", {
        persona,
        step_id: latestRef.current.currentId,
        utm_source: utmSource,
      });
      sendPartialBeacon(
        buildSubmission(latest, true, completed, latestPath.length),
        honeypot,
        startedAtRef.current,
      );
    }

    function onVisibilityChange() {
      if (document.visibilityState === "hidden") flush();
    }

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("beforeunload", flush);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("beforeunload", flush);
    };
  }, [buildSubmission, honeypot, questions, status]);

  // ── Navigation ──────────────────────────────────────────────────
  const goBack = useCallback(() => {
    setValidation(EMPTY_VALIDATION);
    if (currentIndex > 0) setCurrentId(path[currentIndex - 1]);
  }, [currentIndex, path]);

  const goForward = useCallback(() => {
    if (!current) return;

    const result = validateStep(current, state.answers, state.contact);
    if (!result.ok) {
      setValidation(result);
      return;
    }
    setValidation(EMPTY_VALIDATION);

    const nextId = path[currentIndex + 1];
    if (nextId) setCurrentId(nextId);
    else void submit(state);
  }, [current, currentIndex, path, state, submit]);

  /**
   * Single-select: record the answer and advance without a Next click.
   *
   * The next step is computed from the answers being set, not from
   * component state, because a branch point changes the path and React
   * has not re-rendered yet at this point.
   */
  const handleSelect = useCallback(
    (questionId: string, value: string) => {
      if (advancingRef.current) return;
      advancingRef.current = true;

      const nextAnswers = { ...state.answers, [questionId]: value };
      const nextState = { ...state, answers: nextAnswers };
      setState(nextState);
      setValidation(EMPTY_VALIDATION);

      track("funnel_answer", {
        persona,
        step_id: questionId,
        utm_source: utmSource,
      });

      const nextPath = resolvePath(questions, nextAnswers);
      const nextId = nextPath[nextPath.indexOf(questionId) + 1];

      window.setTimeout(() => {
        advancingRef.current = false;
        if (nextId) setCurrentId(nextId);
        else void submit(nextState);
      }, ADVANCE_DELAY_MS);
    },
    [questions, state, submit],
  );

  // ── Render ──────────────────────────────────────────────────────
  if (status === "loading") {
    return <div className="min-h-[24rem]" aria-busy="true" />;
  }

  if (status === "done" && response) {
    return (
      <ThankYou
        response={response}
        persona={persona}
        contact={state.contact}
        sessionId={sessionId}
        utmSource={utmSource}
      />
    );
  }

  if (!current) {
    return (
      <p className="text-lambda-body">
        Something went wrong loading this step.
      </p>
    );
  }

  const isFinal = currentIndex === path.length - 1;
  const forwardMode =
    current.type === "choice" ? "hidden" : isFinal ? "send" : "next";

  return (
    <StepShell
      questionId={current.id}
      title={current.title}
      subtitle={current.subtitle}
      current={currentIndex + 1}
      total={path.length}
      canGoBack={currentIndex > 0}
      onBack={goBack}
      forwardMode={forwardMode}
      forwardDisabled={status === "submitting"}
      onForward={goForward}
      error={
        status === "error"
          ? "We couldn't send that. Please try again."
          : validation.stepError
      }
    >
      {renderQuestion()}
    </StepShell>
  );

  function renderQuestion() {
    if (!current) return null;

    switch (current.type) {
      case "contact":
        return (
          <ContactQuestion
            question={current}
            values={state.contact}
            errors={validation.fieldErrors}
            onChange={(name: ContactFieldName, value: string) =>
              setState((s) => ({
                ...s,
                contact: { ...s.contact, [name]: value },
              }))
            }
            honeypot={honeypot}
            onHoneypotChange={setHoneypot}
            onSubmitStep={goForward}
          />
        );

      case "choice":
        return (
          <ChoiceQuestion
            question={current}
            value={
              typeof state.answers[current.id] === "string"
                ? (state.answers[current.id] as string)
                : undefined
            }
            onSelect={(value) => handleSelect(current.id, value)}
          />
        );

      case "multichoice":
        return (
          <MultiChoiceQuestion
            question={current}
            value={
              Array.isArray(state.answers[current.id])
                ? (state.answers[current.id] as string[])
                : []
            }
            onChange={(value) =>
              setState((s) => ({
                ...s,
                answers: { ...s.answers, [current.id]: value },
              }))
            }
          />
        );

      case "text":
        return (
          <TextQuestion
            question={current}
            value={
              typeof state.answers[current.id] === "string"
                ? (state.answers[current.id] as string)
                : ""
            }
            onChange={(value) =>
              setState((s) => ({
                ...s,
                answers: { ...s.answers, [current.id]: value },
              }))
            }
            onSubmitStep={goForward}
          />
        );

      default:
        return null;
    }
  }
}

/** Whether a question has a usable answer, used for resume and counts. */
function isAnswered(question: Question, state: PersistedState): boolean {
  if (question.type === "contact") {
    return question.fields
      .filter((f) => f.required)
      .every((f) => (state.contact[f.name] ?? "").trim().length > 0);
  }

  const value = state.answers[question.id];
  if (Array.isArray(value)) return value.length > 0;
  return typeof value === "string" && value.trim().length > 0;
}
