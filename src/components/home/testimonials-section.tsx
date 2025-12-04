"use client";

import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Alejandría me dio el acompañamiento que necesitaba para avanzar con confianza en mi investigación. Su apoyo fue clave para lograr mis objetivos académicos.",
      author: "Mónica Guevara",
      university: "Universidad de Lima",
      achievement: "Sustento exitoso",
      rating: 5,
    },
    {
      text: "La dedicación y profesionalismo del equipo fueron esenciales para alcanzar mis metas académicas. Superaron mis expectativas completamente.",
      author: "Renzo Mejía",
      university: "Universidad UTP",
      achievement: "Alianza estratégica",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#1C1C34] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-[#0CB2D5]/10 rounded-full mix-blend-screen filter blur-[80px] opacity-30" />
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-[#0CB2D5]/5 rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#0CB2D5] text-sm font-semibold uppercase tracking-widest mb-2">
            Clientes Satisfechos
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Testimonios de éxito
          </h3>
          <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
            Historias de quienes confiaron en Alejandría y alcanzaron sus metas
            académicas
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
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
                      src={`https://api.dicebear.com/7.x/notionists/ongg?seed=${testimonial.author}`}
                      alt={testimonial.author + "avatar"}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>

                  {/* Name + Username */}
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#0CB2D5]">
                      @{testimonial.author.replace(/\s+/g, "")}
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
          ))}
        </div>
      </div>
    </section>
  );
}
