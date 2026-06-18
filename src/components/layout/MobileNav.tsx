"use client";

import { useCallback, useEffect, useRef, type RefObject } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CONTACT, NAVIGATION_LINKS } from "@/lib/constants";

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
    href: CONTACT.github,
    icon: <GitHubIcon />,
    external: true,
  },
  {
    label: "WhatsApp",
    href: CONTACT.whatsapp,
    icon: <WhatsAppIcon />,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${CONTACT.email}`,
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
          href="/#contact"
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
