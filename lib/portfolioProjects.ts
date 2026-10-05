// Single source of truth for portfolio projects.
// Used by both the client component (PortfolioPage.tsx) for cards/filters
// and the server page (app/portfolio/page.tsx) for JSON-LD ItemList.
// Display names + descriptions are German-only here because JSON-LD is German;
// the client component pulls localized labels from the i18n system.

export type PortfolioCategory = "webdev" | "ai" | "cloud";

export interface PortfolioProject {
  id: string;
  image: string;
  category: PortfolioCategory;
  tech: string[];
  // German-only fields used by JSON-LD ItemList
  jsonLdName: string;
  jsonLdDescription: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "nour",
    image: "/portfolio/nour.png",
    category: "webdev",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    jsonLdName: "Nour — Hochzeitsfotografie",
    jsonLdDescription:
      "Professionelle mehrsprachige Website (DE/AR) für einen Berliner Hochzeitsfotografen mit Galerie-System und Kontaktformular.",
  },
  {
    id: "kosmetikstudio",
    image: "/portfolio/Kosmetik.png",
    category: "webdev",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    jsonLdName: "Kosmetikstudio — Natürliche Schönheit",
    jsonLdDescription:
      "Moderne Website für ein Berliner Kosmetikstudio mit Leistungsübersicht, Buchungsbereich und Mobile-Optimierung.",
  },
];
