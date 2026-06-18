"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { springTransition } from "@/lib/motion";
import { siteConfig } from "@/lib/site";
import ThemeToggle from "@/components/ui/ThemeToggle";
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
      <span
        className="accent-chip inline-flex h-9 w-9 items-center justify-center rounded-lg font-display text-sm font-bold tracking-wide transition-colors lg:hidden"
        aria-hidden
      >
        {siteConfig.initials}
      </span>

      <span className="hidden font-display text-lg font-bold leading-tight tracking-tight text-foreground lg:inline xl:text-xl">
        <span className="text-accent">{firstName}</span> {restOfName}
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
              isActive ? "text-accent" : "text-muted hover:text-accent"
            }`}
          >
            {link.name}
            {isActive &&
              (shouldReduceMotion ? (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-accent"
                  aria-hidden
                />
              ) : (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-accent"
                  transition={springTransition}
                  aria-hidden
                />
              ))}
          </Link>
        );
      })}
    </div>
  );

  const headerStyle = {
    backgroundColor: "var(--header-bg)",
    borderBottomColor: "var(--header-border)",
    borderBottomWidth: "1px",
  } as const;

  const navActions = (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      <MenuButton
        open={mobileMenuOpen}
        onClick={toggleMobileMenu}
        buttonRef={menuButtonRef}
      />
    </div>
  );

  if (shouldReduceMotion) {
    return (
      <>
        <header
          className="sticky top-0 z-50 border-b backdrop-blur-md"
          style={headerStyle}
        >
          <Container>
            <nav className="flex items-center justify-between gap-4 py-4">
              <HeaderBrand />
              {navLinks}
              {navActions}
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
        style={headerStyle}
      >
        <Container>
          <motion.nav
            className="flex items-center justify-between gap-4"
            style={{ paddingTop: headerPadding, paddingBottom: headerPadding }}
          >
            <HeaderBrand />
            {navLinks}
            {navActions}
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
