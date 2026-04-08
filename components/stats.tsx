export function Stats() {
  const items = [
    { value: "<200ms", label: "Failover detection" },
    { value: "99.9%", label: "Routing uptime" },
    { value: "3 lines", label: "SDK integration" },
    { value: "$0", label: "Until you see value" },
  ];
  return (
    <section className="relative -mt-12 z-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="gradient-border p-px rounded-2xl">
          <div className="rounded-2xl bg-bg-elevated/80 backdrop-blur-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
            {items.map((it) => (
              <div key={it.label} className="px-6 py-8 text-center">
                <div className="text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-b from-fg to-fg-muted bg-clip-text text-transparent">
                  {it.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-fg-subtle">
                  {it.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
