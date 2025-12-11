import Image from "next/image";

export function GuaranteeSection() {
  return (
    <section className=" py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          <Image
            src="/images/biblia-tesista/garantiadorado.png"
            alt="Garantía de 7 días"
            width={200}
            height={200}
            className="shrink-0"
          />
          <div className="text-center md:text-left space-y-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
