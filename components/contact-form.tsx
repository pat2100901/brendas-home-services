"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const inputClass =
  "w-full rounded-2xl border border-plum-100 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink/40 focus:border-teal-500 focus:ring-4 focus:ring-teal-100";

const TO_EMAIL = "info@brendashomeservices.com";

const INTEREST_OPTIONS = [
  "Requesting care for a loved one",
  "Learning about services",
  "Applying as a caregiver",
  "General question"
];

type ContactState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

const INITIAL: ContactState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  interest: "",
  message: ""
};

function buildBody(state: ContactState): string {
  const lines = [
    `Name: ${state.firstName} ${state.lastName}`.trim(),
    `Email: ${state.email}`,
    `Phone: ${state.phone}`,
    `Interested in: ${state.interest || "—"}`,
    "",
    "Message:",
    state.message || "—"
  ];
  return lines.join("\n");
}

export function ContactForm() {
  const [state, setState] = useState<ContactState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(
    () =>
      Boolean(
        state.firstName.trim() &&
          state.lastName.trim() &&
          (state.email.trim() || state.phone.trim()) &&
          state.message.trim()
      ),
    [state]
  );

  function update<K extends keyof ContactState>(key: K, value: ContactState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValid) return;
    const subject = `Care inquiry — ${state.firstName} ${state.lastName}`.trim();
    const body = buildBody(state);
    const href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-teal-100 bg-white/92 p-8 shadow-luxe">
        <div className="grid size-12 place-items-center rounded-full bg-teal-50 text-teal-700">
          <Check className="size-6" />
        </div>
        <h3 className="mt-6 font-serif text-3xl font-semibold text-plum-900">Message ready to send.</h3>
        <p className="mt-4 text-sm leading-7 text-ink/68">
          Your email client should have opened with your message addressed to{" "}
          <span className="font-semibold text-plum-900">{TO_EMAIL}</span>. Send it and the
          Brenda&rsquo;s team will follow up. You can also reach us at 317-222-9557.
        </p>
        <button
          type="button"
          onClick={() => {
            setState(INITIAL);
            setSubmitted(false);
          }}
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-plum-100 px-5 py-3 text-sm font-bold text-plum-900 transition hover:-translate-y-0.5 hover:border-teal-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-[2rem] border border-white bg-white/88 p-5 shadow-luxe sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-plum-900">
          First name
          <input
            required
            className={inputClass}
            value={state.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            placeholder="First name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-plum-900">
          Last name
          <input
            required
            className={inputClass}
            value={state.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            placeholder="Last name"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-plum-900">
          Phone
          <input
            type="tel"
            className={inputClass}
            value={state.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(000) 000-0000"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-plum-900">
          Email
          <input
            type="email"
            className={inputClass}
            value={state.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="name@example.com"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-plum-900">
        I am interested in
        <select
          className={inputClass}
          value={state.interest}
          onChange={(e) => update("interest", e.target.value)}
        >
          <option value="">Select an option</option>
          {INTEREST_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-plum-900">
        Message
        <textarea
          required
          className={`${inputClass} min-h-32 resize-y`}
          value={state.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Share a few details about the non-medical support you need."
        />
      </label>
      <button
        type="submit"
        disabled={!isValid}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-plum-900 px-6 py-4 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-plum-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Send request
        <ArrowRight className="size-4" />
      </button>
      <p className="text-xs leading-5 text-ink/55">
        Submitting opens your email client with a completed message to{" "}
        <span className="font-semibold text-plum-900">{TO_EMAIL}</span>.
      </p>
    </form>
  );
}
