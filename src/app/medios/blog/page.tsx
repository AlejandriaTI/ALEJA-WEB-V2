import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog - Alejandría Consultora",
  description:
    "Explora el blog de Alejandría Consultora con artículos sobre grados y títulos, ciencia, emprendimiento y tecnología.",
};

export default function BlogPage() {
  return <BlogClient />;
}
