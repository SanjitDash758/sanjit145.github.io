"use client";

import { useState } from "react";

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
    <nav className="relative z-50 mx-auto w-full max-w-6xl px-6 py-6 lg:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-serif text-2xl font-medium tracking-tight">
          Sanjit
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm text-zinc-400 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-zinc-50"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-50 sm:hidden">
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
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-lg text-zinc-300 transition-colors duration-200 hover:text-zinc-50"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
