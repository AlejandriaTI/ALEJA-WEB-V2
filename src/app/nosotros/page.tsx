"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Eye,
  Scale,
  Heart,
  Users,
  Award,
  Lightbulb,
  Shield,
  Sparkles,
  GraduationCap,
  TrendingUp,
  LayoutDashboard,
  Handshake,
  Building2,
  BadgeCheck,
  HeartHandshake,
  ClipboardCheck,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import Image from "next/image";

export default function Nosotros() {
  const valores = [
    {
      icon: Shield,
      title: "Confidencialidad",
      description:
        "Protegemos la información de nuestros clientes con total responsabilidad y ética.",
    },
    {
      icon: Scale,
      title: "Honestidad",
      description: "Actuamos con integridad y transparencia en cada proyecto.",
    },
    {
      icon: Heart,
      title: "Pasión",
      description:
        "Nos comprometemos con entusiasmo al éxito y la excelencia del cliente.",
    },
    {
      icon: TrendingUp,
      title: "Proactividad",
      description: "Anticipamos necesidades y ofrecemos soluciones eficientes.",
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description:
        "Aplicamos ideas y tecnologías que impulsan resultados transformadores.",
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
      <section className="relative h-[500px] w-full flex items-center justify-center overflow-hidden bg-linear-to-br">
        <div className="absolute inset-0 bg-grid-white/5" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            Sobre Nosotros
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
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
      <section className="py-16 px-4">
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
                <Card className="text-center p-6 hover:shadow-lg transition-all border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                    <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 ">
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
              <Card className="h-full border-cyan-500/20 hover:border-cyan-500/50 transition-colors bg-card/50 backdrop-blur-sm shadow-lg shadow-cyan-900/5">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser aliados estratégicos en investigación académica,
                    impulsando la innovación, la excelencia y la calidad
                    profesional, acompañando a nuestros clientes en la
                    construcción de conocimiento significativo y transformador.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-colors bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-cyan-400" />
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
      <section className="py-20 px-4 bg-secondary/20">
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
              Ser un faro de innovación e investigación de vanguardia,
              iluminando el camino del progreso científico, tecnológico y
              académico de nuestro país hacia nuevos horizontes de excelencia
              global
            </p>
          </motion.div>
          {/* Fila superior */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {valores.slice(0, 3).map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex justify-center"
              >
                <Card className="max-w-sm w-full hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                      <valor.icon className="w-8 h-8 text-cyan-400" />
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

          {/* Fila inferior centrada */}
          <div className="flex justify-center gap-8 flex-wrap">
            {valores.slice(3).map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 3) * 0.1 }}
              >
                <Card className="max-w-sm w-full hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                      <valor.icon className="w-8 h-8 text-cyan-400" />
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
                <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
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
      <section className="py-20 px-4 bg-secondary/20">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Acompañamiento real y humano" },
              { icon: ClipboardCheck, title: "Metodología comprobada" },
              { icon: UserCheck, title: "Equipo multidisciplinario de élite" },
              {
                icon: GraduationCap,
                title: "Empoderamiento para tu sustentación",
              },
              { icon: LayoutDashboard, title: "Acceso exclusivo a intranet" },
              { icon: Handshake, title: "Confianza y formalidad" },
              {
                icon: Building2,
                title: "Infraestructura física y presencia digital",
              },
              { icon: BadgeCheck, title: "Respaldo institucional" },
              { icon: HeartHandshake, title: "Responsabilidad social" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex justify-center"
              >
                <Card className="w-full max-w-[260px] aspect-square flex items-center justify-center text-center hover:shadow-xl transition-all border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                  <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                    <item.icon className="w-10 h-10 text-cyan-400" />
                    <h3 className="text-sm font-semibold uppercase tracking-wide">
                      {item.title}
                    </h3>
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
            <Card className="bg-linear-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/20">
              <CardContent className="p-12">
                <Sparkles className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
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
