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
    icon: Network,
    title: "Red de Contactos",
    description:
      "Conecta con investigadores de tu área y expande tu red profesional a nivel nacional e internacional",
  },
  {
    icon: Calendar,
    title: "Eventos Exclusivos",
    description:
      "Accede a webinars, talleres y conferencias diseñados para impulsar tu desarrollo profesional",
  },
  {
    icon: MessageSquare,
    title: "Foros de Discusión",
    description:
      "Participa en debates académicos, consulta dudas y comparte tus hallazgos con la comunidad",
  },
  {
    icon: Users,
    title: "Mentoría Personalizada",
    description:
      "Encuentra mentores experimentados o conviértete en guía para investigadores junior",
  },
  {
    icon: Award,
    title: "Proyectos Colaborativos",
    description:
      "Únete a investigaciones multidisciplinarias y amplía el impacto de tu trabajo académico",
  },
  {
    icon: Sparkles,
    title: "Oportunidades de Crecimiento",
    description:
      "Accede a convocatorias, becas y oportunidades de financiamiento compartidas por la comunidad",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 md:py-20 bg-linear-to-br from-secondary/10 via-background to-background">
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
