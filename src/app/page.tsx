import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import { TracingBeam } from "@/components/ui/tracing-beam";
import CallSection from "@/components/CallSection";
import Call2Section from "@/components/Call2Section";


export default function Home() {
  return (
    <>
      <TracingBeam>
        <HeroSection />
        <ServicesSection />
        <CallSection />
        <AboutSection />
      </TracingBeam>
      <Call2Section />
    </>
  );
}
