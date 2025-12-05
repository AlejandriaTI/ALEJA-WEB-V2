"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FeaturedPostProps {
  totalArticles: number;
  filteredArticles: number;
}

export function FeaturedPost({
  totalArticles,
  filteredArticles,
}: FeaturedPostProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      {/* Main featured post */}
      <div className="lg:col-span-2">
        <div className="text-sm text-muted-foreground mb-2 font-medium">
          MOSTRANDO {filteredArticles} DE {totalArticles} BLOG
          {totalArticles !== 1 ? "S" : ""}
        </div>
        <Link href="/blog/introduccion-fastpanel" className="block">
          <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow cursor-pointer">
            <Image
              src="/fastpanel-server-control-panel.jpg"
              alt="Featured post about FastPanel server control panel"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-6 hover:bg-black/40 transition-colors">
              <div>
                <h3 className="text-white text-2xl font-bold">
                  Free Server
                  <br />
                  Control Panel
                </h3>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Side featured post */}
      <div className="lg:col-span-1">
        <div className="text-sm text-muted-foreground mb-2 font-medium">
          ASCENDENTE
        </div>
        <div className="bg-card border border-border rounded-lg p-6 h-full flex flex-col">
          <div className="flex gap-2 mb-4 flex-wrap">
            <span className="text-xs font-semibold text-primary-foreground bg-primary px-2 py-1 rounded">
              FASTPANEL
            </span>
            <span className="text-xs font-semibold text-primary-foreground bg-primary px-2 py-1 rounded">
              SERVIDORES
            </span>
            <span className="text-xs font-semibold text-primary-foreground bg-primary px-2 py-1 rounded">
              HOSTING
            </span>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3 flex-grow">
            INTRODUCCION DETALLADA A FASTPANEL: LA...
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            18 de agosto de 2025
          </p>
          <p className="text-sm text-foreground mb-6 line-clamp-3">
            Descubre cómo FastPanel puede simplificar la gestión de tus
            servidores.
          </p>
          <Link
            href="/blog/introduccion-fastpanel"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm"
          >
            Leer más <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
