"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { clsx } from "clsx";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("#");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = links.map(l => document.querySelector(l.href));
      const y = window.scrollY + 120;
      for (const sec of sections) {
        if (!sec) continue;
        const rect = sec.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        if (y >= top && y < bottom) {
          setActive(`#${sec.id}`);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled ? "bg-white/70 dark:bg-gray-950/60 backdrop-blur-md border-b border-white/10" : ""
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          {/* <span className="h-6 w-6 rounded-md bg-gradient-to-br from-brand-500 to-blue-600"></span> */}
          <span>Portofolio</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={clsx(
                "text-sm transition-colors hover:text-brand-500",
                active === l.href ? "text-brand-500" : "text-gray-600 dark:text-gray-300"
              )}
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
        {/* Mobile: tetap tanpa burger — hanya toggle theme */}
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
