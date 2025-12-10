"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Book from "../3D/book";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-background via-background to-secondary/20 pt-16 pb-20 md:pt-24 md:pb-32 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                  Centro de Recursos
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                Impulsa tu <span className="text-primary">investigación</span>
              </h1>

              <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
                Accede a nuestra colección curada de libros especializados,
                herramientas académicas y recursos diseñados para elevar la
                calidad de tu investigación.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 px-8"
                >
                  Explorar Catálogo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent h-12 px-8"
                >
                  Más Información
                </Button>
              </div>

              <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>+500 Recursos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Acceso 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Actualización Semanal</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center h-[500px] w-full relative">
            <Book />
          </div>
        </div>
      </div>
    </section>
  );
}
