import HeroSection from "@/components/centro-recursos/hero-section";
import BooksGallery from "@/components/centro-recursos/books-gallery";
import CTASection from "@/components/centro-recursos/cta-section";
import FeaturesSection from "@/components/centro-recursos/features-section";

export default function Catalogo() {
  return (
    <main className=" min-h-screen mt-12">
      <HeroSection />
      <BooksGallery />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
