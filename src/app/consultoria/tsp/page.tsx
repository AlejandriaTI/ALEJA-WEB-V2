export default function TSPPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-[550px] w-full flex items-center justify-center overflow-hidden">
        {/* Fondo con efecto blur + luces */}
        <div className="absolute inset-0">
          <div className="absolute -top-10 left-1/2 w-[600px] h-[600px] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full blur-3xl"></div>
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Impulsa tus proyectos con
            <br />
            <span className="text-cyan-400">innovación y excelencia</span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
            Transformamos tus ideas en resultados tangibles. Investigación,
            estrategia y tecnología al servicio de tus metas.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl shadow-lg transition">
              Comenzar ahora
            </button>
            <button className="px-8 py-3 border border-white/30 text-white hover:bg-white/10 rounded-xl transition">
              Ver servicios
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
