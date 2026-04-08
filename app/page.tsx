import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Problem } from "@/components/problem";
import { Tiers } from "@/components/tiers";
import { Features } from "@/components/features";
import { CodePreview } from "@/components/code-preview";
import { Steps } from "@/components/steps";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col flex-1">
        <Hero />
        <Stats />
        <Problem />
        <Tiers />
        <Features />
        <CodePreview />
        <Steps />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
