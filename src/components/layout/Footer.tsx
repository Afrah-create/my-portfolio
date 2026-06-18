"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { CONTACT, NAVIGATION_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { siteConfig } from "@/lib/site";
import Container from "./Container";

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

const iconByName: Record<string, React.ReactNode> = {
  GitHub: <GitHubIcon />,
  WhatsApp: <WhatsAppIcon />,
  Email: <MailIcon />,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--color-surface-2)] bg-[var(--color-bg)]">
      <Container>
        <div className="grid gap-10 py-10 md:grid-cols-[1.2fr_1fr_1fr] md:gap-8">
          <div>
            <p className="font-display text-lg font-bold text-slate-100">
              {siteConfig.shortName}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500">
              {siteConfig.og.tagline}
            </p>
            <p className="mt-4 font-mono text-xs text-slate-600">
              Built with Next.js & TypeScript
            </p>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-slate-500">
              Navigate
            </p>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-slate-500">
              Connect
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="block text-sm text-slate-400 transition-colors hover:text-cyan-400"
            >
              {CONTACT.email}
            </a>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  {...(social.name !== "Email" && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-surface-2)] text-slate-400 transition-colors hover:border-cyan-700 hover:text-cyan-400"
                >
                  {iconByName[social.name]}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--color-surface-2)] py-6 text-sm text-slate-500 sm:flex-row">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="transition-colors hover:text-cyan-400"
          >
            Back to top ↑
          </button>
        </div>
      </Container>
    </footer>
  );
}
