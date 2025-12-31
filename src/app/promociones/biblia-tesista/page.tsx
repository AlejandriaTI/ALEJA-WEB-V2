import type { Metadata } from "next";
import BibliaTesistaClient from "./BibliaTesistaClient";

export const metadata: Metadata = {
  title: "La Biblia del Tesista - Alejandría Consultora",
  description:
    "Descubre 'La Biblia del Tesista', la guía definitiva para tu tesis. Incluye bonos exclusivos y garantía de éxito académico.",
};

export default function BibliaTesista() {
  return <BibliaTesistaClient />;
}
