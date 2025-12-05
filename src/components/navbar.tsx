"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
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

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

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

  return (
    <>
      <nav className="w-full border-b border-[#26263F] bg-[#121221]/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-40 shadow-md">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.png"
                alt="Alejandría Consultora"
                width={180}
                height={40}
                priority
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center flex-1 ml-8">
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="gap-1">
                  {navigationItems.map((item) =>
                    item.trigger ? (
                      <NavigationMenuItem key={item.label}>
                        <NavigationMenuTrigger className="text-sm font-medium text-white hover:text-[#0CB2D5] transition-colors bg-transparent hover:bg-[#0CB2D5]/10 focus:bg-[#0CB2D5]/10 focus:text-[#0CB2D5]">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-48 p-2 space-y-1 bg-[#1A1A2F] border border-[#26263F] rounded-md shadow-2xl">
                            {item.subItems?.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-[#B4C6D1] rounded-md hover:bg-[#0CB2D5]/10 hover:text-[#0CB2D5] transition-all"
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
                            className="px-4 py-2 text-sm font-medium text-white hover:text-[#0CB2D5] transition-colors rounded-md hover:bg-[#0CB2D5]/10"
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
            <div className="flex gap-3 items-center">
              <AnimatedThemeToggler />

              <button
                aria-label="Abrir whatsapp"
                className="hidden lg:flex w-[190px] gap-2 border border-[#26263F] rounded-xl items-center py-2 px-4 font-semibold text-[#B4C6D1] text-[15px] hover:bg-[#0CB2D5]/10 hover:text-white transition-all"
              >
                <Image
                  src="/icons/whatss.png"
                  width={20}
                  height={20}
                  alt="WhatsApp Alejandría"
                />
                Contáctanos
              </button>

              <button className="hidden lg:flex gap-1 px-8 py-2 justify-center items-center text-[15px] font-semibold text-white border border-[#26263F] rounded-xl hover:bg-[#0CB2D5]/10 hover:border-[#0CB2D5]/50 transition-all">
                <Image
                  src="/icons/alejaIcon.png"
                  width={20}
                  height={20}
                  alt="Intranet Alejandría"
                />
                INTRANET
              </button>
            </div>

            {/* Mobile button */}
            <Button
              variant="ghost"
              size="sm"
              aria-label="Abrir menú de navegación"
              className="lg:hidden p-2 text-white hover:bg-[#0CB2D5]/10"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
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
          className={`absolute right-0 top-0 h-full w-4/5 max-w-xs bg-[#1C1C34] shadow-2xl transform transition-transform duration-300 ease-in-out border-l border-[#2A2A4A] flex flex-col ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="shrink-0 flex items-center justify-between p-4 border-b border-[#2A2A4A]">
            <Image
              src="/logo.png"
              alt="Alejandría Consultora"
              width={180}
              height={40}
              className="h-10 md:h-12 w-auto"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="p-1 text-white hover:bg-[#0CB2D5]/10 hover:text-[#0CB2D5]"
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
                    className="w-full text-left px-4 py-2 text-sm font-medium text-white hover:bg-[#2A2A4A] rounded-md transition-all flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        openSubmenu === item.label ? "rotate-180" : ""
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
                          className="block px-4 py-2 text-sm text-slate-400 hover:text-[#0CB2D5] hover:bg-[#0CB2D5]/10 rounded-md transition-all"
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
                  className="block px-4 py-2 text-sm font-medium text-white hover:text-[#0CB2D5] hover:bg-[#0CB2D5]/10 rounded-md transition-all"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Auth buttons at bottom - Always visible */}
          <div className="shrink-0 p-4 space-y-3 border-t border-[#26263F] bg-[#16162c]">
            <button
              aria-label="Abrir whatsapp"
              className="w-full flex gap-2 border border-[#26263F] rounded-xl items-center justify-center py-3 px-4 font-semibold text-[#B4C6D1] text-[15px] hover:bg-[#0CB2D5]/10 hover:text-white transition-all"
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
              className="w-full flex gap-2 justify-center items-center py-3 px-4 text-[15px] font-semibold text-white border border-[#26263F] rounded-xl hover:bg-[#0CB2D5]/10 hover:border-[#0CB2D5]/50 transition-all"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/icons/alejaIcon.png"
                width={20}
                height={20}
                alt="Intranet Alejandría"
              />
              INTRANET
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
