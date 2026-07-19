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
    id: "spinboss",
    name: "SpinBoss",
    logo: "/brands/spinboss.webp",
    rating: 9.8,
    bonus: "400% jusqu’à 15000€ + 400FS",
    url: "https://spbs.lynmonkel.com/?mid=355610_2121757&subid=SpinBoss-SL2FR9&clickid=",
    isMobile: true,
    votes: 12450,
    badge: { text: "Nouvelle Offre", color: "#a020f0" },
  },
  {
    id: "SpinFin",
    name: "SpinFin",
    logo: "/brands/SPINFIN.png",
    rating: 9.8,
    bonus: "350% jusqu’à 10000€ + 500FS",
    url: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5358&utm_campaign=SpinFin-SL2FR9&afp=",
    isMobile: true,
    votes: 12450,
    badge: { text: "Meilleure Offre", color: "#00f5ff" },
  },
  {
    id: "WinKingdom",
    name: "WinKingdom",
    logo: "/brands/winkingdom.svg",
    rating: 9.8,
    bonus: "Pack de bienvenue 15000€ + 450FS",
    url: "https://winkingdom.media/n1m05duhl4?subid=WinKingdom-SL2FR9&visit_id=",
    isMobile: true,
    votes: 12450,
    badge: { text: "Retraits Rapides", color: "#22c55e" },
  },
  {
    id: "Betory",
    name: "Betory",
    logo: "/brands/betory.png",
    rating: 9.8,
    bonus: "300% jusqu'à 3250€",
    url: "https://betorytrackers.com/d9c0p3tke?subid=BetNJet-SL2FR9&visit_id=",
    isMobile: true,
    votes: 12450,
    
  },
  {
    id: "Spinkong",
    name: "Spinkong",
    logo: "/brands/Spinkong.webp",
    rating: 9.8,
    bonus: "400% jusqu’à 1000€ + 250FS",
    url: "https://gtrfspkng.com/jxcod4yvg?subid=Spinkong-SL2FR9&visit_id=",
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
  // {
  //   id: "BetNJet",
  //   name: "BetNJet",
  //   logo: "/brands/betnjet.webp",
  //   rating: 9.8,
  //   bonus: "Bonus exclusif coupe du monde: jusqu’à 500€",
  //   url: "https://gtrfk.com/jubr84o3x?subid=BetNJet-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
  // },
  // {
  //   id: "SpinMillion",
  //   name: "SpinMillion",
  //   logo: "/brands/spinmillion.webp",
  //   rating: 9.8,
  //   bonus: "100% jusqu’à 750€ + 100 Tours Gratuits + 3x Roue de la Fortune",
  //   url: "https://bestcpa.online/click?o=542&a=36&sub_id1=SpinMillion-SL2FR9&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
  // },
 
  
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
