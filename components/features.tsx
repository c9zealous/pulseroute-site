import { Activity, Zap, Brain, Target, Eye, Plug } from "lucide-react";
import { SectionHeader } from "./section-header";

const features = [
  { icon: Activity, color: "text-cyan", bg: "bg-cyan/15 border-cyan/30", title: "Real-time monitoring", desc: "Continuous evaluation of success rates, latency percentiles, and error patterns across all processors." },
  { icon: Zap, color: "text-emerald", bg: "bg-emerald/15 border-emerald/30", title: "Automatic failover", desc: "Traffic shifts to healthy alternatives automatically. No pager, no manual intervention." },
  { icon: Brain, color: "text-violet-bright", bg: "bg-violet/15 border-violet/30", title: "Predictive routing", desc: "ML model predicts failures before they happen. Pre-emptive changes prevent outages." },
  { icon: Target, color: "text-indigo", bg: "bg-indigo/15 border-indigo/30", title: "Adaptive optimization", desc: "Continuously optimizes traffic allocation based on real-time success rates and latency." },
  { icon: Eye, color: "text-rose", bg: "bg-rose/15 border-rose/30", title: "Shadow mode", desc: "Observe without changing routing. See exactly what PulseRoute would have done with a comparison report." },
  { icon: Plug, color: "text-amber", bg: "bg-amber/15 border-amber/30", title: "Zero-change integration", desc: "3-line SDK. Works with Stripe, Adyen, Braintree, Checkout.com, and any processor." },
];

export function Features() {
  return (
    <section className="relative py-32 border-t border-border" id="features">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Features"
          title="Built for payment teams"
          description="Everything you need to make your payment stack resilient, without rebuilding your integration."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {features.map(({ icon: Icon, ...f }) => (
            <div key={f.title} className="bg-bg-elevated p-8 hover:bg-surface transition-colors group">
              <div className={`w-10 h-10 rounded-lg border ${f.bg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                <Icon className={`w-4.5 h-4.5 ${f.color}`} />
              </div>
              <h3 className="font-medium text-fg mb-2">{f.title}</h3>
              <p className="text-sm text-fg-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
