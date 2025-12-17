"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useHasMounted } from "@/hooks/use-has-mounted";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export function Footer() {
  const { theme, resolvedTheme } = useTheme();
  const year = new Date().getFullYear();
  const hasMounted = useHasMounted();

  const currentTheme = hasMounted
    ? theme === "system"
      ? resolvedTheme
      : theme
    : undefined;

  return (
    <footer className="border-t mt-20  text-muted-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* ===== GRID PRINCIPAL ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Servicios</h4>
            <ul className="space-y-2 text-sm">
              {["Tesis", "TSP", "Artículos", "Planes de Negocio"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Promociones */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Promociones</h4>
            <ul className="space-y-2 text-sm">
              {["Planes", "Catalogos"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nosotros */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Empresa</h4>
            <ul className="space-y-2 text-sm">
              {["Nosotros", "Blog", "Contacto", "Videos"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <Link
                  href="tel:+51989575820"
                  className="hover:text-primary transition-colors"
                >
                  +51 989 575 820
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <Link
                  href="mailto:clientes@alejandriaconsultora.com"
                  className="hover:text-primary transition-colors"
                >
                  clientes@alejandria.com
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground">
                  Lima, Miraflores - Chiclayo
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ===== LOGO + LIBRO RECLAMOS + REDES ===== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            {currentTheme === "light" ? (
              <Image
                src="/logo_azul.png"
                alt="Alejandría Consultora"
                width={180}
                height={40}
                priority
                className="h-10 md:h-12 w-auto mb-4"
              />
            ) : (
              <Image
                src="/logo.png"
                alt="Alejandría Consultora"
                width={180}
                height={40}
                priority
                className="h-10 md:h-12 w-auto mb-4"
              />
            )}
          </Link>
          {/* Libro de reclamaciones */}
          <Link href="/libro-reclamaciones">
            <Image
              src="/libro_reclamaciones.png"
              width={140}
              height={60}
              alt="Libro de reclamaciones"
              className={`mx-auto ${currentTheme === "light" ? "invert" : ""}`}
            />
          </Link>

          {/* Redes sociales */}
          <div className="flex items-center gap-6 text-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <FaTiktok className="w-6 h-6" /> {/* icono estilo TikTok */}
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Youtube className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* ===== LEGAL ===== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground border-t border-border pt-6">
          <p suppressHydrationWarning>
            © {year} Alejandria Consultora – Todos los derechos reservados.
          </p>

          <div className="flex gap-6">
            <Link
              href="/politicas-privacidad"
              className="hover:text-primary transition-colors"
            >
              Política de privacidad
            </Link>
            <Link
              href="/terminos-y-condiciones"
              className="hover:text-primary transition-colors"
            >
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
