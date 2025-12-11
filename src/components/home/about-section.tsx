"use client";

import { NumberTicker } from "../ui/number-ticker";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
                Sobre Nosotros
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground">
                Líderes en el mercado académico
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos líderes en el mercado y contamos con una amplia experiencia
              que nos avala. Con más de 1,500 casos de éxito y el respaldo de
              más de 20 empresas, nos comprometemos a ayudarte a alcanzar tus
              objetivos académicos.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "+1500", label: "Casos de éxito" },
                { number: "+10", label: "Años" },
                { number: "+20", label: "Empresas" },
                { number: "100", label: "Satisfacción" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
                >
                  <p className="text-3xl font-bold text-primary mb-2">
                    {stat.number.includes("+") && "+"}
                    <NumberTicker
                      value={Number(stat.number.replace(/[^0-9]/g, ""))}
                      className="text-primary"
                    />
                    {stat.label === "Satisfacción" && "%"}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Services */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: "Asesoría Académica",
                desc: "Guía profesional para tus proyectos",
              },
              {
                title: "Elaboración de Tesis",
                desc: "Investigación y redacción completa",
              },
              {
                title: "TSP - Trabajo Suficiencia Profesional",
                desc: "Asesoría especializada",
              },
              {
                title: "Artículos Científicos",
                desc: "Publicación en revistas indexadas",
              },
              {
                title: "Planes de Negocio",
                desc: "Desarrollo estratégico empresarial",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors hover:shadow-lg group"
              >
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
