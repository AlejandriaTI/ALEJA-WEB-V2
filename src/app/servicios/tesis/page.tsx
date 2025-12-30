import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tesis - Alejandría Consultora",
  description: "Asesoría especializada en tesis para pregrado y postgrado. Transformamos tus ideas en resultados tangibles con investigación, estrategia y tecnología.",
};

"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BookOpen,
  Brain,
  Trophy,
  Users,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ThesisPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleWhatsApp = () => {
    const message =
      "Hola, vengo desde la página web de Alejandría Consultora quiero empezar con mi tesis.";
    const phoneNumber = "51989575820";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  useEffect(() => {
    // eslint-disable-next-line
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
            Impulsa tu tesis con nuestro
            <br />
            <span className="text-[#0CB2D5]">acompañamiento de excelencia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`mt-6 text-lg md:text-2xl font-light max-w-2xl mx-auto ${
              isLight ? "text-gray-700" : "text-white"
            }`}
          >
            Transformamos tus ideas en resultados tangibles. Investigación,
            estrategia y tecnología al servicio de tus metas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 flex justify-center gap-4"
          >
            <Button className="px-8 py-3 rounded-full font-semibold bg-[#0CB2D5] text-white shadow-md shadow-[#0CB2D5]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#0CB2D5]/50 hover:-translate-y-px active:translate-y-0"
            onClick={handleWhatsApp}>
              Comenzar ahora
            </Button>
            <Link href="/planes">
            <Button className="px-8 py-3 rounded-full font-medium border border-[#0CB2D5] text-[#0CB2D5] bg-transparent transition-all duration-300 hover:bg-[#0CB2D5]/10">
              Ver servicios
            </Button>
            </Link>
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
              ¡TE INVITAMOS A SUPERARTE!
            </h2>
            <h3
              className={`font-bold text-3xl md:text-4xl mb-6 ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              Nuestro servicio de asesoría en{" "}
              <span
                className={`italic font-extrabold text-transparent bg-clip-text bg-linear-to-r ${
                  isLight
                    ? "from-[#0CB2D5] to-blue-600"
                    : "from-[#0CB2D5] to-white"
                }`}
              >
                TESIS
              </span>{" "}
              está especialmente diseñado para que logres:
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
              { icon: Trophy, label: "Multiplicar tus ingresos" },
              { icon: Brain, label: "Reducir el estrés" },
              { icon: Users, label: "Reforzar tu autoridad" },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div key={i} variants={itemVariants}>
                  <Card className="p-6 text-center transition flex flex-col items-center h-48 md:h-44 justify-between">
                    {/* CONTENEDOR IGUALADO */}
                    <div className="w-20 h-20 flex items-center justify-center mb-4">
                      <Icon
                        strokeWidth={1.5} // ← NORMALIZA EL GROSOR
                        className={`w-12 h-12 scale-110
                        ${isLight ? "text-primary" : "text-[#0CB2D5]"}
                      `}
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
              Más que una Tesis:
            </p>
            <p
              className={`font-bold text-4xl md:text-5xl ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              Un nuevo comienzo
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
                  title: "Multiplica tus ingresos",
                  desc: " al obtener el título o grado que abrirá puertas a nuevas oportunidades profesionales.",
                },
                {
                  title: "Despidete del estrés",
                  desc: "dejando que nuestros expertos te acompañen paso a paso en cada parte de tu tesis.",
                },
                {
                  title: "Recupera tu tiempo",
                  desc: " y dedícalo a lo que realmente importa: tu trabajo, tu familia y tus sueños.",
                },
                {
                  title: "Impulsa tu marca personal",
                  desc: "plogra que tu nombre sea sinónimo de éxito, respeto y crecimiento profesional.",
                },
                {
                  title: "Libérate de la presión ",
                  desc: "demuestra que sí eres capaz de cerrar ciclos, cumplir objetivos y alcanzar lo que muchos solo postergan",
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
                    <BookOpen
                      className={`w-24 h-24 mx-auto mb-4 ${
                        isLight ? "text-primary" : "text-[#0CB2D5]"
                      }`}
                    />
                    <p
                      className={`font-bold text-lg ${
                        isLight ? "text-primary" : "text-[#0CB2D5]"
                      }`}
                    >
                      Tesis
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
              ¿Listo para llevar tu tesis al siguiente nivel?
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
              onClick={handleWhatsApp}
            >
              ¡Quiero empezar con mi tesis!
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
              De la mano contigo:
            </p>
            <p
              className={`font-bold text-3xl md:text-4xl ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              Tu asesor personal en cada etapa de tu{" "}
              <span className="uppercase font-extrabold">TESIS</span>
            </p>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Columna izquierda */}
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
                  title: "Evaluación y propuesta de tema",
                },
                {
                  num: "03",
                  title: "Acompañamiento constante",
                },
                {
                  num: "05",
                  title: "Control de calidad y entrega de reporte Turnitin",
                },
              ].map((item, i) => (
                <Card key={i} className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <p
                      className={`text-4xl font-bold ${
                        isLight ? "text-primary" : "text-[#0CB2D5]"
                      }`}
                    >
                      {item.num}
                    </p>
                  </div>

                  <h3
                    className={`font-bold text-sm uppercase tracking-wide ${
                      isLight ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <div
                    className={`h-[3px] w-24 mt-3 ${
                      isLight ? "bg-primary" : "bg-[#0CB2D5]"
                    }`}
                  />
                </Card>
              ))}
            </motion.div>

            {/* Columna derecha */}
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
                  title: "Elaboración del trabajo de investigación",
                },
                {
                  num: "04",
                  title: "Levantamiento de observaciones",
                },
                {
                  num: "06",
                  title: "Empoderamiento para la sustentación",
                },
              ].map((item, i) => (
                <Card key={i} className="p-6 md:mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <p
                      className={`text-4xl font-bold ${
                        isLight ? "text-primary" : "text-[#0CB2D5]"
                      }`}
                    >
                      {item.num}
                    </p>
                  </div>

                  <h3
                    className={`font-bold text-sm uppercase tracking-wide ${
                      isLight ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <div
                    className={`h-[3px] w-24 mt-3 ${
                      isLight ? "bg-primary" : "bg-[#0CB2D5]"
                    }`}
                  />
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
              Lo que dicen nuestros clientes:
            </p>
            <p
              className={`font-bold text-3xl md:text-4xl ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              Historias de éxito
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
                name: "María García",
                text: "Gracias a Alejandría logré culminar mi maestría con éxito. El equipo fue excepcional.",
              },
              {
                name: "Juan López",
                text: "La asesoría personalizada cambió completamente mi perspectiva sobre el proceso de tesis.",
              },
              {
                name: "Ana Martínez",
                text: "Profesionales de alto nivel que realmente se preocupan por tu éxito académico.",
              },
            ].map((testimonial, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card
                  className={`rounded-xl border p-6 shadow-xl transition-all group h-full`}
                >
                  {/* Text */}
                  <p
                    className={`leading-relaxed mb-6 transition-colors ${
                      isLight
                        ? "text-gray-700 group-hover:text-gray-900"
                        : "text-slate-300 group-hover:text-white"
                    }`}
                  >
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      {/* Avatar Placeholder */}
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

                      {/* Name + Username */}
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

                    {/* Stars */}
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
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
