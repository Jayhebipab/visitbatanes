"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/site";
import {
  CloseIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from "@/components/icons";
import { useTheme } from "@/components/theme-provider";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <nav
        className="container-x flex h-16 items-center justify-between gap-4 md:h-20"
        aria-label="Primary"
      >
        <Link
          href="/"
          aria-label={`${SITE.name} home`}
          className="flex items-center gap-2.5 font-display text-lg md:text-xl tracking-tight"
        >
          <Image
            src="/logo-mark.svg"
            alt=""
            width={40}
            height={40}
            priority
            className="h-9 w-9 md:h-10 md:w-10 shrink-0"
          />
          <span className="hidden sm:inline text-foreground">
            {SITE.shortName}
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative rounded-full px-3 py-2 text-sm transition-colors ${
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute left-3 right-3 -bottom-0.5 h-px bg-accent"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-card/60 text-foreground transition-colors hover:bg-card"
          >
            {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>
          <Link
            href="/tours"
            className="hidden md:inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            Book a tour
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-card/60 text-foreground"
            aria-label="Open menu"
            aria-expanded={open}
          >
            {open ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-background/95 backdrop-blur">
          <div className="container-x py-8">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => {
                const active =
                  l.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-4 text-lg ${
                        active
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted/60"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/tours"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-3 text-base font-medium text-background"
            >
              Book a tour
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
