"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleSkool = () => {
    const url = "https://skool.com"; // ← replace with the real Skool invite URL
    window.open(url, "_blank");
  };

  const handleScrollToBenefits = () => {
    document
      .getElementById("beneficios")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-background via-background to-secondary/20 pt-16 pb-20 md:pt-24 md:pb-32 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                  Comunidad
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Crea, conecta y gradúate con el apoyo de una comunidad que te impulsa.
              </h1>

              <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
                Únete a la Comunidad Alejandría, donde estudiantes y
                profesionales colaboran para redactar, aprobar y sustentar con
                confianza su tesis, plan de negocio o trabajo de suficiencia
                profesional. Aprende, haz networking y potencia tu crecimiento
                académico y profesional.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 px-8"
                  onClick={handleSkool}
                >
                  Entrar a la comunidad
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent h-12 px-8"
                  onClick={handleScrollToBenefits}
                >
                  Conocer beneficios
                </Button>
              </div>

              <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>+500 casos de éxito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>98% tasa de aprobación</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>+200 estudiantes en Latinoamérica</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>+10 años de experiencia</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center justify-center relative">
            <motion.div
              className="relative w-full h-[500px] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              {/* Decorative circles representing community */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              >
                <div className="relative w-72 h-72">
                  {/* Center circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/30 flex items-center justify-center backdrop-blur-sm border-2 border-primary/50">
                    <Users className="w-12 h-12 text-primary" />
                  </div>

                  {/* Orbiting circles */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const radius = 120;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    return (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-card border-2 border-primary/30 animate-pulse"
                        style={{
                          transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
