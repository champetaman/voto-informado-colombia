import Link from "next/link";
import { ArrowRight, BarChart3, FileText } from "lucide-react";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { candidates } from "@/data/candidates";

export default function Home() {
  return (
    <main>
      <section className="bg-paper">
        <div className="app-container py-14">
          <DisclaimerBanner />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-base font-semibold uppercase tracking-wide text-leaf sm:text-lg">
                Colombia 2026-2030
              </p>
              <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                Comparador de alineación programática presidencial
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slateui">
                Votar bien informado exige comparar propuestas, no solo nombres,
                tendencias o titulares. Esta herramienta toma las propuestas de
                gobierno de los 5 principales candidatos con mayor porcentaje en
                intención de voto para revisar coincidencias programáticas con
                más contexto. No es una encuesta electoral, no predice
                resultados y no recomienda votar por ninguna fórmula.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <Link
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-civic px-5 py-3 text-center font-semibold text-white hover:bg-ink"
                  href="/cuestionario"
                >
                  Empezar cuestionario <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-line bg-white px-5 py-3 text-center font-semibold hover:bg-paper"
                  href="/comparar"
                >
                  <BarChart3 className="h-4 w-4" /> Comparar candidatos
                </Link>
                <Link
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-line bg-white px-5 py-3 text-center font-semibold hover:bg-paper"
                  href="/metodologia"
                >
                  <FileText className="h-4 w-4" /> Cómo funciona
                </Link>
              </div>
            </div>

            <div className="border border-line bg-paper p-5">
              <div>
                <p className="mt-1 text-2xl font-bold text-ink">
                  Fórmulas Presidenciales
                </p>
              </div>
              <div className="mt-5 divide-y divide-line">
                {candidates.map((candidate, index) => (
                  <div
                    key={candidate.id}
                    className="grid grid-cols-[2rem_1fr] items-center gap-3 py-3"
                  >
                    <span
                      className="grid h-8 w-8 place-items-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: candidate.color }}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        {candidate.presidentialCandidate}
                      </p>
                      <p className="text-xs text-slateui">
                        {candidate.politicalParty}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
