import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-x-4 gap-y-3 px-4 py-6 text-xs text-slateui sm:grid-cols-3 sm:text-sm">
        <p className="order-1 col-span-2 text-center sm:order-2 sm:col-span-1">
          © 2026 comparatuvoto. Todos los derechos reservados.
        </p>
        <a
          href="https://github.com/Champetaman/voto-informado-colombia"
          target="_blank"
          rel="noopener noreferrer"
          className="order-2 inline-flex min-h-11 items-center justify-start gap-2 text-center text-slateui hover:underline sm:order-1"
        >
          <span>
            Web Open Source.
            <br className="sm:hidden" />{" "}
            Contribuye
          </span>
          <Image
            src="/icons/github-light.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
            className="github-icon-light h-4 w-4 shrink-0 sm:h-5 sm:w-5"
          />
          <Image
            src="/icons/github-dark.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
            className="github-icon-dark h-4 w-4 shrink-0 sm:h-5 sm:w-5"
          />
        </a>
        <p className="order-3 px-1.5 justify-self-end text-center">
          Powered by
          <br className="sm:hidden" />{" "}
          <a
            href="https://www.camilooviedo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slateui hover:underline"
          >
            Camilo Oviedo
          </a>
        </p>
      </div>
    </footer>
  );
}
