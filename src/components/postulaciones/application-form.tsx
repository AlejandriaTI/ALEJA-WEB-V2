"use client";

import type React from "react";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast, Toaster } from "sonner";
import { Send } from "lucide-react";

export function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("¡Postulación enviada!", {
      description: "Hemos recibido tu aplicación. Te contactaremos pronto.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="application-form" className="py-24 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Formulario de postulación
            </h2>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              Completa el siguiente formulario y únete a nuestro equipo
            </p>
          </div>

          {/* Form */}
          <Card className="p-8 bg-background/50 backdrop-blur border-border/50">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Data */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground border-b border-border pb-2">
                  Datos personales
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nombre completo *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Juan Pérez García"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="juan@ejemplo.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+34 600 000 000"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">País / Ciudad *</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="España, Madrid"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Professional Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground border-b border-border pb-2">
                  Información profesional
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="position">Puesto al que postula *</Label>
                    <Select name="position" required>
                      <SelectTrigger id="position">
                        <SelectValue placeholder="Selecciona un puesto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fullstack">
                          Desarrollador Full Stack
                        </SelectItem>
                        <SelectItem value="uxui">Diseñador UX/UI</SelectItem>
                        <SelectItem value="marketing">
                          Especialista en Marketing Digital
                        </SelectItem>
                        <SelectItem value="data">Analista de Datos</SelectItem>
                        <SelectItem value="intern">
                          Practicante de Desarrollo
                        </SelectItem>
                        <SelectItem value="customer">
                          Customer Success Manager
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="education">Nivel de estudios *</Label>
                    <Select name="education" required>
                      <SelectTrigger id="education">
                        <SelectValue placeholder="Selecciona tu nivel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="highschool">Bachillerato</SelectItem>
                        <SelectItem value="bachelor">
                          Licenciatura/Grado
                        </SelectItem>
                        <SelectItem value="master">Maestría/Máster</SelectItem>
                        <SelectItem value="phd">Doctorado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Años de experiencia *</Label>
                    <Select name="experience" required>
                      <SelectTrigger id="experience">
                        <SelectValue placeholder="Selecciona tu experiencia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 años</SelectItem>
                        <SelectItem value="1-3">1-3 años</SelectItem>
                        <SelectItem value="3-5">3-5 años</SelectItem>
                        <SelectItem value="5+">Más de 5 años</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Habilidades principales *</Label>
                    <Input
                      id="skills"
                      name="skills"
                      placeholder="React, Node.js, TypeScript..."
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground border-b border-border pb-2">
                  Documentos
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="cv">Currículum Vitae (PDF) *</Label>
                  <Input
                    id="cv"
                    name="cv"
                    type="file"
                    accept=".pdf"
                    required
                    className="cursor-pointer"
                  />
                  <p className="text-sm text-muted-foreground">
                    Sube tu CV en formato PDF (máx. 5MB)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portafolio o LinkedIn (URL)</Label>
                  <Input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    placeholder="https://linkedin.com/in/tu-perfil"
                  />
                </div>
              </div>

              {/* Open Questions */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground border-b border-border pb-2">
                  Cuéntanos sobre ti
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="motivation">
                    ¿Por qué quieres trabajar con nosotros? *
                  </Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    placeholder="Comparte tus motivaciones para unirte a nuestro equipo..."
                    className="min-h-32 resize-y"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="difference">
                    ¿Qué te diferencia de otros postulantes? *
                  </Label>
                  <Textarea
                    id="difference"
                    name="difference"
                    placeholder="Cuéntanos qué te hace único y valioso para este rol..."
                    className="min-h-32 resize-y"
                    required
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Checkbox id="terms" name="terms" required />
                  <div className="space-y-1">
                    <Label
                      htmlFor="terms"
                      className="text-sm font-normal leading-relaxed cursor-pointer"
                    >
                      Acepto el tratamiento de mis datos personales de acuerdo
                      con la política de privacidad y los términos de uso *
                    </Label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar postulación
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
      <Toaster />
    </section>
  );
}
