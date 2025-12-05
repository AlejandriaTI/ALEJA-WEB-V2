export function BlogHeader() {
  return (
    <div className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Alejandria Blog
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
          Bienvenido al blog de Alejandria. Aquí encontrarás las últimas
          noticias, actualizaciones y artículos sobre nuestros servicios y la
          industria.
        </p>
      </div>
    </div>
  );
}
