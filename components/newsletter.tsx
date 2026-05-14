"use client";

import { useState } from "react";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "success" | "error">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setState("error");
      return;
    }
    setState("success");
    setEmail("");
  }

  return (
    <div className="relative overflow-hidden rounded-3xl bg-foreground text-background">
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-ocean/40 blur-3xl"
      />
      <div className="relative grid gap-8 p-8 md:p-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-background/70">
            Newsletter
          </p>
          <h2 className="heading-display mt-3 text-3xl md:text-4xl">
            Stories from the
            <br />
            northern winds.
          </h2>
          <p className="mt-3 max-w-md text-sm text-background/75">
            One slow email a month: a new hidden corner, a seasonal guide, and
            the best-priced flights to Basco. No spam, ever.
          </p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-3" noValidate>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setState("idle");
              }}
              placeholder="you@example.com"
              className="w-full rounded-full bg-background/10 px-5 py-3.5 text-background placeholder:text-background/60 outline-none border border-background/15 focus:border-background/60"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Subscribe
              <ArrowRightIcon size={14} />
            </button>
          </div>
          {state === "success" && (
            <p className="flex items-center gap-1.5 text-sm text-background/85">
              <CheckIcon size={16} className="text-accent" />
              Thanks! Watch your inbox for your first dispatch.
            </p>
          )}
          {state === "error" && (
            <p className="text-sm text-red-200">
              Please enter a valid email address.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
