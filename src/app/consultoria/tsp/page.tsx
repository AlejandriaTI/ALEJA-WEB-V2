"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Briefcase,
  Clock,
  Award,
  TrendingUp,
  FileText,
  CheckCircle2,
  Star,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TSPPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && (theme === "light" || resolvedTheme === "light");

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
            Tu experiencia laboral es
            <br />
            <span className="text-[#0CB2D5]">tu mejor título</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`mt-6 text-lg md:text-2xl font-light max-w-2xl mx-auto ${
              isLight ? "text-gray-700" : "text-white"
            }`}
          >
            Convierte tus años de trabajo en tu Título Profesional con el
            Trabajo de Suficiencia Profesional (TSP).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 flex justify-center gap-4"
          >
            <Button className="px-8 py-3 rounded-full font-semibold bg-[#0CB2D5] text-white shadow-md shadow-[#0CB2D5]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#0CB2D5]/50 hover:-translate-y-px active:translate-y-0">
              Quiero titularme ya
            </Button>

            <Button className="px-8 py-3 rounded-full font-medium border border-[#0CB2D5] text-[#0CB2D5] bg-transparent transition-all duration-300 hover:bg-[#0CB2D5]/10">
              Saber más
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
              ¡VALIDA TU ESFUERZO!
            </h2>
            <h3
              className={`font-bold text-3xl md:text-4xl mb-6 ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              El{" "}
              <span
                className={`italic font-extrabold text-transparent bg-clip-text bg-linear-to-r ${
                  isLight
                    ? "from-[#0CB2D5] to-blue-600"
                    : "from-[#0CB2D5] to-white"
                }`}
              >
                TSP
              </span>{" "}
              es la vía más rápida y práctica si ya trabajas en tu rubro:
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
              { icon: Zap, label: "Titulación Rápida" },
              { icon: Briefcase, label: "Enfoque Práctico" },
              { icon: Award, label: "Reconocimiento Laboral" },
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
              Beneficios del TSP:
            </p>
            <p
              className={`font-bold text-4xl md:text-5xl ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              Tu trayectoria cuenta
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
                  title: "Menor Carga Académica",
                  desc: "Enfócate en tu experiencia práctica más que en teorías complejas.",
                },
                {
                  title: "Ahorro de Tiempo",
                  desc: "Un proceso mucho más ágil que una tesis tradicional de investigación.",
                },
                {
                  title: "Ascenso Laboral",
                  desc: "Obtén el título que necesitas para subir de puesto en tu empresa.",
                },
                {
                  title: "Valorización de Experiencia",
                  desc: "Tus años trabajados son la base fundamental de tu trabajo.",
                },
                {
                  title: "Sistematización Profesional",
                  desc: "Ordena y documenta tus logros profesionales de manera académica.",
                },
                {
                  title: "Cierre de Ciclo",
                  desc: "Finaliza tu etapa universitaria y conviértete en colega.",
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
                    <Briefcase
                      className={`w-24 h-24 mx-auto mb-4 ${
                        isLight ? "text-primary" : "text-[#0CB2D5]"
                      }`}
                    />
                    <p
                      className={`font-bold text-lg ${
                        isLight ? "text-primary" : "text-[#0CB2D5]"
                      }`}
                    >
                      TSP
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
              ¿Tienes la experiencia pero falta el título?
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
              ¡Comenzar mi TSP ahora!
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
              Paso a paso:
            </p>
            <p
              className={`font-bold text-3xl md:text-4xl ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              Cómo logramos tu{" "}
              <span className="uppercase font-extrabold">TSP</span>
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
                  title: "Diagnóstico Laboral",
                  desc: "Analizamos tu trayectoria para elegir la experiencia más relevante.",
                },
                {
                  num: "03",
                  title: "Sistematización",
                  desc: "Ordenamos tu experiencia bajo el formato académico requerido.",
                },
                {
                  num: "05",
                  title: "Ensayo de Sustentación",
                  desc: "Te preparamos con simulacros para que defiendas tu experiencia.",
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
                      <Briefcase
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
                  title: "Selección del Tema",
                  desc: "Definimos el proyecto o función clave que fundamentará tu TSP.",
                },
                {
                  num: "04",
                  title: "Fundamentación Teórica",
                  desc: "Conectamos tu práctica con la teoría existente para darle rigor.",
                },
                {
                  num: "06",
                  title: "Título Profesional",
                  desc: "Estás listo para recibir el título que mereces.",
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
                      <CheckCircle2
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
              Historias reales:
            </p>
            <p
              className={`font-bold text-3xl md:text-4xl ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              Profesionales titulados
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
                name: "Carlos Mendez",
                text: "Tenía 5 años trabajando pero me faltaba el título. Con el TSP de Alejandría lo logré en 4 meses.",
              },
              {
                name: "Lucía Vargas",
                text: "Sistematizaron mi experiencia de una forma increíble. Ahora soy Jefa gracias a mi título.",
              },
              {
                name: "Roberto Campos",
                text: "El proceso fue ágil y muy enfocado en lo que yo realmente sabía hacer en mi trabajo.",
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
