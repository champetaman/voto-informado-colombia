import type { MetadataRoute } from "next";

const siteUrl = "https://comparatuvoto.co";
const routes = ["", "/cuestionario", "/resultado", "/comparar", "/metodologia", "/fuentes"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-04-25"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
