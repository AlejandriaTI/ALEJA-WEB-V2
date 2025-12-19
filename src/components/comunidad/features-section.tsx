"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  Calendar,
  MessageSquare,
  Award,
  Network,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Users,
    title: "Acompañamiento colaborativo",
    description:
      "Comparte tus avances y recibe retroalimentación de expertos y compañeros que ya pasaron por el mismo proceso.",
  },
  {
    icon: Calendar,
    title: "Mentorías y talleres en vivo",
    description:
      "Domina la metodología de investigación, la estadística y la redacción académica con sesiones prácticas.",
  },
  {
    icon: Network,
    title: "Networking profesional",
    description:
      "Conecta con profesionales de diversas áreas, forma alianzas estratégicas y potencia tu marca personal.",
  },
  {
    icon: MessageSquare,
    title: "Recursos exclusivos",
    description:
      "Clases grabadas por módulos, plantillas, modelos de tesis y simulacros de sustentación para acelerar tu progreso.",
  },
  {
    icon: Award,
    title: "Preparación para la sustentación",
    description:
      "Adquiere la seguridad necesaria para sustentar con éxito, acompañado por asesores certificados.",
  },
  {
    icon: Sparkles,
    title: "Comunidad motivacional",
    description:
      "Aquí nadie se rinde: compartimos logros, frustraciones y soluciones reales para mantenerte enfocado hasta la meta.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="beneficios" className="py-12 md:py-20 bg-linear-to-br from-secondary/10 via-background to-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Qué ofrece nuestra comunidad?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Un ecosistema completo diseñado para potenciar tu crecimiento
            académico y profesional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="border-border/50 bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-300">
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
                </Card>{" "}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
