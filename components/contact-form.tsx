"use client";

import { useState } from "react";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

const interests = [
  "North Batan tour",
  "South Batan tour",
  "Sabtang Island",
  "Itbayat expedition",
  "Custom itinerary",
  "Honeymoon",
  "Group / corporate",
  "Just have questions",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState(interests[0]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border/60 bg-card p-8 text-center">
        <span
          aria-hidden
          className="inline-grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground"
        >
          <CheckIcon size={26} />
        </span>
        <h2 className="mt-4 heading-display text-2xl">Inquiry received</h2>
        <p className="mt-2 text-muted-foreground">
          Maraming salamat! We&apos;ll respond within one business day with
          itinerary options and pricing.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border/60 bg-card p-6 md:p-8"
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field id="name" label="Full name" required>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
          />
        </Field>
        <Field id="email" label="Email address" required>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
          />
        </Field>
        <Field id="phone" label="Phone (optional)">
          <input
            id="phone"
            name="phone"
            className="w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
          />
        </Field>
        <Field id="party" label="Travel party size">
          <input
            id="party"
            type="number"
            min={1}
            defaultValue={2}
            className="w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
          />
        </Field>
        <Field id="dates" label="Tentative travel dates">
          <input
            id="dates"
            placeholder="e.g. March 12-16, 2026"
            className="w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
          />
        </Field>
        <Field id="interest" label="I'm interested in">
          <select
            id="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
          >
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field id="message" label="Tell us about your dream trip">
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Travel style, interests, must-see spots, any access needs…"
            className="w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
          />
        </Field>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          By submitting, you agree to receive a reply at the email provided.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
        >
          Send inquiry
          <ArrowRightIcon size={14} />
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 inline-block text-xs uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      {children}
    </div>
  );
}
