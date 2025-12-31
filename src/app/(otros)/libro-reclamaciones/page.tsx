import type { Metadata } from "next";
import LibroReclamacionesClient from "./LibroReclamacionesClient";

export const metadata: Metadata = {
  title: "Libro de Reclamaciones - Alejandría Consultora",
  description:
    "Formulario oficial de Libro de Reclamaciones de Alejandría Consultora. Presenta tus reclamos o quejas sobre nuestros productos y servicios.",
};

export default function LibroReclamaciones() {
  return <LibroReclamacionesClient />;
}
