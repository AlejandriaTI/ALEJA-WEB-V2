import { HeroSection } from "@/components/home/hero-section";
import { HeroSection3D } from "@/components/home/hero-section-3d";
import { AboutSection } from "@/components/home/about-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ContactSection } from "@/components/home/contact-section";
export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection3D />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  );
}
