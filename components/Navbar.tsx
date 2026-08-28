"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-900/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-[var(--font-quintessential)] text-3xl font-semibold tracking-tight"
        >
          Sanjit
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden translate-x-[5px] items-center gap-8 text-sm text-zinc-400 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-zinc-50"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-50 sm:hidden"
        >
          <span className="text-lg">{isOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out sm:hidden ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-6 border-t border-zinc-800 pt-6">
            <div className="flex translate-x-[30px] flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-lg text-zinc-300 transition-colors duration-200 hover:text-zinc-50"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
