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
  //   bonus: "100% jusqu'à 1000€ + 200FS",
  //   url: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5458&utm_campaign=Atefia-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },
  
  // {
  //   id: "BetRiviera",
  //   name: "BetRiviera",
  //   logo: "/brands/BETRIVIERA.svg",
  //   rating: 9.8,
  //   bonus: "Jusqu’à 2000€ + 200FS",
  //   url: "https://betriviera.media/n1g6w3zghg?subid=Betriviera-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  
  // },
  // {
  //   id: "SpinHub",
  //   name: "SpinHub",
  //   logo: "/brands/spinhub.png",
  //   rating: 9.8,
  //   bonus: "300% jusqu'à 1500€ + 100FS",
  //   url: "https://on.spinhub100.com/promoRedirect?key=ej0xMzUyNTU2NCZsPTEzNTI1MDA3JnA9MzYzMA%253D%253D&var4=fr&var2=SpinHub-SL2FR9&var1=",
  //   isMobile: true,
  //   votes: 12450,
  // },


  {
    id: "Chanze",
    name: "Chanze",
    logo: "/brands/chanze_dark.svg",
    rating: 9.9,
    bonus: "Pack de Bienvenue 650% jusqu’à 6500€",
    url: "https://go.affililinks.com/visit/?bta=35328&nci=5352&utm_campaign=Chanze-SL2FR9&afp=",
    isMobile: true,
    votes: 12450,
    // badge: { text: "Meilleur Offre", color: "#00F0FF" },
    badge: { text: "Retraits Rapides", color: "#22c55e" },
  },



  {
    id: "LuckyGem",
    name: "LuckyGem",
    logo: "/brands/luckygem_dark.svg",
    rating: 9.9,
    bonus: "Pack de Bienvenue 700% + 700 Tours Gratuits",
    url: "https://luckygemplay.com/tmorahfie?subid=LuckyGem-SL2FR9&visit_id=",
    isMobile: true,
    votes: 12450,
    
    
  },




  // {
  //   id: "RunaCasino",
  //   name: "RunaCasino",
  //   logo: "/brands/runa.svg",
  //   rating: 9.8,
  //   bonus: "Pack de Bienvenue Jusqu’à 2500€ + 600 Tours Gratuits",
  //   url: "https://bestcpa.online/click?o=581&a=36&sub_id1=RunaCasino-SL2FR9&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // },



  {
    id: "WinPlace",
    name: "WinPlace",
    logo: "/brands/winplacedark.png",
    rating: 9.8,
    bonus: "Pack de Bienvenue Jusqu’à 14000€ + 300 Tours Gratuits",
    url: "https://winplacepartner.media/n1q6puxsfo?subid=WinPlace-SL2FR9&visit_id=",
    isMobile: true,
    votes: 12450,
    // badge: { text: "Retraits Rapides", color: "#22c55e" },
    // badge: { text: "Meilleur Offre", color: "#00F0FF" },
  },

  {
    id: "SpinFormula",
    name: "SpinFormula",
    logo: "/brands/Spinformula.svg",
    rating: 9.8,
    bonus: "Pack de Bienvenue 550% jusqu’à 15000€ + 550 Tours Gratuits",
    url: "https://corsa.cxclick.com/visit/?bta=35059&nci=5345&utm_campaign=SpinFormula-SL2FR9&afp=",
    isMobile: true,
    votes: 12450,
    
  },

  // {
  //   id: "BetPortal",
  //   name: "BetPortal",
  //   logo: "/brands/betportal_dark.svg",
  //   rating: 9.8,
  //   bonus: "Pack de Bienvenue 300% jusqu'à 1000€ + 150 Tours Gratuits",
  //   url: "https://bestcpa.online/click?o=597&a=36&link_id=866&sub_id1=BetPortal-SL2FR9&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   // badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // },




  // {
  //   id: "WinKingdom",
  //   name: "WinKingdom",
  //   logo: "/brands/winkingdom.svg",
  //   rating: 9.8,
  //   bonus: "Pack de Bienvenue Jusqu’à 2000€ + 100 Tours Gratuits",
  //   url: "https://winkingdom.media/n11npxcmmu?subid=Winkingdom-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },



  // {
  //   id: "BetPortal",
  //   name: "BetPortal",
  //   logo: "/brands/betportal_dark.svg",
  //   rating: 9.8,
  //   bonus: "Pack de Bienvenue 300% jusqu'à 1000€ + 150 Tours Gratuits",
  //   url: "https://bestcpa.online/click?o=597&a=36&link_id=866&sub_id1=BetPortal-SL2FR9&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // },

  // {
  //   id: "Betory",
  //   name: "Betory",
  //   logo: "/brands/betory.png",
  //   rating: 9.8,
  //   bonus: "Pack de Bienvenue 300% jusqu'à 3250€ + 225 Tours Gratuits",
  //   url: "https://bestcpa.online/click?o=601&a=36&sub_id1=Betory-SL2FR9&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   // badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // },

  // {
  //   id: "RoyalDogs",
  //   name: "RoyalDogs",
  //   logo: "/brands/royaldogs_dark.webp",
  //   rating: 9.8,
  //   bonus: "Pack de Bienvenue 250% jusqu’à 2500€",
  //   url: "https://hawkaffiliates.cxclick.com/visit/?bta=35110&nci=5358&trackingcode=RoyalDogs-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // },


  // {
  //   id: "LuckyGem",
  //   name: "LuckyGem",
  //   logo: "/brands/luckygem_dark.svg",
  //   rating: 9.9,
  //   bonus: "Pack de Bienvenue 700% + 700 Tours Gratuits",
  //   url: "https://luckygemplay.com/tmorahfie?subid=LuckyGem-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   // badge: { text: "Nouvelle Offre", color: "#a020f0" },
    
  // },



  // {
  //   id: "WinKingdom",
  //   name: "WinKingdom",
  //   logo: "/brands/winkingdom.svg",
  //   rating: 9.8,
  //   bonus: "Pack de Bienvenue Jusqu’à 2000€ + 100 Tours Gratuits",
  //   url: "https://winkingdom.media/n11npxcmmu?subid=Winkingdom-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },

  // {
  //   id: "MusBet",
  //   name: "MusBet",
  //   logo: "/brands/Musbet_dark.png",
  //   rating: 9.8,
  //   bonus: "Pack de Bienvenue 300% jusqu’à 1000 € +150 Tours Gratuits",
  //   url: "https://bestcpa.online/click?o=596&a=36&link_id=985&sub_id1=MusBet-SL2FR9&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   // badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // },





  // {
  //   id: "LuckyGem",
  //   name: "LuckyGem",
  //   logo: "/brands/luckygem_dark.svg",
  //   rating: 9.9,
  //   bonus: "Pack de Bienvenue 700% + 700 Tours Gratuits",
  //   url: "https://luckygemplay.com/tmorahfie?subid=LuckyGem-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   // badge: { text: "Nouvelle Offre", color: "#a020f0" },
    
  // },



  // {
  //   id: "Winzter",
  //   name: "Winzter",
  //   logo: "/brands/Winzter_dark.svg",
  //   rating: 9.9,
  //   bonus: "Pack de Bienvenue 450% jusqu’à 3000€",
  //   url: "https://go.affililinks.com/visit/?bta=35328&nci=5351&utm_campaign=Winzter-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  //   // badge: { text: "Nouvelle Offre", color: "#a020f0" },
    
  // },



  // {
  //   id: "GoldenPlay",
  //   name: "GoldenPlay",
  //   logo: "/brands/goldenplay_dark.svg",
  //   rating: 9.8,
  //   bonus: "Pack de Bienvenue 100% jusqu’à 555€ + 100 Tours Gratuits",
  //   url: "https://record.gplaynetopartners.com/_vly5BcOM0H2Capx6qLanuGNd7ZgqdRLk/9/?pg=3&subid=GoldenPlay-SL2FR9&cid=",
  //   isMobile: true,
  //   votes: 12450,
  //   // badge: { text: "Nouvelle Offre", color: "#a020f0" },
  //   // badge: { text: "Retraits Rapides", color: "#22c55e" },
  //   // badge: { text: "Meilleur Offre", color: "#00F0FF" },
  // },

 
  









  // {
  //   id: "Royalen",
  //   name: "Royalen",
  //   logo: "/brands/royalen.webp",
  //   rating: 9.8,
  //   bonus: "Pack de Bienvenue 200% jusqu'à 2000€ + 200FS",
  //   url: "https://royalmedialinks.com/j2qyjvhin?subid=Royalen-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   // badge: { text: "Retraits Rapides", color: "#22c55e" },
  //   // badge: { text: "Meilleur Offre", color: "#00F0FF" },
  // },










  // {
  //   id: "WinoCasino",
  //   name: "WinoCasino",
  //   logo: "/brands/wino.svg",
  //   rating: 9.9,
  //   bonus: "600% jusqu’à 10000€",
  //   url: "https://go.afftrackio.com/visit/?bta=35487&nci=5357&utm_campaign=WinoCasino-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
    
  // },

  // {
  //   id: "WinoCasino",
  //   name: "WinoCasino",
  //   logo: "/brands/wino.svg",
  //   rating: 9.9,
  //   bonus: "600% jusqu’à 10000€",
  //   url: "https://go.afftrackio.com/visit/?bta=35487&nci=5357&utm_campaign=WinoCasino-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
    
  // },







  // {
  //   id: "GoloBet",
  //   name: "GoloBet",
  //   logo: "/brands/golobet.webp",
  //   rating: 9.8,
  //   bonus: "600% jusqu'à 6000€ + 450FS",
  //   url: "https://golobetlive.com/t4y2yuizy?subid=GoloBet-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // },

  // {
  //   id: "BravoPlay",
  //   name: "BravoPlay",
  //   logo: "/brands/bravoplay.svg",
  //   rating: 9.8,
  //   bonus: "Jusqu'à 5000€ + 150FS",
  //   url: "https://trk.arztrc.site/click?o=1&a=82&c=314&link_id=39&sub_id1=BravoPlay-SL2FR9&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // }
  // ,


  

  // {
  //   id: "CashBox",
  //   name: "CashBox",
  //   logo: "/brands/Cashbox.gif",
  //   rating: 9.8,
  //   bonus: "8000€ + 200FS",
  //   url: "https://svwpartners.cxclick.com/visit/?bta=35450&nci=5376&utm_campaign=CashBox-SL2FR9&afp1=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // },

  //  {
  //   id: "Aladdin’s Gold",
  //   name: "Aladdin’s Gold",
  //   logo: "/brands/Aladdinsgold.gif",
  //   rating: 9.8,
  //   bonus: "Jusqu’à 8000€ + 200TG",
  //   url: "https://svwpartners.cxclick.com/visit/?bta=35450&nci=5362&utm_campaign=AladdinsGold-SL2FR9&afp1=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // },
  // {
  //   id: "KingsChip",
  //   name: "KingsChip",
  //   logo: "/brands/KingsChip.gif",
  //   rating: 9.8,
  //   bonus: "8000€ + 200FS",
  //   url: "https://svwpartners.cxclick.com/visit/?bta=35450&nci=5354&utm_campaign=KingsChip-SL2FR9&afp1=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // },

  // {
  //   id: "SavannaWins",
  //   name: "SavannaWins",
  //   logo: "/brands/Savannawins.gif",
  //   rating: 9.8,
  //   bonus: "8000€ + 200FS",
  //   url: "https://svwpartners.cxclick.com/visit/?bta=35450&nci=5341&utm_campaign=SavannaWins-SL2FR9&afp1=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  // {
  //   id: "JokersAce",
  //   name: "JokersAce",
  //   logo: "/brands/JokersAce.gif",
  //   rating: 9.8,
  //   bonus: "Jusqu’à 8000€ + 200FS",
  //   url: "https://svwpartners.cxclick.com/visit/?bta=35450&nci=5361&utm_campaign=JokersAce-SL2FR9&afp1=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // },



  // {
  //   id: "BravoPlay",
  //   name: "BravoPlay",
  //   logo: "/brands/bravoplay.svg",
  //   rating: 9.6,
  //   bonus: "Jusqu'à 5000€ + 150FS",
  //   url: "https://trk.arztrc.site/click?o=1&a=82&c=314&link_id=39&sub_id1=BravoPlay-SL2FR9&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // },
  // ,
  // {
  //   id: "AlexanderCasino",
  //   name: "AlexanderCasino",
  //   logo: "/brands/alexandercasinooriginal.png",
  //   rating: 9.6,
  //   bonus: "100% jusqu'à 100€+ 100FS",
  //   url: "https://record.igpartners.xyz/_ODG17rnrZXKuqxJ1W5ErsWNd7ZgqdRLk/1/?s2s.req_id=AlexanderCasino-SL2FR9&payload=",
  //   isMobile: true,
  //   votes: 12450,
   
  // },
  // {
  //   id: "RivoCasino",
  //   name: "RivoCasino",
  //   logo: "/brands/Rivo_logo_light.svg",
  //   rating: 9.7,
  //   bonus: "1000% jusqu’à 10000€",
  //   url: "https://go.afftrackio.com/visit/?bta=35487&nci=5386&utm_campaign=RivoCasino-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // }
  // ,
  

 

 
  //  {
  //   id: "Aerobet",
  //   name: "Aerobet",
  //   logo: "/brands/AEROBET.webp",
  //   rating: 9.8,
  //   bonus: "Jusqu’à 600% + 450FS",
  //   url: "https://aerobetalive.com/tawbnds9h?subid=Aerobet-SL2FR9&visit_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Retraits Rapides", color: "#22c55e" },
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
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // },
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
  //   id: "WinKingdom",
  //   name: "WinKingdom",
  //   logo: "/brands/winkingdom.svg",
  //   rating: 9.8,
  //   bonus: "Jusqu’à 2000€ + 100FS",
  //   url: "https://bestcpa.online/click?o=568&a=36&sub_id1=WinKingdom-SL2FR9&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },
  //  {
  //   id: "RunaCasino",
  //   name: "RunaCasino",
  //   logo: "/brands/runa.svg",
  //   rating: 9.8,
  //   bonus: "Jusqu’à 2500€ + 600FS",
  //   url: "https://bestcpa.online/click?o=581&a=36&sub_id1=RunaCasino-SL2FR9&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  //  {
  //   id: "Westace",
  //   name: "Westace",
  //   logo: "/brands/westace.png",
  //   rating: 9.8,
  //   bonus: "400% jusqu’à 15000€ + 400FS",
  //   url: "https://bestcpa.online/click?o=446&a=36&link_id=716&sub_id1=Westace-SL2FR9&aff_click_id=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },



  // ,

  // {
  //   id: "CaptainSlots",
  //   name: "CaptainSlots",
  //   logo: "/brands/captainSlots.svg",
  //   rating: 9.8,
  //   bonus: "100% jusqu'à 1500€",
  //   url: "https://track-otn.com/trk.php?t=2705&c=4491&subid=CaptainSlots-SL2FR9&clickid=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Retraits Rapides", color: "#22c55e" },
  // },


  // {
  //   id: "WoolBet",
  //   name: "WoolBet",
  //   logo: "/brands/WoolBet.svg",
  //   rating: 9.8,
  //   bonus: "303% jusqu'à 3003€ + 303FS",
  //   url: "https://trackingwoolbet.com/d0tzmfcvu?subid=WoolBet-SL2FR9&clickid=",
  //   isMobile: true,
  //   votes: 12450,
  //   
  // },
 
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
  
  
   
 
  


  //  {
  //   id: "spinboss",
  //   name: "SpinBoss",
  //   logo: "/brands/spinboss.webp",
  //   rating: 9.8,
  //   bonus: "400% jusqu’à 15000€ + 400FS",
  //   url: "https://spbs.lynmonkel.com/?mid=355610_2121757&subid=SpinBoss-SL2FR9&clickid=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  // {
  //   id: "Spinlynx",
  //   name: "Spinlynx",
  //   logo: "/brands/spinlynx.webp",
  //   rating: 9.8,
  //   bonus: "400% jusqu'à 2000€ and 200TG",
  //   url: "https://go.newsspinlynx.com/visit/?bta=35331&nci=5342&afp1=Spinlynx-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // },
 
 
 
 
  
  
 
  // {
  //   id: "SlimKing",
  //   name: "SlimKing",
  //   logo: "/brands/slimkinglogo.png",
  //   rating: 9.8,
  //   bonus: "100% jusqu’à 1000€ + 200FS",
  //   url: "https://go.gambleon.com/visit/?bta=75302&nci=5394&utm_campaign=SlimKing-SL2FR9&afp=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
  //  {
  //   id: "bananzia",
  //   name: "Bananzia",
  //   logo: "/brands/bananzia.svg",
  //   rating: 9.8,
  //   bonus: "300% jusqu’à 3000€ + 300FS",
  //   url: "https://go.drctvoodoo.com/click?pid=6&offer_id=21&sub2=Bananzia-SL2FR9&sub1=",
  //   isMobile: true,
  //   votes: 12450,
    
  // },
 
  
  
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
  //   id: "RxBet",
  //   name: "RxBet",
  //   logo: "/brands/rxcasino.png",
  //   rating: 9.8,
  //   bonus: "150 % jusqu'à 5000€",
  //   url: "https://go.rx.partners/visit/?bta=35855&nci=5352&afp=RxBet-SL2FR9&utm_campaign=",
  //   isMobile: true,
  //   votes: 12450,
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
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
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
  // },
    
  
  
  
  // {
  //   id: "SpinFin",
  //   name: "SpinFin",
  //   logo: "/brands/SPINFIN.png",
  //   rating: 9.8,
  //   bonus: "350% jusqu’à 10000€ + 500FS",
  //   url: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5358&utm_campaign=SpinFin-SL2FR9&afp=",
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
  //   badge: { text: "Nouvelle Offre", color: "#a020f0" },
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
  //   bonus: "100% jusqu’à 750€ + 100 TG + 3x Roue de la Fortune",
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
