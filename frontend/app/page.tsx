import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Problems } from "@/components/sections/problems";
import { Deliverables } from "@/components/sections/deliverables";
import { Process } from "@/components/sections/process";
import { Cise } from "@/components/sections/cise";
import { DemoLabPreview } from "@/components/sections/demo-lab-preview";
import { Results } from "@/components/sections/results";
import { AuditTool } from "@/components/sections/audit-tool";
import { Pricing } from "@/components/sections/pricing";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Problems />
        <Deliverables />
        <Process />
        <Cise />
        <DemoLabPreview />
        <Results />
        <AuditTool />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
