import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Testimonial } from "@/sections/Testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Projects />
      <Testimonial />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
