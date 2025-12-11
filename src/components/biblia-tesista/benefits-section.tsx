"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Rocket } from "lucide-react";

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
    <section className=" py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-balance">
          ¿Qué ganas con este libro digital?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handleCheckout}
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-12 py-6 rounded-full"
          >
            LO QUIERO AHORA
          </Button>
        </div>
      </div>
    </section>
  );
}
