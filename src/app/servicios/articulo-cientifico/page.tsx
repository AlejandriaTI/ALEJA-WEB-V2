"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  FileText,
  Globe,
  Award,
  BookOpen,
  Search,
  Star,
  PenTool,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useHasMounted } from "@/hooks/use-has-mounted";

export default function ScientificArticlePage() {
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
            Publica, impacta y
            <br />
            <span className="text-[#0CB2D5]">trasciende globalmente</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`mt-6 text-lg md:text-2xl font-light max-w-2xl mx-auto ${
              isLight ? "text-gray-700" : "text-white"
            }`}
          >
            Asesoría especializada para la adaptación de Artículos Científicos
            en revistas indexadas (Scopus, WoS, Scielo o otros).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 flex justify-center gap-4"
          >
            <Button className="px-8 py-3 rounded-full font-semibold bg-[#0CB2D5] text-white shadow-md shadow-[#0CB2D5]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#0CB2D5]/50 hover:-translate-y-px active:translate-y-0">
              Quiero publicar hoy
            </Button>

            <Button className="px-8 py-3 rounded-full font-medium border border-[#0CB2D5] text-[#0CB2D5] bg-transparent transition-all duration-300 hover:bg-[#0CB2D5]/10">
              Ver revistas
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
              ¡ELEVA TU PERFIL ACADÉMICO!
            </h2>
            <h3
              className={`font-bold text-3xl md:text-4xl mb-6 ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              Un{" "}
              <span
                className={`italic font-extrabold text-transparent bg-clip-text bg-linear-to-r ${
                  isLight
                    ? "from-[#0CB2D5] to-blue-600"
                    : "from-[#0CB2D5] to-white"
                }`}
              >
                Artículo Científico
              </span>{" "}
              te posiciona como experto en tu campo:
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
              { icon: Globe, label: "Visibilidad Global" },
              { icon: Award, label: "Prestigio Total" },
              { icon: BookOpen, label: "Aporte Ciencia" },
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
              Ventajas de Publicar:
            </p>
            <p
              className={`font-bold text-4xl md:text-5xl ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              Ciencia con impacto
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
                  title: "Requisito Académico",
                  desc: "Fundamental para graduación de maestrías y doctorados.",
                },
                {
                  title: "Puntaje Renacyt / Concytec",
                  desc: "Acumula puntos para ser reconocido como investigador calificado.",
                },
                {
                  title: "Becas y Financiamiento",
                  desc: "Mejora drásticamente tu perfil para postular a fondos internacionales.",
                },
                {
                  title: "Networking Académico",
                  desc: "Conecta con otros investigadores y redes de tu especialidad.",
                },
                {
                  title: "Legado Profesional",
                  desc: "Tu nombre quedará citado en bases de datos de por vida.",
                },
                {
                  title: "Rigurosidad Metodológica",
                  desc: "Garantizamos un estándar que pasa las revisiones por pares.",
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
                    <FileText
                      className={`w-24 h-24 mx-auto mb-4 ${
                        isLight ? "text-primary" : "text-[#0CB2D5]"
                      }`}
                    />
                    <p
                      className={`font-bold text-lg ${
                        isLight ? "text-primary" : "text-[#0CB2D5]"
                      }`}
                    >
                      Paper
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
              ¿Quieres ver tu nombre en Scopus?
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
              ¡Iniciar mi Artículo Científico!
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
              Ruta de publicación:
            </p>
            <p
              className={`font-bold text-3xl md:text-4xl ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              Tu camino hacia el{" "}
              <span className="uppercase font-extrabold">ÉXITO ACADÉMICO</span>
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
                  title: "Recepción de documentos",
                  desc: "Recepcionamos tu tesis o artículo y el nombre de la revista seleccionada.",
                },
                {
                  num: "03",
                  title: "Entrega del trabajo adaptado",
                  desc: "Entregamos el documento final y levantamos observaciones para futuras mejoras.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-6 transition">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 border ${
                        isLight
                          ? "bg-primary/10 border-primary/20"
                          : "bg-[#0CB2D5]/10 border-[#0CB2D5]/20"
                      }`}
                    >
                      <FileText
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
                  title: "Adaptación del documento",
                  desc: "Adaptamos el contenido según la guía editorial de la revista elegida por el cliente.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-6 transition md:mt-24">
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
                          : "bg-[#0CB2D5]/10 border-[#0CB2D5]/20"
                      }`}
                    >
                      <PenTool
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
              Investigadores que confiaron:
            </p>
            <p
              className={`font-bold text-3xl md:text-4xl ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              Publicaciones exitosas
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
                name: "Dra. Elena Ruiz",
                text: "Mi artículo fue aceptado en Q2 gracias a la corrección de estilo y traducción de Alejandría.",
              },
              {
                name: "Mg. Jorge Luis",
                text: "Necesitaba publicar para mi doctorado y me guiaron en todo el proceso de selección de revista.",
              },
              {
                name: "Lic. Andrea P.",
                text: "Excelente servicio de redacción académica. Aprendí mucho sobre estructura científica.",
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
