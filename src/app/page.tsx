import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Brands } from "@/components/sections/brands";
import { Work } from "@/components/sections/work";
import { Apps } from "@/components/sections/apps";
import { Results } from "@/components/sections/results";
import { Services } from "@/components/sections/services";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Brands />
        <Work />
        <Apps />
        <Results />
        <Services />
        <TechMarquee />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
