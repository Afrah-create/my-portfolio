"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { NAVIGATION_LINKS } from "@/lib/constants";
import Container from "./Container";
import MenuButton from "./MenuButton";
import MobileNav from "./MobileNav";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <>
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

            <div className="hidden items-center gap-8 md:flex">
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

            <MenuButton
              open={mobileMenuOpen}
              onClick={toggleMobileMenu}
              buttonRef={menuButtonRef}
            />
          </nav>
        </Container>
      </header>

      <MobileNav
        open={mobileMenuOpen}
        onClose={closeMobileMenu}
        menuButtonRef={menuButtonRef}
      />
    </>
  );
}
