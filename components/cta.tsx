"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSubmitted(true);
      else form.submit();
    } catch {
      form.submit();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="request-access"
      className="relative py-32 border-t border-border overflow-hidden"
    >
      <div className="absolute inset-0 mesh opacity-60" />
      <div className="grain" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-violet/15 blur-[120px]" />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
          Join the early access{" "}
          <span className="bg-gradient-to-r from-violet-bright to-cyan bg-clip-text text-transparent">
            program
          </span>
        </h2>
        <p className="mt-5 text-lg text-fg-muted">
          We're onboarding design partners now. Free during beta, usage-based pricing after.
        </p>

        {submitted ? (
          <div className="mt-12 gradient-border p-px rounded-2xl">
            <div className="rounded-2xl bg-bg-elevated p-10">
              <CheckCircle2 className="w-10 h-10 text-emerald mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">You're on the list</h3>
              <p className="text-fg-muted text-sm">
                Thanks for your interest in PulseRoute. We'll reach out within 24 hours to schedule your onboarding.
              </p>
            </div>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/mvzvbnwe"
            method="POST"
            onSubmit={handleSubmit}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-3 text-left"
          >
            <Input name="name" placeholder="Your name" required />
            <Input name="email" type="email" placeholder="Work email" required />
            <Input name="company" placeholder="Company" required />
            <Select name="volume" required>
              <option value="" disabled>
                Monthly transactions
              </option>
              <option value="<10k">&lt; 10,000</option>
              <option value="10k-100k">10,000 – 100,000</option>
              <option value="100k-1m">100,000 – 1M</option>
              <option value="1m+">1M+</option>
            </Select>
            <Input
              name="processors"
              placeholder="Current processors (e.g., Stripe, Adyen)"
              className="md:col-span-2"
            />
            <button
              type="submit"
              disabled={submitting}
              className="md:col-span-2 mt-2 group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-fg text-bg font-medium text-sm hover:bg-fg-muted transition-colors disabled:opacity-60"
            >
              {submitting ? "Submitting…" : "Request early access"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border focus:border-violet/60 focus:outline-none focus:ring-2 focus:ring-violet/20 text-sm text-fg placeholder:text-fg-subtle transition ${className}`}
    />
  );
}

function Select({
  className = "",
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      defaultValue=""
      className={`w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border focus:border-violet/60 focus:outline-none focus:ring-2 focus:ring-violet/20 text-sm text-fg placeholder:text-fg-subtle transition ${className}`}
    >
      {children}
    </select>
  );
}
