"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const books = [
  {
    id: 1,
    title: "Generación y Valoración de la Investigación en Derecho",
    subtitle: "Un Análisis de la problemática en el Perú",
    authors: "José Enrique Sotomayar Trelles, Nelly Aracely Díaz Ruiz",
    category: "Derecho",
    image: "/images/image_07.webp",
    color: "from-emerald-600 to-emerald-800",
  },
  {
    id: 2,
    title: "Fundamentos de Investigación en Ingeniería Civil",
    subtitle: "Principios aplicados al desarrollo",
    authors: "Andrés Leonardo Silva Balaguera, Laura Alejandra Pedraza",
    category: "Ingeniería",
    image: "/images/image_09.webp",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 3,
    title: "Investigación Contemporánea desde una Visión Multidisciplinar",
    subtitle: "Libro 4. Ciencias de la Salud",
    authors: "REDLIC - Red Editorial",
    category: "Salud",
    image: "/images/image_08.webp",
    color: "from-cyan-600 to-cyan-800",
  },
  {
    id: 4,
    title: "Metodología de la Investigación",
    subtitle: "Propuesta, anteproyecto y proyecto",
    authors: "Héctor Daniel Lerma González",
    category: "Metodología",
    image: "/images/image_05.webp",
    color: "from-indigo-600 to-indigo-900",
  },
];

export default function BooksGallery() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">
            Catálogo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestra Colección
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Explora nuestros recursos más destacados. Cada libro ha sido
            seleccionado cuidadosamente para ofrecerte investigación de calidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {books.map((book) => (
            <Card
              key={book.id}
              className="group overflow-hidden border-border/50 bg-card/50 hover:bg-card/80 hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="flex gap-6">
                  {/* Image */}
                  <div className="relative w-32 h-48 shrink-0 overflow-hidden bg-muted rounded-lg">
                    <Image
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100px, 150px"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 py-6 pr-6">
                    <div className="space-y-3">
                      <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary hover:bg-primary/30"
                      >
                        {book.category}
                      </Badge>

                      <div className="space-y-2">
                        <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                          {book.title}
                        </h3>
                        <p className="text-sm text-foreground/60">
                          {book.subtitle}
                        </p>
                      </div>

                      <p className="text-xs text-foreground/50 line-clamp-2">
                        Por {book.authors}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/60 mb-4">¿Buscas más recursos?</p>
          <button className="text-primary font-semibold hover:text-primary/80 inline-flex items-center gap-2 transition-colors">
            Ver todo el catálogo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
