"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BookOpen,
  Brain,
  Trophy,
  Users,
  CheckCircle2,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThesisPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  const isLight = mounted && (theme === "light" || resolvedTheme === "light");

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
          <h1
            className={`text-4xl md:text-6xl font-extrabold drop-shadow-lg ${
              isLight ? "text-gray-900" : "text-white"
            }`}
          >
            Impulsa tus proyectos con
            <br />
            <span className="text-[#0CB2D5]">innovación y excelencia</span>
          </h1>

          <p
            className={`mt-6 text-lg md:text-2xl font-light max-w-2xl mx-auto ${
              isLight ? "text-gray-700" : "text-white"
            }`}
          >
            Transformamos tus ideas en resultados tangibles. Investigación,
            estrategia y tecnología al servicio de tus metas.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button
              className={`px-8 py-3 font-semibold rounded-xl shadow-lg transition bg-[#0CB2D5] hover:bg-[#0aa1c0] text-black shadow-[#0CB2D5]/20`}
            >
              Comenzar ahora
            </button>
            <button
              className={`px-8 py-3 border rounded-xl transition ${
                isLight
                  ? "border-gray-300 text-gray-700 hover:bg-gray-100"
                  : "border-white/10 text-white hover:bg-white/5"
              }`}
            >
              Ver servicios
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
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
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Trophy, label: "Multiplicar tus ingresos" },
              { icon: Brain, label: "Reducir el estrés" },
              { icon: Users, label: "Reforzar tu autoridad" },
            ].map((item, i) => (
              <Card key={i} className={`p-6 text-center transition `}>
                <item.icon
                  className={`w-12 h-12 mx-auto mb-4 ${
                    isLight ? "text-primary" : "text-[#0CB2D5]"
                  }`}
                />
                <p
                  className={`font-semibold text-sm italic ${
                    isLight ? "text-gray-900" : "text-white"
                  }`}
                >
                  {item.label}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-32">
          <h2 className="text-center mb-12">
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
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Multiplica tus ingresos",
                  desc: "al obtener un título o grado que te abrirá nuevas oportunidades.",
                },
                {
                  title: "Reduce el estrés",
                  desc: "dejando que nuestros expertos se encarguen de cada aspecto de tu tesis.",
                },
                {
                  title: "Libera tiempo valioso",
                  desc: "para enfocarte en lo que realmente importa.",
                },
                {
                  title: "Refuerza tu marca personal",
                  desc: "para que logres ser reconocido en tu área por tu equipo de trabajo.",
                },
                {
                  title: "Logra satisfacción personal",
                  desc: "al ver concretado tu plan de negocio, alcanzando un hito clave.",
                },
                {
                  title: "Elimina la presión social",
                  desc: "demostrando tu capacidad para culminar tus proyectos.",
                },
              ].map((item, i) => (
                <div
                  key={i}
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
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
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
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-20 md:mb-32 px-4">
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
              w-fit mx-auto transition-all
              ${
                isLight
                  ? "bg-amber-400 hover:bg-amber-500 text-gray-900"
                  : "bg-amber-400 hover:bg-amber-500 text-slate-900 shadow-[0_0_20px_rgba(251,191,36,0.2)]"
              }
            `}
          >
            ¡Quiero empezar con mi tesis!
          </Button>
        </div>

        {/* Process Section */}
        <div id="proceso" className="mb-32">
          <h2 className="text-center mb-16">
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
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-12">
              {[
                {
                  num: "01",
                  title: "Propuesta de temas",
                  desc: "Los temas son personalizados y acordes a tu problema de investigación.",
                },
                {
                  num: "03",
                  title: "Corrección ilimitada",
                  desc: "Revisión continua hasta cumplir con todas las observaciones.",
                },
                {
                  num: "05",
                  title: "Sesión personalizada",
                  desc: "Adaptada a tus necesidades para que comprendas cada detalle del proceso.",
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
                      <BookOpen
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
            </div>

            <div className="space-y-12">
              {[
                {
                  num: "02",
                  title: "Análisis inicial",
                  desc: "Evaluamos tu necesidad y diseñamos una estrategia personalizada.",
                },
                {
                  num: "04",
                  title: "Desarrollo académico",
                  desc: "Seguimiento paso a paso de tu investigación y redacción.",
                },
                {
                  num: "06",
                  title: "Publicación final",
                  desc: "Preparación completa para la presentación y defensa de tu tesis.",
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
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-center mb-12">
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
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
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
              <Card
                key={i}
                className={`rounded-xl border p-6 shadow-xl transition-all group`}
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
          </div>
        </div>
      </section>
    </div>
  );
}
