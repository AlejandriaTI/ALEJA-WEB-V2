import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogos - Alejandría Consultora",
  description: "Explora nuestros catálogos de recursos académicos, incluyendo la 'Biblia del Tesista' y otros materiales para tu investigación.",
};

import HeroSection from "@/components/centro-recursos/hero-section";
import BooksGallery from "@/components/centro-recursos/books-gallery";
import CTASection from "@/components/centro-recursos/cta-section";
import FeaturesSection from "@/components/centro-recursos/features-section";
import { ProductSection } from "@/components/biblia-tesista/product-section";

export default function Catalogo() {
  return (
    <main className=" min-h-screen mt-12">
      <HeroSection />
      <BooksGallery />
      {/* Sección de muestra: fragmento de "La Biblia del Tesista" */}
      <ProductSection />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
