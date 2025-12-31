"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  CheckCircle2,
  X,
  User,
  Calendar,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const books = [
  {
    id: 1,
    title: "Generación y Valoración de la Investigación en Derecho",
    subtitle: "Un Análisis de la problemática en el Perú",
    authors: "José Enrique Sotomayar Trelles, Nelly Aracely Díaz Ruiz",
    category: "Derecho",
    year: "2024",
    image: "/images/image_07.webp",
    color: "from-emerald-600 to-emerald-800",
    description:
      "Esta obra aborda la crisis de la investigación jurídica en el Perú, analizando desde la formación universitaria hasta los criterios de publicación científica. Los autores proponen un nuevo paradigma para valorar la producción académica en Derecho, alejándose del formalismo y acercándose al impacto social y la rigurosidad metodológica.",
    learnings: [
      "Criticar constructivamente los modelos actuales de enseñanza del Derecho.",
      "Aplicar metodologías socio-jurídicas a problemas legales contemporáneos.",
      "Entender los estándares internacionales de publicación jurídica.",
      "Diseñar proyectos de investigación con relevancia social y jurídica.",
    ],
  },
  {
    id: 2,
    title: "Fundamentos de Investigación en Ingeniería Civil",
    subtitle: "Principios aplicados al desarrollo",
    authors: "Andrés Leonardo Silva Balaguera, Laura Alejandra Pedraza",
    category: "Ingeniería",
    year: "2023",
    image: "/images/image_09.webp",
    color: "from-blue-400 to-blue-600",
    description:
      "Un manual esencial para estudiantes y profesionales de la ingeniería civil que buscan fundamentar sus proyectos con rigor científico. El libro conecta la teoría metodológica con la práctica ingenieril, ofreciendo ejemplos claros sobre cómo estructurar tesis, artículos técnicos y proyectos de innovación en el sector construcción.",
    learnings: [
      "Formular problemas de investigación en el contexto de obras civiles.",
      "Seleccionar el diseño experimental adecuado para materiales y estructuras.",
      "Redactar informes técnicos con estándares internacionales.",
      "Integrar la sostenibilidad y el impacto ambiental en la investigación.",
    ],
  },
  {
    id: 3,
    title: "Investigación Contemporánea desde una Visión Multidisciplinar",
    subtitle: "Libro 4. Ciencias de la Salud",
    authors: "REDLIC - Red Editorial",
    category: "Salud",
    year: "2024",
    image: "/images/image_08.webp",
    color: "from-cyan-600 to-cyan-800",
    description:
      "Una compilación de vanguardia que explora los desafíos actuales de la salud pública y clínica desde una perspectiva integradora. Este volumen reúne investigaciones que cruzan fronteras entre la medicina, la psicología y la tecnología, ofreciendo soluciones innovadoras a problemas complejos de salud.",
    learnings: [
      "Comprender la importancia del enfoque multidisciplinario en salud.",
      "Analizar casos de estudio sobre epidemiología y salud pública.",
      "Evaluar nuevas tecnologías aplicadas al diagnóstico y tratamiento.",
      "Desarrollar una visión crítica sobre las políticas sanitarias actuales.",
    ],
  },
  {
    id: 4,
    title: "Metodología de la Investigación",
    subtitle: "Propuesta, anteproyecto y proyecto",
    authors: "Héctor Daniel Lerma González",
    category: "Metodología",
    year: "2023",
    image: "/images/image_05.webp",
    color: "from-indigo-600 to-indigo-900",
    description:
      "La guía definitiva para sobrevivir y triunfar en el proceso de investigación académica. Lerma González desglosa paso a paso cómo transformar una idea vaga en un proyecto de investigación sólido, viable y financiable. Indispensable para tesistas de pregrado y posgrado de cualquier disciplina.",
    learnings: [
      "Diferenciar claramente entre propuesta, anteproyecto y proyecto final.",
      "Construir objetivos generales y específicos coherentes.",
      "Calcular presupuestos y cronogramas realistas para la investigación.",
      "Dominar las técnicas de recolección y análisis de datos.",
    ],
  },
];

export default function BooksGallery() {
  const [selectedBook, setSelectedBook] = useState<(typeof books)[0] | null>(
    null
  );

  useEffect(() => {
    if (selectedBook) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedBook]);

  return (
    <section className="py-12 md:py-20 bg-background relative z-10">
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
              onClick={() => setSelectedBook(book)}
              className="group overflow-hidden border-border/50 bg-card/50 hover:bg-card/80 hover:border-primary/50 transition-all duration-300 cursor-pointer relative"
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
                      <div className="flex justify-between items-start">
                        <Badge
                          variant="secondary"
                          className="bg-primary/20 text-primary hover:bg-primary/30"
                        >
                          {book.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          {book.year}
                        </span>
                      </div>

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
                {/* Overlay hint */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium text-primary flex items-center gap-1">
                  Ver detalles <BookOpen className="w-3 h-3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>

      {/* Detail Modal using Framer Motion */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBook(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl z-10 flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 p-2 bg-background/50 hover:bg-muted rounded-full transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Image and Basic Info */}
              <div className="w-full md:w-1/3 bg-muted/30 p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-border relative overflow-hidden">
                {/* Decorative background blur */}
                <div
                  className={`absolute inset-0 opacity-10 bg-linear-to-br ${selectedBook.color}`}
                />
                <div className="relative w-48 h-72 rounded-xl overflow-hidden shadow-xl mb-6 rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src={selectedBook.image || "/placeholder.svg"}
                    alt={selectedBook.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-2">{selectedBook.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {selectedBook.subtitle}
                </p>
                <div className="flex flex-col gap-2 w-full text-sm">
                  <div className="flex items-start justify-center gap-2 text-muted-foreground text-center">
                    <User className="w-4 h-4 shrink-0 mt-0.5" />
                    <span className="wrap-break-words leading-snug max-w-[220px]">
                      {selectedBook.authors}
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedBook.year}</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Detailed Content */}
              <div className="w-full md:w-2/3 p-8 flex flex-col">
                <div className="mb-6">
                  <Badge variant="outline" className="mb-2">
                    {selectedBook.category}
                  </Badge>
                  <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-primary" />
                    Sinopsis
                  </h4>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    {selectedBook.description}
                  </p>
                </div>

                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    Lo que aprenderás
                  </h4>
                  <ul className="grid gap-3">
                    {selectedBook.learnings.map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-foreground/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-border flex justify-end gap-3">
                  <span className="text-xs text-muted-foreground self-center italic">
                    * Disponible en versión digital y física
                  </span>
                  {/* Future CTA button could go here */}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
