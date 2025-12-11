import Image from "next/image";
import { motion } from "framer-motion";

export function GuaranteeSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
            className="shrink-0"
          >
            <Image
              src="/images/biblia-tesista/GarantiaDorado.png"
              alt="Garantía de 7 días"
              width={200}
              height={200}
              className="hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left space-y-4"
          >
            <h2 className="text-2xl md:text-4xl font-bold">
              <span className="text-amber-500">Garantía</span> de satisfacción 7
              días
            </h2>
            <p className="text-lg text-muted-foreground">
              Si el producto no te ayuda como prometemos, te devolvemos el 100%
              de tu dinero.
            </p>
            <p className="text-lg text-muted-foreground font-semibold">
              Sin preguntas. Sin letra chica.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
