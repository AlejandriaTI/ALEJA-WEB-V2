"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  CalendarDays,
  CalendarRange,
  Medal,
  Award,
  Trophy,
  Lightbulb,
  FileText,
  RefreshCw,
  Shield,
  Users,
  MessageSquare,
  BookOpen,
  Presentation,
  HelpCircle,
  Video,
  Library,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type PlanKey = "start" | "power" | "max";

const plans: Array<{
  name: string;
  key: PlanKey;
  icon: React.ComponentType<{ className?: string }>;
  priceOld: string;
  price: string;
  cuotas: string;
  ahorro: string;
  popular?: boolean;
  features: Array<{
    text: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
}> = [
  {
    name: "Bronce",
    key: "start",
    icon: Medal,
    priceOld: "S/ 3,290",
    price: "S/ 3,290",
    cuotas: "Págalo hasta en 2 cuotas",
    ahorro: "S/329",
    features: [
      { text: "Propuesta de temas", icon: Lightbulb },
      { text: "Elaboración integral", icon: FileText },
      { text: "Corrección de observaciones ilimitadas", icon: RefreshCw },
      { text: "Reporte de originalidad con Turnitin", icon: Shield },
      { text: "Sesión de inducción personalizada", icon: Users },
      { text: "Creación de un grupo WhatsApp", icon: MessageSquare },
      {
        text: "Levantamiento de observaciones solo del docente asignado",
        icon: HelpCircle,
      },
      { text: "Ebook digital 'La biblia del tesista'", icon: BookOpen },
    ],
  },
  {
    name: "Plata",
    key: "power",
    icon: Award,
    priceOld: "S/ 3,950",
    price: "S/ 3,590",
    cuotas: "Págalo hasta en 2 cuotas",
    ahorro: "S/359",
    features: [
      { text: "Propuesta de temas", icon: Lightbulb },
      { text: "Elaboración integral", icon: FileText },
      { text: "Corrección de observaciones ilimitadas", icon: RefreshCw },
      { text: "Reporte de originalidad con Turnitin", icon: Shield },
      { text: "Sesión de inducción personalizada", icon: Users },
      { text: "Creación de un grupo WhatsApp", icon: MessageSquare },
      {
        text: "Levantamiento de observaciones del docente asignado",
        icon: HelpCircle,
      },
      { text: "Presentación en PowerPoint", icon: Presentation },
      { text: "Balotario con preguntas clave", icon: HelpCircle },
      { text: "Simulacro de sustentación", icon: Video },
      { text: "Ebook digital 'La biblia del tesista'", icon: BookOpen },
      { text: "Acceso a biblioteca digital", icon: Library },
    ],
  },
  {
    name: "Oro",
    key: "max",
    icon: Trophy,
    priceOld: "S/ 5,490",
    price: "S/ 4,190",
    cuotas: "Págalo hasta en 2 cuotas",
    ahorro: "S/419",
    popular: true,
    features: [
      { text: "Propuesta de temas", icon: Lightbulb },
      { text: "Elaboración integral", icon: FileText },
      { text: "Corrección de observaciones ilimitadas", icon: RefreshCw },
      { text: "Reporte de originalidad con Turnitin", icon: Shield },
      { text: "Sesión de inducción personalizada", icon: Users },
      { text: "Creación de un grupo WhatsApp", icon: MessageSquare },
      { text: "Levantamiento de observaciones del jurado", icon: HelpCircle },
      { text: "Presentación en PowerPoint", icon: Presentation },
      { text: "Balotario con preguntas clave", icon: HelpCircle },
      { text: "Simulacro de sustentación", icon: Video },
      { text: "Ebook digital 'La biblia del tesista'", icon: BookOpen },
      { text: "Acceso a biblioteca digital", icon: Library },
    ],
  },
];

export default function Promociones() {
  const [billingPeriod, setBillingPeriod] = useState<
    "monthly" | "annual" | "biennial"
  >("monthly");

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* BOTONES DE PERIODO */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-2 mb-8">
            <Button
              variant={billingPeriod === "monthly" ? "default" : "outline"}
              onClick={() => setBillingPeriod("monthly")}
              className="transition-all duration-200 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Mensual
            </Button>

            <Button
              variant={billingPeriod === "annual" ? "default" : "outline"}
              onClick={() => setBillingPeriod("annual")}
              className="transition-all duration-200 flex items-center gap-2"
            >
              <CalendarDays className="w-4 h-4" />
              Anual
            </Button>

            <Button
              variant={billingPeriod === "biennial" ? "default" : "outline"}
              onClick={() => setBillingPeriod("biennial")}
              className="transition-all duration-200 flex items-center gap-2"
            >
              <CalendarRange className="w-4 h-4" />
              Bienal
            </Button>
          </div>
        </div>

        {/* PLANES */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatePresence mode="wait" key={plan.name}>
              <motion.div
                key={`${plan.name}-${billingPeriod}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: plan.popular ? 1.05 : 1,
                }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
              >
                <Card className="relative border-border bg-card">
                  {plan.popular && (
                    <motion.div
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        Más Popular
                      </Badge>
                    </motion.div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <motion.div
                      className="flex justify-center mb-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <plan.icon className="w-8 h-8 text-primary" />
                      </div>
                    </motion.div>
                    <motion.h3
                      className="text-xl font-semibold text-foreground mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {plan.name}
                    </motion.h3>

                    {/* PRECIO */}
                    <motion.div
                      key={billingPeriod}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center"
                    >
                      <div className="flex items-baseline justify-center">
                        <span className="text-3xl font-bold text-primary">
                          $12.99
                        </span>
                        <span className="text-muted-foreground ml-1">/mes</span>
                      </div>

                      {billingPeriod !== "monthly" &&
                        "Pagalo hasta 2 cuotas" && (
                          <Badge variant="secondary" className="mt-2 text-xs">
                            {"Pagalo hasta 2 cuotas"}
                          </Badge>
                        )}
                    </motion.div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* FEATURES */}
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: i * 0.05 + 0.2,
                            }}
                            className="flex items-start gap-3"
                          >
                            <FeatureIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                            <span className="text-sm">{feature.text}</span>
                          </motion.li>
                        );
                      })}
                    </ul>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                        Agregar al carrito →
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="link" className="text-primary">
            Ver más detalles de hosting
          </Button>
        </div>
      </div>
    </section>
  );
}
