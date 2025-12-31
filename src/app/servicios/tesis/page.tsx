import type { Metadata } from "next";
import ThesisClient from "./ThesisClient";

export const metadata: Metadata = {
  title: "Tesis - Alejandría Consultora",
  description:
    "Asesoría especializada en tesis para pregrado y postgrado. Transformamos tus ideas en resultados tangibles con investigación, estrategia y tecnología.",
};

export default function ThesisPage() {
  return <ThesisClient />;
}
