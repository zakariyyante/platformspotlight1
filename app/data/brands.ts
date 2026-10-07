export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  votes: number;
  displayUrl?: string;
  badge?: {
    text: string;
    color: string; // hex or tailwind class
  };
}

const generateId = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

export const brands: Brand[] = [

  {
    id: "bwin",
    name: "Bwin",
    logo: "/bwin_dark.png",
    rating: 9.6,
    bonus: "Votre mise remboursée jusqu'à 100€",
    url: "https://mediaserver.entainpartners.com/renderBanner.do?zoneId=2159573&clickid=",
    votes: 12450,
    displayUrl: "entainpartners.com"
  },

  {
    id: "PMU",
    name: "PMU",
    logo: "/brands/pmu__.png",
    rating: 9.6,
    bonus: "JUSQU'À 100 € DE BONUS",
    url: "https://www.pmu.fr/?gclid=",
    votes: 12450,
    displayUrl: "pmu.fr"
  }
];






