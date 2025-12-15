export interface Video {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  author: string;
  date: string;
  duration: string;
  category: string[];
  content: {
    introduction: string;
    objectives: string[];
    methodology: string;
    results: string;
    conclusions: string;
  };
}

export const videos: Video[] = [
  {
    id: "1",
    slug: "inteligencia-artificial-en-la-educacion-superior",
    title: "Inteligencia Artificial en la Educación Superior",
    description:
      "Análisis del impacto de las herramientas de IA en el aprendizaje universitario y la transformación educativa.",
    thumbnail: "/ai-education-technology-classroom.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    author: "Dr. María González",
    date: "15 Ene 2025",
    duration: "12:45",
    category: ["Tecnología", "Educación"],
    content: {
      introduction:
        "La inteligencia artificial está revolucionando la forma en que enseñamos y aprendemos en las instituciones de educación superior. Este video explora las principales aplicaciones de IA en contextos educativos, desde sistemas de tutoría inteligente hasta plataformas de aprendizaje adaptativo.",
      objectives: [
        "Identificar las principales herramientas de IA utilizadas en educación superior",
        "Analizar el impacto de la IA en los métodos de enseñanza tradicionales",
        "Evaluar los beneficios y desafíos de implementar IA en el aula",
        "Proponer estrategias para una integración efectiva de la tecnología",
      ],
      methodology:
        "Este estudio utilizó una metodología mixta que combina revisión bibliográfica sistemática con entrevistas a profesores y estudiantes. Se analizaron 50 instituciones educativas que han implementado herramientas de IA en sus programas académicos durante los últimos tres años. Los datos cualitativos se recopilaron mediante entrevistas semiestructuradas, mientras que los datos cuantitativos se obtuvieron a través de encuestas distribuidas a 500 participantes.",
      results:
        "Los resultados muestran que el 78% de los estudiantes perciben una mejora en su experiencia de aprendizaje con herramientas de IA. Los profesores reportan una reducción del 40% en tiempo dedicado a tareas administrativas. Sin embargo, el 65% de los encuestados expresó preocupaciones sobre la dependencia tecnológica y la necesidad de capacitación adicional. Las instituciones que implementaron programas de formación docente mostraron tasas de adopción 3 veces superiores.",
      conclusions:
        "La integración de inteligencia artificial en la educación superior presenta oportunidades significativas para personalizar el aprendizaje y mejorar la eficiencia administrativa. Sin embargo, es crucial abordar las preocupaciones éticas, garantizar la capacitación adecuada del personal y mantener un equilibrio entre la tecnología y la interacción humana. Las instituciones deben desarrollar políticas claras y marcos de gobernanza para maximizar los beneficios de la IA mientras minimizan los riesgos potenciales.",
    },
  },
  {
    id: "2",
    slug: "metodologias-agiles-en-desarrollo-de-software",
    title: "Metodologías Ágiles en Desarrollo de Software",
    description:
      "Estudio comparativo de Scrum, Kanban y XP en proyectos de desarrollo de software empresarial.",
    thumbnail: "/agile-software-development-team-meeting.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    author: "Ing. Carlos Ramírez",
    date: "12 Ene 2025",
    duration: "15:20",
    category: ["Tecnología", "Investigación"],
    content: {
      introduction:
        "Las metodologías ágiles han transformado la industria del desarrollo de software, permitiendo mayor flexibilidad y adaptación a cambios. Este video presenta un análisis detallado de las tres metodologías más populares: Scrum, Kanban y Extreme Programming (XP).",
      objectives: [
        "Comparar las características principales de Scrum, Kanban y XP",
        "Evaluar la efectividad de cada metodología en diferentes contextos",
        "Identificar mejores prácticas para la implementación",
        "Documentar casos de éxito y lecciones aprendidas",
      ],
      methodology:
        "Se realizó un estudio de casos múltiples en 30 empresas de tecnología que utilizan metodologías ágiles. Se recopilaron datos durante 18 meses mediante observación participante, análisis de documentación de proyectos y entrevistas con equipos de desarrollo. Se evaluaron métricas como velocidad de entrega, calidad del código y satisfacción del equipo.",
      results:
        "Scrum demostró ser más efectivo en proyectos con requisitos cambiantes (85% de satisfacción). Kanban destacó en equipos de mantenimiento y soporte continuo (90% de eficiencia operativa). XP mostró los mejores resultados en calidad de código (reducción del 60% en bugs). Los equipos híbridos que combinan prácticas de diferentes metodologías reportaron los niveles más altos de productividad.",
      conclusions:
        "No existe una metodología ágil superior universalmente. La elección debe basarse en el contexto del proyecto, la madurez del equipo y los objetivos organizacionales. La combinación de prácticas de diferentes metodologías puede ofrecer resultados óptimos. Es fundamental invertir en capacitación y crear una cultura organizacional que apoye los principios ágiles para garantizar el éxito de la implementación.",
    },
  },
  {
    id: "3",
    slug: "cambio-climatico-y-sostenibilidad-urbana",
    title: "Cambio Climático y Sostenibilidad Urbana",
    description:
      "Investigación sobre estrategias de adaptación climática en ciudades latinoamericanas.",
    thumbnail: "/sustainable-green-city-urban-planning.jpg",
    videoUrl: "https://vimeo.com/123456789",
    author: "Dra. Ana Martínez",
    date: "10 Ene 2025",
    duration: "18:30",
    category: ["Ciencia", "Investigación"],
    content: {
      introduction:
        "El cambio climático representa uno de los desafíos más críticos para las ciudades del siglo XXI. Esta investigación examina cómo las ciudades latinoamericanas están implementando estrategias de adaptación y mitigación climática, enfocándose en soluciones basadas en la naturaleza e infraestructura verde.",
      objectives: [
        "Documentar estrategias de adaptación climática en 15 ciudades latinoamericanas",
        "Evaluar la efectividad de infraestructura verde urbana",
        "Analizar políticas públicas de sostenibilidad urbana",
        "Proponer recomendaciones para planificación urbana resiliente",
      ],
      methodology:
        "Estudio de campo realizado en 15 ciudades de América Latina durante 24 meses. Se utilizaron técnicas de teledetección para monitorear cambios en áreas verdes urbanas, análisis de políticas públicas, y entrevistas con 200 funcionarios municipales y expertos en planificación urbana. Se evaluaron indicadores de resiliencia climática y calidad ambiental urbana.",
      results:
        "Las ciudades que invirtieron al menos el 15% de su presupuesto en infraestructura verde mostraron una reducción del 30% en temperaturas urbanas extremas. Los corredores verdes mejoraron la calidad del aire en un 25% en áreas adyacentes. Sin embargo, solo el 40% de las ciudades estudiadas tienen planes de adaptación climática actualizados. Las barreras principales identificadas fueron financiamiento limitado y falta de coordinación interinstitucional.",
      conclusions:
        "La implementación de infraestructura verde es una estrategia efectiva y rentable para la adaptación climática urbana. Se requiere mayor compromiso político y asignación presupuestaria para escalar estas soluciones. La integración de conocimientos técnico-científicos con saberes locales y participación ciudadana es crucial para el éxito de las intervenciones. Las ciudades deben desarrollar planes de adaptación climática con objetivos medibles y mecanismos de monitoreo robusto.",
    },
  },
  {
    id: "4",
    slug: "blockchain-transparencia-cadenas-suministro",
    title: "Blockchain y Transparencia en Cadenas de Suministro",
    description:
      "Implementación de tecnología blockchain para mejorar la trazabilidad en la industria alimentaria.",
    thumbnail: "/blockchain-supply-chain-technology-network.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    author: "Ing. Roberto Silva",
    date: "8 Ene 2025",
    duration: "14:15",
    category: ["Tecnología", "Investigación"],
    content: {
      introduction:
        "La tecnología blockchain ofrece soluciones innovadoras para uno de los problemas más persistentes en la industria alimentaria: la falta de transparencia y trazabilidad en las cadenas de suministro. Este video presenta los resultados de un proyecto piloto que implementó blockchain en la cadena de suministro de productos agrícolas.",
      objectives: [
        "Diseñar e implementar un sistema blockchain para trazabilidad alimentaria",
        "Evaluar la mejora en transparencia y eficiencia operativa",
        "Analizar la adopción de la tecnología por parte de los stakeholders",
        "Identificar barreras y facilitadores para la implementación a gran escala",
      ],
      methodology:
        "Proyecto piloto implementado durante 12 meses con la participación de 50 productores agrícolas, 10 distribuidores y 5 cadenas de supermercados. Se desarrolló una plataforma blockchain permisionada basada en Hyperledger Fabric. Se recopilaron datos sobre tiempos de transacción, precisión de información y costos operativos antes y después de la implementación.",
      results:
        "La implementación de blockchain redujo el tiempo de trazabilidad de productos de 7 días a 2.2 segundos. Se logró una precisión del 99.8% en el registro de información de la cadena de suministro. Los consumidores mostraron un 45% más de confianza en productos con trazabilidad blockchain verificable. Los costos operativos se redujeron en un 20% debido a la automatización y eliminación de intermediarios. El retorno de inversión se proyecta en 18 meses.",
      conclusions:
        "Blockchain demuestra ser una tecnología viable para mejorar la transparencia y eficiencia en cadenas de suministro alimentarias. Los beneficios incluyen mayor confianza del consumidor, reducción de fraudes y mejor gestión de crisis alimentarias. Sin embargo, la adopción exitosa requiere inversión inicial significativa, capacitación de usuarios y colaboración entre todos los actores de la cadena. La escalabilidad y los estándares de interoperabilidad son aspectos críticos que deben abordarse para la adopción masiva.",
    },
  },
  {
    id: "5",
    slug: "neurociencia-aprendizaje-entornos-digitales",
    title: "Neurociencia del Aprendizaje en Entornos Digitales",
    description:
      "Estudio sobre cómo el cerebro procesa información en ambientes de aprendizaje virtual.",
    thumbnail: "/brain-learning-digital-education-neuroscience.jpg",
    videoUrl: "https://vimeo.com/234567890",
    author: "Dr. Luis Hernández",
    date: "5 Ene 2025",
    duration: "16:40",
    category: ["Ciencia", "Educación"],
    content: {
      introduction:
        "Con la creciente digitalización de la educación, es fundamental comprender cómo el cerebro procesa y retiene información en entornos virtuales. Esta investigación utiliza neuroimágenes funcionales y mediciones psicofisiológicas para explorar los mecanismos cerebrales del aprendizaje digital.",
      objectives: [
        "Identificar patrones de activación cerebral durante el aprendizaje digital",
        "Comparar la retención de información entre formatos presenciales y virtuales",
        "Evaluar el impacto de diferentes diseños instruccionales en la cognición",
        "Desarrollar recomendaciones basadas en evidencia neurocientífica",
      ],
      methodology:
        "Estudio experimental con 120 participantes divididos en grupos que experimentaron diferentes modalidades de aprendizaje. Se utilizó resonancia magnética funcional (fMRI) para monitorear actividad cerebral, eye-tracking para analizar patrones de atención, y pruebas cognitivas estandarizadas para medir retención y comprensión. Los participantes fueron evaluados inmediatamente después del aprendizaje y 30 días después.",
      results:
        "El aprendizaje multimedia bien diseñado activa redes neuronales similares al aprendizaje presencial, con activación adicional en áreas de procesamiento visuoespacial. La retención a largo plazo fue comparable entre modalidades cuando se utilizaron principios de diseño instruccional basados en evidencia (82% vs 85%). Los entornos con alta carga cognitiva mostraron menor activación en el hipocampo, correlacionándose con menor retención (diferencia del 30%).",
      conclusions:
        "La educación digital puede ser tan efectiva como la presencial cuando se diseña siguiendo principios de neurociencia cognitiva. Es crucial minimizar la carga cognitiva extrínseca, utilizar multimedia de forma estratégica y proporcionar oportunidades para la práctica activa. Los diseñadores instruccionales deben integrar conocimientos neurocientíficos para crear experiencias de aprendizaje digital óptimas que maximicen la retención y comprensión.",
    },
  },
  {
    id: "6",
    slug: "innovacion-modelos-negocio-circular",
    title: "Innovación en Modelos de Negocio Circular",
    description:
      "Análisis de empresas que implementan principios de economía circular con éxito.",
    thumbnail: "/circular-economy-business-sustainable-recycling.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    author: "MBA. Patricia Torres",
    date: "3 Ene 2025",
    duration: "13:50",
    category: ["Investigación"],
    content: {
      introduction:
        "La economía circular representa un cambio paradigmático en los modelos de negocio tradicionales, transformando el concepto de residuo en recurso. Esta investigación examina cómo empresas líderes están implementando principios circulares para crear valor económico mientras reducen su impacto ambiental.",
      objectives: [
        "Documentar modelos de negocio circular exitosos en diferentes industrias",
        "Analizar factores críticos de éxito en la transición circular",
        "Evaluar el impacto económico y ambiental de la circularidad",
        "Desarrollar un marco de implementación para empresas",
      ],
      methodology:
        "Estudio de casos múltiples de 25 empresas reconocidas por sus prácticas de economía circular, abarcando sectores de manufactura, textil, electrónica y alimentación. Se realizaron entrevistas en profundidad con 50 ejecutivos, análisis de estados financieros y mediciones de impacto ambiental mediante análisis de ciclo de vida. El estudio abarcó un período de 36 meses.",
      results:
        "Las empresas con modelos circulares maduros reportaron un aumento promedio del 35% en márgenes de ganancia debido a la optimización de recursos. Se documentó una reducción del 40% en residuos enviados a vertederos y del 25% en consumo de materias primas vírgenes. El 80% de las empresas identificó la innovación en diseño de productos como el factor más crítico. Las barreras principales fueron la resistencia cultural interna (60%) y la necesidad de colaboración con la cadena de valor (55%).",
      conclusions:
        "La transición hacia modelos de negocio circular no solo es ambientalmente beneficiosa, sino también económicamente viable. El éxito requiere un enfoque sistémico que involucre rediseño de productos, nuevos modelos de ingresos y colaboración ecosistémica. Las empresas deben desarrollar capacidades en pensamiento de sistemas, innovación colaborativa y métricas circulares. El apoyo de políticas públicas y la demanda del consumidor son catalizadores importantes para acelerar la adopción.",
    },
  },
];

export function getVideoById(id: string): Video | undefined {
  return videos.find((video) => video.id === id);
}

export function getVideoBySlug(slug: string): Video | undefined {
  return videos.find((video) => video.slug === slug);
}
