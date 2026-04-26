import { SourceList } from "@/components/SourceList";

export default function SourcesPage() {
  return (
    <main className="app-container py-8">
      <h1 className="text-3xl font-bold">Fuentes</h1>
      <p className="mt-4 text-sm leading-6 text-slateui">
        Esta plataforma utiliza exclusivamente los programas oficiales de gobierno como fuente de información.
      </p>
      <p className="mt-3 text-sm leading-6 text-slateui">
        No incorpora noticias, encuestas, redes sociales, opiniones externas ni historial político.
      </p>
      <div className="mt-6">
        <SourceList />
      </div>
    </main>
  );
}
