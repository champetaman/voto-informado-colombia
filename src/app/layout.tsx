import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { QuizSettingsProvider } from "@/components/QuizSettingsProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const siteUrl = "https://comparatuvoto.co";
const title = "Compara candidatos presidenciales Colombia 2026 | comparatuvoto.co";
const description =
  "Descubre con qué candidato presidencial coincides según sus propuestas oficiales. Comparación objetiva y basada en planes de gobierno.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "elecciones Colombia 2026",
    "comparar candidatos",
    "voto informado",
    "planes de gobierno Colombia",
    "test político Colombia"
  ],
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  },
  robots: {
    index: true,
    follow: true
  }
};

const navItems = [
  ["Inicio", "/"],
  ["Cuestionario", "/cuestionario"],
  ["Comparar", "/comparar"],
  ["Metodología", "/metodologia"],
  ["Fuentes", "/fuentes"]
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "comparatuvoto",
    url: siteUrl,
    applicationCategory: "CivicApplication"
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: "try{if(localStorage.getItem('comparatuvoto-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}"
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-3 focus:text-white">
          Saltar al contenido principal
        </a>
        <QuizSettingsProvider>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
              <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between" aria-label="Navegación principal">
                <Link href="/" className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  Compara tu Voto
                </Link>
                <div className="flex flex-wrap items-center gap-2 text-base text-slateui">
                  <div className="flex flex-wrap gap-2">
                    {navItems.map(([label, href]) => (
                      <Link key={href} href={href} className="min-h-11 rounded-md px-3 py-2 hover:bg-paper hover:text-ink">
                        {label}
                      </Link>
                    ))}
                  </div>
                  <ThemeToggle />
                </div>
              </nav>
            </header>
            <div id="contenido" className="flex-1 bg-paper">{children}</div>
            <Footer />
          </div>
        </QuizSettingsProvider>
      </body>
    </html>
  );
}
