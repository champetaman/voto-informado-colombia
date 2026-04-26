import {
  ArrowRight,
  BadgePercent,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";

const steps = [
  {
    title: "Analiza la pregunta",
    text: "Cada pregunta habla de un tema concreto: seguridad, salud, economía, educación, ambiente, regiones o derechos.",
  },
  {
    title: "Escoges la respuesta más cercana",
    text: "No buscamos que estés 100% de acuerdo. Basta con elegir la opción que más se parezca a lo que piensas.",
  },
  {
    title: "Marcas qué tan importante es",
    text: "Una respuesta normal pesa menos. Una respuesta muy importante pesa más porque representa una prioridad para ti.",
  },
  {
    title: "Comparamos con los programas",
    text: "Tus respuestas se comparan con las propuestas oficiales de gobierno de cada fórmula presidencial.",
  },
];

export default function MethodologyPage() {
  return (
    <main className="app-container py-8">
      <section className="max-w-4xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-leaf">
            ¿Cómo calculamos tu afinidad?
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Una comparación simple entre tus prioridades y los planes de
            gobierno
          </h1>
          <p className="mt-5 text-lg leading-8 text-slateui">
            La afinidad no se calcula por popularidad, encuestas, redes sociales
            ni simpatía por un candidato. Se calcula mirando qué tan cerca están
            tus respuestas de las propuestas oficiales.
          </p>
        </div>
      </section>

      <div className="mt-8">
        <DisclaimerBanner />
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-ink">Paso a paso</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="border-l-4 border-leaf bg-white p-5 shadow-soft"
            >
              <p className="text-sm font-semibold text-leaf">
                Paso {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slateui">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-ink">
            ¿Qué significa el porcentaje?
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-slateui">
            <p>
              El porcentaje muestra cercanía programática. Por ejemplo, si
              obtienes 72% con una fórmula, significa que tus respuestas se
              parecen bastante a lo que esa fórmula propone en los temas
              medidos.
            </p>
            <p>
              No significa que el candidato tenga 72% de intención de voto.
              Tampoco significa que tenga 72% de probabilidad de ganar. Solo
              habla de afinidad entre tus prioridades y su programa.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <BadgePercent className="mt-1 h-5 w-5 shrink-0 text-civic" />
            <p className="text-sm leading-6 text-slateui">
              Más porcentaje: más parecido entre tus respuestas y el programa.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-civic" />
            <p className="text-sm leading-6 text-slateui">
              Menos porcentaje: más distancia en los temas comparados.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-civic" />
            <p className="text-sm leading-6 text-slateui">
              El resultado es orientación informativa, no recomendación de voto.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 border-t border-line pt-8">
        <h2 className="text-2xl font-bold text-ink">
          ¿Cómo usamos tus respuestas?
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-slateui">
          No guardamos información personal ni construimos perfiles de usuario
          con tus respuestas. Esta es una herramienta netamente informativa y
          educativa: sirve para entender afinidades programáticas, comparar
          propuestas oficiales y promover una lectura más consciente antes de
          votar.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div>
            <CheckCircle2 className="h-5 w-5 text-leaf" />
            <h3 className="mt-2 font-semibold text-ink">Tema</h3>
            <p className="mt-1 text-sm leading-6 text-slateui">
              Cada respuesta suma o resta en temas como seguridad, salud,
              economía o ambiente.
            </p>
          </div>
          <div>
            <CheckCircle2 className="h-5 w-5 text-leaf" />
            <h3 className="mt-2 font-semibold text-ink">Importancia</h3>
            <p className="mt-1 text-sm leading-6 text-slateui">
              Si dices que algo es muy importante, pesa más en el cálculo final.
            </p>
          </div>
          <div>
            <CheckCircle2 className="h-5 w-5 text-leaf" />
            <h3 className="mt-2 font-semibold text-ink">Comparación</h3>
            <p className="mt-1 text-sm leading-6 text-slateui">
              El sistema compara tu perfil con el perfil de cada fórmula
              presidencial.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
