import Toga from "@/components/3D/toga";

export default function CentroRecursos() {
  return (
    <main className="min-h-screen mt-18 bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
          Centro de Recursos
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          Explora nuestros recursos en 3D
        </p>

        {/* Contenedor con altura definida para el Canvas 3D */}
        <div className="w-full h-[600px] rounded-lg overflow-hidden border border-border bg-card shadow-lg">
          <Toga />
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex flex-col gap-2 text-sm text-muted-foreground">
            <p>🖱️ Click izquierdo + arrastrar: Rotar</p>
            <p>🔍 Scroll: Zoom in/out</p>
            <p>🔄 Rotación automática activada</p>
          </div>
        </div>
      </div>
    </main>
  );
}
