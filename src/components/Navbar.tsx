"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-brand-dark/85 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-medium text-gray-200 transition hover:text-white">
              {n.label}
            </Link>
          ))}
          <a
            href="tel:8335726872"
            className="rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            833-JRCO-USA
          </a>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-brand-dark/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-200"
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:8335726872" className="rounded-full bg-brand-red px-5 py-2 text-center text-sm font-semibold text-white">
              833-JRCO-USA
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
