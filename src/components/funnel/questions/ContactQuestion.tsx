"use client";

import type {
  ContactFieldName,
  ContactQuestion as ContactQuestionType,
} from "@/config/questions/types";

interface ContactQuestionProps {
  question: ContactQuestionType;
  values: Partial<Record<ContactFieldName, string>>;
  errors: Partial<Record<ContactFieldName, string>>;
  onChange: (name: ContactFieldName, value: string) => void;
  /** Honeypot value, lifted so the funnel can send it with the payload. */
  honeypot: string;
  onHoneypotChange: (value: string) => void;
  /** Submit on Enter from any field. */
  onSubmitStep: () => void;
}

const INPUT_BASE =
  "w-full rounded-lg border bg-transparent px-4 py-3 text-base text-lambda-body " +
  "placeholder:text-lambda-muted/60 transition-colors " +
  "focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "focus-visible:outline-lambda-accent";

/**
 * The contact step — the first screen after persona selection, and the
 * reason the whole funnel is ordered the way it is.
 *
 * Asking for contact details before qualification feels backwards and
 * is deliberate: someone who abandons at question 4 is still a named
 * lead with an email address, and most abandonment happens after the
 * email is already typed. Moving this to the end would forfeit every
 * partial lead the funnel produces.
 */
export function ContactQuestion({
  question,
  values,
  errors,
  onChange,
  honeypot,
  onHoneypotChange,
  onSubmitStep,
}: ContactQuestionProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {question.fields.map((field) => {
        const error = errors[field.name];
        const errorId = `${field.name}-error`;

        return (
          <div
            key={field.name}
            className={field.width === "full" ? "sm:col-span-2" : ""}
          >
            <label
              htmlFor={field.name}
              className="mb-2 block text-sm text-lambda-muted"
            >
              {field.label}
              {field.required && (
                <span aria-hidden="true" className="ml-1 text-lambda-accent">
                  *
                </span>
              )}
              {!field.required && (
                <span className="ml-2 text-lambda-muted/70">(optional)</span>
              )}
            </label>

            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={values[field.name] ?? ""}
              required={field.required}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              // Wiring the message to the input is what makes the error
              // reach a screen reader. A red paragraph near a field is
              // invisible to anyone not looking at it.
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? errorId : undefined}
              onChange={(e) => onChange(field.name, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  onSubmitStep();
                }
              }}
              className={`${INPUT_BASE} ${
                error
                  ? "border-lambda-error"
                  : "border-lambda-border hover:border-lambda-border-strong"
              }`}
            />

            {error && (
              <p id={errorId} className="mt-2 text-sm text-lambda-error">
                {error}
              </p>
            )}
          </div>
        );
      })}

      {/*
        Honeypot. Hidden from people, visible to naive bots that fill
        every input they find. A non-empty value gets a silent 200 and
        the submission is dropped, so the bot sees success and doesn't
        retry with a different strategy.

        aria-hidden + tabIndex={-1} keep it away from screen readers and
        keyboard users, who would otherwise be the ones who "fail" the
        check. Positioned off-screen rather than display:none because
        some bots skip inputs that aren't rendered.
      */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="_hp">Leave this field empty</label>
        <input
          id="_hp"
          name="_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => onHoneypotChange(e.target.value)}
        />
      </div>
    </div>
  );
}
