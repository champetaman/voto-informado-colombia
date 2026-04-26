export function MethodologyExplainer() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {[
        "Tus respuestas generan un perfil programático con valores entre -2 y +2.",
        "Cada fórmula tiene un perfil programático derivado de los planes cargados.",
        "La puntuación compara ambos perfiles dimensión por dimensión.",
        "No se usan datos personales, encuestas, popularidad ni factores externos.",
        "Las preguntas marcadas como importantes pesan más en el promedio.",
        "Las puntuaciones son interpretativas y conviene revisarlas junto con la comparación textual."
      ].map((text) => (
        <div key={text} className="rounded-lg border border-line bg-white p-5 text-sm leading-6 shadow-soft">
          {text}
        </div>
      ))}
    </div>
  );
}
