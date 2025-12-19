"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  const handleSkool = () => {
    const url = "https://skool.com" // ← replace with your actual Skool invite link
    window.open(url, "_blank")
  }

  const handleScrollToBenefits = () => {
    document.getElementById("beneficios")?.scrollIntoView({ behavior: "smooth" })
  }

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
              Únete gratis ahora a la Comunidad Alejandría en Skool
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              No hagas tu tesis solo. Hazla con una comunidad que te entiende, te impulsa y celebra tu éxito.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center gap-2"
              onClick={handleSkool}
            >
              <Send className="w-4 h-4" />
              Entrar a la comunidad
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-semibold bg-transparent"
              onClick={handleScrollToBenefits}
            >
              Ver Beneficios
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-4 grid-cols-2 gap-8 pt-8 border-t border-border/30">
            <div>
              <div className="text-3xl font-bold text-primary">+500</div>
              <p className="text-sm text-foreground/60">Casos de éxito</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <p className="text-sm text-foreground/60">Tasa de aprobación</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">+200</div>
              <p className="text-sm text-foreground/60">Estudiantes en Latinoamérica</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">+10</div>
              <p className="text-sm text-foreground/60">Años de experiencia</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
