import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { TrustedBy } from "@/components/sections/trusted-by";
import { OurWork } from "@/components/sections/our-work";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { Testimonials } from "@/components/sections/testimonials";
import { FunFacts } from "@/components/sections/fun-facts";
import { BlogSection } from "@/components/sections/blog-section";
import { getWorks } from "@/lib/get-works";

export default async function Home() {
  const allWorks = await getWorks();
  const works = allWorks.slice(0, 4);
  
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <WhoWeAre />
        <TrustedBy />
        <OurWork works={works} isHomePage={true} />
        <WhatWeDo />
        <Testimonials />
        <FunFacts />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}

