"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Lightbulb,
  Shield,
  Sparkles,
  GraduationCap,
  BookOpen,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Nosotros() {
  const valores = [
    {
      icon: Shield,
      title: "Integridad",
      description:
        "Actuamos con honestidad y transparencia en cada proyecto que realizamos.",
    },
    {
      icon: Award,
      title: "Excelencia",
      description:
        "Buscamos la calidad superior en cada entrega, superando expectativas.",
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description:
        "Aplicamos las últimas metodologías y tecnologías en nuestros servicios.",
    },
    {
      icon: Heart,
      title: "Compromiso",
      description:
        "Nos dedicamos completamente al éxito académico de nuestros clientes.",
    },
  ];

  const equipo = [
    {
      name: "Dr. Carlos Mendoza",
      role: "Director Académico",
      specialty: "PhD en Investigación Científica",
      image: "👨‍🎓",
    },
    {
      name: "Dra. María González",
      role: "Coordinadora de Tesis",
      specialty: "Especialista en Metodología",
      image: "👩‍🏫",
    },
    {
      name: "Ing. Roberto Silva",
      role: "Asesor Técnico",
      specialty: "Experto en Análisis de Datos",
      image: "👨‍💼",
    },
    {
      name: "Lic. Ana Torres",
      role: "Asesora de Redacción",
      specialty: "Editora Académica Senior",
      image: "👩‍💻",
    },
  ];

  const estadisticas = [
    { numero: "500+", label: "Tesis Completadas", icon: GraduationCap },
    { numero: "98%", label: "Tasa de Aprobación", icon: CheckCircle2 },
    { numero: "10+", label: "Años de Experiencia", icon: Award },
    { numero: "50+", label: "Asesores Expertos", icon: Users },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full flex items-center justify-center overflow-hidden bg-linear-to-br from-primary/20 via-background to-primary/10">
        <div className="absolute inset-0 bg-grid-white/5" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Sobre Nosotros
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Transformamos Ideas en
            <br />
            Éxito Académico
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Somos un equipo de profesionales dedicados a impulsar tu carrera
            académica con asesoría especializada y resultados comprobados.
          </p>
        </motion.div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estadisticas.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.numero}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Brindar asesoría académica de excelencia, acompañando a
                    estudiantes y profesionales en el desarrollo de sus
                    proyectos de investigación, garantizando calidad,
                    originalidad y cumplimiento de los más altos estándares
                    académicos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser la empresa líder en asesoría académica en Latinoamérica,
                    reconocida por la excelencia de nuestros servicios, la
                    innovación en nuestras metodologías y el impacto positivo en
                    la formación de profesionales de alto nivel.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Valores
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada una de nuestras acciones y
              decisiones
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <valor.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{valor.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {valor.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Profesionales altamente calificados comprometidos con tu éxito
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipo.map((miembro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl mb-4">{miembro.image}</div>
                    <h3 className="text-xl font-bold mb-2">{miembro.name}</h3>
                    <Badge className="mb-3" variant="secondary">
                      {miembro.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {miembro.specialty}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Razones que nos hacen la mejor opción para tu proyecto académico
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Experiencia Comprobada",
                description:
                  "Más de 10 años asesorando exitosamente proyectos de investigación en todas las áreas del conocimiento.",
              },
              {
                icon: Users,
                title: "Equipo Multidisciplinario",
                description:
                  "Contamos con especialistas en diversas áreas para garantizar asesoría experta en tu campo.",
              },
              {
                icon: TrendingUp,
                title: "Resultados Garantizados",
                description:
                  "98% de nuestros clientes aprueban sus proyectos en la primera presentación.",
              },
              {
                icon: Sparkles,
                title: "Metodología Innovadora",
                description:
                  "Aplicamos las últimas tendencias en investigación y herramientas tecnológicas de vanguardia.",
              },
              {
                icon: Shield,
                title: "Confidencialidad Total",
                description:
                  "Tu información y proyecto están protegidos con los más altos estándares de seguridad.",
              },
              {
                icon: CheckCircle2,
                title: "Soporte Continuo",
                description:
                  "Te acompañamos en cada etapa del proceso hasta la sustentación exitosa de tu proyecto.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-linear-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-12">
                <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Listo para Comenzar?
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Únete a cientos de estudiantes que han alcanzado sus metas
                  académicas con nuestra ayuda
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8">
                    Solicitar Asesoría
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Ver Servicios
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
