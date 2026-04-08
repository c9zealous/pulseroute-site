import { Nav } from "./nav";
import { Footer } from "./footer";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 pt-36 pb-24">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-3 text-sm text-fg-subtle">Last updated: {updated}</p>
          <div className="mt-12 prose-legal space-y-8 text-fg-muted leading-relaxed">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold text-fg mt-10 mb-3 tracking-tight">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-medium text-fg mt-6 mb-2">{children}</h3>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-2 list-disc list-outside ml-5">{children}</ul>;
}
