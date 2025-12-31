import type { Metadata } from "next";
import PlanNegocioClient from "./PlanNegocioClient";

export const metadata: Metadata = {
  title: "Plan de Negocio - Alejandría Consultora",
  description:
    "Desarrollamos Planes de Negocio estratégicos para titulación, búsqueda de inversionistas y lanzamiento de emprendimientos.",
};

export default function BusinessPlanPage() {
  return <PlanNegocioClient />;
}
