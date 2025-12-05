import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alejandria Blog",
  description:
    "Bienvenido al blog de Alejandria. Aquí encontrarás las últimas noticias, actualizaciones y artículos sobre nuestros servicios y la industria.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
