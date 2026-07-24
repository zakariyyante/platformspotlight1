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
  //   id: "daytonaspin",
  //   name: "DaytonaSpin",
  //   logo: "/brands/daytonaspin.png",
  //   rating: 9.8,
  //   bonus: "430% jusqu’à 14300€ + 430FS",
  //   url: "https://direct.reradirectbox.com/click?pid=75&offer_id=1604&l=1784641970&sub2=DaytonaSpin-SL2FR9&sub1=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },
  // {
  //   id: "spinboss",
  //   name: "SpinBoss",
  //   logo: "/brands/spinboss.webp",
  //   rating: 9.8,
  //   bonus: "400% jusqu’à 15000€ + 400FS",
  //   url: "https://spbs.lynmonkel.com/?mid=355610_2121757&subid=SpinBoss-SL2FR9&clickid=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },
  // {
  //   id: "WinKingdom",
  //   name: "WinKingdom",
  //   logo: "/brands/winkingdom.svg",
  //   rating: 9.8,
  //   bonus: "Jusqu’à 15000€ + 450FS",
  //   url: "https://winkingdom.media/n1m05duhl4?subid=WinKingdom-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },
  // {
  //   id: "BetRiviera",
  //   name: "BetRiviera",
  //   logo: "/brands/BETRIVIERA.svg",
  //   rating: 9.8,
  //   bonus: "Jusqu’à 15000€ + 350FS",
  //   url: "https://betriviera.media/n1qnk1ibhz?subid=BetRiviera-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },
  // {
  //   id: "Betory",
  //   name: "Betory",
  //   logo: "/brands/betory.png",
  //   rating: 9.8,
  //   bonus: "300% jusqu'à 3250€",
  //   url: "https://betorytrackers.com/d9c0p3tke?subid=BetNJet-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },
  // {
  //   id: "bananzia",
  //   name: "Bananzia",
  //   logo: "/brands/bananzia.svg",
  //   rating: 9.8,
  //   bonus: "300% jusqu’à 3000€ + 300FS",
  //   url: "https://go.drctvoodoo.com/click?pid=6&offer_id=21&sub2=Bananzia-SL2FR9&sub1=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },
  
  {
    id: "GoloBet",
    name: "GoloBet",
    logo: "/brands/golobet.webp",
    rating: 9.8,
    bonus: "600% jusqu'à 6000€ + 450FS",
    url: "https://golobetlive.com/t4y2yuizy?subid=GoloBet-SL2FR9&visit_id=",
    isMobile: true,
    votes: 12450,
    badge: { text: "Retraits Rapides", color: "#22c55e" },
  },
  
  
  
  // {
  //   id: "HeavyBet",
  //   name: "HeavyBet",
  //   logo: "/brands/heavybet.png",
  //   rating: 9.8,
  //   bonus: "300% jusqu'à 3000€ + 300FS",
  //   url: "https://media.heavybet.partners/visit/?bta=35072&nci=5345&utm_campaign=HeavyBet-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },
  // {
  //   id: "Amunbet",
  //   name: "Amunbet",
  //   logo: "/brands/amunbet.webp",
  //   rating: 9.8,
  //   bonus: "450% jusqu’à 3000€ + 450FS",
  //   url: "https://amunbetplay.com/tf11k61qe?subid=Amunbet-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
    
  {
    id: "Atefia",
    name: "Atefia",
    logo: "/brands/atefia.webp",
    rating: 9.8,
    bonus: "100% jusqu'à 1000€ + 200FS",
    url: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5458&utm_campaign=Atefia-SL2FR9&afp=",
    isMobile: true,
    votes: 12450,
    badge: { text: "Meilleure Offre", color: "#00f5ff" },
  },
  {
    id: "Aerobet",
    name: "Aerobet",
    logo: "/brands/AEROBET.webp",
    rating: 9.8,
    bonus: "Jusqu’à 600% + 450FS",
    url: "https://aerobetalive.com/tawbnds9h?subid=Aerobet-SL2FR9&visit_id=",
    isMobile: true,
    votes: 12450,
    badge: { text: "Nouvelle Offre", color: "#a020f0" },
    
  },
  {
    id: "SpinFormula",
    name: "SpinFormula",
    logo: "/brands/Spinformula.svg",
    rating: 9.8,
    bonus: "555% jusqu'à 15555€",
    url: "https://corsa.cxclick.com/visit/?bta=35059&nci=5345&utm_campaign=SpinFormula-SL2FR9&afp=",
    isMobile: true,
    votes: 12450,
    
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
    
  },
  // {
  //   id: "Zombillion",
  //   name: "Zombillion",
  //   logo: "/brands/zombillion.svg",
  //   rating: 9.8,
  //   bonus: "250% jusqu’à 4000€ + 200FS",
  //   url: "https://direct.club.partners/click?pid=19&offer_id=59&l=1779872569&sub2=Zombillion-SL2FR9&sub1=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  // {
  //   id: "BetNJet",
  //   name: "BetNJet",
  //   logo: "/brands/betnjet.webp",
  //   rating: 9.8,
  //   bonus: "400% jusqu'à 1000€ + 250FS",
  //   url: "https://gtrfk.com/jiasgddfx?subid=BetNJet-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  
  
  // {
  //   id: "BetNJet",
  //   name: "BetNJet",
  //   logo: "/brands/betnjet.webp",
  //   rating: 9.8,
  //   bonus: "400% jusqu'à 1000€ + 250FS",
  //   url: "https://gtrfk.com/jiasgddfx?subid=BetNJet-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  // {
  //   id: "X3Bet",
  //   name: "X3Bet",
  //   logo: "/brands/x3bet.svg",
  //   rating: 9.8,
  //   bonus: "100% jusqu'à 1000€ + 200FS",
  //   url: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5371&utm_campaign=X3Bet-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  
  // },
  
   
  // {
  //   id: "CleanWins",
  //   name: "CleanWins",
  //   logo: "/brands/CLEANWINS.svg",
  //   rating: 9.8,
  //   bonus: "200% jusqu'à 2000€ + 200FS",
  //   url: "https://on.cwtrk.com/promoRedirect?key=ej0xMzU4MTczMiZsPTEzNTgzODYzJnA9MTEzODU%3D&var2=CleanWins-SL2FR9&var1=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  
  
  // {
  //   id: "Spinkong",
  //   name: "Spinkong",
  //   logo: "/brands/Spinkong.webp",
  //   rating: 9.8,
  //   bonus: "400% jusqu’à 1000€ + 250FS",
  //   url: "https://gtrfspkng.com/jxcod4yvg?subid=Spinkong-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  
  
  
   
  
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
];
