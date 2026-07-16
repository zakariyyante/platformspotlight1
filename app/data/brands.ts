export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
  displayUrl?: string;
  badge?: {
    text: string;
    color: string; // hex or tailwind class
  };
}

const generateId = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

export const brands: Brand[] = [
  // {
  //   id: "Atefia",
  //   name: "Atefia",
  //   logo: "/brands/atefia.webp",
  //   rating: 9.8,
  //   bonus: "100 % jusqu'à 1000€ + 200FS",
  //   url: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5458&utm_campaign=Atefia-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  // },
  {
    id: "BetNJet",
    name: "BetNJet",
    logo: "/brands/betnjet.webp",
    rating: 9.8,
    bonus: "Bonus exclusif coupe du monde: jusqu’à 500€",
    url: "https://gtrfk.com/jubr84o3x?subid=BetNJet-SL2FR9&visit_id=",
    isMobile: true,
    votes: 12450,
  },
  // {
  //   id: "WinoCasino",
  //   name: "WinoCasino",
  //   logo: "/brands/wino.svg",
  //   rating: 9.8,
  //   bonus: "Pack machines à sous 600% jusqu’à 10000€",
  //   url: "https://go.afftrackio.com/visit/?bta=35487&nci=5357&utm_campaign=WinoCasino-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  // },
  
  {
    id: "SpinMillion",
    name: "SpinMillion",
    logo: "/brands/spinmillion.webp",
    rating: 9.8,
    bonus: "100% jusqu’à 750€ + 100 Tours Gratuits + 3x Roue de la Fortune",
    url: "https://bestcpa.online/click?o=542&a=36&sub_id1=SpinMillion-SL2FR9&aff_click_id=",
    isMobile: true,
    votes: 12450,
  },
  {
    id: "SpinFin",
    name: "SpinFin",
    logo: "/brands/SPINFIN.png",
    rating: 9.8,
    bonus: "350% jusqu’à 10 000 € + 500 FS",
    url: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5358&utm_campaign=SpinFin-SL2FR9&afp=",
    isMobile: true,
    votes: 12450,
  },
  
  {
    id: "bwin",
    name: "Bwin",
    logo: "/bwin_dark.png",
    rating: 9.6,
    bonus: "Votre mise remboursée jusqu'à 100€",
    url: "https://mediaserver.entainpartners.com/renderBanner.do?zoneId=2159573&clickid=",
    isMobile: false,
    votes: 12450,
    displayUrl: "bwin.com"
  }
].sort((a, b) => b.rating - a.rating);
