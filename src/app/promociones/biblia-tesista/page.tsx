"use client";

import { BonusSection } from "@/components/biblia-tesista/bonus-section";
import { GuaranteeSection } from "@/components/biblia-tesista/guarantee-section";
import { FinalCTASection } from "@/components/biblia-tesista/final-cta-section";
import { HeroSection } from "@/components/biblia-tesista/hero-section";
import { ProductSection } from "@/components/biblia-tesista/product-section";
import { BenefitsSection } from "@/components/biblia-tesista/benefits-section";
import { TestimonialsSection } from "@/components/biblia-tesista/testimonials-section";

export default function BibliaTesista() {
  return (
    <main className="min-h-screen bg-background mt-12">
      <HeroSection />
      <ProductSection />
      <BenefitsSection />
      <TestimonialsSection />
      <BonusSection />
      <GuaranteeSection />
      <FinalCTASection />
    </main>
  );
}
