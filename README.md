# TechToJob landing

Landing oficial de TechToJob: una red profesional donde las oportunidades nacen de la participación real de talento, proyectos, empresas y comunidad.

## Tecnologías

- Next.js 16 con App Router
- TypeScript
- Tailwind CSS 4 mediante PostCSS
- Sora mediante `next/font/google`
- SVG y CSS para la red visual y las microinteracciones

## Instalación y ejecución

```bash
npm install
copy .env.example .env.local
npm run dev
```

Configura `NEXT_PUBLIC_DISCORD_INVITE_URL` en `.env.local` antes de publicar. También puedes definir `NEXT_PUBLIC_SITE_URL` para metadata, canonical y JSON-LD.

## Decisiones de diseño

La landing usa un sistema editorial oscuro con mint como señal de acción, superficies profundas y bloques claros para marcar cambios de ritmo. El lenguaje visual mezcla una red de conexiones con tarjetas de perfil, vacantes, torneos y actividad de Discord.

No se utilizan imágenes stock. Los avatares son muestras tipográficas y los iconos/logomarca son SVG inline para mantener el proyecto liviano y facilitar su sustitución por activos oficiales.

## Animaciones

Las animaciones usan `transform`, `opacity` y CSS. La portada tiene partículas reactivas al cursor, nodos con pulso, líneas de red, ticker continuo y tarjetas flotantes. El recorrido, la actividad de comunidad, el progreso del perfil y los torneos tienen entradas, estados vivos y microinteracciones. `prefers-reduced-motion` desactiva el movimiento.

## Textos y futuros idiomas

Los textos visibles están agrupados en `messages/es.json`. Las variables, nombres de componentes, rutas internas y funciones están en inglés para que añadir `messages/en.json` no requiera cambiar la arquitectura.

## SEO, accesibilidad y responsive

- Metadata API con `metadataBase`, canonical, Open Graph, Twitter Card y plantilla de títulos.
- Imagen social generada en `app/opengraph-image.tsx` a 1200×630.
- JSON-LD de tipo `Organization`.
- Un único `h1` y jerarquía semántica de headings.
- Navegación móvil con botón accesible y soporte de teclado.
- Labels reales en el formulario de newsletter y estado anunciado con `aria-live`.
- Responsive para móvil, tablet y escritorio.
- Lint y build ejecutables con `npm run lint` y `npm run build`.

## IA y alcance

Se utilizó IA como apoyo para explorar la dirección visual, redactar una primera versión de textos y generar la estructura de componentes. Los textos de la comunidad son maquetas preparadas para sustituirse por datos reales.

El orden prioriza primero la propuesta de valor, después el recorrido, talento, empresas, torneos, networking, prueba social, noticias, newsletter y cierre. Es una decisión narrativa para llevar de la idea a la acción con el mínimo desvío.
