import type { Metadata } from "next";
import NosotrosClient from "./NosotrosClient";

export const metadata: Metadata = {
  title: "Nosotros - Alejandría Consultora",
  description:
    "Conoce a Alejandría Consultora: Nuestra misión, visión, valores y el equipo de expertos que te ayudará a alcanzar el éxito académico.",
};

export default function Nosotros() {
  return <NosotrosClient />;
}
