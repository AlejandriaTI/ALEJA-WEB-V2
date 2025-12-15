import { Card } from "@/components/ui/card"
import { Briefcase, TrendingUp, Clock, BookOpen, Users, Globe } from "lucide-react"

const benefits = [
  {
    icon: Briefcase,
    title: "Ambiente de trabajo",
    description: "Espacios modernos y colaborativos que fomentan la creatividad y el bienestar",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento profesional",
    description: "Oportunidades reales de desarrollo y ascenso dentro de la organización",
  },
  {
    icon: Clock,
    title: "Flexibilidad",
    description: "Horarios flexibles y opciones de trabajo remoto para balance vida-trabajo",
  },
  {
    icon: BookOpen,
    title: "Aprendizaje continuo",
    description: "Programas de capacitación, certificaciones y acceso a cursos especializados",
  },
  {
    icon: Users,
    title: "Cultura colaborativa",
    description: "Equipos diversos e inclusivos donde cada voz es escuchada y valorada",
  },
  {
    icon: Globe,
    title: "Impacto global",
    description: "Trabaja en proyectos que marcan la diferencia a nivel internacional",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">¿Por qué trabajar con nosotros?</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Ofrecemos más que un trabajo, ofrecemos un lugar donde puedes crecer, aprender y hacer la diferencia
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={index}
                  className="p-6 space-y-4 bg-background/50 backdrop-blur border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
