"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { CONTACT } from "@/lib/constants";

const SUCCESS_DURATION_MS = 3200;

type FormFields = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const emptyForm: FormFields = { name: "", email: "", message: "" };

const fieldBaseClass = "field-input";

const fieldErrorClass =
  "border-red-500/80 focus:border-red-500 focus:ring-red-500/30";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactLinks = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "Afrah-create",
    href: CONTACT.github,
    external: true,
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    href: CONTACT.whatsapp,
    external: true,
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

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

function resetFormState(
  setFormData: (v: FormFields) => void,
  setErrors: (v: FormErrors) => void,
  setTouched: (v: Partial<Record<keyof FormFields, boolean>>) => void,
  setIsSuccess: (v: boolean) => void
) {
  setIsSuccess(false);
  setFormData(emptyForm);
  setErrors({});
  setTouched({});
}

export default function Contact() {
  const [formData, setFormData] = useState<FormFields>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isSuccess) return;

    const timer = window.setTimeout(() => {
      resetFormState(setFormData, setErrors, setTouched, setIsSuccess);
    }, SUCCESS_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [isSuccess]);

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

  const handleChange = (field: keyof FormFields, value: string) => {
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
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const getFieldClass = (field: keyof FormFields) =>
    `${fieldBaseClass} ${errors[field] ? fieldErrorClass : "border-border"}`;

  return (
    <section id="contact" className="section-divider section-surface scroll-mt-24 py-20">
      <Container>
        <SectionHeader
          label="05 — Contact"
          title="Get In Touch"
          subtitle="Have a project in mind or just want to chat? I'd love to hear from you."
        />

        <AnimatedSection>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-background ring-1 ring-border/40">
            <div className="grid lg:grid-cols-5">
              {/* Contact channels */}
              <div className="border-b border-border p-6 sm:p-8 lg:col-span-2 lg:border-b-0 lg:border-r">
                <p className="mb-1 font-mono text-xs tracking-wider text-accent">
                  Direct reach
                </p>
                <p className="mb-6 text-sm leading-relaxed text-muted">
                  Open to internships, collaborations, and freelance work.
                </p>

                <ul className="space-y-3">
                  {contactLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        {...("external" in link && link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group flex items-center gap-3 rounded-lg border border-border bg-surface/50 px-3.5 py-3 transition-colors hover:border-tag-border/50 hover:bg-accent/5"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border-strong/80 text-accent transition-colors group-hover:border-accent-border">
                          {link.icon}
                        </span>
                        <div className="min-w-0">
                          <p className="text-[10px] font-medium uppercase tracking-wider text-foreground0">
                            {link.label}
                          </p>
                          <p className="truncate text-sm text-secondary">
                            {link.value}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-border pt-5 text-xs text-foreground0">
                  Based in Uganda · Reach me anytime!
                </p>
              </div>

              {/* Form */}
              <div className="relative p-6 sm:p-8 lg:col-span-3">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="flex min-h-[22rem] flex-col items-center justify-center text-center"
                      role="status"
                      aria-live="polite"
                    >
                      <div className="mb-6 w-full max-w-xs">
                        <div className="h-1 overflow-hidden rounded-full bg-progress-track">
                          <motion.div
                            className="h-full rounded-full bg-accent"
                            initial={{ width: "100%" }}
                            animate={{ width: "0%" }}
                            transition={{
                              duration: SUCCESS_DURATION_MS / 1000,
                              ease: "linear",
                            }}
                          />
                        </div>
                      </div>

                      <motion.div
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 22 }}
                        className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-accent-border bg-accent/10 text-accent"
                        aria-hidden
                      >
                        <svg
                          className="h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.div>

                      <h3 className="font-display text-xl font-semibold text-foreground">
                        Message received
                      </h3>
                      <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                        Thanks for reaching out — I&apos;ll get back to you soon.
                      </p>
                      <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-faint">
                        Resetting form…
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      noValidate
                    >
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted"
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
                          placeholder="Your name"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={
                            errors.name ? "contact-name-error" : undefined
                          }
                          className={getFieldClass("name")}
                        />
                        {errors.name && (
                          <p
                            id="contact-name-error"
                            className="mt-1.5 text-xs text-red-400"
                            role="alert"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted"
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
                          placeholder="you@example.com"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={
                            errors.email ? "contact-email-error" : undefined
                          }
                          className={getFieldClass("email")}
                        />
                        {errors.email && (
                          <p
                            id="contact-email-error"
                            className="mt-1.5 text-xs text-red-400"
                            role="alert"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-message"
                          className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted"
                        >
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          onBlur={() => handleBlur("message")}
                          rows={5}
                          placeholder="Tell me about your project or idea…"
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={
                            errors.message ? "contact-message-error" : undefined
                          }
                          className={`${getFieldClass("message")} resize-none`}
                        />
                        {errors.message && (
                          <p
                            id="contact-message-error"
                            className="mt-1.5 text-xs text-red-400"
                            role="alert"
                          >
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary inline-flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isSubmitting && (
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              ease: "linear",
                            }}
                            className="inline-block h-4 w-4 rounded-full border-2 border-accent-foreground border-t-transparent"
                            aria-hidden
                          />
                        )}
                        {isSubmitting ? "Sending…" : "Send Message"}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
