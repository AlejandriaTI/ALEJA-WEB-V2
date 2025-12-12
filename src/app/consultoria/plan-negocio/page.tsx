"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Rocket,
  TrendingUp,
  Target,
  PieChart,
  DollarSign,
  CheckCircle2,
  Star,
  Presentation,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useHasMounted } from "@/hooks/use-has-mounted";

export default function BusinessPlanPage() {
  const { theme, resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();

  const currentTheme = hasMounted
    ? theme === "system"
      ? resolvedTheme
      : theme
    : undefined;
  const isLight = currentTheme === "light";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[550px] w-full flex items-center justify-center overflow-hidden">
        {/* Fondo con efecto blur + luces */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute -top-10 left-1/2 w-[600px] h-[600px] rounded-full blur-3xl `}
          ></div>
          <div
            className={`absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full blur-3xl `}
          ></div>
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-6xl font-extrabold drop-shadow-lg ${
              isLight ? "text-gray-900" : "text-white"
            }`}
          >
            De una simple idea a un
            <br />
            <span className="text-[#0CB2D5]">negocio rentable</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`mt-6 text-lg md:text-2xl font-light max-w-2xl mx-auto ${
              isLight ? "text-gray-700" : "text-white"
            }`}
          >
            Desarrollamos Planes de Negocio estratégicos para titulación,
            búsqueda de inversionistas y lanzamiento de emprendimientos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 flex justify-center gap-4"
          >
            <Button className="px-8 py-3 rounded-full font-semibold bg-[#0CB2D5] text-white shadow-md shadow-[#0CB2D5]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#0CB2D5]/50 hover:-translate-y-px active:translate-y-0">
              Quiero emprender
            </Button>

            <Button className="px-8 py-3 rounded-full font-medium border border-[#0CB2D5] text-[#0CB2D5] bg-transparent transition-all duration-300 hover:bg-[#0CB2D5]/10">
              Ver beneficios
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`font-semibold text-lg mb-4 ${
                isLight ? "text-primary" : "text-[#0CB2D5]"
              }`}
            >
              ¡CIMIENTOS SÓLIDOS!
            </h2>
            <h3
              className={`font-bold text-3xl md:text-4xl mb-6 ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              Nuestro{" "}
              <span
                className={`italic font-extrabold text-transparent bg-clip-text bg-linear-to-r ${
                  isLight
                    ? "from-[#0CB2D5] to-blue-600"
                    : "from-[#0CB2D5] to-white"
                }`}
              >
                Plan de Negocio
              </span>{" "}
              te da la seguridad financiera y operativa que necesitas:
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4"
          >
            {[
              { icon: Target, label: "Reducción de Riesgo" },
              { icon: DollarSign, label: "Financiamiento" },
              { icon: Rocket, label: "Escalabilidad" },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div key={i} variants={itemVariants}>
                  <Card className="p-6 text-center transition flex flex-col items-center h-48 md:h-44 justify-between">
                    <div className="w-20 h-20 flex items-center justify-center mb-4">
                      <Icon
                        strokeWidth={1.5}
                        className={`w-12 h-12 scale-110 ${
                          isLight ? "text-primary" : "text-[#0CB2D5]"
                        }`}
                      />
                    </div>

                    <p
                      className={`font-semibold text-sm italic ${
                        isLight ? "text-gray-900" : "text-white"
                      }`}
                    >
                      {item.label}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p
              className={`font-semibold text-lg uppercase mb-2 ${
                isLight ? "text-primary" : "text-[#0CB2D5]"
              }`}
            >
              ¿Por qué un Plan de Negocio?
            </p>
            <p
              className={`font-bold text-4xl md:text-5xl ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              Estrategia ganadora
            </p>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  title: "Hoja de Ruta Clara",
                  desc: "Define exactamente qué hacer los primeros 3 años de tu empresa.",
                },
                {
                  title: "Atracción de Inversionistas",
                  desc: "Documento indispensable para solicitar préstamos o capital semilla.",
                },
                {
                  title: "Proyecciones Realistas",
                  desc: "Validamos financieramente si tu idea dejará ganancias reales.",
                },
                {
                  title: "Estrategia Comercial",
                  desc: "Diseñamos cómo venderás tu producto o servicio al mercado.",
                },
                {
                  title: "Detección de Fallas",
                  desc: "Identificamos debilidades antes de que inviertas tu dinero.",
                },
                {
                  title: "Titulación por Emprendimiento",
                  desc: "Sustenta tu tesis bajo la modalidad de Planes de Negocio.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className={`flex gap-4 pb-4 border-b ${
                    isLight ? "border-gray-200" : "border-[#2A2A4A]"
                  }`}
                >
                  <div
                    className={`w-1 shrink-0 ${
                      isLight ? "bg-primary" : "bg-[#0CB2D5]"
                    }`}
                  ></div>
                  <div>
                    <p
                      className={`font-extrabold text-sm md:text-base ${
                        isLight ? "text-gray-900" : "text-white"
                      }`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`text-sm md:text-base ${
                        isLight ? "text-gray-600" : "text-slate-400"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div
                  className={`absolute inset-0 rounded-full blur-3xl ${
                    isLight ? "bg-primary/20" : "bg-[#0CB2D5]/10 animate-pulse"
                  }`}
                ></div>
                <div
                  className={`relative w-full h-full rounded-full flex items-center justify-center border`}
                >
                  <div className="text-center">
                    <TrendingUp
                      className={`w-24 h-24 mx-auto mb-4 ${
                        isLight ? "text-primary" : "text-[#0CB2D5]"
                      }`}
                    />
                    <p
                      className={`font-bold text-lg ${
                        isLight ? "text-primary" : "text-[#0CB2D5]"
                      }`}
                    >
                      Business Plan
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-20 md:mb-32 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3
              className={`font-extrabold italic mb-6
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              leading-tight 
              ${isLight ? "text-gray-900" : "text-white"}
            `}
            >
              ¿Listo para lanzar tu empresa?
            </h3>

            <Button
              className={`
                font-extrabold italic uppercase rounded-full h-auto
                px-8 py-4 sm:px-12 sm:py-5 text-base sm:text-lg md:text-xl
                w-fit mx-auto transition-all hover:scale-105 active:scale-95
                ${
                  isLight
                    ? "bg-amber-400 hover:bg-amber-500 text-gray-900"
                    : "bg-amber-400 hover:bg-amber-500 text-slate-900 shadow-[0_0_20px_rgba(251,191,36,0.2)]"
                }
              `}
            >
              ¡Crear mi Plan de Negocio!
            </Button>
          </motion.div>
        </div>

        {/* Process Section */}
        <div id="proceso" className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p
              className={`italic font-semibold text-lg uppercase mb-2 ${
                isLight ? "text-primary" : "text-[#0CB2D5]"
              }`}
            >
              Metodología de éxito:
            </p>
            <p
              className={`font-bold text-3xl md:text-4xl ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              Creamos empresas{" "}
              <span className="uppercase font-extrabold">SOSTENIBLES</span>
            </p>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {[
                {
                  num: "01",
                  title: "Definición del Modelo",
                  desc: "Utilizamos Business Model Canvas para estructurar tu propuesta de valor.",
                },
                {
                  num: "03",
                  title: "Plan de Marketing",
                  desc: "Estrategias 4P: Producto, Precio, Plaza y Promoción.",
                },
                {
                  num: "05",
                  title: "Evaluación Económica",
                  desc: "Cálculo de VAN, TIR y Punto de Equilibrio.",
                },
              ].map((item, i) => (
                <Card key={i} className={`p-6 transition `}>
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 border ${
                        isLight
                          ? "bg-primary/10 border-primary/20"
                          : "bg-[#0CB2D5]/10 border-[#0CB2D5]/20 group-hover:bg-[#0CB2D5]/20 transition-colors"
                      }`}
                    >
                      <PieChart
                        className={`w-8 h-8 ${
                          isLight ? "text-primary" : "text-[#0CB2D5]"
                        }`}
                      />
                    </div>
                    <p
                      className={`text-4xl font-bold opacity-50 ${
                        isLight ? "text-primary" : "text-[#0CB2D5]"
                      }`}
                    >
                      {item.num}
                    </p>
                  </div>
                  <h3
                    className={`font-bold text-xl mb-2 ${
                      isLight ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className={isLight ? "text-gray-600" : "text-slate-400"}>
                    {item.desc}
                  </p>
                </Card>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {[
                {
                  num: "02",
                  title: "Estudio de Mercado",
                  desc: "Análisis de demanda, competencia y público objetivo.",
                },
                {
                  num: "04",
                  title: "Plan Financiero",
                  desc: "Proyección de ingresos, costos y flujos de caja a 3-5 años.",
                },
                {
                  num: "06",
                  title: "Pitch Deck",
                  desc: "Presentación ejecutiva de alto impacto para inversores.",
                },
              ].map((item, i) => (
                <Card key={i} className={`p-6 transition md:mt-24`}>
                  <div className="flex items-start gap-4 mb-4">
                    <p
                      className={`text-4xl font-bold opacity-50 ${
                        isLight ? "text-primary" : "text-[#0CB2D5]"
                      }`}
                    >
                      {item.num}
                    </p>
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 border ${
                        isLight
                          ? "bg-primary/10 border-primary/20"
                          : "bg-[#0CB2D5]/10 border-[#0CB2D5]/20 group-hover:bg-[#0CB2D5]/20 transition-colors"
                      }`}
                    >
                      <Presentation
                        className={`w-8 h-8 ${
                          isLight ? "text-primary" : "text-[#0CB2D5]"
                        }`}
                      />
                    </div>
                  </div>
                  <h3
                    className={`font-bold text-xl mb-2 ${
                      isLight ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className={isLight ? "text-gray-600" : "text-slate-400"}>
                    {item.desc}
                  </p>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p
              className={`font-semibold text-lg uppercase mb-2 ${
                isLight ? "text-primary" : "text-[#0CB2D5]"
              }`}
            >
              Emprendedores en acción:
            </p>
            <p
              className={`font-bold text-3xl md:text-4xl ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              Negocios hechos realidad
            </p>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                name: "Karla Gómez",
                text: "Alejandría me ayudó a estructurar la parte financiera. Sin eso, no habría conseguido mi préstamo.",
              },
              {
                name: "Miguel Angel",
                text: "Mi tesis de plan de negocio fue aprobada con felicitación pública gracias a su asesoría.",
              },
              {
                name: "Sofia Torres",
                text: "Tener un mapa claro de mis costos y proyecciones me dio la confianza para renunciar y emprender.",
              },
            ].map((testimonial, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card
                  className={`rounded-xl border p-6 shadow-xl transition-all group h-full`}
                >
                  <p
                    className={`leading-relaxed mb-6 transition-colors ${
                      isLight
                        ? "text-gray-700 group-hover:text-gray-900"
                        : "text-slate-300 group-hover:text-white"
                    }`}
                  >
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                          isLight
                            ? "bg-primary/10 border-primary/20"
                            : "bg-[#0CB2D5]/20 border-[#0CB2D5]/30"
                        }`}
                      >
                        <Image
                          src={`https://api.dicebear.com/7.x/notionists/svg?seed=${testimonial.name}`}
                          alt={testimonial.name + "avatar"}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p
                          className={`font-semibold ${
                            isLight ? "text-gray-900" : "text-white"
                          }`}
                        >
                          {testimonial.name}
                        </p>
                        <p
                          className={`text-sm ${
                            isLight ? "text-primary" : "text-[#0CB2D5]"
                          }`}
                        >
                          @{testimonial.name.replace(/\s+/g, "")}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
