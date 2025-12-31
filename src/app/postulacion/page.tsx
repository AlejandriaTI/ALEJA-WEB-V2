import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postulaciones - Alejandría Consultora",
  description: "Únete al equipo de Alejandría Consultora. Descubre oportunidades de carrera y aplica para formar parte de nuestros expertos asesores académicos.",
};

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
