"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="text-secondary-foreground/80 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Alejandría Consultora"
              width={180}
              height={40}
              className="h-10 md:h-12 w-auto"
            />
            <p className="text-sm leading-relaxed text-secondary-foreground/70">
              Asesoría académica profesional con más de 10 años de experiencia.
            </p>
            <div className="flex gap-4">
              {["Facebook", "Twitter", "LinkedIn"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Servicios</h4>
            <ul className="space-y-2 text-sm">
              {["Tesis", "TSP", "Artículos", "Planes de Negocio"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-primary transition-colors text-secondary-foreground/70"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Empresa</h4>
            <ul className="space-y-2 text-sm">
              {["Nosotros", "Blog", "Contacto", "Recursos"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors text-secondary-foreground/70"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <Link
                  href="tel:+51989575820"
                  className="hover:text-primary transition-colors text-secondary-foreground/70"
                >
                  +51 989 575 820
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <Link
                  href="mailto:clientes@alejandriaconsultora.com"
                  className="hover:text-primary transition-colors text-secondary-foreground/70"
                >
                  clientes@alejandria.com
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span className="text-secondary-foreground/70">
                  Lima, Miraflores - Chiclayo
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/60">
            <p>
              © {new Date().getFullYear()} Alejandría Consultora. Todos los
              derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacidad
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
