import Image from 'next/image';

export default function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative pt-32 pb-24 overflow-hidden spotlight-bg">
      {/* Visual elements inspired by logo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[80px]" />
        <div className="absolute top-[10%] left-[20%] w-1 h-64 bg-linear-to-b from-primary/10 to-transparent rotate-45 blur-[2px]" />
        <div className="absolute top-[5%] right-[15%] w-1 h-48 bg-linear-to-b from-accent/10 to-transparent -rotate-45 blur-[2px]" />
      </div>
      
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
            FRANCE • {currentYear} • PREMIER HUB
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
          LE MEILLEUR DES <br />
          <span className="gold-text">PLATEFORMES</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Analyses d&apos;experts, bonus exclusifs et classements en temps réel pour les utilisateurs français exigeants.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <div className="px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary">
            {new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(new Date()).toUpperCase()}
          </div>
          <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/60 flex items-center gap-2">
            <span className="text-primary">✓</span> UTILISATION RESPONSABLE
          </div>
          <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/60 flex items-center gap-2">
            <span className="text-primary">🛡</span> PROTECTION ANJ
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            { icon: 'licensed', title: 'Licencié', desc: 'Réglementé ANJ' },
            { icon: 'expert', title: 'Expertise', desc: 'Avis Certifiés' },
            { icon: 'withdraw', title: 'Rapidité', desc: 'Retraits 24h' }
          ].map((item, i) => (
            <div key={i} className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-4">
                <div className="w-12 h-12 relative flex-shrink-0 grayscale group-hover:grayscale-0 transition-all">
                  <Image src={`/icons/${item.icon}.svg`} alt={item.title} fill className="object-contain" />
                </div>
                <div className="text-left">
                  <div className="font-black uppercase text-xs tracking-widest text-white/90">{item.title}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
