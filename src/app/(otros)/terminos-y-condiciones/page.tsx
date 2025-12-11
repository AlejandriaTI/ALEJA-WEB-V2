"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  FileText,
  Shield,
  CreditCard,
  Scale,
  Mail,
  Calendar,
  Users,
  AlertCircle,
} from "lucide-react";

export default function TerminosPage() {
  const sections = [
    {
      id: "introduccion",
      title: "1. Introducción y Definiciones",
      icon: FileText,
    },
    { id: "aceptacion", title: "2. Aceptación de los Términos", icon: Users },
    { id: "registro", title: "3. Registro y Creación de Cuenta", icon: Users },
    { id: "privacidad", title: "4. Políticas de Privacidad", icon: Shield },
    { id: "pagos", title: "5. Pagos, Precios y Facturación", icon: CreditCard },
    { id: "legislacion", title: "6. Legislación Aplicable", icon: Scale },
    { id: "modificaciones", title: "7. Modificaciones", icon: Calendar },
    { id: "contacto", title: "8. Contacto", icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary text-balance">
                Términos y Condiciones
              </h1>
              <p className="text-muted-foreground mt-1">
                Última actualización: Febrero 2025
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24 lg:top-[220px]">
              <CardHeader>
                <CardTitle className="text-lg">Navegación</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[400px]">
                  <nav className="space-y-1 p-4">
                    {sections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group"
                        >
                          <Icon className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
                          <span className="text-sm font-medium">
                            {section.title}
                          </span>
                        </button>
                      );
                    })}
                  </nav>
                </ScrollArea>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            {/* Introduction */}
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed text-pretty">
                      Bienvenido a{" "}
                      <strong className="text-primary">
                        Alejandría Consultores
                      </strong>
                      , un equipo especializado en brindar asesoría académica,
                      acompañamiento metodológico, desarrollo de investigaciones
                      y soluciones formativas orientadas a estudiantes,
                      profesionales, instituciones educativas y organizaciones
                      que buscan elevar la calidad de sus proyectos académicos y
                      científicos.
                    </p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      Antes de utilizar nuestros servicios, es fundamental que
                      leas detenidamente estos términos y condiciones. Si en
                      algún momento no estás de acuerdo con estos términos, te
                      recomendamos que no continúes utilizando nuestros
                      servicios.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 1: Introducción y Definiciones */}
            <section id="introduccion" className="scroll-mt-40">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <FileText className="h-5 w-5" />
                    1. Introducción y Definiciones
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed">
                    Para una mejor comprensión de estos términos, es importante
                    definir ciertos conceptos clave:
                  </p>

                  <div className="grid gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">
                        Plataforma
                      </h4>
                      <p className="text-sm leading-relaxed">
                        Hace referencia al portal web, sistemas internos y
                        cualquier aplicación digital que utilice Alejandría
                        Consultores para ofrecer sus servicios o gestionar la
                        relación con sus clientes.
                      </p>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">
                        Usuario
                      </h4>
                      <p className="text-sm leading-relaxed">
                        Toda persona natural o jurídica que accede a nuestros
                        servicios, ya sea para solicitar asesoría, recibir
                        orientación académica, adquirir productos digitales, o
                        utilizar herramientas de apoyo brindadas por nuestro
                        equipo.
                      </p>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">
                        Servicios
                      </h4>
                      <p className="text-sm leading-relaxed">
                        Incluyen asesorías personalizadas, desarrollo guiado de
                        investigaciones, revisión metodológica, capacitación,
                        elaboración de materiales académicos, programas
                        formativos y recursos digitales.
                      </p>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">
                        Contenido
                      </h4>
                      <p className="text-sm leading-relaxed">
                        Todo material publicado por Alejandría Consultores,
                        incluyendo textos, documentos, artículos, plantillas,
                        imágenes, videos, presentaciones, entre otros.
                      </p>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">
                        Proveedor de Servicios de Pago
                      </h4>
                      <p className="text-sm leading-relaxed">
                        Empresas o plataformas externas que permiten procesar
                        pagos, gestionar comunicaciones o facilitar herramientas
                        digitales complementarias.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 2: Aceptación */}
            <section id="aceptacion" className="scroll-mt-40">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Users className="h-5 w-5" />
                    2. Aceptación de los Términos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed">
                    Al utilizar cualquier servicio de Alejandría Consultores, el
                    usuario declara que conoce, entiende y acepta completamente
                    estos Términos y Condiciones.
                  </p>
                  <p className="leading-relaxed">
                    Si en algún momento el usuario no está de acuerdo con estas
                    políticas, deberá abstenerse de continuar con el uso de
                    nuestros servicios.
                  </p>
                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      <strong>Importante:</strong> Alejandría Consultores se
                      reserva el derecho de denegar o cancelar un servicio ante
                      evidencias de fraude académico, suplantación,
                      incumplimiento ético, o cualquier comportamiento que
                      afecte la integridad profesional del equipo.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 3: Registro */}
            <section id="registro" className="scroll-mt-40">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Users className="h-5 w-5" />
                    3. Registro y Creación de Cuenta
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed">
                    Para acceder a determinados servicios (seguimiento, aula
                    virtual, descargas personalizadas), el usuario podrá
                    requerir una cuenta.
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                      <span className="leading-relaxed">
                        Proporcionar información real, completa y actualizada.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                      <span className="leading-relaxed">
                        Mantener la confidencialidad de tus credenciales de
                        acceso, sin compartir tu contraseña con terceros.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                      <span className="leading-relaxed">
                        Notificarnos de inmediato si detectas actividad
                        sospechosa en tu cuenta.
                      </span>
                    </li>
                  </ul>

                  <p className="leading-relaxed text-muted-foreground">
                    Alejandría Consultores puede suspender cuentas que presenten
                    uso indebido o violaciones éticas vinculadas al ámbito
                    académico.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 4: Privacidad */}
            <section id="privacidad" className="scroll-mt-40">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Shield className="h-5 w-5" />
                    4. Políticas de Privacidad y Protección de Datos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">
                      4.1. Información que Recopilamos
                    </h4>
                    <p className="leading-relaxed mb-4">
                      Alejandría Consultores recopila únicamente la información
                      necesaria para brindar un servicio eficiente, seguro y
                      personalizado.
                    </p>

                    <div className="grid gap-3">
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <strong className="text-primary">
                          Datos personales:
                        </strong>{" "}
                        Nombre, correo electrónico, número de teléfono y
                        cualquier otro dato proporcionado voluntariamente por el
                        usuario.
                      </div>
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <strong className="text-primary">Datos de pago:</strong>{" "}
                        procesados exclusivamente por pasarelas seguras como
                        Mercado Pago, Yape, Plin u otros aliados.
                      </div>
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <strong className="text-primary">
                          Datos de navegación:
                        </strong>{" "}
                        interacción en la plataforma, historial de consulta,
                        preferencias.
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold text-lg mb-3">
                      4.2. Uso de la Información
                    </h4>
                    <p className="leading-relaxed mb-4">
                      La información recopilada se utiliza para:
                    </p>

                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                        <span>
                          Gestionar solicitudes y servicios contratados.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                        <span>
                          Brindar acompañamiento académico personalizado.{" "}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                        <span>
                          Emitir reportes, facturación y comprobantes.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                        <span>
                          Garantizar la seguridad y prevención de fraudes dentro
                          de la plataforma.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold text-lg mb-3">
                      4.3. Derechos del Usuario
                    </h4>
                    <p className="leading-relaxed mb-4">
                      Como usuario de Alejandría Consultores, tienes derecho a:
                    </p>

                    <div className="grid gap-3">
                      <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                        <span className="leading-relaxed">
                          Solicitar actualización o eliminación de sus datos.{" "}
                        </span>
                      </div>
                      <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                        <span className="leading-relaxed">
                          Pedir información sobre el uso de su información.
                        </span>
                      </div>
                      <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                        <span className="leading-relaxed">
                          Retirar su consentimiento para el tratamiento de
                          datos, siempre que esto no afecte la prestación del
                          servicio.
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-muted-foreground">
                      Puedes ejercer estos derechos enviándonos una solicitud a{" "}
                      <strong>correo@alejandraconsultores.com</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 5: Pagos */}
            <section id="pagos" className="scroll-mt-40">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <CreditCard className="h-5 w-5" />
                    5. Pagos, Precios y Facturación
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed">
                    Los precios de los servicios y productos ofertados por
                    Alejandría Consultores son informados previamente y pueden
                    variar según complejidad, tiempos de entrega y modalidad de
                    trabajo.
                  </p>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">
                      5.1. Proceso de Compra
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                          1
                        </div>
                        <span className="leading-relaxed">
                          El usuario selecciona el servicio o paquete de
                          asesoría.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                          2
                        </div>
                        <span className="leading-relaxed">
                          El pago se procesará a través de terceros
                          especializados en pagos electrónicos, garantizando la
                          seguridad de la transacción.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                          3
                        </div>
                        <span className="leading-relaxed">
                          Una vez confirmado el pago, se habilita el acceso al
                          servicio o se inicia el trabajo acordado.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      5.2. Política de Reembolsos
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Dado que los servicios brindados son de naturaleza
                      intelectual y personalizada, no se aceptan reembolsos una
                      vez iniciada la prestación. En casos excepcionales, el
                      usuario podrá solicitar una revisión formal del caso.(lo
                      veremos)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 6: Legislación */}
            <section id="legislacion" className="scroll-mt-40">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Scale className="h-5 w-5" />
                    6. Legislación Aplicable y Resolución de Conflictos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">
                    Estos términos y condiciones se rigen por las leyes de{" "}
                    <strong>Perú</strong>. y cualquier controversia será
                    atendida ante los tribunales competentes de{" "}
                    <strong>Lima, Perú</strong>.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 7: Modificaciones */}
            <section id="modificaciones" className="scroll-mt-40">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Calendar className="h-5 w-5" />
                    7. Modificaciones a los Términos y Políticas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">
                    Alejandría Consultores podrá actualizar estos términos en
                    cualquier momento. Las modificaciones serán publicadas en la
                    página oficial y entrarán en vigor inmediatamente.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 8: Contacto */}
            <section id="contacto" className="scroll-mt-40">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Mail className="h-5 w-5" />
                    8. Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed mb-4">
                    Si tienes alguna duda sobre estos términos y condiciones o
                    sobre nuestras políticas de privacidad, puedes comunicarte
                    con nosotros a través de:
                  </p>

                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="font-medium">correo@decygo.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Call to Action */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  ¿Tienes alguna pregunta?
                </h3>
                <p className="text-muted-foreground mb-6 text-pretty">
                  Nuestro equipo de soporte está aquí para ayudarte con
                  cualquier duda sobre nuestros términos y condiciones.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  <Mail className="h-4 w-4 mr-2" />
                  Contactar Soporte
                </Button>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}
