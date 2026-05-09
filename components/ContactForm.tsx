"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

type FormState = {
  name: string;
  email: string;
  company: string;
  country: string;
  type: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  country: "",
  type: "",
  message: "",
};

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("B2B wellness inquiry", form);
    setSubmitted(true);
    setSubmitting(false);
    setForm(initialState);
  }

  const businessTypes = ["clinic", "spa", "distributor", "retailer", "other"] as const;

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-card p-8 shadow-card">
      <div className="grid gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-foreground">{t("name")}</span>
            <input
              required
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              className="h-12 rounded-xl border border-input bg-background px-4 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-foreground">{t("email")}</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              className="h-12 rounded-xl border border-input bg-background px-4 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-foreground">{t("company")}</span>
            <input
              value={form.company}
              onChange={(event) => updateField("company", event.target.value)}
              className="h-12 rounded-xl border border-input bg-background px-4 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-foreground">{t("country")}</span>
            <input
              value={form.country}
              onChange={(event) => updateField("country", event.target.value)}
              className="h-12 rounded-xl border border-input bg-background px-4 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
        </div>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-foreground">{t("type")}</span>
          <select
            value={form.type}
            onChange={(event) => updateField("type", event.target.value)}
            className="h-12 rounded-xl border border-input bg-background px-4 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="">--</option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {t(`types.${type}`)}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-foreground">{t("message")}</span>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder={t("messagePlaceholder")}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-8 h-14 w-full rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary/90 hover:shadow-card disabled:opacity-70"
      >
        {submitting ? t("submitting") : t("submit")}
      </button>

      {submitted && (
        <div className="mt-6 flex items-center gap-3 rounded-xl bg-primary/10 p-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-sm font-medium text-primary">
            {t("success")}
          </p>
        </div>
      )}
    </form>
  );
}
