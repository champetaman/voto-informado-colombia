import { ShieldCheck } from "lucide-react";

export function DisclaimerBanner() {
  return (
    <section className="rounded-lg border border-amberSoft/70 bg-amberSoft/20 p-4 text-sm text-ink">
      <div className="flex gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-civic" aria-hidden="true" />
        <p>
          Este resultado no es una recomendación de voto. Es una comparación programática basada en tus respuestas y en los planes de gobierno cargados.
        </p>
      </div>
    </section>
  );
}
