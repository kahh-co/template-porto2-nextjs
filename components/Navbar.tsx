"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "/work", label: "WORK" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-line bg-paper/85 backdrop-blur-md"
          : "border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-archive items-center justify-between px-5 md:px-8">
        <Link href="/" className="font-mono text-[13px] tracking-[0.14em]">
          LABIB K-S.
        </Link>

        <nav className="hidden items-center gap-8 font-mono text-[11px] tracking-[0.18em] text-ink md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-olive">
              {l.label}
            </Link>
          ))}
          <span className="text-muted">2026</span>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="font-mono text-[12px] tracking-[0.18em] md:hidden"
        >
          {open ? "CLOSE" : "MENU ☰"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-paper px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4 font-mono text-[12px] tracking-[0.18em]">
            <Link href="/" onClick={() => setOpen(false)}>
              INDEX
            </Link>
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <span className="text-muted">DIGITAL ARCHIVE / 2026</span>
          </div>
        </nav>
      )}
    </header>
  );
}
