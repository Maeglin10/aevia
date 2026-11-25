import type { BlogFaqItem } from "../blog-posts";

/* Traduction (es) de lib/blog-faq-ajouts.ts, article par article, dans le même ordre. */
export const FAQ_ES: Record<string, BlogFaqItem[]> = {
  "choisir-template-site-web": [
    {
      q: "¿Cómo elegir una plantilla de sitio web adecuada para mi actividad?",
      a: "Parta de su sector y de su público objetivo: el diseño debe corresponderse con ellos. Una plantilla bonita que no habla a sus clientes le resta credibilidad. Después, compruebe que está pensada primero para el móvil y que sigue siendo rápida.",
    },
    {
      q: "¿Por qué importa tanto el móvil al elegir una plantilla?",
      a: "Porque la mayor parte del tráfico web mundial procede de dispositivos móviles (la fuente se cita en el artículo). Una plantilla diseñada primero para el móvil evita perder a una gran parte de los visitantes.",
    },
    {
      q: "¿Hasta dónde se puede personalizar una plantilla?",
      a: "Lo suficiente para reflejar su identidad (logotipo, colores, textos, fotos) sin rehacer todo el sitio. Si adaptarla exige una reforma completa, esa plantilla no es la adecuada.",
    },
    {
      q: "¿Es la velocidad tan importante como el diseño?",
      a: "Sí. Un sitio bonito pero lento ahuyenta a los visitantes: el rendimiento forma parte de los criterios de elección, igual que la estética.",
    },
  ],
  "rgpd-site-web-obligations-2026": [
    {
      q: "¿Qué documentos debe tener un sitio web para cumplir con el RGPD?",
      a: "Tres: el aviso legal, la política de privacidad y un banner de consentimiento de cookies si realiza un seguimiento de los visitantes.",
    },
    {
      q: "¿Una casilla premarcada equivale a un consentimiento?",
      a: "No. El consentimiento debe ser explícito: una casilla premarcada no basta.",
    },
    {
      q: "¿Son reales las sanciones de la CNIL para una pyme?",
      a: "Sí, son reales. El artículo remite al balance de 2024 de la CNIL, que cuantifica las sanciones impuestas y el total de las multas.",
    },
    {
      q: "¿Cuánto tiempo se necesita para adaptar un sitio web corporativo a la normativa?",
      a: "El artículo lo estima en uno a dos días para un sitio web corporativo clásico.",
    },
  ],
  "erreurs-site-web-font-fuir-clients": [
    {
      q: "¿Qué errores de un sitio web ahuyentan a los clientes?",
      a: "Se repiten cinco errores: un tiempo de carga demasiado largo, un mensaje principal confuso, un sitio mal adaptado al móvil, la ausencia de una llamada a la acción visible y fotos de mala calidad.",
    },
    {
      q: "¿En cuánto tiempo debe un visitante entender mi oferta?",
      a: "El mensaje principal debe entenderse en menos de 5 segundos; de lo contrario, el visitante se va.",
    },
    {
      q: "¿Por qué es necesaria una llamada a la acción clara?",
      a: "Si el visitante no sabe qué hacer, no hace nada. Un botón visible indica el siguiente paso.",
    },
    {
      q: "¿Cómo puedo diagnosticar mi sitio rápidamente?",
      a: "El artículo propone un diagnóstico en 5 minutos: repasar los cinco errores anteriores en su propio sitio, sobre todo desde un teléfono.",
    },
  ],
  "whatsapp-business-guide-pme": [
    {
      q: "¿Cuál es la diferencia entre WhatsApp Business y la API de WhatsApp Business?",
      a: "WhatsApp Business es una aplicación móvil gratuita para pequeñas empresas. La plataforma WhatsApp Business (API) es de pago, pero permite una automatización avanzada.",
    },
    {
      q: "¿Mis clientes tienen que instalar algo para escribirme?",
      a: "No. Si ya usan WhatsApp, le escriben en el mismo lugar donde hablan con sus allegados.",
    },
    {
      q: "¿Qué configurar primero en WhatsApp Business?",
      a: "El perfil de empresa, un mensaje de bienvenida, un mensaje de ausencia, respuestas rápidas y etiquetas. Los mensajes de bienvenida y de ausencia evitan dejar a un cliente sin respuesta.",
    },
    {
      q: "¿Cómo evitar hacer malabares entre varias aplicaciones de mensajería?",
      a: "Centralizando WhatsApp junto con sus demás canales en una bandeja de entrada unificada.",
    },
  ],
  "vitesse-site-web-optimisations": [
    {
      q: "¿Qué optimizaciones aceleran más un sitio web?",
      a: "Cinco palancas: comprimir y convertir las imágenes, cargar los elementos de forma diferida (lazy loading), reducir los scripts de terceros, aprovechar bien la caché y pasar a un alojamiento de alto rendimiento.",
    },
    {
      q: "¿Por qué empezar por las imágenes?",
      a: "Las imágenes suelen ser la parte más pesada de una página: ahí es donde la mejora es mayor.",
    },
    {
      q: "¿Para qué sirve una CDN?",
      a: "Acerca sus archivos a los visitantes que están lejos de su servidor.",
    },
    {
      q: "¿Influye la velocidad en el posicionamiento?",
      a: "Sí: desde 2021, los Core Web Vitals de Google influyen en la posición en los resultados de búsqueda. Mida antes y después de cada cambio.",
    },
  ],
  "repondre-avis-negatifs-reputation": [
    {
      q: "¿Cómo responder a una reseña negativa?",
      a: "En cuatro pasos: reconocer la experiencia del cliente, explicarse brevemente sin ponerse a la defensiva, proponer una solución concreta y, por último, invitar a continuar en privado.",
    },
    {
      q: "¿Hay que responder de inmediato?",
      a: "No. Nunca responda en caliente: espere al menos 30 minutos antes de contestar a una reseña negativa.",
    },
    {
      q: "¿Por qué es importante responder?",
      a: "Porque sus futuros clientes leen sus reseñas, y su respuesta cuenta tanto como la reseña misma. Una mala reseña bien gestionada tranquiliza más que una página donde todas las reseñas tienen 5 estrellas, que parece falsa.",
    },
    {
      q: "¿Qué hay que evitar?",
      a: "El artículo detalla los errores que nunca hay que cometer, empezando por responder bajo el efecto de la emoción.",
    },
  ],
  "ia-support-client-pme": [
    {
      q: "¿Qué puede hacer la IA en la atención al cliente de una pyme?",
      a: "Responder en tiempo real a las preguntas frecuentes, clasificar y filtrar las solicitudes, realizar recordatorios y seguimientos automáticos, y estar disponible las 24h/24.",
    },
    {
      q: "¿Sustituye la IA a la relación humana?",
      a: "No. Libera al equipo de las tareas repetitivas sin valor añadido. El artículo también precisa lo que la IA no debe hacer y debe transferir a una persona.",
    },
    {
      q: "¿Qué parte de las solicitudes puede tratar la IA?",
      a: "Una buena parte de las solicitudes repetitivas (horarios, tarifas, disponibilidad, estado de un pedido). La proporción exacta depende de lo que contenga su base de conocimientos.",
    },
    {
      q: "¿Hacen falta conocimientos técnicos para ponerla en marcha?",
      a: "No, no con las herramientas actuales. El artículo describe la puesta en marcha con Aevia Inbox y lo que conviene medir antes y después.",
    },
  ],
  "securite-mots-de-passe-comptes-pros": [
    {
      q: "¿Por qué no hay que reutilizar una contraseña?",
      a: "Si un servicio es pirateado, todas las cuentas que comparten esa contraseña también lo son.",
    },
    {
      q: "¿Para qué sirve un gestor de contraseñas?",
      a: "Para dar a cada cuenta una contraseña larga y única, sin esfuerzo de memoria (por ejemplo Bitwarden o 1Password, citados en el artículo).",
    },
    {
      q: "¿Es necesaria la autenticación de dos factores?",
      a: "Sí: es el segundo cerrojo más importante. Actívela en todos los lugares donde sea posible.",
    },
    {
      q: "¿Qué cuentas ataca primero el phishing?",
      a: "Sus cuentas profesionales: correo electrónico, CRM, banco, proveedores.",
    },
  ],
  "tunnel-conversion-landing-page": [
    {
      q: "¿Qué es un embudo de conversión?",
      a: "La secuencia de etapas entre un visitante desconocido y un cliente de pago.",
    },
    {
      q: "¿Cuáles son las 4 etapas de un embudo eficaz?",
      a: "Captar la atención (la promesa), generar confianza (la prueba), resolver las objeciones (las fricciones) y cerrar con una llamada a la acción sin fricción.",
    },
    {
      q: "¿Qué ocurre sin un embudo estructurado?",
      a: "Los visitantes se van sin dejar rastro.",
    },
    {
      q: "¿Por qué medir cada etapa?",
      a: "Sin analítica se trabaja a ciegas. Medir cada etapa muestra dónde se pierden los visitantes; después, las pruebas A/B permiten probar antes de decidir.",
    },
  ],
  "segmentation-clients-fidelisation": [
    {
      q: "¿Qué es la segmentación de clientes?",
      a: "Dividir a sus clientes en grupos homogéneos para hablarles de manera distinta.",
    },
    {
      q: "¿Qué segmentaciones usar para empezar?",
      a: "Cuatro bases: la segmentación RFM (recencia, frecuencia, importe), por canal preferido, por tipo de necesidad y por satisfacción.",
    },
    {
      q: "¿Por qué fidelizar en lugar de captar?",
      a: "Según los estudios y los sectores, captar a un cliente cuesta bastante más que conservar a uno (estudio de la Harvard Business Review citado en el artículo): fidelizar exige sobre todo conocer bien a sus clientes.",
    },
    {
      q: "¿Qué herramienta se necesita?",
      a: "Un CRM o una bandeja de entrada unificada, para reunir el historial de cada cliente.",
    },
  ],
  "optimiser-presence-en-ligne": [
    {
      q: "¿Cómo optimizar la presencia en línea en 2026?",
      a: "Cinco palancas: un sitio web profesional, el SEO local, una ficha de Google bien cuidada, una selección de redes sociales en lugar de todas a la vez y un sitio que cargue rápido.",
    },
    {
      q: "¿Por qué importa el SEO local?",
      a: "Ayuda a que lo encuentren las personas que buscan cerca de usted.",
    },
    {
      q: "¿Hay que estar presente en todas las redes sociales?",
      a: "No: el artículo aconseja elegir aquellas donde están sus clientes en lugar de abarcarlo todo.",
    },
    {
      q: "¿Por dónde empezar?",
      a: "El artículo termina con una sección «¿Por dónde empezar?» que ordena estas cinco acciones.",
    },
  ],
  "audit-securite-site-web": [
    {
      q: "¿Por qué auditar la seguridad de un sitio pequeño?",
      a: "Porque la seguridad web no afecta solo a las grandes empresas: una vulnerabilidad puede aparecer en cualquier momento, en cualquier sitio.",
    },
    {
      q: "¿Qué comprueba una auditoría de seguridad web?",
      a: "El certificado SSL/HTTPS, las vulnerabilidades habituales de la clasificación OWASP Top 10, las cabeceras HTTP de seguridad y la configuración DNS.",
    },
    {
      q: "¿Hay que ser desarrollador para auditar su sitio?",
      a: "No: el artículo explica cómo hacerlo sin ser desarrollador, con una herramienta de análisis.",
    },
    {
      q: "¿Basta con una sola auditoría?",
      a: "No. Se recomienda un seguimiento continuo, porque una vulnerabilidad puede aparecer después de la auditoría.",
    },
  ],
  "gestion-messages-clients-multicanal": [
    {
      q: "¿Por qué centralizar los mensajes de los clientes?",
      a: "Una bandeja de entrada dispersa alarga los tiempos de respuesta, hace perder u olvidar mensajes y daña la imagen profesional.",
    },
    {
      q: "¿Qué es una bandeja de entrada unificada?",
      a: "Una herramienta que reúne en un solo lugar los mensajes de todos sus canales de contacto.",
    },
    {
      q: "¿Cómo organizar la transición?",
      a: "En cuatro pasos: mapear sus canales actuales, elegir la herramienta de centralización, documentar sus respuestas tipo y comunicar sus plazos de respuesta.",
    },
    {
      q: "¿Qué papel tiene la IA?",
      a: "El de asistente en la gestión de los mensajes: el artículo la presenta como una ayuda, no como un sustituto del equipo.",
    },
  ],
};
