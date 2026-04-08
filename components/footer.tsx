import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet to-indigo flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
          <span className="text-sm text-fg-muted">
            Pulse<span className="text-fg">Route</span> © 2026
          </span>
        </div>
        <div className="flex items-center gap-7 text-sm text-fg-muted">
          <Link href="/terms" className="hover:text-fg transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-fg transition-colors">Privacy</Link>
          <a
            href="https://docs.pulseroute.dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-fg transition-colors"
          >
            Docs
          </a>
        </div>
      </div>
    </footer>
  );
}
