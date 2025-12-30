import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Centro de Recursos - Alejandría Consultora",
  description: "Accede al centro de recursos de Alejandría Consultora: Explora libros, guías y herramientas para potenciar tu investigación y éxito académico.",
};

import HeroSection from "@/components/centro-recursos/hero-section";
import BooksGallery from "@/components/centro-recursos/books-gallery";
import CTASection from "@/components/centro-recursos/cta-section";
import FeaturesSection from "@/components/centro-recursos/features-section";

export default function Home() {
  return (
    <main className=" min-h-screen mt-12">
      <HeroSection />
      <BooksGallery />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
