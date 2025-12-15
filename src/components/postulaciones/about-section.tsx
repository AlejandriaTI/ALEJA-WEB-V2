import { Card } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">¿Quiénes somos?</h2>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Somos una empresa comprometida con la excelencia y la innovación, donde cada persona cuenta
            </p>
          </div>

          {/* Description */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed text-center">
              En nuestra organización, creemos que el éxito se construye con personas apasionadas y talentosas. Nos
              dedicamos a crear soluciones que transforman industrias y mejoran vidas, siempre manteniendo un enfoque
              humano en todo lo que hacemos.
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Impulsar la innovación y crear valor sostenible para nuestros clientes y colaboradores, transformando
                desafíos en oportunidades.
              </p>
            </Card>

            <Card className="p-6 space-y-4 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser líderes reconocidos en nuestro sector, destacando por nuestra cultura de excelencia, innovación y
                compromiso con las personas.
              </p>
            </Card>

            <Card className="p-6 space-y-4 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integridad, colaboración, innovación y respeto. Creemos en el desarrollo continuo y el impacto positivo
                en nuestra comunidad.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
