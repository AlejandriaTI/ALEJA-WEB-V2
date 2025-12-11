"use client";

import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./countdown-timer";
import Image from "next/image";
import { motion } from "framer-motion";

export function FinalCTASection() {
  const handleCheckout = () => {
    window.open(
      "https://pay.hotmart.com/C101263888O?checkoutMode=10",
      "_blank"
    );
  };

  return (
    <section className="bg-background text-foreground py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              La oferta termina en...
            </h2>
            <CountdownTimer />
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-left space-y-4 max-w-lg"
            >
              <p className="text-lg text-muted-foreground">
                Por sólo{" "}
                <span className="text-amber-500 font-bold text-2xl">$9.99</span>
                , accede al ebook digital que te da claridad, estructura y
                acompañamiento real en tu tesis.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/biblia-tesista/descPromo.png"
                alt="Precio especial $9.99"
                width={150}
                height={150}
                className="hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center space-y-8"
          >
            <h3 className="text-xl md:text-3xl font-bold leading-relaxed max-w-3xl mx-auto text-balance">
              Tu <span className="text-primary">tesis</span> no tiene que ser
              una fuente de <span className="text-primary">ansiedad</span>. Con
              la <span className="text-amber-500">Biblia del Tesista</span>, vas
              a tener <span className="text-primary">claridad</span>,{" "}
              <span className="text-primary">estructura</span> y{" "}
              <span className="text-primary">motivación</span>.
            </h3>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleCheckout}
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-12 py-6 rounded-full shadow-lg shadow-amber-500/20"
              >
                QUIERO LA BIBLIA DEL TESISTA
              </Button>
            </motion.div>

            <div className="flex justify-center">
              <Image
                src="/images/biblia-tesista/hotmart2.png"
                alt="Hotmart - Plataforma de pago seguro"
                width={150}
                height={50}
                className="opacity-80"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
