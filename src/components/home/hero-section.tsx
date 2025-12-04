"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertCircle,
  CheckCircle,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";

export function HeroSection() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    servicio: "",
    carrera: "",
    universidad: "",
    telefono: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setFormData({
        nombres: "",
        apellidos: "",
        servicio: "",
        carrera: "",
        universidad: "",
        telefono: "",
      });
    } catch (err) {
      setError("Ocurrió un error al enviar el formulario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen pt-20 md:pt-28 pb-12 bg-[#1C1C34] overflow-hidden">
      {/* Background decor - Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#0CB2D5]/20 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#0CB2D5]/10 rounded-full mix-blend-screen filter blur-[120px] opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-[#0CB2D5]/10 text-[#0CB2D5] border border-[#0CB2D5]/20 rounded-full text-sm font-semibold backdrop-blur-sm">
                  ✨ Más de 10 años de experiencia
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Alejandría <br />
                <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-[#0CB2D5] to-white">
                  A la altura de tus metas
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                Asesoría académica profesional que te acompaña en cada paso de
                tu proyecto. Más de 1,500 casos de éxito nos respaldan.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-[#0CB2D5] hover:bg-[#0aa1c0] text-white font-bold shadow-[0_0_20px_rgba(12,178,213,0.3)] hover:shadow-[0_0_30px_rgba(12,178,213,0.5)] transition-all border-none"
              >
                Comienza Ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white hover:bg-white/10 font-semibold bg-transparent"
              >
                Conoce Más
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10 max-w-md">
              {[
                { icon: Users, number: "+1500", label: "Casos de éxito" },
                { icon: Award, number: "+10", label: "Años" },
                { icon: TrendingUp, number: "+20", label: "Empresas" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="space-y-1 sm:space-y-2 text-center"
                >
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0CB2D5] mx-auto" />
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {stat.number}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                ¡Da el primer paso!
              </h2>
              <p className="text-slate-300">
                Completa el formulario y nos pondremos en contacto contigo
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Nombres"
                value={formData.nombres}
                onChange={(e) => handleChange("nombres", e.target.value)}
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-[#0CB2D5] focus:ring-[#0CB2D5]"
                required
              />

              <Input
                placeholder="Apellidos"
                value={formData.apellidos}
                onChange={(e) => handleChange("apellidos", e.target.value)}
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-[#0CB2D5] focus:ring-[#0CB2D5]"
                required
              />

              <Select
                value={formData.servicio}
                onValueChange={(value) => handleChange("servicio", value)}
              >
                <SelectTrigger className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-[#0CB2D5] focus:ring-[#0CB2D5]">
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tesis">Tesis</SelectItem>
                  <SelectItem value="tsp">TSP</SelectItem>
                  <SelectItem value="articulo">Artículo Científico</SelectItem>
                  <SelectItem value="plan">Plan de Negocio</SelectItem>
                </SelectContent>
              </Select>

              <Input
                placeholder="Carrera"
                value={formData.carrera}
                onChange={(e) => handleChange("carrera", e.target.value)}
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-[#0CB2D5] focus:ring-[#0CB2D5]"
                required
              />

              <Input
                placeholder="Universidad"
                value={formData.universidad}
                onChange={(e) => handleChange("universidad", e.target.value)}
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-[#0CB2D5] focus:ring-[#0CB2D5]"
                required
              />

              <Input
                placeholder="Teléfono / WhatsApp"
                value={formData.telefono}
                onChange={(e) => handleChange("telefono", e.target.value)}
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-[#0CB2D5] focus:ring-[#0CB2D5]"
                required
              />

              {success && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 flex items-center gap-3 text-green-400">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">
                    ¡Formulario enviado con éxito!
                  </span>
                </div>
              )}

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3 text-red-400">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{error}</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0CB2D5] hover:bg-[#0aa1c0] text-white font-bold h-12 shadow-lg hover:shadow-xl transition-all"
              >
                {loading ? "Enviando..." : "¡Da el primer paso!"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
