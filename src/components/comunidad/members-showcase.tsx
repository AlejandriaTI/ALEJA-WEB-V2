"use client";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MembersShowcase() {
  const { theme, resolvedTheme } = useTheme();

  const isLight = theme === "light" || resolvedTheme === "light";

  const testimonials = [
    {
      text: "Gracias a la comunidad, terminé mi tesis en 4 meses. Aprendí más aquí que en todo mi taller de investigación. Me sentí acompañada de principio a fin.",
      author: "Paola M.",
      institution: "Administración – UNFV",
      area: "Administración",
      rating: 5,
    },
    {
      text: "Encontré colegas de mi carrera con los que pude compartir estrategias y mejorar mi análisis estadístico. Hoy ya tengo mi título en mano.",
      author: "José A.",
      institution: "Ingeniería Civil – UPC",
      area: "Ingeniería Civil",
      rating: 5,
    },
    {
      text: "Me uní buscando apoyo y terminé liderando un grupo de estudio. Alejandría me dio seguridad para sustentar sin miedo.",
      author: "Daniela R.",
      institution: "Psicología – UCV",
      area: "Psicología",
      rating: 5,
    },
    {
      text: "No solo me ayudaron a terminar la tesis, sino a crear contactos que hoy son parte de mi equipo profesional.",
      author: "Martín L.",
      institution: "Economía – UNMSM",
      area: "Economía",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className={`absolute top-[20%] right-[10%] w-72 h-72 rounded-full mix-blend-screen filter blur-[80px] ${
            isLight ? "bg-primary/5 opacity-20" : "bg-[#0CB2D5]/10 opacity-30"
          }`}
        />
        <div
          className={`absolute bottom-[20%] left-[10%] w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] ${
            isLight ? "bg-primary/3 opacity-15" : "bg-[#0CB2D5]/5 opacity-20"
          }`}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
              isLight ? "text-primary" : "text-[#0CB2D5]"
            }`}
          >
            Voces de la Comunidad
          </h2>
          <h3
            className={`text-4xl md:text-5xl font-bold ${
              isLight ? "text-gray-900" : "text-white"
            }`}
          >
            Testimonios de Investigadores
          </h3>
          <p
            className={`text-lg mt-4 max-w-2xl mx-auto ${
              isLight ? "text-gray-600" : "text-slate-400"
            }`}
          >
            Descubre cómo investigadores de diversas disciplinas están
            transformando su trabajo gracias a nuestra red colaborativa
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div key={idx} variants={itemVariants} whileHover={{ scale: 1.02 }}>
              <Card
                className={`rounded-xl border p-6 shadow-xl transition-all group h-full ${
                  isLight
                    ? "border-gray-200 bg-white hover:shadow-2xl hover:border-primary/30"
                    : "border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10"
                }`}
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
                    {/* Avatar */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                        isLight
                          ? "bg-primary/10 border-primary/20"
                          : "bg-[#0CB2D5]/20 border-[#0CB2D5]/30"
                      }`}
                    >
                      <Image
                        src={`https://api.dicebear.com/7.x/notionists/png?seed=${testimonial.author}`}
                        alt={testimonial.author + " avatar"}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>

                    {/* Name + Institution */}
                    <div>
                      <p
                        className={`font-semibold ${
                          isLight ? "text-gray-900" : "text-white"
                        }`}
                      >
                        {testimonial.author}
                      </p>
                      <p
                        className={`text-sm ${
                          isLight ? "text-primary" : "text-[#0CB2D5]"
                        }`}
                      >
                        {testimonial.institution}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
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
  );
}
