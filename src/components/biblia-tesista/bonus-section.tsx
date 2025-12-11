import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const bonuses = [
  {
    title: "Lista de Fuentes Confiables",
    description:
      "Encuentra enlaces válidos para tu marco teórico sin perder tiempo.",
  },
  {
    title: "Guía Pro de Formulación Administrativa",
    description:
      "Redacta el presupuesto y cronograma con claridad profesional.",
  },
  {
    title: "Mini Guía: Proyecto de Tesis desde Cero",
    description: "Estructura tu proyecto con pasos simples y ejemplos reales.",
  },
  {
    title: "Elaboración del Título en 7 Días",
    description: "Aprende a formular un buen título sin dudar durante semanas.",
  },
];

export function BonusSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          Y si compras <span className="text-amber-500">hoy mismo</span> La
          Biblia del Tesista
        </h2>
        <p className="text-xl md:text-2xl text-center mb-12 text-muted-foreground">
          recibes 4 <span className="text-amber-500">regalos</span> digitales:
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="shrink-0">
                  <Image
                    src="/images/biblia-tesista/RegaloDorado.png"
                    alt="Regalo"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{bonus.title}</h3>
                  <p className="text-muted-foreground">{bonus.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
