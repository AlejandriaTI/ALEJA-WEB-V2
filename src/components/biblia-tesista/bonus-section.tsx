import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Y si compras <span className="text-amber-500">hoy mismo</span> La
            Biblia del Tesista
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            recibes 4 <span className="text-amber-500">regalos</span> digitales:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="shrink-0 p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <Image
                      src="/images/biblia-tesista/RegaloDorado.png"
                      alt="Regalo"
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{bonus.title}</h3>
                    <p className="text-muted-foreground">{bonus.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
