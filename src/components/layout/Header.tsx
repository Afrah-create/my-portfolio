"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { springTransition } from "@/lib/motion";
import { siteConfig } from "@/lib/site";
import Container from "./Container";
import MenuButton from "./MenuButton";
import MobileNav from "./MobileNav";

function HeaderBrand() {
  const [firstName, ...rest] = siteConfig.name.split(" ");
  const restOfName = rest.join(" ");

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — Home`}
      className="group shrink-0 transition-opacity hover:opacity-90"
    >
      {/* Initials — mobile & tablet */}
      <span
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/25 bg-cyan-500/10 font-display text-sm font-bold tracking-wide text-cyan-400 transition-colors group-hover:border-cyan-500/40 group-hover:bg-cyan-500/15 lg:hidden"
        aria-hidden
      >
        {siteConfig.initials}
      </span>

      {/* Full name — large screens */}
      <span className="hidden font-display text-lg font-bold leading-tight tracking-tight text-slate-100 lg:inline xl:text-xl">
        <span className="text-cyan-400">{firstName}</span> {restOfName}
      </span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(3, 7, 18, 0.80)", "rgba(3, 7, 18, 0.95)"]
  );
  const headerPadding = useTransform(scrollY, [0, 80], [16, 12]);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  const navLinks = (
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
                  transition={springTransition}
                  aria-hidden
                />
              ))}
          </Link>
        );
      })}
    </div>
  );

  if (shouldReduceMotion) {
    return (
      <>
        <header
          className="sticky top-0 z-50 border-b backdrop-blur-md"
          style={{
            backgroundColor: "rgba(3, 7, 18, 0.92)",
            borderBottomColor: "rgba(34, 211, 238, 0.12)",
            borderBottomWidth: "1px",
          }}
        >
          <Container>
            <nav className="flex items-center justify-between gap-4 py-4">
              <HeaderBrand />
              {navLinks}
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

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{
          backgroundColor: headerBg,
          borderBottomColor: "rgba(34, 211, 238, 0.12)",
          borderBottomWidth: "1px",
        }}
      >
        <Container>
          <motion.nav
            className="flex items-center justify-between gap-4"
            style={{ paddingTop: headerPadding, paddingBottom: headerPadding }}
          >
            <HeaderBrand />
            {navLinks}
            <MenuButton
              open={mobileMenuOpen}
              onClick={toggleMobileMenu}
              buttonRef={menuButtonRef}
            />
          </motion.nav>
        </Container>
      </motion.header>

      <MobileNav
        open={mobileMenuOpen}
        onClose={closeMobileMenu}
        menuButtonRef={menuButtonRef}
      />
    </>
  );
}
