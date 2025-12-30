import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Biblia del Tesista - Alejandría Consultora",
  description: "Descubre 'La Biblia del Tesista', la guía definitiva para tu tesis. Incluye bonos exclusivos y garantía de éxito académico.",
};

"use client";

import { motion } from "framer-motion";

import { BonusSection } from "@/components/biblia-tesista/bonus-section";
import { GuaranteeSection } from "@/components/biblia-tesista/guarantee-section";
import { FinalCTASection } from "@/components/biblia-tesista/final-cta-section";
import { HeroSection } from "@/components/biblia-tesista/hero-section";
import { ProductSection } from "@/components/biblia-tesista/product-section";
import { BenefitsSection } from "@/components/biblia-tesista/benefits-section";
import { TestimonialsSection } from "@/components/biblia-tesista/testimonials-section";

export default function BibliaTesista() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background mt-12"
    >
      <HeroSection />
      <ProductSection />
      <BenefitsSection />
      <TestimonialsSection />
      <BonusSection />
      <GuaranteeSection />
      <FinalCTASection />
    </motion.main>
  );
}
