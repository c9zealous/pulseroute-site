import { SectionHeader } from "./section-header";

const steps = [
  { n: "01", title: "Add processors", desc: "Use the setup wizard to define which processors you use and what they handle." },
  { n: "02", title: "Install SDK", desc: "3 lines of code: init, get route, report outcome. Node.js, Python, Java, or REST." },
  { n: "03", title: "Shadow mode", desc: "Observe traffic without changing routing. Check the shadow report to see projected impact." },
  { n: "04", title: "Go live", desc: "Switch to active mode. Routing, failover, and optimization happen automatically." },
];

export function Steps() {
  return (
    <section className="relative py-32 border-t border-border" id="how-it-works">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Getting started"
          title={<>Live in <span className="text-violet-bright">15 minutes</span></>}
          description="From zero to intelligent payment routing."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="gradient-border p-px rounded-2xl">
                <div className="rounded-2xl bg-bg-elevated p-6 h-full">
                  <div className="text-3xl font-mono font-semibold bg-gradient-to-br from-violet-bright to-indigo bg-clip-text text-transparent mb-4">
                    {s.n}
                  </div>
                  <h3 className="font-medium text-fg mb-2">{s.title}</h3>
                  <p className="text-sm text-fg-muted leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
