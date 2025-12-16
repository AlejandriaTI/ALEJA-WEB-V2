import HeroSection from "@/components/comunidad/hero-section";
import MembersShowcase from "@/components/comunidad/members-showcase";
import FeaturesSection from "@/components/comunidad/features-section";
import CTASection from "@/components/comunidad/cta-section";

export const metadata = {
  title: "Comunidad - Red de Investigadores",
  description:
    "Únete a nuestra comunidad de investigadores, comparte conocimiento y colabora en proyectos innovadores",
};

export default function ComunidadPage() {
  return (
    <main className="min-h-screen mt-12">
      <HeroSection />
      <MembersShowcase />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
