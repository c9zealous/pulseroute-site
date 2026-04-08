import { Check, X } from "lucide-react";
import { SectionHeader } from "./section-header";

const without = [
  "Processor goes down — you find out from angry customers",
  "Manual failover takes 15–30 minutes",
  "Every failed transaction is lost revenue",
  "No visibility into processor health trends",
  "Static routing rules can't adapt to conditions",
];

const withPR = [
  "Degradation detected in seconds, automatically",
  "Traffic shifts to a healthy processor instantly",
  "Transactions rescued before customers notice",
  "Real-time health dashboard with predictive alerts",
  "ML-powered routing optimizes continuously",
];

export function Problem() {
  return (
    <section className="relative py-32" id="problem">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="The problem"
          title={<>Payment failures are <span className="text-fg-muted">silent revenue killers</span></>}
          description="By the time you notice a processor issue, hundreds of transactions have already failed."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {/* Without */}
          <div className="gradient-border p-px rounded-2xl">
            <div className="rounded-2xl bg-bg-elevated p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-rose/15 border border-rose/30 flex items-center justify-center">
                  <X className="w-4 h-4 text-rose" />
                </div>
                <h3 className="font-medium text-fg">Without PulseRoute</h3>
              </div>
              <ul className="space-y-3">
                {without.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-fg-muted">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-fg-subtle shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* With */}
          <div className="gradient-border p-px rounded-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-violet/15 blur-3xl pointer-events-none" />
            <div className="relative rounded-2xl bg-bg-elevated p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-emerald/15 border border-emerald/30 flex items-center justify-center">
                  <Check className="w-4 h-4 text-emerald" />
                </div>
                <h3 className="font-medium text-fg">With PulseRoute</h3>
              </div>
              <ul className="space-y-3">
                {withPR.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-fg">
                    <Check className="w-4 h-4 text-emerald mt-0.5 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
