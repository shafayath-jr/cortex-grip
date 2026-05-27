"use client";

import { ArrowRight, Sparkles, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 z-99999 ${
        scrolled
          ? "border-b border-brand-secondary-800/40 bg-brand-secondary-900/60 backdrop-blur-xl py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition-transform hover:scale-[1.02]"
        >
          <Image
            src="/logo/dark-logo.svg"
            alt="Cortexgrip Logo"
            width={180}
            height={34}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Navigation Actions */}
        <div className="flex items-center gap-3">
          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 py-4 px-6 rounded-[8px] border border-light-blue-500 bg-brand-primary-500 text-light-blue-100 font-manrope text-[18px] font-normal leading-7 transition-all duration-300 hover:border-brand-secondary-500/50 hover:bg-brand-secondary-800/65 focus:outline-none focus:ring-2 focus:ring-brand-secondary-500/30 cursor-pointer active:scale-95"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="size-6" />
            ) : (
              <HiMenuAlt1 className="size-6" />
            )}
            <span>Menu</span>
          </button>

          {/* Get Started Button */}
          <Link
            href="/get-started"
            className="py-4 px-6 rounded-[8px] text-center font-medium font-manrope text-[18px] leading-7 bg-light-blue-500 text-brand-primary-600 transition-all duration-300 hover:bg-light-blue-400 hover:shadow-[0_0_15px_rgba(149,144,239,0.25)]"
          >
            Get Started Free
          </Link>
        </div>
      </div>

      {/* Slide-out / Expandable Dropdown Menu with premium design */}
      <div
        className={`absolute top-full left-0 w-full border-b border-brand-secondary-800/50 bg-brand-secondary-950/95 backdrop-blur-2xl transition-all duration-500 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-7xl px-8 py-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Nav Links */}
          <div className="flex flex-col gap-5">
            <p className="text-xs font-semibold tracking-wider text-brand-secondary-400 uppercase">
              Navigation
            </p>
            <nav className="flex flex-col gap-4">
              {[
                { name: "Features", href: "#features" },
                { name: "Solutions", href: "#solutions" },
                { name: "Pricing", href: "#pricing" },
                { name: "Resources", href: "#resources" },
                { name: "About", href: "#about" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between text-xl font-medium text-brand-secondary-100 transition-colors hover:text-white"
                >
                  <span>{item.name}</span>
                  <ArrowRight className="size-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-brand-secondary-400" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Call-to-action / Showcase block in the menu */}
          <div className="flex flex-col justify-between rounded-2xl border border-brand-secondary-800/40 bg-brand-secondary-900/30 p-6 backdrop-blur-md">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-secondary-500/10 px-3 py-1 text-xs font-medium text-brand-secondary-300 border border-brand-secondary-500/20">
                <Sparkles className="size-3" />
                <span>Introducing Cortex Grip 2.0</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                Next-Gen Intelligence for Workspaces
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-secondary-300">
                Connect your workspace directly to custom LLM runtimes with
                stateful execution, visual playgrounds, and zero latency.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/get-started"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center rounded-xl bg-linear-to-r from-light-blue-400 to-brand-secondary-300 px-5 py-2.5 text-sm font-semibold text-brand-secondary-900 transition-all duration-300 hover:from-light-blue-300 hover:to-brand-secondary-200 hover:shadow-[0_0_15px_rgba(149,144,239,0.25)] text-center"
              >
                Get Started Free
              </Link>
              <Link
                href="/docs"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center rounded-xl border border-brand-secondary-800 bg-brand-secondary-900/50 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-brand-secondary-500/50 hover:bg-brand-secondary-800/40 text-center"
              >
                Read Docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
