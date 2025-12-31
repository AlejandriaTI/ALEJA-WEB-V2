import type { Metadata } from "next";
import TSPClient from "./TSPClient";

export const metadata: Metadata = {
  title: "TSP - Alejandría Consultora",
  description:
    "Convierte tu experiencia laboral en Título Profesional con el Trabajo de Suficiencia Profesional (TSP) de Alejandría Consultora.",
};

export default function TSPPage() {
  return <TSPClient />;
}
