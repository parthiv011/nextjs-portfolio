import { About } from "@/sections/About";
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
    </div>
  );
}
