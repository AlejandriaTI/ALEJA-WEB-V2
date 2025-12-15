import { HeroSection } from "@/components/postulaciones/hero-section";
import { AboutSection } from "@/components/postulaciones/about-section";
import { BenefitsSection } from "@/components/postulaciones/benefits-section";
import { WhyJoinSection } from "@/components/postulaciones/why-join-section";
import { ApplicationForm } from "@/components/postulaciones/application-form";
export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <WhyJoinSection />
      <ApplicationForm />
    </main>
  );
}
