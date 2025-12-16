"use client"

import { Card } from "@/components/ui/card"
import { Users, TrendingUp, Heart, Lightbulb } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Equipo colaborativo",
    description: "Trabaja junto a profesionales talentosos que comparten tu pasión por la innovación y la excelencia",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento profesional",
    description: "Desarrolla tus habilidades con capacitaciones constantes, mentorías y proyectos desafiantes",
  },
  {
    icon: Heart,
    title: "Bienestar integral",
    description:
      "Disfruta de un equilibrio saludable entre vida personal y profesional con beneficios pensados para ti",
  },
  {
    icon: Lightbulb,
    title: "Proyectos innovadores",
    description: "Contribuye a soluciones que marcan la diferencia y tienen impacto real en nuestros clientes",
  },
]

export function WhyJoinSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">¿Por qué unirte a nuestro equipo?</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Somos más que una empresa, somos una comunidad de profesionales comprometidos con la excelencia
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <Card
                  key={index}
                  className="p-8 space-y-4 bg-card/80 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{reason.description}</p>
                </Card>
              )
            })}
          </div>

          {/* CTA Box */}
          <Card className="p-10 text-center space-y-6 bg-linear-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-foreground">Forma parte de algo grande</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Estamos en constante crecimiento y siempre buscamos talento excepcional. Completa el formulario y te
                contactaremos cuando surjan oportunidades que se ajusten a tu perfil.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
