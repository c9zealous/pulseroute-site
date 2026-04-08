"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-bg/70 border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-7 h-7 rounded-md bg-gradient-to-br from-violet to-indigo flex items-center justify-center shadow-[0_0_24px_-4px_rgba(139,92,246,0.7)]">
            <div className="w-1.5 h-1.5 rounded-full bg-white pulse-glow" />
          </div>
          <span className="font-semibold tracking-tight text-fg">
            Pulse<span className="text-violet-bright">Route</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-fg-muted">
          <a href="#features" className="hover:text-fg transition-colors">Features</a>
          <a href="#architecture" className="hover:text-fg transition-colors">Architecture</a>
          <a href="#how-it-works" className="hover:text-fg transition-colors">How it works</a>
          <a
            href="https://docs.pulseroute.dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-fg transition-colors"
          >
            Docs
          </a>
        </div>

        <a
          href="#request-access"
          className="text-sm font-medium px-4 py-2 rounded-full bg-fg text-bg hover:bg-fg-muted transition-colors"
        >
          Request access
        </a>
      </div>
    </nav>
  );
}
