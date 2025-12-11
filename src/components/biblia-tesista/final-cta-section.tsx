"use client";

import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./countdown-timer";
import Image from "next/image";

export function FinalCTASection() {
  const handleCheckout = () => {
    window.open(
      "https://pay.hotmart.com/C101263888O?checkoutMode=10",
      "_blank"
    );
  };

  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              La oferta termina en...
            </h2>
            <CountdownTimer />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center md:text-left space-y-4 max-w-lg">
              <p className="text-lg text-muted-foreground">
                Por sólo{" "}
                <span className="text-amber-500 font-bold text-2xl">$9.99</span>
                , accede al ebook digital que te da claridad, estructura y
                acompañamiento real en tu tesis.
              </p>
            </div>
            <Image
              src="/images/biblia-tesista/descPromo.png"
              alt="Precio especial $9.99"
              width={150}
              height={150}
            />
          </div>

          <div className="text-center space-y-8">
            <h3 className="text-xl md:text-3xl font-bold leading-relaxed max-w-3xl mx-auto text-balance">
              Tu <span className="text-primary">tesis</span> no tiene que ser
              una fuente de <span className="text-primary">ansiedad</span>. Con
              la <span className="text-amber-500">Biblia del Tesista</span>, vas
              a tener <span className="text-primary">claridad</span>,{" "}
              <span className="text-primary">estructura</span> y{" "}
              <span className="text-primary">motivación</span>.
            </h3>

            <Button
              onClick={handleCheckout}
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-12 py-6 rounded-full"
            >
              QUIERO LA BIBLIA DEL TESISTA
            </Button>

            <div className="flex justify-center">
              <Image
                src="/images/biblia-tesista/hotmart2.png"
                alt="Hotmart - Plataforma de pago seguro"
                width={150}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
