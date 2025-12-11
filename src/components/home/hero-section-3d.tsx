"use client";

import { Button } from "@/components/ui/button";
import { Users, Award, TrendingUp } from "lucide-react";
import { useTheme } from "next-themes";
import Toga from "../3D/toga";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { NumberTicker } from "../ui/number-ticker";
import { motion } from "framer-motion";

export function HeroSection3D() {
  const { theme, resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();

  const isLight =
    hasMounted && (theme === "light" || resolvedTheme === "light");

  return (
    <section className="relative pt-20 md:pt-24 lg:pt-28 pb-8 md:pb-12 lg:pb-16 overflow-hidden">
      {/* Background decor - Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[100px] ${
            isLight ? "bg-primary/10 opacity-20" : "bg-[#0CB2D5]/20 opacity-40"
          }`}
        />
        <motion.div
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className={`absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[120px] ${
            isLight ? "bg-primary/5 opacity-15" : "bg-[#0CB2D5]/10 opacity-30"
          }`}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 max-w-[1400px]">
        {/* GRID RESPONSIVE - 2 columnas desde tablet (md) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-5 md:space-y-6 lg:space-y-8"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`px-4 py-2 border rounded-full text-sm font-semibold inline-block backdrop-blur-sm ${
                isLight
                  ? "bg-primary/10 text-primary border-primary/20"
                  : "bg-[#0CB2D5]/10 text-[#0CB2D5] border-[#0CB2D5]/20"
              }`}
            >
              ✨ Más de 10 años de experiencia
            </motion.span>

            <h1
              className={`text-[2rem] sm:text-[2.5rem] md:text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] font-bold leading-tight ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              Alejandría <br />
              <span
                className={`text-transparent bg-clip-text ${
                  isLight
                    ? "bg-linear-to-r from-primary to-gray-900"
                    : "bg-linear-to-r from-[#0CB2D5] to-white"
                }`}
              >
                A la altura de tus metas
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={`text-base sm:text-lg md:text-base lg:text-xl ${
                isLight ? "text-gray-600" : "text-slate-300"
              }`}
            >
              Asesoría académica profesional que te acompaña en cada paso de tu
              proyecto. Más de 1,500 casos de éxito nos respaldan.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 md:gap-4"
            >
              <Button
                aria-label="Comienza ahora"
                size="lg"
                className="bg-[#068EAD] hover:bg-[#057c96] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]
             font-bold shadow-[0_0_20px_rgba(6,142,173,0.3)] hover:shadow-[0_0_30px_rgba(6,142,173,0.5)] 
             transition-all border-none text-sm md:text-base"
              >
                Comienza Ahora
              </Button>

              <Button
                size="lg"
                aria-label="Conoce más"
                variant="outline"
                className={`border-2 font-semibold text-sm md:text-base ${
                  isLight
                    ? "border-gray-300 text-gray-700 hover:bg-gray-100"
                    : "border-white/20 text-white hover:bg-white/10 bg-transparent"
                }`}
              >
                Conoce Más
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className={`grid grid-cols-3 gap-3 md:gap-4 lg:gap-6 pt-6 border-t ${
                isLight ? "border-gray-200" : "border-white/10"
              }`}
            >
              {[
                { icon: Users, number: "+1500", label: "Casos de éxito" },
                { icon: Award, number: "+10", label: "Años" },
                { icon: TrendingUp, number: "+20", label: "Empresas" },
              ].map((stat) => (
                <div key={stat.label} className="text-center space-y-1">
                  <stat.icon
                    className={`w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 mx-auto ${
                      isLight ? "text-primary" : "text-[#0CB2D5]"
                    }`}
                  />
                  <p
                    className={`text-lg md:text-xl lg:text-2xl font-bold flex items-center justify-center gap-1`}
                  >
                    {stat.number.includes("+") && (
                      <span
                        className={isLight ? "text-primary" : "text-[#0CB2D5]"}
                      >
                        +
                      </span>
                    )}

                    <NumberTicker
                      value={Number(stat.number.replace(/[^0-9]/g, ""))}
                      className={isLight ? "text-primary" : "text-[#0CB2D5]"}
                    />
                  </p>

                  <p
                    className={`text-xs md:text-xs lg:text-sm ${
                      isLight ? "text-gray-500" : "text-slate-400"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT — 3D MODEL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[500px] xl:h-[580px] flex items-center justify-center"
          >
            <div className="w-full h-full max-w-[450px] md:max-w-[400px] lg:max-w-[600px] mx-auto pointer-events-none">
              <Toga />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
