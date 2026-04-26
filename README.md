# comparatuvoto

Comparador de alineacion programatica presidencial para Colombia 2026-2030.

La aplicacion permite responder un cuestionario politico neutral y comparar las respuestas con programas oficiales de gobierno. El resultado muestra porcentajes de alineacion, coincidencias, diferencias y graficos comparativos.

No es una encuesta electoral, no predice resultados y no recomienda votar por ninguna formula.

## Que permite hacer

- Responder un cuestionario programatico en version rapida o completa.
- Marcar cada respuesta como normal, importante o muy importante.
- Ver un ranking de alineacion con las formulas presidenciales cargadas.
- Revisar coincidencias y diferencias por dimensiones de politica publica.
- Comparar candidatos por tema en vista textual o grafica.
- Consultar las fuentes oficiales usadas como base.
- Rehacer el cuestionario sin crear cuenta ni enviar datos a un servidor.

## Candidaturas incluidas

La comparacion usa las formulas presidenciales cargadas en la aplicacion:

- Ivan Cepeda Castro y Aida Marina Quilcue Vivas - Movimiento Politico Pacto Historico.
- Paloma Susana Valencia Laserna y Juan Daniel Oviedo Arango - Partido Centro Democratico.
- Claudia Nayibe Lopez Hernandez y Leonardo Humberto Huerta Gutierrez - Con Claudia Imparables.
- Abelardo Gabriel de la Espriella Otero y Jose Manuel Restrepo Abondano - Defensores de la Patria.
- Sergio Fajardo Valderrama y Edna Cristina del Socorro Bonilla Seba - Partido Politico Dignidad & Compromiso.

## Cuestionario

Hay dos modos:

- Version rapida: 24 preguntas.
- Version completa: 32 preguntas.

Cada pregunta tiene cuatro opciones de respuesta. Cada opcion esta asociada a una o varias dimensiones programaticas. La persona tambien puede definir la importancia de cada respuesta:

- Normal: peso base.
- Importante: mayor peso.
- Muy importante: peso maximo.

## Temas cubiertos

El cuestionario y la comparacion incluyen temas como:

- Seguridad, justicia y crimen organizado.
- Paz y procesos de negociacion.
- Corrupcion e instituciones.
- Economia, impuestos y gasto publico.
- Salud.
- Energia, mineria y transicion energetica.
- Ambiente, agua y biodiversidad.
- Educacion, ciencia, innovacion y juventud.
- Campo, vivienda y regiones.
- Mujeres, cuidado, diversidad y comunidades etnicas.
- Politica exterior.
- Democracia, protesta social y estilo de gobierno.

## Como se calcula el resultado

La aplicacion convierte las respuestas en un perfil programatico. Luego compara ese perfil con el perfil asignado a cada candidatura segun sus propuestas oficiales.

El porcentaje de alineacion representa cercania programatica, no apoyo electoral. Un puntaje alto significa que las respuestas dadas se parecen mas al perfil programatico de esa formula en las dimensiones respondidas.

La confianza del resultado depende de la cantidad de respuestas usadas:

- Menos de 12 respuestas: baja confianza.
- De 12 a 20 respuestas: confianza media.
- Mas de 20 respuestas: alta confianza.

## Fuentes

La plataforma usa programas oficiales de gobierno como fuente principal. No usa encuestas, noticias, redes sociales, opiniones externas ni historial politico para calcular la alineacion.

Las fuentes pueden revisarse dentro de la aplicacion en la pagina de fuentes.

## Privacidad

Las respuestas se guardan localmente en el navegador durante la sesion. No se requiere registro de usuario.

Al reiniciar el cuestionario o cerrar la sesion del navegador, las respuestas pueden eliminarse segun el comportamiento del navegador.

## Rutas principales

- `/`: pagina inicial.
- `/cuestionario`: cuestionario interactivo.
- `/resultado`: ranking, porcentaje de alineacion, coincidencias, diferencias y graficos.
- `/comparar`: comparacion textual o grafica entre candidatos.
- `/metodologia`: explicacion del metodo de calculo.
- `/fuentes`: enlaces a fuentes oficiales.

## Ejecucion local

Requisitos:

- Node.js.
- npm.

Instalacion:

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

Revision:

```bash
npm run lint
```

## Licencia

Este proyecto esta disponible para uso no comercial bajo los terminos descritos en `LICENSE`.

El uso comercial requiere permiso escrito explicito del autor.
