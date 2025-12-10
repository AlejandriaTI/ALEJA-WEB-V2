import HeroSection from "@/components/centro-recursos/hero-section";
import BooksGallery from "@/components/centro-recursos/books-gallery";
import CTASection from "@/components/centro-recursos/cta-section";
import FeaturesSection from "@/components/centro-recursos/features-section";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <HeroSection />
      <BooksGallery />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
