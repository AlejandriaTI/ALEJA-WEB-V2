import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    image: "/images/biblia-tesista/testimonio1.png",
    alt: "Testimonio 1 - Usuario satisfecho con La Biblia del Tesista",
  },
  {
    image: "/images/biblia-tesista/testimonio2.png",
    alt: "Testimonio 2 - Usuario satisfecho con La Biblia del Tesista",
  },
  {
    image: "/images/biblia-tesista/testimonio3.png",
    alt: "Testimonio 3 - Usuario satisfecho con La Biblia del Tesista",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-center mb-12"
        >
          TESTIMONIOS
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="overflow-hidden shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-2">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.alt}
                    width={400}
                    height={300}
                    className="rounded-lg w-full"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
