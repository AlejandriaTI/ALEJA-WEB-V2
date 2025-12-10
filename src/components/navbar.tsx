"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { useHasMounted } from "@/hooks/use-has-mounted";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { theme, resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();

  const currentTheme = hasMounted
    ? theme === "system"
      ? resolvedTheme
      : theme
    : undefined;

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const navigationItems = [
    {
      label: "Consultoria",
      trigger: true,
      subItems: [
        { label: "Tesis", href: "/consultoria/tesis" },
        { label: "TSP", href: "/consultoria/tsp" },
        {
          label: "Articulo Cientifico",
          href: "/consultoria/articulo-cientifico",
        },
        { label: "Plan de Negocio", href: "/consultoria/plan-negocio" },
      ],
    },
    {
      label: "Nosotros",
      href: "/nosotros",
    },
    {
      label: "Promociones",
      trigger: true,
      subItems: [
        { label: "Promociones", href: "/promociones" },
        { label: "La biblia del tesista", href: "/promociones/biblia-tesista" },
      ],
    },
    {
      label: "Centro de Recursos",
      href: "/centro-recursos",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ];

  if (!hasMounted) {
    return (
      <nav className="w-full h-16 md:h-20 border-b fixed top-0 left-0 right-0 z-40 backdrop-blur-lg" />
    );
  }
  return (
    <>
      <nav
        className={`w-full border-b fixed top-0 left-0 right-0 z-40 shadow-md transition-colors duration-300 ${
          theme === "light"
            ? "bg-white/95 border-gray-200 backdrop-blur-lg"
            : theme === "dark"
            ? "bg-black/95 border-gray-800 backdrop-blur-lg"
            : "bg-[#121221]/80 border-[#26263F] backdrop-blur-lg"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              {currentTheme === "light" ? (
                <Image
                  src="/logo_azul.png"
                  alt="Alejandría Consultora"
                  width={180}
                  height={40}
                  priority
                  className="h-10 md:h-12 w-auto"
                />
              ) : (
                <Image
                  src="/logo.png"
                  alt="Alejandría Consultora"
                  width={180}
                  height={40}
                  priority
                  className="h-10 md:h-12 w-auto"
                />
              )}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center flex-1 ml-4">
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="gap-1">
                  {navigationItems.map((item) =>
                    item.trigger ? (
                      <NavigationMenuItem key={item.label}>
                        <NavigationMenuTrigger
                          className={`text-sm font-medium transition-colors bg-transparent hover:bg-primary/10 focus:bg-primary/10 focus:text-primary whitespace-nowrap ${
                            theme === "light"
                              ? "text-gray-900 hover:text-primary"
                              : "text-white hover:text-primary"
                          }`}
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div
                            className={`w-48 p-2 space-y-1 rounded-md shadow-2xl border ${
                              currentTheme === "light"
                                ? "bg-white border-gray-200 text-gray-700"
                                : currentTheme === "dark"
                                ? "bg-[#0E0E16] border-gray-800 text-gray-300"
                                : "bg-[#1C1C34] border-[#2A2A4A] text-[#B4C6D1]"
                            }`}
                          >
                            {item.subItems?.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={`block px-4 py-2 text-sm rounded-md transition-all ${
                                  currentTheme === "light"
                                    ? "hover:bg-primary/10 hover:text-primary"
                                    : "hover:bg-[#0CB2D5]/10 hover:text-[#0CB2D5]"
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem key={item.label}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href || "#"}
                            className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-primary/10 whitespace-nowrap ${
                              theme === "light"
                                ? "text-gray-900 hover:text-primary"
                                : "text-white hover:text-primary"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right side buttons */}
            <div className="flex gap-3 items-center ml-auto">
              <button
                aria-label="Abrir whatsapp"
                className={`hidden xl:flex gap-2 border rounded-xl py-2 px-5 font-semibold text-[15px] leading-tight items-center justify-center transition-all ${
                  theme === "light"
                    ? "border-gray-300 text-gray-700 hover:bg-primary/10 hover:text-primary"
                    : "border-[#26263F] text-[#B4C6D1] hover:bg-primary/10 hover:text-white"
                }`}
              >
                <Image
                  src="/icons/whatss.png"
                  width={20}
                  height={20}
                  alt="WhatsApp"
                />
                Contáctanos
              </button>

              <button
                aria-label="Abrir intranet"
                className={`hidden xl:flex gap-2 border rounded-xl items-center py-2 px-5 font-semibold text-[15px] transition-all justify-center ${
                  theme === "light"
                    ? "border-gray-300 text-gray-700 hover:bg-primary/10 hover:border-primary/50"
                    : "border-[#26263F] text-white hover:bg-primary/10 hover:border-primary/50"
                }`}
              >
                {currentTheme === "light" ? (
                  <Image
                    src="/icons/LogoOscuro.svg"
                    alt="Alejandría Consultora"
                    width={20}
                    height={20}
                    priority
                  />
                ) : (
                  <Image
                    src="/icons/LogoAlejandria.svg"
                    alt="Alejandría Consultora"
                    width={20}
                    height={20}
                    priority
                  />
                )}
                INTRANET
              </button>
              <AnimatedThemeToggler />
            </div>

            {/* Mobile button */}
            <Button
              variant="ghost"
              size="sm"
              aria-label="Abrir menú de navegación"
              className={`xl:hidden p-2 transition-colors ${
                theme === "light"
                  ? "text-gray-900 hover:bg-primary/10"
                  : "text-white hover:bg-primary/10"
              }`}
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 xl:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute right-0 top-0 h-full w-4/5 max-w-xs shadow-2xl transform transition-transform duration-300 ease-in-out border-l flex flex-col ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } ${
            currentTheme === "light"
              ? "bg-white border-gray-200"
              : currentTheme === "dark"
              ? "bg-black border-gray-800"
              : "bg-[#1C1C34] border-[#2A2A4A]"
          }`}
        >
          {/* Close button */}
          <div
            className={`shrink-0 flex items-center justify-between p-4 border-b ${
              currentTheme === "light" ? "border-gray-200" : "border-[#2A2A4A]"
            }`}
          >
            {currentTheme === "light" ? (
              <Image
                src="/logo_azul.png"
                alt="Alejandría Consultora"
                width={180}
                height={40}
                className="h-10 md:h-12 w-auto"
              />
            ) : (
              <Image
                src="/logo.png"
                alt="Alejandría Consultora"
                width={180}
                height={40}
                className="h-10 md:h-12 w-auto"
              />
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className={`p-1 transition-colors ${
                currentTheme === "light"
                  ? "text-gray-900 hover:bg-primary/10 hover:text-primary"
                  : "text-white hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Cerrar menú</span>
            </Button>
          </div>

          {/* Navigation items - Scrollable */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1 min-h-0">
            {navigationItems.map((item) =>
              item.trigger ? (
                <div key={item.label} className="space-y-1">
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className={`w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center justify-between ${
                      currentTheme === "light"
                        ? "text-gray-900 hover:bg-gray-100"
                        : "text-white hover:bg-[#2A2A4A]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openSubmenu === item.label ? "rotate-180" : ""
                      } ${
                        currentTheme === "light"
                          ? "text-gray-600"
                          : "text-slate-400"
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openSubmenu === item.label
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 space-y-1 py-1">
                      {item.subItems?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-2 text-sm rounded-md transition-all ${
                            currentTheme === "light"
                              ? "text-gray-600 hover:text-primary hover:bg-primary/10"
                              : "text-slate-400 hover:text-primary hover:bg-primary/10"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href || "#"}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    currentTheme === "light"
                      ? "text-gray-900 hover:text-primary hover:bg-primary/10"
                      : "text-white hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Auth buttons at bottom - Always visible */}
          <div
            className={`shrink-0 p-4 space-y-3 border-t ${
              currentTheme === "light"
                ? "bg-white border-gray-200"
                : currentTheme === "dark"
                ? "bg-black border-gray-800"
                : "bg-[#1C1C34] border-[#2A2A4A]"
            }`}
          >
            <button
              aria-label="Abrir whatsapp"
              className={`w-full flex gap-2 border rounded-xl items-center justify-center py-3 px-4 font-semibold text-[15px] transition-all ${
                currentTheme === "light"
                  ? "border-gray-300 text-gray-700 hover:bg-primary/10 hover:text-primary"
                  : "border-[#26263F] text-[#B4C6D1] hover:bg-primary/10 hover:text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/icons/whatss.png"
                width={20}
                height={20}
                alt="WhatsApp Alejandría"
              />
              Contáctanos
            </button>

            <button
              aria-label="Abrir intranet"
              className={`w-full flex gap-2 justify-center items-center py-3 px-4 text-[15px] font-semibold border rounded-xl transition-all ${
                currentTheme === "light"
                  ? "border-gray-300 text-gray-700 hover:bg-primary/10 hover:border-primary/50"
                  : "border-[#26263F] text-white hover:bg-primary/10 hover:border-primary/50"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {currentTheme === "light" ? (
                <Image
                  src="/icons/LogoOscuro.svg"
                  alt="Alejandría Consultora"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src="/icons/LogoAlejandria.svg"
                  alt="Alejandría Consultora"
                  width={20}
                  height={20}
                />
              )}
              INTRANET
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
