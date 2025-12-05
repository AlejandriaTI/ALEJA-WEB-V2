export interface Article {
  id: string;
  title: string;
  date: string;
  category: string[];
  image: string;
  imageAlt: string;
  content: string;
  excerpt: string;
  author: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    id: "introduccion-fastpanel",
    title:
      "Introducción Detallada a FastPanel: La Solución Completa para Gestión de Servidores",
    date: "18 de agosto de 2025",
    category: ["FASTPANEL", "SERVIDORES", "HOSTING"],
    image: "/fastpanel-server-control-panel.jpg",
    imageAlt: "FastPanel server control panel",
    author: "DigitalComvenia Team",
    readTime: "8 min de lectura",
    excerpt:
      "Descubre cómo FastPanel puede simplificar la gestión de tus servidores.",
    content: `
      <h2>¿Qué es FastPanel?</h2>
      <p>FastPanel es un panel de control de servidor revolucionario que simplifica enormemente la gestión de infraestructura web. Diseñado con interfaz moderna e intuitiva, permite a administradores y desarrolladores controlar múltiples servidores desde un único lugar.</p>
      
      <h2>Características Principales</h2>
      <ul>
        <li><strong>Gestión Centralizada:</strong> Controla todos tus servidores desde un panel único</li>
        <li><strong>Interfaz Intuitiva:</strong> Diseño moderno y fácil de usar</li>
        <li><strong>Rendimiento Optimizado:</strong> Consume mínimos recursos de tu servidor</li>
        <li><strong>Seguridad Avanzada:</strong> Protección multicapa para tus datos</li>
        <li><strong>Automatización:</strong> Scripts y tareas automáticas integradas</li>
      </ul>

      <h2>Ventajas para tu Negocio</h2>
      <p>Implementar FastPanel en tu infraestructura te proporciona múltiples beneficios: reduce el tiempo de administración en un 60%, minimiza errores manuales y permite escalar tu infraestructura sin complicaciones. Además, su soporte técnico disponible 24/7 garantiza que siempre tendrás ayuda cuando la necesites.</p>

      <h2>Casos de Uso</h2>
      <p>FastPanel es ideal para agencias de hosting, desarrolladores independientes, empresas tecnológicas y cualquier organización que maneje múltiples servidores. Desde startups hasta grandes corporaciones, FastPanel se adapta a tus necesidades.</p>

      <h2>Conclusión</h2>
      <p>Si buscas una solución moderna, confiable y eficiente para la gestión de servidores, FastPanel es la opción perfecta. Únete a miles de usuarios satisfechos alrededor del mundo que ya disfrutan de sus beneficios.</p>
    `,
  },
  {
    id: "blog-wordpress",
    title: "Blog de Ejemplo Completo con WordPress: Guía Paso a Paso",
    date: "18 de agosto de 2025",
    category: ["WORDPRESS", "BLOG", "FRONTEND"],
    image: "/wordpress-blog-setup.jpg",
    imageAlt: "WordPress blog setup",
    author: "DigitalComvenia Team",
    readTime: "12 min de lectura",
    excerpt:
      "Aprende a crear un blog con WordPress. Incluye imágenes, columnas, listas y tablas en WordPress.",
    content: `
      <h2>Comenzando con WordPress</h2>
      <p>WordPress es la plataforma de blogging más popular del mundo, potenciando más del 43% de todos los sitios web. Su flexibilidad, facilidad de uso y amplio ecosistema de plugins lo hacen perfecto para crear blogs profesionales.</p>
      
      <h2>Instalación y Configuración Inicial</h2>
      <p>El primer paso es descargar WordPress desde wordpress.org e instalarlo en tu servidor. Una vez instalado, accede al panel de administración y configura los ajustes básicos como el título del sitio, descripción, zona horaria y otros parámetros importantes.</p>

      <h2>Creando tu Primer Post</h2>
      <ul>
        <li>Navega a Posts → Añadir Nuevo</li>
        <li>Escribe un título atractivo</li>
        <li>Utiliza el editor visual para formatear tu contenido</li>
        <li>Añade imágenes relevantes</li>
        <li>Establece categorías y etiquetas</li>
        <li>Publica cuando esté listo</li>
      </ul>

      <h2>Mejorando el Contenido</h2>
      <p>WordPress permite insertar elementos ricos en tus posts: imágenes, videos, galerías, tablas y columnas personalizadas. El editor de bloques Gutenberg proporciona una interfaz visual intuitiva para diseñar posts atractivos sin necesidad de código.</p>

      <h2>SEO y Promoción</h2>
      <p>Utiliza plugins como Yoast SEO para optimizar tus posts para motores de búsqueda. Implementa palabras clave estratégicamente, escribe meta descripciones atractivas y promociona tu contenido en redes sociales.</p>

      <h2>Conclusión</h2>
      <p>Con WordPress tienes todo lo necesario para crear un blog profesional y exitoso. La plataforma está en constante evolución y su comunidad ofrece infinitas posibilidades de personalización y extensión.</p>
    `,
  },
  {
    id: "astro-universo",
    title:
      "Explorando el Universo de Astro: El Framework Moderno para Desarrollo Web",
    date: "18 de agosto de 2025",
    category: ["ASTRO", "WEB DEVELOPMENT", "TUTORIAL"],
    image: "/astro-web-development.jpg",
    imageAlt: "Astro framework tutorial",
    author: "DigitalComvenia Team",
    readTime: "10 min de lectura",
    excerpt:
      "Una guía detallada sobre cómo empezar con Astro y crear sitios web modernos.",
    content: `
      <h2>¿Qué es Astro?</h2>
      <p>Astro es un framework web moderno diseñado para construir sitios web más rápidos con menos JavaScript. Permite mezclar y combinar componentes de diferentes frameworks como React, Vue o Svelte en un único proyecto.</p>
      
      <h2>Ventajas de Astro</h2>
      <ul>
        <li><strong>Rendimiento Excepcional:</strong> Menos JavaScript significa sitios más rápidos</li>
        <li><strong>Flexibilidad:</strong> Combina cualquier framework frontend</li>
        <li><strong>Componentes Reutilizables:</strong> Crea componentes que funcionan en cualquier lugar</li>
        <li><strong>Renderizado Estático:</strong> Genera sitios estáticos ultra-rápidos</li>
        <li><strong>Integración Fácil:</strong> Compatible con CMS, APIs y servicios externos</li>
      </ul>

      <h2>Estructura de Proyecto</h2>
      <p>Un proyecto Astro típico incluye carpetas para páginas, componentes, layouts y assets estáticos. La organización clara del proyecto facilita el mantenimiento y escalabilidad del mismo.</p>

      <h2>Componentes Astro</h2>
      <p>Los componentes Astro (.astro) son la base del framework. Combinan HTML, CSS y JavaScript en un solo archivo, similar a los Web Components. Pueden incluir componentes de otros frameworks sin problemas.</p>

      <h2>Deployment</h2>
      <p>Astro ofrece múltiples opciones de deployment: Vercel, Netlify, GitHub Pages y muchas más. El build estático hace que el deployment sea rápido y confiable.</p>

      <h2>Conclusión</h2>
      <p>Astro representa el futuro del desarrollo web moderno, ofreciendo la mejor combinación de rendimiento, flexibilidad y experiencia del desarrollador. Es perfecto para blogs, sitios de documentación y aplicaciones web estáticas.</p>
    `,
  },
];

// Helper para obtener un artículo por ID
export function getArticleById(id: string): Article | undefined {
  return articles.find((article) => article.id === id);
}

// Helper para buscar artículos
export function searchArticles(query: string): Article[] {
  if (!query.trim()) return articles;

  const lowerQuery = query.toLowerCase();
  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.category.some((cat) => cat.toLowerCase().includes(lowerQuery))
  );
}
