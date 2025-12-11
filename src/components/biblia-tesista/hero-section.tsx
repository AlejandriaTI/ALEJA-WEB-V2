"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CountdownTimer } from "./countdown-timer";
import { motion } from "framer-motion";

declare global {
  interface Window {
    fbq: (
      type: string,
      eventName: string,
      params?: { value: number; currency: string }
    ) => void;
  }
}

export function HeroSection() {
  const handleCheckout = () => {
    if (typeof window !== "undefined" && typeof window.fbq !== "undefined") {
      window.fbq("track", "InitiateCheckout", {
        value: 37.0,
        currency: "PEN",
      });
    }
    window.open(
      "https://pay.hotmart.com/C101263888O?checkoutMode=10",
      "_blank"
    );
  };

  return (
    <section className="text-foreground overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className="bg-primary/20 text-primary border-primary/30"
            >
              +5000 aprobados en 11 años
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
          >
            La <span className="text-primary">claridad</span> que necesitas para
            avanzar con tu <span className="text-primary">tesis</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            📌{" "}
            <span className="font-semibold">
              Mira este video hasta el final
            </span>{" "}
            y descubre los recursos que ofrecemos para ayudarte en tu tesis
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/GwmBj30rpds"
              title="¡SUPERA TU BLOQUEO DE TESIS!"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-lg mx-auto mt-12 space-y-8 text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleCheckout}
              size="lg"
              className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-amber-500/20"
            >
              ACCEDE A LA OFERTA AHORA
            </Button>
          </motion.div>

          <CountdownTimer />

          <p className="text-muted-foreground italic text-sm md:text-base px-4">
            No sabía por dónde empezar. Con la Biblia del Tesista avancé más en
            una semana que en tres meses. — Camila R.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
