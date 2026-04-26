import { sources } from "@/data/sources";

export function SourceList() {
  return (
    <ol className="grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
      {sources.map((source) => (
        <li key={source.url} className="flex h-full flex-col rounded-lg border border-line bg-white p-4 text-sm shadow-soft">
          <div>
            <h2 className="font-semibold text-ink">{source.presidentialCandidate}</h2>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-leaf">{source.politicalParty}</p>
            <p className="mt-1 text-slateui">Fórmula vicepresidencial: {source.vicePresidentialCandidate}</p>
          </div>
          <div className="mt-auto pt-4">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-line bg-white px-4 py-2 text-center font-semibold hover:bg-paper"
            >
              Ver plan de gobierno (PDF)
            </a>
          </div>
        </li>
      ))}
    </ol>
  );
}
