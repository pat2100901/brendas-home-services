"use client";

import { useMemo, useState } from "react";
import { ArrowRight, BriefcaseBusiness, Check } from "lucide-react";

const inputClass =
  "w-full rounded-2xl border border-plum-100 bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink/40 focus:border-teal-500 focus:ring-4 focus:ring-teal-100";

const labelClass = "grid gap-2 text-sm font-semibold text-plum-900";

const POSITIONS = [
  "Personal Care / Companion",
  "Homemaker / Light Housekeeping",
  "Meal Preparation Support",
  "Respite Support",
  "Community Support / Transportation",
  "Open to any role"
];

const EMPLOYMENT_TYPES = ["Full-time", "Part-time", "Per-diem / As needed"];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TIME_BLOCKS = ["Mornings", "Afternoons", "Evenings", "Overnight"];

const YEARS_EXPERIENCE = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "5+ years",
  "No formal experience — strong personal caregiving background"
];

const REFERRAL_SOURCES = [
  "Google / search",
  "Indeed",
  "Facebook",
  "Word of mouth",
  "Brenda's Home Services team member",
  "Other"
];

type Eligibility = {
  age18: boolean;
  workAuth: boolean;
  driversLicense: boolean;
  reliableVehicle: boolean;
  backgroundCheck: boolean;
  tbCpr: boolean;
};

const ELIGIBILITY_QUESTIONS: { key: keyof Eligibility; label: string }[] = [
  { key: "age18", label: "I am at least 18 years old" },
  { key: "workAuth", label: "I am authorized to work in the United States" },
  { key: "driversLicense", label: "I have a valid driver's license" },
  { key: "reliableVehicle", label: "I have reliable transportation" },
  { key: "backgroundCheck", label: "I consent to a background check if hired" },
  { key: "tbCpr", label: "I am willing to complete TB screening / CPR / First Aid as required" }
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  zip: string;
  positions: string[];
  employmentType: string;
  hoursPerWeek: string;
  startDate: string;
  days: string[];
  times: string[];
  yearsExperience: string;
  experienceNote: string;
  certifications: string;
  eligibility: Eligibility;
  ref1Name: string;
  ref1Relationship: string;
  ref1Contact: string;
  ref2Name: string;
  ref2Relationship: string;
  ref2Contact: string;
  whyBrendas: string;
  referralSource: string;
  consent: boolean;
};

const INITIAL_STATE: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  state: "IN",
  zip: "",
  positions: [],
  employmentType: "",
  hoursPerWeek: "",
  startDate: "",
  days: [],
  times: [],
  yearsExperience: "",
  experienceNote: "",
  certifications: "",
  eligibility: {
    age18: false,
    workAuth: false,
    driversLicense: false,
    reliableVehicle: false,
    backgroundCheck: false,
    tbCpr: false
  },
  ref1Name: "",
  ref1Relationship: "",
  ref1Contact: "",
  ref2Name: "",
  ref2Relationship: "",
  ref2Contact: "",
  whyBrendas: "",
  referralSource: "",
  consent: false
};

const TO_EMAIL = "info@brendashomeservices.com";

function toggle<T>(arr: T[], value: T): T[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

function buildEmailBody(state: FormState): string {
  const yes = (b: boolean) => (b ? "Yes" : "No");
  const lines: string[] = [];
  lines.push("Caregiver Application — Brenda's Home Services");
  lines.push("");
  lines.push("— Applicant —");
  lines.push(`Name: ${state.firstName} ${state.lastName}`.trim());
  lines.push(`Email: ${state.email}`);
  lines.push(`Phone: ${state.phone}`);
  lines.push(`Location: ${[state.city, state.state, state.zip].filter(Boolean).join(", ")}`);
  lines.push("");
  lines.push("— Role interest —");
  lines.push(`Positions: ${state.positions.join(", ") || "—"}`);
  lines.push(`Employment type: ${state.employmentType || "—"}`);
  lines.push(`Hours per week: ${state.hoursPerWeek || "—"}`);
  lines.push(`Earliest start: ${state.startDate || "—"}`);
  lines.push(`Days available: ${state.days.join(", ") || "—"}`);
  lines.push(`Times available: ${state.times.join(", ") || "—"}`);
  lines.push("");
  lines.push("— Experience —");
  lines.push(`Years of experience: ${state.yearsExperience || "—"}`);
  lines.push(`Certifications / training: ${state.certifications || "—"}`);
  lines.push(`Experience notes: ${state.experienceNote || "—"}`);
  lines.push("");
  lines.push("— Eligibility —");
  for (const q of ELIGIBILITY_QUESTIONS) {
    lines.push(`${q.label}: ${yes(state.eligibility[q.key])}`);
  }
  lines.push("");
  lines.push("— References —");
  lines.push(
    `1) ${state.ref1Name || "—"} (${state.ref1Relationship || "—"}): ${state.ref1Contact || "—"}`
  );
  lines.push(
    `2) ${state.ref2Name || "—"} (${state.ref2Relationship || "—"}): ${state.ref2Contact || "—"}`
  );
  lines.push("");
  lines.push("— Why Brenda's —");
  lines.push(state.whyBrendas || "—");
  lines.push("");
  lines.push(`How they heard about us: ${state.referralSource || "—"}`);
  lines.push(`Consent to be contacted: ${yes(state.consent)}`);
  return lines.join("\n");
}

export function CaregiverApplication() {
  const [state, setState] = useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(() => {
    return Boolean(
      state.firstName.trim() &&
        state.lastName.trim() &&
        state.email.trim() &&
        state.phone.trim() &&
        state.positions.length > 0 &&
        state.consent
    );
  }, [state]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
  }

  function updateEligibility(key: keyof Eligibility, value: boolean) {
    setState((prev) => ({ ...prev, eligibility: { ...prev.eligibility, [key]: value } }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValid) return;
    const subject = `Caregiver application — ${state.firstName} ${state.lastName}`.trim();
    const body = buildEmailBody(state);
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
        <h3 className="mt-6 font-serif text-3xl font-semibold text-plum-900">
          Thank you for applying.
        </h3>
        <p className="mt-4 text-sm leading-7 text-ink/68">
          Your email client should have opened with your completed application addressed to{" "}
          <span className="font-semibold text-plum-900">{TO_EMAIL}</span>. Send the message
          and the Brenda&rsquo;s team will follow up shortly. If nothing opened, you can reach us
          directly at the same email or 317-222-9557.
        </p>
        <button
          type="button"
          onClick={() => {
            setState(INITIAL_STATE);
            setSubmitted(false);
          }}
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-plum-100 px-5 py-3 text-sm font-bold text-plum-900 transition hover:-translate-y-0.5 hover:border-teal-300"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-[2rem] border border-white bg-white/92 p-6 shadow-luxe sm:p-8"
    >
      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-gold-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-plum-900">
        <BriefcaseBusiness className="size-4" />
        Caregiver application
      </div>

      {/* Personal info */}
      <fieldset className="grid gap-4">
        <legend className="font-serif text-2xl font-semibold text-plum-900">About you</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className={labelClass}>
            First name
            <input
              required
              className={inputClass}
              value={state.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              placeholder="First name"
            />
          </label>
          <label className={labelClass}>
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
          <label className={labelClass}>
            Email
            <input
              required
              type="email"
              className={inputClass}
              value={state.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="name@example.com"
            />
          </label>
          <label className={labelClass}>
            Phone
            <input
              required
              type="tel"
              className={inputClass}
              value={state.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="(000) 000-0000"
            />
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-[1.4fr_0.5fr_0.6fr]">
          <label className={labelClass}>
            City
            <input
              className={inputClass}
              value={state.city}
              onChange={(e) => update("city", e.target.value)}
              placeholder="Indianapolis"
            />
          </label>
          <label className={labelClass}>
            State
            <input
              className={inputClass}
              value={state.state}
              onChange={(e) => update("state", e.target.value)}
              placeholder="IN"
            />
          </label>
          <label className={labelClass}>
            ZIP
            <input
              className={inputClass}
              value={state.zip}
              onChange={(e) => update("zip", e.target.value)}
              placeholder="46204"
            />
          </label>
        </div>
      </fieldset>

      {/* Role interest */}
      <fieldset className="grid gap-4">
        <legend className="font-serif text-2xl font-semibold text-plum-900">
          Role interest
        </legend>
        <div>
          <p className="text-sm font-semibold text-plum-900">
            Positions you&rsquo;re interested in
          </p>
          <p className="text-xs text-ink/55">Select all that fit. Required.</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {POSITIONS.map((position) => {
              const active = state.positions.includes(position);
              return (
                <button
                  type="button"
                  key={position}
                  onClick={() => update("positions", toggle(state.positions, position))}
                  className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                    active
                      ? "border-teal-500 bg-teal-50 text-teal-800"
                      : "border-plum-100 bg-white text-plum-900 hover:border-teal-200"
                  }`}
                  aria-pressed={active}
                >
                  <span>{position}</span>
                  {active ? <Check className="size-4 text-teal-700" /> : null}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <label className={labelClass}>
            Employment type
            <select
              className={inputClass}
              value={state.employmentType}
              onChange={(e) => update("employmentType", e.target.value)}
            >
              <option value="">Select</option>
              {EMPLOYMENT_TYPES.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </label>
          <label className={labelClass}>
            Hours per week
            <input
              className={inputClass}
              value={state.hoursPerWeek}
              onChange={(e) => update("hoursPerWeek", e.target.value)}
              placeholder="e.g. 20–30"
            />
          </label>
          <label className={labelClass}>
            Earliest start
            <input
              type="date"
              className={inputClass}
              value={state.startDate}
              onChange={(e) => update("startDate", e.target.value)}
            />
          </label>
        </div>
        <div>
          <p className="text-sm font-semibold text-plum-900">Days available</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {DAYS.map((day) => {
              const active = state.days.includes(day);
              return (
                <button
                  type="button"
                  key={day}
                  onClick={() => update("days", toggle(state.days, day))}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                    active
                      ? "border-plum-900 bg-plum-900 text-white"
                      : "border-plum-100 bg-white text-plum-900 hover:border-plum-300"
                  }`}
                  aria-pressed={active}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-plum-900">Times available</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {TIME_BLOCKS.map((block) => {
              const active = state.times.includes(block);
              return (
                <button
                  type="button"
                  key={block}
                  onClick={() => update("times", toggle(state.times, block))}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                    active
                      ? "border-teal-700 bg-teal-700 text-white"
                      : "border-plum-100 bg-white text-plum-900 hover:border-teal-300"
                  }`}
                  aria-pressed={active}
                >
                  {block}
                </button>
              );
            })}
          </div>
        </div>
      </fieldset>

      {/* Experience */}
      <fieldset className="grid gap-4">
        <legend className="font-serif text-2xl font-semibold text-plum-900">Experience</legend>
        <label className={labelClass}>
          Years of caregiving experience
          <select
            className={inputClass}
            value={state.yearsExperience}
            onChange={(e) => update("yearsExperience", e.target.value)}
          >
            <option value="">Select</option>
            {YEARS_EXPERIENCE.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          Certifications / training (optional)
          <input
            className={inputClass}
            value={state.certifications}
            onChange={(e) => update("certifications", e.target.value)}
            placeholder="e.g. CPR, First Aid, CNA, HHA"
          />
        </label>
        <label className={labelClass}>
          Tell us about your caregiving background
          <textarea
            className={`${inputClass} min-h-28 resize-y`}
            value={state.experienceNote}
            onChange={(e) => update("experienceNote", e.target.value)}
            placeholder="Settings you've worked in, populations you've supported, what you love about this work."
          />
        </label>
      </fieldset>

      {/* Eligibility */}
      <fieldset className="grid gap-4">
        <legend className="font-serif text-2xl font-semibold text-plum-900">Eligibility</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {ELIGIBILITY_QUESTIONS.map((q) => (
            <label
              key={q.key}
              className="flex items-start gap-3 rounded-2xl border border-plum-100 bg-white px-4 py-3 text-sm font-semibold text-plum-900"
            >
              <input
                type="checkbox"
                className="mt-1 size-4 accent-teal-700"
                checked={state.eligibility[q.key]}
                onChange={(e) => updateEligibility(q.key, e.target.checked)}
              />
              <span className="leading-6">{q.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* References */}
      <fieldset className="grid gap-4">
        <legend className="font-serif text-2xl font-semibold text-plum-900">
          References (optional)
        </legend>
        <p className="text-xs leading-5 text-ink/55">
          Share two people who can speak to your caregiving or work ethic. Helpful but not
          required to apply.
        </p>
        {[1, 2].map((n) => (
          <div key={n} className="grid gap-4 sm:grid-cols-[1fr_0.8fr_1.2fr]">
            <label className={labelClass}>
              Reference {n} — name
              <input
                className={inputClass}
                value={state[`ref${n}Name` as keyof FormState] as string}
                onChange={(e) => update(`ref${n}Name` as keyof FormState, e.target.value as never)}
                placeholder="Full name"
              />
            </label>
            <label className={labelClass}>
              Relationship
              <input
                className={inputClass}
                value={state[`ref${n}Relationship` as keyof FormState] as string}
                onChange={(e) =>
                  update(`ref${n}Relationship` as keyof FormState, e.target.value as never)
                }
                placeholder="e.g. Former supervisor"
              />
            </label>
            <label className={labelClass}>
              Phone or email
              <input
                className={inputClass}
                value={state[`ref${n}Contact` as keyof FormState] as string}
                onChange={(e) =>
                  update(`ref${n}Contact` as keyof FormState, e.target.value as never)
                }
                placeholder="Best way to reach them"
              />
            </label>
          </div>
        ))}
      </fieldset>

      {/* Why + referral + consent */}
      <fieldset className="grid gap-4">
        <legend className="font-serif text-2xl font-semibold text-plum-900">A little more</legend>
        <label className={labelClass}>
          Why Brenda&rsquo;s Home Services?
          <textarea
            className={`${inputClass} min-h-28 resize-y`}
            value={state.whyBrendas}
            onChange={(e) => update("whyBrendas", e.target.value)}
            placeholder="What about this work, or our approach, draws you in?"
          />
        </label>
        <label className={labelClass}>
          How did you hear about us?
          <select
            className={inputClass}
            value={state.referralSource}
            onChange={(e) => update("referralSource", e.target.value)}
          >
            <option value="">Select</option>
            {REFERRAL_SOURCES.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </label>
        <label className="flex items-start gap-3 rounded-2xl border border-plum-100 bg-white px-4 py-3 text-sm font-semibold text-plum-900">
          <input
            type="checkbox"
            className="mt-1 size-4 accent-teal-700"
            checked={state.consent}
            onChange={(e) => update("consent", e.target.checked)}
            required
          />
          <span className="leading-6">
            I agree to be contacted by Brenda&rsquo;s Home Services about my application. Required.
          </span>
        </label>
      </fieldset>

      <div className="grid gap-3">
        <button
          type="submit"
          disabled={!isValid}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-plum-900 px-6 py-4 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-plum-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Submit application
          <ArrowRight className="size-4" />
        </button>
        <p className="text-xs leading-5 text-ink/55">
          Submitting opens your email client with a completed message to{" "}
          <span className="font-semibold text-plum-900">{TO_EMAIL}</span>. Hit send and the
          Brenda&rsquo;s team will follow up.
        </p>
      </div>
    </form>
  );
}
