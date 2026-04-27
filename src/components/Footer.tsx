import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 text-center text-sm text-slateui sm:flex-row sm:justify-between sm:text-left">
        <p>© 2026 comparatuvoto. Todos los derechos reservados.</p>
        <a
          href="https://github.com/Champetaman/voto-informado-colombia"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 text-sm text-slateui hover:underline"
        >
          <span>Web Open Source. Contribuye</span>
          <Image
            src="/icons/github-light.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
            className="github-icon-light h-5 w-5"
          />
          <Image
            src="/icons/github-dark.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
            className="github-icon-dark h-5 w-5"
          />
        </a>
        <p>
          Powered by{" "}
          <a
            href="https://www.camilooviedo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sm text-slateui hover:underline"
          >
            Camilo Oviedo
          </a>
        </p>
      </div>
    </footer>
  );
}
