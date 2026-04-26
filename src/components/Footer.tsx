export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-slateui sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 comparatuvoto. Todos los derechos reservados.</p>
        <p>
          Powered by{" "}
          <a
            href="https://www.camilooviedo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink hover:underline"
          >
            Camilo Oviedo
          </a>
        </p>
      </div>
    </footer>
  );
}
