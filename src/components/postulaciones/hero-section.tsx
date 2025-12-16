"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-primary/10" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay opacity-[0.03]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-balance tracking-tight">
              Únete a nuestro <span className="text-primary">equipo</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Forma parte de una empresa innovadora donde tu talento impulsa el cambio y tu crecimiento profesional es
              nuestra prioridad
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={scrollToForm}
            >
              Postular ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Conocer más
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>

        {/* Decorative image placeholder */}
        <div className="mt-16 relative">
          <Image
            src="/agile-software-development-team-meeting.jpg"
            alt="Equipo trabajando"
            className="rounded-2xl shadow-2xl mx-auto border border-border/50"
          />
        </div>
      </div>
    </section>
  )
}
