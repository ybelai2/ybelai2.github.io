"use client";
import { useRef, useState } from "react";
import socials from "@/data/socials.json";
import { Icon } from "./icon";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Fields>;
const email = socials.find((social) => social.id === "email")!.href!;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [draft, setDraft] = useState<Fields | null>(null);
  const [copyState, setCopyState] = useState("");
  const form = useRef<HTMLFormElement>(null);
  const success = useRef<HTMLDivElement>(null);
  const body = draft
    ? `${draft.message}\n\nFrom: ${draft.name}\nReply to: ${draft.email}`
    : "";
  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const fields = Object.fromEntries(
      ["name", "email", "message"].map((key) => [
        key,
        String(values.get(key) ?? "").trim(),
      ]),
    ) as Fields;
    const nextErrors: Errors = {};
    if (!fields.name) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      nextErrors.email = "Please enter a valid email address.";
    if (!fields.message)
      nextErrors.message = "Add a message before preparing your email.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setDraft(null);
      form.current
        ?.querySelector<HTMLElement>(`[name="${Object.keys(nextErrors)[0]}"]`)
        ?.focus();
      return;
    }
    setDraft(fields);
    setCopyState("");
    requestAnimationFrame(() => success.current?.focus());
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(body);
      setCopyState("Message copied. Paste it into your email app.");
    } catch {
      setCopyState(
        "Copy wasn’t available. Use the email link, or select and copy your message above.",
      );
    }
  }
  return (
    <form
      className="contact-form"
      ref={form}
      onSubmit={prepare}
      noValidate
      onChange={() => {
        if (draft) setDraft(null);
      }}
    >
      <div className="form-row">
        {(["name", "email"] as const).map((field) => (
          <div className="form-field" key={field}>
            <label htmlFor={`contact-${field}`}>
              {field === "name" ? "Your name" : "Email address"}
            </label>
            <input
              id={`contact-${field}`}
              name={field}
              type={field === "email" ? "email" : "text"}
              autoComplete={field}
              required
              maxLength={field === "name" ? 100 : 254}
              placeholder={field === "name" ? "Your name" : "you@example.com"}
              aria-invalid={!!errors[field]}
              aria-describedby={errors[field] ? `error-${field}` : undefined}
            />
            {errors[field] && (
              <p className="field-error" id={`error-${field}`}>
                {errors[field]}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">What’s on your mind?</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="An idea, a question, or just a hello…"
          rows={4}
          maxLength={1800}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "error-message" : "contact-note"}
        />
        {errors.message && (
          <p className="field-error" id="error-message">
            {errors.message}
          </p>
        )}
      </div>
      <div className="form-bottom">
        <p id="contact-note">
          Prepare a draft, then send it in your email app.
        </p>
        <button className="button button-gold" type="submit">
          Prepare email <Icon name="arrowUpRight" size={17} />
        </button>
      </div>
      {draft && (
        <div className="draft-ready" ref={success} tabIndex={-1} role="status">
          <span className="eyebrow">
            <Icon name="check" size={16} /> YOUR DRAFT IS READY
          </span>
          <p>
            Open your email app to review and send. Your message hasn’t been
            sent or saved here.
          </p>
          <div className="draft-actions">
            <a
              className="text-link"
              href={`${email}?subject=${encodeURIComponent(`Hello from ${draft.name}`)}&body=${encodeURIComponent(body)}`}
            >
              Open email app <Icon name="arrowUpRight" size={16} />
            </a>
            <button className="text-link" type="button" onClick={copy}>
              Copy message <Icon name="copy" size={15} />
            </button>
          </div>
          {copyState && <p className="copy-state">{copyState}</p>}
        </div>
      )}
    </form>
  );
}
