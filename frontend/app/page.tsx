import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { TrustedBy } from "@/components/sections/trusted-by";
import { OurWork } from "@/components/sections/our-work";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { Testimonials } from "@/components/sections/testimonials";
import { FunFacts } from "@/components/sections/fun-facts";
import { BlogSection } from "@/components/sections/blog-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollIndicator />
        <MarqueeStrip />
        <WhoWeAre />
        <TrustedBy />
        <OurWork />
        <WhatWeDo />
        <Testimonials />
        <FunFacts />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
