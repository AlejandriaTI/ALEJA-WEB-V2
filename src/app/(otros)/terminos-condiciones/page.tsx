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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
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
            <Card className="sticky top-24">
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
                      <strong className="text-primary">Decygo</strong>, una
                      plataforma digital diseñada para ofrecer herramientas y
                      recursos en línea dirigidos a emprendedores, profesionales
                      y empresas que buscan optimizar sus procesos y potenciar
                      su presencia digital.
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
            <section id="introduccion">
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
                        Hace referencia a Decygo, incluyendo su sitio web y
                        cualquier otra aplicación o canal digital que utilicemos
                        para prestar nuestros servicios.
                      </p>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">
                        Usuario
                      </h4>
                      <p className="text-sm leading-relaxed">
                        Persona natural o jurídica que accede a la plataforma,
                        ya sea para explorar, registrarse, adquirir productos
                        digitales o hacer uso de cualquier otro servicio
                        ofrecido.
                      </p>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">
                        Servicios
                      </h4>
                      <p className="text-sm leading-relaxed">
                        Se refiere a los productos digitales, herramientas y
                        recursos disponibles en Decygo, los cuales pueden
                        incluir guías, plantillas, cursos, softwares, entre
                        otros.
                      </p>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">
                        Contenido
                      </h4>
                      <p className="text-sm leading-relaxed">
                        Incluye todos los textos, imágenes, gráficos, logotipos,
                        videos y cualquier otro material que se encuentra
                        disponible en la plataforma.
                      </p>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">
                        Proveedor de Servicios de Pago
                      </h4>
                      <p className="text-sm leading-relaxed">
                        Empresas externas que facilitan el procesamiento de
                        pagos en la plataforma, tales como pasarelas de pago,
                        bancos u otros intermediarios financieros.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 2: Aceptación */}
            <section id="aceptacion">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Users className="h-5 w-5" />
                    2. Aceptación de los Términos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed">
                    El uso de Decygo implica la aceptación plena de estos
                    términos y condiciones. Si no estás de acuerdo con alguna de
                    las cláusulas aquí establecidas, debes abstenerte de
                    utilizar nuestros servicios.
                  </p>
                  <p className="leading-relaxed">
                    Al registrarte en nuestra plataforma, declaras y garantizas
                    que tienes al menos 18 años de edad o, en caso de ser menor,
                    que cuentas con la autorización expresa de tus padres o
                    tutores legales para hacer uso de nuestros servicios.
                  </p>
                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <p className="text-sm leading-relaxed">
                      <strong>Importante:</strong> Nos reservamos el derecho de
                      rechazar el acceso o cancelar la cuenta de cualquier
                      usuario que incumpla estos términos o que realice
                      actividades sospechosas o fraudulentas dentro de la
                      plataforma.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 3: Registro */}
            <section id="registro">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Users className="h-5 w-5" />
                    3. Registro y Creación de Cuenta
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed">
                    Para acceder a ciertos servicios de Decygo, es posible que
                    necesites crear una cuenta de usuario. En este proceso, te
                    comprometes a:
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
                    Nos reservamos el derecho de suspender o eliminar cuentas en
                    caso de detectar fraudes, suplantación de identidad,
                    incumplimientos de estos términos o cualquier actividad que
                    pueda perjudicar el funcionamiento de la plataforma.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 4: Privacidad */}
            <section id="privacidad">
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
                      Cuando utilizas Decygo, podemos recopilar la siguiente
                      información:
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
                        Información financiera necesaria para procesar
                        transacciones, administrada exclusivamente por nuestros
                        proveedores de pago.
                      </div>
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <strong className="text-primary">
                          Datos de navegación:
                        </strong>{" "}
                        Información sobre el uso de la plataforma, incluyendo
                        direcciones IP, tipo de navegador, páginas visitadas y
                        tiempo de sesión.
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
                          Procesar transacciones y brindar acceso a los
                          productos digitales.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                        <span>
                          Mejorar la experiencia del usuario en la plataforma.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                        <span>
                          Comunicarnos contigo en relación con soporte,
                          actualizaciones o promociones.
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
                      4.5. Derechos del Usuario
                    </h4>
                    <p className="leading-relaxed mb-4">
                      Como usuario de Decygo, tienes derecho a:
                    </p>

                    <div className="grid gap-3">
                      <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                        <span className="leading-relaxed">
                          Acceder, modificar o eliminar tu información personal.
                        </span>
                      </div>
                      <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                        <span className="leading-relaxed">
                          Solicitar que dejemos de enviarte comunicaciones
                          promocionales.
                        </span>
                      </div>
                      <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                        <span className="leading-relaxed">
                          Retirar tu consentimiento para el tratamiento de
                          datos, siempre que esto no afecte la prestación del
                          servicio.
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-muted-foreground">
                      Puedes ejercer estos derechos enviándonos una solicitud a{" "}
                      <strong>correo@decygo.com</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 5: Pagos */}
            <section id="pagos">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <CreditCard className="h-5 w-5" />
                    5. Pagos, Precios y Facturación
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed">
                    Los precios de los productos y servicios ofrecidos en Decygo
                    están claramente especificados en la plataforma y pueden
                    estar sujetos a modificaciones sin previo aviso.
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
                          Una vez seleccionado el producto o servicio, el
                          usuario debe proceder con el pago a través de los
                          métodos habilitados en la plataforma.
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
                          Una vez confirmado el pago, se otorgará acceso
                          inmediato al producto digital adquirido o, en su
                          defecto, se enviará por correo electrónico.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      5.2. Política de Reembolsos
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Dado que los productos ofrecidos en Decygo son digitales e
                      intangibles, no se aceptan reembolsos una vez realizada la
                      compra. Sin embargo, en casos excepcionales, el usuario
                      podrá presentar una solicitud de revisión a través de
                      nuestro soporte.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 6: Legislación */}
            <section id="legislacion">
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
                    <strong>Perú</strong>. Cualquier disputa que surja en
                    relación con Decygo será resuelta ante los tribunales de{" "}
                    <strong>Lima, Perú</strong>.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 7: Modificaciones */}
            <section id="modificaciones">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Calendar className="h-5 w-5" />
                    7. Modificaciones a los Términos y Políticas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">
                    Nos reservamos el derecho de modificar estos términos y
                    políticas de privacidad en cualquier momento. Las
                    actualizaciones entrarán en vigor desde el momento en que
                    sean publicadas en la plataforma. Es responsabilidad del
                    usuario revisar periódicamente este documento.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 8: Contacto */}
            <section id="contacto">
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
