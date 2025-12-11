# AlejandriaTI Web (Aleja Web New)

Este repositorio contiene el código fuente de la nueva plataforma web para **AlejandriaTI**, desarrollada con las últimas tecnologías web para ofrecer una experiencia de usuario moderna, interactiva y de alto rendimiento.

## 🚀 Tecnologías Principales

El proyecto está construido sobre un stack moderno y potente:

- **[Next.js 16](https://nextjs.org/)**: Framework de React para producción, utilizando el App Router para una navegación óptima y SEO.
- **[React 19](https://react.dev/)**: Biblioteca para construir interfaces de usuario.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que añade tipado estático para un código más robusto y mantenible.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework de utilidad para diseño rápido y responsivo.
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animaciones fluidas y complejas.
- **[Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)**: Para la implementación de gráficos y modelos 3D interactivos en la web.
- **[Radix UI](https://www.radix-ui.com/)**: Primitivas de componentes accesibles y sin estilos para construir el sistema de diseño.
- **[Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)**: Colecciones de iconos vectoriales.

## 📂 Estructura del Proyecto

El código está organizado dentro de la carpeta `src` siguiendo las convenciones de Next.js App Router:

```bash
src/
├── app/                  # Rutas y páginas de la aplicación
│   ├── (otros)/         # Rutas agrupadas (políticas, términos, etc.)
│   ├── blog/            # Sección de blog
│   ├── centro-recursos/ # Centro de recursos para estudiantes
│   ├── consultoria/     # Páginas de servicios de consultoría
│   ├── nosotros/        # Página "Sobre Nosotros"
│   ├── promociones/     # Ofertas y planes
│   ├── layout.tsx       # Layout principal (Navbar, Footer, Providers)
│   ├── page.tsx         # Página de inicio (Landing Page)
│   └── globals.css      # Estilos globales
├── components/           # Componentes reutilizables
│   ├── 3D/              # Modelos y escenas 3D (Three.js)
│   ├── biblia-tesista/  # Componentes específicos del producto "Biblia del Tesista"
│   ├── blog/            # Componentes para el blog
│   ├── centro-recursos/ # Componentes del centro de recursos
│   ├── home/            # Secciones de la página de inicio
│   ├── ui/              # Componentes de UI base (Botones, Inputs, Cards, etc.)
│   ├── navbar.tsx       # Barra de navegación principal
│   └── footer.tsx       # Pie de página
├── lib/                  # Utilidades y funciones auxiliares
├── hooks/                # Custom React Hooks
└── data/                 # Datos estáticos o constantes
```

## ✨ Características Destacadas

- **Experiencia 3D Inmersiva**: Elementos interactivos en 3D integrados directamente en la UI.
- **Diseño Responsivo**: Adaptado perfectamente para móviles, tablets y escritorio.
- **Modo Oscuro/Claro**: Soporte nativo para cambio de tema visual.
- **Animaciones Avanzadas**: Transiciones suaves y efectos de entrada al hacer scroll.
- **Arquitectura Modular**: Componentes separados por funcionalidad para facilitar el mantenimiento.

## 🛠️ Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### Prerrequisitos

Asegúrate de tener instalado **Node.js** (versión recomendada LTS) y un gestor de paquetes como **npm** o **bun**.

### 1. Clonar el repositorio

(Si aún no lo has hecho)

### 2. Instalar dependencias

```bash
npm install
# o si usas bun
bun install
```

### 3. Ejecutar el servidor de desarrollo

Para iniciar la aplicación en modo de desarrollo con recarga en caliente (hot-reload):

```bash
npm run dev
# o
bun run dev
```

La aplicación estará disponible en `http://localhost:3000`.

### 4. Construir para producción

Para generar la versión optimizada para producción:

```bash
npm run build
```

### 5. Ejecutar versión de producción

Una vez construido, puedes iniciar el servidor de producción:

```bash
npm start
```

## 📜 Scripts Disponibles

En el archivo `package.json` encontrarás los siguientes scripts:

- `dev`: Inicia el servidor de desarrollo.
- `build`: Compila la aplicación para producción.
- `start`: Inicia el servidor de producción (requiere `build` previo).
- `lint`: Ejecuta ESLint para analizar el código en busca de errores y problemas de estilo.

---

© 2024 AlejandriaTI. Todos los derechos reservados.
