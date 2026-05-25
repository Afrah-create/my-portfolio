"use client";

import { useCallback, useEffect, useRef, type RefObject } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NAVIGATION_LINKS } from "@/lib/constants";

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/YOUR_USERNAME",
    icon: <GitHubIcon />,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/YOUR_USERNAME",
    icon: <LinkedInIcon />,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:your@email.com",
    icon: <MailIcon />,
    external: false,
  },
];

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  menuButtonRef: RefObject<HTMLButtonElement | null>;
};

function MobileNavPanelContent({
  pathname,
  onClose,
}: {
  pathname: string;
  onClose: () => void;
}) {
  return (
    <>
      <div className="flex items-center justify-between border-b border-[var(--color-surface-2)] px-6 py-5">
        <span className="text-sm font-medium tracking-wide text-slate-400">
          Menu
        </span>
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-[var(--color-surface)] hover:text-cyan-400"
          aria-label="Close menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <nav className="flex flex-1 flex-col px-6 py-6">
        <ul className="flex flex-col gap-1">
          {NAVIGATION_LINKS.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center gap-4 rounded-lg py-3 pl-4 pr-3 text-lg font-medium transition-colors ${
                    isActive
                      ? "border-l-2 border-cyan-400 bg-[var(--color-surface)] text-cyan-400"
                      : "border-l-2 border-transparent text-slate-400 hover:bg-[var(--color-surface)]/60 hover:text-slate-100"
                  }`}
                >
                  <span
                    className="font-mono text-xs text-slate-600"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-[var(--color-surface-2)] px-6 py-6">
        <Link
          href="/contact"
          onClick={onClose}
          className="mb-6 flex w-full items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-gray-950 transition-colors duration-200 hover:bg-cyan-400"
        >
          Get in touch
        </Link>
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              aria-label={social.label}
              onClick={onClose}
              {...(social.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-surface-2)] text-slate-400 transition-colors hover:border-cyan-700 hover:text-cyan-400"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default function MobileNav({
  open,
  onClose,
  menuButtonRef,
}: MobileNavProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  const getFocusableElements = useCallback(() => {
    if (!panelRef.current) return [];
    return Array.from(
      panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const timer = window.setTimeout(() => {
        getFocusableElements()[0]?.focus();
      }, 0);
      return () => {
        window.clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [open, getFocusableElements]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusables = getFocusableElements();
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, getFocusableElements, menuButtonRef]);

  const handleClose = () => {
    onClose();
    menuButtonRef.current?.focus();
  };

  return (
    <AnimatePresence>
      {open &&
        (shouldReduceMotion ? (
          <>
            <button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={handleClose}
            />
            <div
              id="mobile-navigation"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-[var(--color-surface-2)] bg-[var(--color-bg)]/95 backdrop-blur-xl md:hidden"
            >
              <MobileNavPanelContent onClose={handleClose} pathname={pathname} />
            </div>
          </>
        ) : (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            <motion.div
              id="mobile-navigation"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-[var(--color-surface-2)] bg-[var(--color-bg)]/95 backdrop-blur-xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
            >
              <MobileNavPanelContent
                pathname={pathname}
                onClose={handleClose}
              />
            </motion.div>
          </>
        ))}
    </AnimatePresence>
  );
}
