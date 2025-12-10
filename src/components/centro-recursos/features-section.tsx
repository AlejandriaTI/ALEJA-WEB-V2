"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Lightbulb, Users, Zap } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Librería Virtual",
    description:
      "Acceso 24/7 a libros especializados, artículos científicos y guías prácticas en investigación",
  },
  {
    icon: Zap,
    title: "Herramientas Avanzadas",
    description:
      "Suite completa de software para citas automáticas, detección de plagio y análisis académico",
  },
  {
    icon: Users,
    title: "Comunidad Experta",
    description:
      "Conecta con investigadores, mentores y profesionales de diversas disciplinas",
  },
  {
    icon: Lightbulb,
    title: "Recursos Curados",
    description:
      "Contenido seleccionado por expertos para maximizar la calidad de tu investigación",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 md:py-20 bg-linear-to-br from-secondary/10 via-background to-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Por qué elegir nuestro centro?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ofrecemos todo lo que necesitas para llevar tu investigación
            académica al siguiente nivel
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-border/50 bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/60 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
