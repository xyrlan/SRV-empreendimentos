import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import { TracingBeam } from "@/components/ui/tracing-beam";


export default function Home() {
  return (
    <TracingBeam>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </TracingBeam>
  );
}
