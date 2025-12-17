"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  const handleWhatsApp = () => {
    const message =
      "Hola, me gustaría obtener más información sobre cómo unirme a la comunidad de investigadores.";
    const phoneNumber = "51989575820";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-12 md:py-20 bg-linear-to-br from-primary/5 via-background to-secondary/10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <motion.div
          className="bg-card border border-border/50 rounded-2xl p-12 md:p-16 text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              ¿Listo para unirte a la comunidad?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Forma parte de una red de investigadores apasionados por el
              conocimiento y la colaboración académica
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center gap-2"
              onClick={handleWhatsApp}
            >
              <Send className="w-4 h-4" />
              Solicitar Membresía
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-semibold bg-transparent"
            >
              Ver Beneficios
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/30">
            <div>
              <div className="text-3xl font-bold text-primary">2,000+</div>
              <p className="text-sm text-foreground/60">Miembros Activos</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">150+</div>
              <p className="text-sm text-foreground/60">Eventos al Año</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <p className="text-sm text-foreground/60">Instituciones</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
