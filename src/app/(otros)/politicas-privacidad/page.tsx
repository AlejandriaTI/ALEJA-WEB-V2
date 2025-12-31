import type { Metadata } from "next";
import PoliticasPrivacidadClient from "./PoliticasPrivacidadClient";

export const metadata: Metadata = {
  title: "Políticas de Privacidad - Alejandría Consultora",
  description:
    "Conoce las políticas de privacidad de Alejandría Consultora. Información sobre recopilación, uso y protección de datos personales y uso de cookies.",
};

export default function PoliticasPrivacidadPage() {
  return <PoliticasPrivacidadClient />;
}
