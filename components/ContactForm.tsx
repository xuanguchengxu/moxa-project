"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("B2B wellness inquiry", form);
    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-card p-8 shadow-card">
      <div className="grid gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-foreground">Full Name</span>
            <input
              required
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              className="h-12 rounded-xl border border-input bg-background px-4 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-foreground">Email Address</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              className="h-12 rounded-xl border border-input bg-background px-4 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="name@company.com"
            />
          </label>
        </div>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-foreground">Company / Organization</span>
          <input
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="h-12 rounded-xl border border-input bg-background px-4 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Your clinic or business name"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-foreground">Message</span>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Tell us about your market, product interests, and expected cooperation model..."
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-8 h-14 w-full rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary/90 hover:shadow-card"
      >
        Send Inquiry
      </button>

      {submitted && (
        <div className="mt-6 flex items-center gap-3 rounded-xl bg-primary/10 p-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-sm font-medium text-primary">
            Thank you! Your inquiry has been received.
          </p>
        </div>
      )}
    </form>
  );
}
