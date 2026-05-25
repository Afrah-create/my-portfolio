"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const fieldBaseClass =
  "w-full rounded-[var(--radius-card)] border bg-[var(--color-surface)] px-4 py-3 text-slate-100 outline-none transition-colors focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus-visible:ring-2 focus-visible:ring-cyan-500";

const fieldErrorClass =
  "border-red-500 focus:border-red-500 focus:ring-red-500 focus-visible:ring-red-500";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(
  field: keyof FormFields,
  value: string
): string | undefined {
  const trimmed = value.trim();

  if (field === "name") {
    if (!trimmed) return "Name is required.";
    return undefined;
  }

  if (field === "email") {
    if (!trimmed) return "Email is required.";
    if (!emailPattern.test(trimmed)) return "Enter a valid email address.";
    return undefined;
  }

  if (!trimmed) return "Message is required.";
  return undefined;
}

function validateAll(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(fields) as (keyof FormFields)[]).forEach((key) => {
    const error = validateField(key, fields[key]);
    if (error) errors[key] = error;
  });
  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleBlur = (field: keyof FormFields) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => {
      const next = { ...prev };
      if (error) next[field] = error;
      else delete next[field];
      return next;
    });
  };

  const handleChange = (
    field: keyof FormFields,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => {
        const next = { ...prev };
        if (error) next[field] = error;
        else delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateAll(formData);
    setTouched({ name: true, email: true, message: true });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const getFieldClass = (field: keyof FormFields) =>
    `${fieldBaseClass} ${errors[field] ? fieldErrorClass : "border-[var(--color-surface-2)]"}`;

  return (
    <AnimatedSection>
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-semibold text-slate-100">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-400">
            I&apos;d love to hear from you
          </p>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-400">
            Have a project in mind or just want to chat? Fill out the form below
            and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center rounded-[var(--radius-card)] border border-[var(--color-surface-2)] bg-[var(--color-surface)] px-8 py-16 text-center"
              role="status"
              aria-live="polite"
            >
              <div
                className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400"
                aria-hidden
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-xl font-semibold text-slate-100">
                Message sent!
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Thanks for reaching out. I&apos;ll be in touch soon.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
              noValidate
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-slate-100"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={getFieldClass("name")}
                />
                {errors.name && (
                  <p
                    id="contact-name-error"
                    className="mt-2 text-sm text-red-400"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-slate-100"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "contact-email-error" : undefined
                  }
                  className={getFieldClass("email")}
                />
                {errors.email && (
                  <p
                    id="contact-email-error"
                    className="mt-2 text-sm text-red-400"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-100"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  rows={6}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                  className={`${getFieldClass("message")} resize-none`}
                />
                {errors.message && (
                  <p
                    id="contact-message-error"
                    className="mt-2 text-sm text-red-400"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-gray-950 transition-colors hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
              >
                {isSubmitting && (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8,
                      ease: "linear",
                    }}
                    className="inline-block h-4 w-4 rounded-full border-2 border-gray-950 border-t-transparent"
                    aria-hidden
                  />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
