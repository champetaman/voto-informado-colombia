import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { QuizSettingsProvider } from "@/components/QuizSettingsProvider";
import "./globals.css";

const siteUrl = "https://comparatuvoto.co";
const title =
  "Compara candidatos presidenciales Colombia 2026 | comparatuvoto.co";
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
    "test político Colombia",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "comparatuvoto",
    url: siteUrl,
    applicationCategory: "CivicApplication",
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-3 focus:text-white"
        >
          Saltar al contenido principal
        </a>
        <QuizSettingsProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div id="contenido" className="flex-1 bg-paper">
              {children}
              <SpeedInsights />
              <Analytics />
            </div>
            <Footer />
          </div>
        </QuizSettingsProvider>
      </body>
    </html>
  );
}
