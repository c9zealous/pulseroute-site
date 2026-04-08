import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 mesh" />
      <div className="absolute inset-0 grid-bg" />
      <div className="grain" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-violet/20 blur-[120px] pulse-glow" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-cyan/15 blur-[120px] pulse-glow" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-strong bg-bg-elevated/60 backdrop-blur-sm text-xs font-medium text-fg-muted">
          <Sparkles className="w-3.5 h-3.5 text-violet-bright" />
          Now accepting design partners
          <span className="ml-1 inline-block w-1.5 h-1.5 rounded-full bg-emerald pulse-glow" />
        </div>

        {/* Headline */}
        <h1 className="mt-8 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
          Stop losing revenue to
          <br />
          <span className="bg-gradient-to-r from-violet-bright via-indigo to-cyan bg-clip-text text-transparent">
            payment processor failures
          </span>
        </h1>

        {/* Subhead */}
        <p className="mt-6 text-lg md:text-xl text-fg-muted max-w-2xl mx-auto leading-relaxed">
          PulseRoute detects processor degradation in seconds, not minutes.
          Smart routing, predictive failover, zero code changes required.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#request-access"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-fg text-bg font-medium text-sm hover:bg-fg-muted transition-colors shadow-[0_0_40px_-8px_rgba(255,255,255,0.4)]"
          >
            Request early access
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border-strong bg-bg-elevated/60 backdrop-blur-sm text-fg font-medium text-sm hover:bg-surface transition-colors"
          >
            See how it works
          </a>
        </div>

        {/* Trust strip */}
        <div className="mt-14 flex items-center justify-center gap-6 text-xs text-fg-subtle uppercase tracking-wider">
          <span>Built for</span>
          <span className="text-fg-muted">Stripe</span>
          <span className="w-1 h-1 rounded-full bg-fg-subtle" />
          <span className="text-fg-muted">Adyen</span>
          <span className="w-1 h-1 rounded-full bg-fg-subtle" />
          <span className="text-fg-muted">Braintree</span>
          <span className="w-1 h-1 rounded-full bg-fg-subtle" />
          <span className="text-fg-muted">Checkout.com</span>
        </div>
      </div>
    </section>
  );
}
