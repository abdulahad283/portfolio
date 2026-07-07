import Awards from "@/components/sections/Awards";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Languages from "@/components/sections/Languages";
import Profile from "@/components/sections/Profile";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <Profile />

      <ScrollReveal>
        <Experience />
      </ScrollReveal>

      <ScrollReveal>
        <Education />
      </ScrollReveal>

      <ScrollReveal>
        <Certifications />
      </ScrollReveal>

      <ScrollReveal>
        <Skills />
      </ScrollReveal>

      <ScrollReveal>
        <Languages />
      </ScrollReveal>

      <ScrollReveal>
        <Awards />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <Contact />
    </>
  );
}
