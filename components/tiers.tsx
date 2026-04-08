import { Activity, Brain, Sparkles } from "lucide-react";
import { SectionHeader } from "./section-header";

const tiers = [
  {
    icon: Activity,
    tier: "Tier 1",
    name: "Sentinel",
    desc: "Real-time health monitoring with automatic failover based on success rates and latency thresholds.",
    bullets: [
      "Success rate & latency tracking",
      "Threshold-based failover",
      "Automatic recovery detection",
      "Failover audit trail",
    ],
    glow: "from-cyan/30 to-transparent",
    iconBg: "bg-cyan/15 border-cyan/30",
    iconColor: "text-cyan",
  },
  {
    icon: Brain,
    tier: "Tier 2",
    name: "Predictive",
    desc: "LSTM neural network predicts processor failures before they happen, enabling pre-emptive routing changes.",
    bullets: [
      "Failure probability scoring",
      "Time-series pattern recognition",
      "Pre-emptive traffic shifting",
      "Configurable risk thresholds",
    ],
    glow: "from-violet/30 to-transparent",
    iconBg: "bg-violet/15 border-violet/30",
    iconColor: "text-violet-bright",
  },
  {
    icon: Sparkles,
    tier: "Tier 3",
    name: "Adaptive",
    desc: "Thompson Sampling multi-armed bandit continuously optimizes traffic allocation based on real-time outcomes.",
    bullets: [
      "Per-transaction optimization",
      "Online learning from outcomes",
      "Bayesian weight allocation",
      "Prediction-informed priors",
    ],
    glow: "from-amber/25 to-transparent",
    iconBg: "bg-amber/15 border-amber/30",
    iconColor: "text-amber",
  },
];

export function Tiers() {
  return (
    <section className="relative py-32 border-t border-border" id="architecture">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Architecture"
          title={<>Three tiers of <span className="bg-gradient-to-r from-cyan via-violet-bright to-amber bg-clip-text text-transparent">intelligence</span></>}
          description="Start with rule-based routing and graduate to ML-powered optimization. Each tier builds on the last."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map(({ icon: Icon, ...t }) => (
            <div key={t.name} className="gradient-border p-px rounded-2xl group relative overflow-hidden">
              <div className={`absolute -top-24 -right-16 w-64 h-64 rounded-full bg-gradient-to-br ${t.glow} blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="relative rounded-2xl bg-bg-elevated p-8 h-full">
                <div className={`w-11 h-11 rounded-xl border ${t.iconBg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-5 h-5 ${t.iconColor}`} />
                </div>
                <div className="text-xs uppercase tracking-wider text-fg-subtle mb-2">{t.tier}</div>
                <h3 className="text-xl font-semibold tracking-tight mb-3">{t.name}</h3>
                <p className="text-sm text-fg-muted leading-relaxed mb-6">{t.desc}</p>
                <ul className="space-y-2 pt-5 border-t border-border">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-xs text-fg-muted">
                      <span className="w-1 h-1 rounded-full bg-fg-subtle mt-1.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
