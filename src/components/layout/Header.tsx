"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NAVIGATION_LINKS } from "@/lib/constants";
import Container from "./Container";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        backgroundColor: "rgba(3, 7, 18, 0.80)",
        borderBottomColor: "rgba(34, 211, 238, 0.12)",
        borderBottomWidth: "1px",
      }}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="text-xl font-bold transition-opacity hover:opacity-90"
            style={{ color: "var(--color-accent)" }}
          >
            Portfolio
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-cyan-400"
                      : "text-slate-400 hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                  {isActive &&
                    (shouldReduceMotion ? (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-cyan-400"
                        aria-hidden
                      />
                    ) : (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-cyan-400"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        aria-hidden
                      />
                    ))}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="p-2 text-slate-400 transition-colors hover:text-cyan-400 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {shouldReduceMotion ? (
          mobileMenuOpen && (
            <div className="overflow-hidden pb-4 md:hidden">
              <div className="flex flex-col gap-4 border-t border-cyan-500/10 pt-4">
                {NAVIGATION_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-sm font-medium transition-colors ${
                        isActive
                          ? "text-cyan-400"
                          : "text-slate-400 hover:text-cyan-400"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )
        ) : (
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden md:hidden"
              >
                <div className="flex flex-col gap-4 border-t border-cyan-500/10 pb-4 pt-4">
                  {NAVIGATION_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`text-sm font-medium transition-colors ${
                          isActive
                            ? "text-cyan-400"
                            : "text-slate-400 hover:text-cyan-400"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </Container>
    </header>
  );
}
