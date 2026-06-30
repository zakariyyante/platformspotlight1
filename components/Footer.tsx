import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05020a] py-24 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-20">
          {/* Logo */}
          <Link href="/" className="mb-12">
            <div className="relative w-64 h-16">
              <Image 
                src="/logo.png" 
                alt="Platform Spotlight" 
                fill 
                className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-6xl text-center md:text-left">
            <div className="md:col-span-1">
              <h4 className="text-white font-black uppercase tracking-[0.2em] mb-8 text-xs">Navigation</h4>
              <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-white/40">
                <li><Link href="/" className="hover:text-primary transition-colors">Accueil</Link></li>
                <li><Link href="#brands" className="hover:text-primary transition-colors">Marques</Link></li>
                <li><Link href="#guide" className="hover:text-primary transition-colors">Guide</Link></li>
                <li><Link href="#about" className="hover:text-primary transition-colors">À Propos</Link></li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="text-white font-black uppercase tracking-[0.2em] mb-8 text-xs">Légal</h4>
              <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-white/40">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Confidentialité</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Conditions</Link></li>
                <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-white font-black uppercase tracking-[0.2em] mb-8 text-xs">Divulgation d&apos;Affiliation</h4>
              <p className="text-[11px] text-white/30 leading-relaxed font-medium uppercase tracking-wider mb-4">
                Platform Spotlight est une plateforme de comparaison indépendante. Nous recevons des commissions de la part des marques présentées sur ce site. Ces commissions peuvent influencer le positionnement des marques, mais n&apos;affectent pas l&apos;impartialité de nos avis basés sur des tests réels.
              </p>
              <div className="flex items-center gap-2 text-[10px] text-primary font-black uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Contenu Publicitaire
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center pt-12 border-t border-white/5">
          <div className="flex flex-wrap justify-center gap-10 mb-10 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div className="relative w-10 h-10">
              <Image src="/icons/18plus.svg" alt="18+" fill className="object-contain" />
            </div>
            <div className="relative w-24 h-10">
              <Image src="/anj.png" alt="ANJ" fill className="object-contain" />
            </div>
            <div className="relative w-24 h-10">
              <Image src="/gambleaware.png" alt="Responsabilité" fill className="object-contain" />
            </div>
            <div className="relative w-24 h-10">
              <Image src="/joueurs-info-service.png" alt="Info Service" fill className="object-contain" />
            </div>
          </div>
          
          <div className="text-[9px] text-white/20 uppercase tracking-[0.4em] font-black">
            © {currentYear} PLATFORMSPOTLIGHT.COM • TOUS DROITS RÉSERVÉS
          </div>
        </div>
      </div>
    </footer>
  );
}
