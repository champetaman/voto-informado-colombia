# comparatuvoto

Comparador de alineación programática presidencial para Colombia 2026-2030.

La aplicación permite responder un cuestionario político neutral y comparar las respuestas con programas oficiales de gobierno. El resultado muestra porcentajes de alineación, coincidencias, diferencias y gráficos comparativos.

No es una encuesta electoral, no predice resultados y no recomienda votar por ninguna fórmula.

## Qué permite hacer

- Responder un cuestionario programático en versión rápida o completa.
- Marcar cada respuesta como normal, importante o muy importante.
- Ver un ranking de alineación con las fórmulas presidenciales cargadas.
- Revisar coincidencias y diferencias por dimensiones de política pública.
- Comparar candidatos por tema en vista textual o gráfica.
- Consultar las fuentes oficiales usadas como base.
- Rehacer el cuestionario sin crear cuenta ni enviar datos a un servidor.

## Candidaturas incluidas

La comparación usa las fórmulas presidenciales cargadas en la aplicación:

- Iván Cepeda Castro y Aida Marina Quilcue Vivas - Movimiento Político Pacto Histórico.
- Paloma Susana Valencia Laserna y Juan Daniel Oviedo Arango - Partido Centro Democrático.
- Claudia Nayibe López Hernández y Leonardo Humberto Huerta Gutiérrez - Con Claudia Imparables.
- Abelardo Gabriel de la Espriella Otero y José Manuel Restrepo Abondano - Defensores de la Patria.
- Sergio Fajardo Valderrama y Edna Cristina del Socorro Bonilla Seba - Partido Político Dignidad & Compromiso.

## Cuestionario

Hay dos modos:

- Versión rápida: 24 preguntas.
- Versión completa: 32 preguntas.

Cada pregunta tiene cuatro opciones de respuesta. Cada opción está asociada a una o varias dimensiones programáticas. La persona también puede definir la importancia de cada respuesta:

- Normal: peso base.
- Importante: mayor peso.
- Muy importante: peso máximo.

## Temas cubiertos

El cuestionario y la comparación incluyen temas como:

- Seguridad, justicia y crimen organizado.
- Paz y procesos de negociación.
- Corrupción e instituciones.
- Economía, impuestos y gasto público.
- Salud.
- Energía, minería y transición energética.
- Ambiente, agua y biodiversidad.
- Educación, ciencia, innovación y juventud.
- Campo, vivienda y regiones.
- Mujeres, cuidado, diversidad y comunidades étnicas.
- Política exterior.
- Democracia, protesta social y estilo de gobierno.

## Cómo se calcula el resultado

La aplicación convierte las respuestas en un perfil programático. Luego compara ese perfil con el perfil asignado a cada candidatura según sus propuestas oficiales.

El porcentaje de alineación representa cercanía programática, no apoyo electoral. Un puntaje alto significa que las respuestas dadas se parecen más al perfil programático de esa fórmula en las dimensiones respondidas.

La confianza del resultado depende de la cantidad de respuestas usadas:

- Menos de 12 respuestas: baja confianza.
- De 12 a 20 respuestas: confianza media.
- Más de 20 respuestas: alta confianza.

## Fuentes

La plataforma usa programas oficiales de gobierno como fuente principal. No usa encuestas, noticias, redes sociales, opiniones externas ni historial político para calcular la alineación.

Las fuentes pueden revisarse dentro de la aplicación en la página de fuentes.

## Privacidad

Las respuestas se guardan localmente en el navegador durante la sesión. No se requiere registro de usuario.

Al reiniciar el cuestionario o cerrar la sesión del navegador, las respuestas pueden eliminarse según el comportamiento del navegador.

## Rutas principales

- `/`: página inicial.
- `/cuestionario`: cuestionario interactivo.
- `/resultado`: ranking, porcentaje de alineación, coincidencias, diferencias y gráficos.
- `/comparar`: comparación textual o gráfica entre candidatos.
- `/metodologia`: explicación del método de cálculo.
- `/fuentes`: enlaces a fuentes oficiales.

## Ejecución local

Requisitos:

- Node.js.
- npm.

Instalación:

```bash
npm install
```

Desarrollo:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Revisión:

```bash
npm run lint
```

## Licencia

Este proyecto está disponible para uso no comercial bajo los términos descritos en `LICENSE`.

El uso comercial requiere permiso escrito explícito del autor.
