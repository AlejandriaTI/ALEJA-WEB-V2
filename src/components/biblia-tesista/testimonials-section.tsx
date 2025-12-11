import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
    <section className=" py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          TESTIMONIOS
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden shadow-lg">
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
          ))}
        </div>
      </div>
    </section>
  );
}
