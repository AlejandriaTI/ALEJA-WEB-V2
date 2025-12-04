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

export default function ThesisPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-[550px] w-full flex items-center justify-center overflow-hidden">
        {/* Fondo con efecto blur + luces */}
        <div className="absolute inset-0">
          <div className="absolute -top-10 left-1/2 w-[600px] h-[600px] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full blur-3xl"></div>
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Impulsa tus proyectos con
            <br />
            <span className="text-cyan-400">innovación y excelencia</span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
            Transformamos tus ideas en resultados tangibles. Investigación,
            estrategia y tecnología al servicio de tus metas.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl shadow-lg transition">
              Comenzar ahora
            </button>
            <button className="px-8 py-3 border border-white/30 text-white hover:bg-white/10 rounded-xl transition">
              Ver servicios
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <h2 className="text-cyan-400 font-semibold text-lg mb-4">
              ¡TE INVITAMOS A SUPERARTE!
            </h2>
            <h3 className="text-white font-bold text-3xl md:text-4xl mb-6">
              Nuestro servicio de asesoría en{" "}
              <span className="italic font-extrabold">TESIS</span> está
              especialmente diseñado para que logres:
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Trophy, label: "Multiplicar tus ingresos" },
              { icon: Brain, label: "Reducir el estrés" },
              { icon: Users, label: "Reforzar tu autoridad" },
            ].map((item, i) => (
              <Card
                key={i}
                className="bg-linear-to-br from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 p-6 text-center hover:border-cyan-400/50 transition"
              >
                <item.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <p className="text-white font-semibold text-sm italic">
                  {item.label}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-32">
          <h2 className="text-center mb-12">
            <p className="text-cyan-400 font-semibold text-lg uppercase mb-2">
              Más que una Tesis:
            </p>
            <p className="text-white font-bold text-4xl md:text-5xl">
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
                  className="flex gap-4 pb-4 border-b border-slate-700"
                >
                  <div className="w-1 bg-cyan-400 shrink-0"></div>
                  <div>
                    <p className="text-white font-extrabold text-sm md:text-base">
                      {item.title}
                    </p>
                    <p className="text-slate-400 text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
                <div className="relative w-full h-full rounded-full bg-linear-to-br from-cyan-400/30 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                    <p className="text-cyan-400 font-bold text-lg">Tesis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-32">
          <h3 className="text-white font-extrabold text-3xl md:text-4xl mb-8 italic">
            ¿Listo para llevar tu tesis al siguiente nivel?
          </h3>
          <Button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-extrabold text-lg px-12 py-6 rounded-full italic uppercase h-auto">
            ¡Quiero empezar con mi tesis!
          </Button>
        </div>

        {/* Process Section */}
        <div id="proceso" className="mb-32">
          <h2 className="text-center mb-16">
            <p className="text-cyan-400 italic font-semibold text-lg uppercase mb-2">
              De la mano contigo:
            </p>
            <p className="text-white font-bold text-3xl md:text-4xl">
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
                <Card
                  key={i}
                  className="bg-slate-800/50 border-slate-700 p-6 hover:border-cyan-400/50 transition"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-white/10 border border-cyan-400/30 flex items-center justify-center shrink-0">
                      <BookOpen className="w-8 h-8 text-cyan-400" />
                    </div>
                    <p className="text-4xl font-bold text-cyan-400 opacity-50">
                      {item.num}
                    </p>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400">{item.desc}</p>
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
                <Card
                  key={i}
                  className="bg-slate-800/50 border-slate-700 p-6 hover:border-cyan-400/50 transition md:mt-24"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <p className="text-4xl font-bold text-cyan-400 opacity-50">
                      {item.num}
                    </p>
                    <div className="w-16 h-16 rounded-full bg-white/10 border border-cyan-400/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-center mb-12">
            <p className="text-cyan-400 font-semibold text-lg uppercase mb-2">
              Lo que dicen nuestros clientes:
            </p>
            <p className="text-white font-bold text-3xl md:text-4xl">
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
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-xl hover:bg-white/10 transition-all group"
              >
                {/* Text */}
                <p className="text-slate-300 leading-relaxed mb-6 group-hover:text-white transition-colors">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    {/* Avatar Placeholder */}
                    <div className="w-12 h-12 rounded-full bg-[#0CB2D5]/20 flex items-center justify-center border border-[#0CB2D5]/30">
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
                      <p className="font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[#0CB2D5]">
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
