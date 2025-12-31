import type { Metadata } from "next";
import PromocionesClient from "./PromocionesClient";

export const metadata: Metadata = {
  title: "Planes - Alejandría Consultora",
  description:
    "Descubre los planes de asesoría académica de Alejandría Consultora: Básico, Intermedio y Avanzado para tesis de pregrado y maestría.",
};

export default function Promociones() {
  return <PromocionesClient />;
}
