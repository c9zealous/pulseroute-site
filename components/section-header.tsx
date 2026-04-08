export function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-16">
      <div className="inline-block text-xs uppercase tracking-[0.2em] text-violet-bright font-medium mb-4">
        {label}
      </div>
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
        {title}
      </h2>
      <p className="mt-5 text-lg text-fg-muted leading-relaxed">{description}</p>
    </div>
  );
}
