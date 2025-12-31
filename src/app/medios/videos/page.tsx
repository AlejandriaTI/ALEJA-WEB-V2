import type { Metadata } from "next";
import VideosClient from "./VideosClient";

export const metadata: Metadata = {
  title: "Videos - Alejandría Consultora",
  description:
    "Explora la videoteca de Alejandría Consultora con contenido sobre tecnología, ciencia, educación e investigación.",
};

export default function VideosPage() {
  return <VideosClient />;
}
