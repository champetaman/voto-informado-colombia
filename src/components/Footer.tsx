export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-center text-sm text-slateui sm:flex-row sm:justify-between sm:text-left">
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
