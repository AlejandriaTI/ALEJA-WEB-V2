import type { Metadata } from "next";
import TerminosClient from "./TerminosClient";

export const metadata: Metadata = {
  title: "Términos y Condiciones - Alejandría Consultora",
  description:
    "Lee los términos y condiciones de uso de los servicios de Alejandría Consultora, incluyendo información sobre pagos, privacidad y resolución de conflictos.",
};

export default function TerminosPage() {
  return <TerminosClient />;
}
