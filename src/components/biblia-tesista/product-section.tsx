"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const chapters = [
  "Cap. I: Términos Básicos",
  "Cap. II: Estructura de la Tesis",
  "Cap. III: Problema de Investigación",
  "Cap. IV: Título para una Investigación",
  "Cap. V: Matrices de Consistencia y Operacionalización",
  "Cap. VI: Redacción de la Introducción",
  "Cap. VII: Planteamiento del problema",
  "Cap. VIII: Marco Teórico",
  "Cap. IX: Recopilación de Información",
  "Cap. X: Metodología",
  "Cap. XI: Aspecto Administrativo",
  "Cap. XII: Resultados",
  "Cap. XIII: Prueba Estadística",
  "Cap. XIV: Discusión, Conclusión y Recomendación",
  "Cap. XV: Tipos de Matrices según Diseño",
  "Cap. XVI: Tips para realizar el Parafraseo",
];

export function ProductSection() {
  const handleCheckout = () => {
    window.open(
      "https://pay.hotmart.com/C101263888O?checkoutMode=10",
      "_blank"
    );
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-foreground text-center mb-12"
        >
          Te damos las herramientas para dejar el caos atrás y avanzar con
          seguridad
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <Image
                src="/images/biblia-tesista/tesisimg.png"
                alt="La Biblia del Tesista - Libro digital"
                width={400}
                height={500}
                className="drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                La Biblia del Tesista
              </h3>
              <p className="text-xl text-muted-foreground mt-2">
                Un <span className="text-primary">faro</span> para tu camino
                académico
              </p>
            </div>

            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>
                  Explicación simple de todos los capítulos de la tesis
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>
                  Plantillas editables, ejemplos reales y ejercicios prácticos
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>
                  Estrategias para elegir el tema, redactar sin bloqueo y
                  organizar tus ideas
                </span>
              </li>
            </ul>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleCheckout}
                size="lg"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg rounded-full py-6 shadow-lg hover:shadow-amber-500/25"
              >
                COMPRAR AHORA
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="max-w-4xl mx-auto mt-16 bg-card border-border shadow-lg">
            <CardContent className="p-8">
              <h4 className="text-primary font-semibold mb-6 text-lg">
                Incluye:
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {chapters.map((chapter, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-muted-foreground/60 shrink-0" />
                    <span className="text-sm">{chapter}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
