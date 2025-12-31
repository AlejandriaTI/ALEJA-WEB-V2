import type { Metadata } from "next";
import ScientificArticleClient from "./ScientificArticleClient";

export const metadata: Metadata = {
  title: "Artículo Científico - Alejandría Consultora",
  description:
    "Asesoría especializada para la adaptación y publicación de Artículos Científicos en revistas indexadas (Scopus, WoS, Scielo y otros).",
};

export default function ScientificArticlePage() {
  return <ScientificArticleClient />;
}
