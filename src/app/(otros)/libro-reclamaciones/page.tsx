"use client";

import React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  AlertCircle,
  CheckCircle2,
  ChevronDownIcon,
  FileText,
  Loader2,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export default function LibroReclamaciones() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [values, setValues] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    tipo_documento: "dni",
    numero_documento: "",
    celular: "",
    departamento: "",
    provincia: "",
    direccion: "",
    tipo_queja: "queja",
    relacionado: "producto",
    descripcion: "",
    detalle_reclamo: "",
    pedido_cliente: "",
    fecha_reclamo: new Date().toISOString().split("T")[0],
  });

  const handleChange = (id: string, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key as keyof typeof values]);
      }

      const response = await fetch(
        "https://alejandriaconsultora.com/send_email.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        setSubmitStatus("success");
        setValues({
          nombres: "",
          apellidos: "",
          email: "",
          tipo_documento: "dni",
          numero_documento: "",
          celular: "",
          departamento: "",
          provincia: "",
          direccion: "",
          tipo_queja: "queja",
          relacionado: "producto",
          descripcion: "",
          detalle_reclamo: "",
          pedido_cliente: "",
          fecha_reclamo: new Date().toISOString().split("T")[0],
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background py-12 px-4 mt-16">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-primary">
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Libro de Reclamaciones
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Alejandría Consultora
          </p>
        </div>

        {/* Info Card */}
        <Card className="border-muted">
          <CardContent className="pt-6 space-y-4 text-sm text-muted-foreground">
            <div className="space-y-2">
              <p>
                <span className="font-medium text-foreground">RECLAMO:</span>{" "}
                Disconformidad relacionada a los productos o servicios.
              </p>
              <p>
                <span className="font-medium text-foreground">QUEJA:</span>{" "}
                Disconformidad no relacionada a los productos o servicios; o,
                malestar o descontento respecto a la atención al público.
              </p>
            </div>
            <Separator />
            <p className="text-xs">
              La formulación del reclamo no impide acudir a otras vías de
              solución de controversias ni de requisitos previos para interponer
              una denuncia ante el INDECOPI. El proveedor deberá dar respuesta
              al reclamo en un plazo no mayor a diez (10) días calendario,
              pudiendo ampliar el plazo hasta por treinta (30) días más, previa
              comunicación al consumidor.
            </p>
            <p className="text-xs italic">
              (*) Datos Obligatorios - Artículo 5 D.S. 006-2014-PCM
            </p>
          </CardContent>
        </Card>

        {/* Form */}
        <Card>
          <CardHeader>
            <CardTitle>Datos del Consumidor</CardTitle>
            <CardDescription>
              Complete todos los campos requeridos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="nombres">Nombres *</Label>
                  <Input
                    id="nombres"
                    placeholder="Ingrese sus nombres"
                    required
                    value={values.nombres}
                    onChange={(e) => handleChange("nombres", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apellidos">Apellidos *</Label>
                  <Input
                    id="apellidos"
                    placeholder="Ingrese sus apellidos"
                    required
                    value={values.apellidos}
                    onChange={(e) => handleChange("apellidos", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    required
                    value={values.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tipo_documento">Tipo de Documento *</Label>
                  <Select
                    value={values.tipo_documento}
                    onValueChange={(value) =>
                      handleChange("tipo_documento", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dni">DNI</SelectItem>
                      <SelectItem value="ruc">RUC</SelectItem>
                      <SelectItem value="ce">CE</SelectItem>
                      <SelectItem value="pasaporte">Pasaporte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numero_documento">
                    Número de Documento *
                  </Label>
                  <Input
                    id="numero_documento"
                    placeholder="Ingrese su documento"
                    required
                    value={values.numero_documento}
                    onChange={(e) =>
                      handleChange("numero_documento", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="celular">Celular *</Label>
                  <Input
                    id="celular"
                    type="tel"
                    placeholder="999 999 999"
                    required
                    value={values.celular}
                    onChange={(e) => handleChange("celular", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="departamento">Departamento *</Label>
                  <Input
                    id="departamento"
                    placeholder="Departamento"
                    required
                    value={values.departamento}
                    onChange={(e) =>
                      handleChange("departamento", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="provincia">Provincia *</Label>
                  <Input
                    id="provincia"
                    placeholder="Provincia"
                    required
                    value={values.provincia}
                    onChange={(e) => handleChange("provincia", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="direccion">Dirección *</Label>
                  <Input
                    id="direccion"
                    placeholder="Dirección completa"
                    required
                    value={values.direccion}
                    onChange={(e) => handleChange("direccion", e.target.value)}
                  />
                </div>
              </div>

              <Separator />

              {/* Claim Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Detalle del Reclamo</h3>
                  <p className="text-sm text-muted-foreground">
                    Al brindar su correo electrónico, autoriza que cualquier
                    comunicación respecto al reclamo se realice a través del
                    mismo.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="tipo_queja">Tipo *</Label>
                    <Select
                      value={values.tipo_queja}
                      onValueChange={(value) =>
                        handleChange("tipo_queja", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="queja">Queja</SelectItem>
                        <SelectItem value="reclamo">Reclamo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="relacionado">Relacionado a *</Label>
                    <Select
                      value={values.relacionado}
                      onValueChange={(value) =>
                        handleChange("relacionado", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="producto">Producto</SelectItem>
                        <SelectItem value="servicio">Servicio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <Label htmlFor="fecha_reclamo">Fecha *</Label>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          id="fecha_reclamo"
                          className={`w-full justify-between font-normal ${
                            !date && "text-muted-foreground"
                          }`}
                        >
                          {date ? (
                            date.toLocaleDateString("es-ES", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          ) : (
                            <span>Seleccionar fecha</span>
                          )}
                          <ChevronDownIcon className="h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(newDate) => {
                            setDate(newDate);
                            if (newDate) {
                              handleChange(
                                "fecha_reclamo",
                                newDate.toISOString().split("T")[0]
                              );
                            }
                            setOpen(false);
                          }}
                          initialFocus
                          captionLayout="dropdown"
                          fromYear={2020}
                          toYear={new Date().getFullYear()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="descripcion">
                      Descripción del producto o servicio *
                    </Label>
                    <Textarea
                      id="descripcion"
                      placeholder="Describa el producto o servicio..."
                      required
                      rows={4}
                      value={values.descripcion}
                      onChange={(e) =>
                        handleChange("descripcion", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="detalle_reclamo">
                      Detalle del Reclamo / Queja *
                    </Label>
                    <Textarea
                      id="detalle_reclamo"
                      placeholder="Detalle su reclamo o queja..."
                      required
                      rows={4}
                      value={values.detalle_reclamo}
                      onChange={(e) =>
                        handleChange("detalle_reclamo", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pedido_cliente">Pedido del cliente *</Label>
                    <Textarea
                      id="pedido_cliente"
                      placeholder="¿Qué solución espera?"
                      required
                      rows={4}
                      value={values.pedido_cliente}
                      onChange={(e) =>
                        handleChange("pedido_cliente", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Su reclamo ha sido enviado exitosamente.</span>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="h-4 w-4" />
                  <span>
                    Ocurrió un error al enviar. Por favor, intente nuevamente.
                  </span>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Reclamo"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
