import { ArrowRight } from "lucide-react";

const CODE_LINES = [
  `<span class="tok-keyword">const</span> pulse = <span class="tok-func">require</span>(<span class="tok-string">'@pulseroute/sdk'</span>).<span class="tok-func">init</span>({`,
  `  <span class="tok-comment">// Your API key from the dashboard</span>`,
  `  apiKey: process.env.<span class="tok-string">PULSEROUTE_KEY</span>`,
  `});`,
  ``,
  `<span class="tok-comment">// Before payment: get optimal processor</span>`,
  `<span class="tok-keyword">const</span> route = <span class="tok-keyword">await</span> pulse.<span class="tok-func">getRoute</span>({`,
  `  country: <span class="tok-string">'US'</span>,`,
  `  currency: <span class="tok-string">'USD'</span>,`,
  `  cardType: <span class="tok-string">'visa'</span>`,
  `});`,
  ``,
  `<span class="tok-comment">// Process payment with recommended processor</span>`,
  `<span class="tok-keyword">const</span> result = <span class="tok-keyword">await</span> <span class="tok-func">charge</span>(route.processorId, amount);`,
  ``,
  `<span class="tok-comment">// After payment: report outcome (fire & forget)</span>`,
  `pulse.<span class="tok-func">reportOutcome</span>({`,
  `  ruleId: route.ruleId,`,
  `  processorId: route.processorId,`,
  `  success: result.success,`,
  `  latencyMs: result.latencyMs`,
  `});`,
];

export function CodePreview() {
  return (
    <section className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block text-xs uppercase tracking-[0.2em] text-violet-bright font-medium mb-4">
              Integration
            </div>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              Three lines of code.
              <br />
              <span className="text-fg-muted">That's it.</span>
            </h3>
            <p className="mt-5 text-lg text-fg-muted leading-relaxed">
              Initialize PulseRoute, ask for a routing decision before each
              payment, and report the outcome after. The SDK handles caching,
              buffering, and graceful degradation automatically.
            </p>
            <a
              href="https://docs.pulseroute.dev"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-fg group"
            >
              Read the docs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="gradient-border p-px rounded-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-violet/15 blur-3xl pointer-events-none" />
            <div className="relative rounded-2xl bg-[#0a0a10] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-rose/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald/60" />
                <span className="ml-3 text-xs text-fg-subtle font-mono">node.js</span>
              </div>
              <pre className="p-6 text-xs md:text-[13px] leading-relaxed font-mono overflow-x-auto text-fg">
                {CODE_LINES.map((line, i) => (
                  <div
                    key={i}
                    dangerouslySetInnerHTML={{ __html: line || "&nbsp;" }}
                  />
                ))}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
