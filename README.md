# comparatuvoto

Aplicación client-side en Next.js para comparar alineación programática entre respuestas ciudadanas y programas oficiales de candidatos presidenciales de Colombia 2026.

## Funcionalidad

La aplicación permite responder un cuestionario político neutral y calcula una alineación porcentual con cada fórmula presidencial. El cuestionario carga por defecto una versión rápida de 24 preguntas y permite activar una versión completa de 32 preguntas para mayor precisión. Todas las respuestas se guardan localmente en el navegador mediante sessionStorage.

## Rutas

- `/`: página inicial con acceso al cuestionario, comparación y metodología.
- `/cuestionario`: test interactivo con selector de versión rápida o completa.
- `/resultado`: ranking de alineación, confianza del resultado, coincidencias, diferencias y gráficos.
- `/comparar`: comparación textual o gráfica entre candidatos.
- `/metodologia`: explicación del método de cálculo.
- `/fuentes`: enlaces oficiales a planes de gobierno.

## Cálculo

Cada pregunta tiene opciones asociadas a dimensiones programáticas. Las respuestas se ponderan por importancia y se comparan contra vectores de candidatos. La confianza se calcula por número de respuestas usadas:

- Menos de 12 respuestas: baja.
- De 12 a 20 respuestas: media.
- Más de 20 respuestas: alta.

## Fuentes

La plataforma utiliza exclusivamente programas oficiales de gobierno como fuente de información. No usa noticias, encuestas, redes sociales, opiniones externas ni historial político.

## SEO

Incluye metadata para App Router, Open Graph, Twitter cards, sitemap, robots y JSON-LD de tipo `WebApplication` con categoría `CivicApplication`.

## Ejecución local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
