"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Brain,
    title: "Tranquilidad mental",
    description: "Vas a entender lo que tienes que hacer",
  },
  {
    icon: Target,
    title: "Confianza académica",
    description: "Sabrás cómo plantear bien tu tema y objetivos",
  },
  {
    icon: Rocket,
    title: "Sensación de avance",
    description: "Dejas de procrastinar y comienzas a avanzar en serio",
  },
];

export function BenefitsSection() {
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
          className="text-2xl md:text-4xl font-bold text-center mb-12 text-balance"
        >
          ¿Qué ganas con este libro digital?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button
            onClick={handleCheckout}
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            LO QUIERO AHORA
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
