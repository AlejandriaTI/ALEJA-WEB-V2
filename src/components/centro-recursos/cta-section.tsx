  "use client";

  import { Button } from "@/components/ui/button";
  import { ArrowRight, Send } from "lucide-react";

  export default function CTASection() {
    const handleWhatsApp = () => {
      const message =
        "Hola, me gustaría recibir más información sobre los recursos y servicios disponibles.";
      const phoneNumber = "51989575820";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    };

    return (
      <section className="py-12 md:py-20 bg-linear-to-br from-primary/5 via-background to-secondary/10">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="bg-card border border-border/50 rounded-2xl p-12 md:p-16 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                ¿Listo para potenciar tu investigación?
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Únete a cientos de investigadores que ya están utilizando nuestros
                recursos para lograr sus objetivos académicos
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold flex items-center gap-2"
                onClick={handleWhatsApp}
              >
                <Send className="w-4 h-4" />
                Solicitar Información
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-semibold bg-transparent"
              >
                Conocer más
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/30">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <p className="text-sm text-foreground/60">Recursos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <p className="text-sm text-foreground/60">Acceso</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10k+</div>
                <p className="text-sm text-foreground/60">Usuarios</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
