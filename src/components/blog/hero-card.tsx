import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
export default function HeroCard() {
  return (
    <div className="relative rounded-xl overflow-hidden h-80 md:h-160">
      {/* Background Image */}
      <Image
        src="/astro-web-development.jpg"
        alt="Hero article"
        width={1000}
        height={600}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
        {/* Top spacer */}
        <div></div>

        {/* Bottom content */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Design in The Age of AI: How to adapt lazily
            </h2>
            <p className="text-white/90 text-sm md:text-base">
              We break down why your next Gen 2 AI adopters clearing about
              everything else.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-white/20 text-white hover:bg-white/30">
              WORK
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30">
              Design System
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30">
              News & Care
            </Badge>
          </div>

          {/* Author and Date */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20"></div>
              <div className="text-sm">
                <p className="font-medium text-white">Josephus U. Witz</p>
                <p className="text-white/70">Jun 25, 2025</p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
}
