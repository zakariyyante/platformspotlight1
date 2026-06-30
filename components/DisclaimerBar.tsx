import Link from 'next/link';

export default function DisclaimerBar() {
  return (
    <div className="bg-red-950/20 border-y border-red-500/10 py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-red-600 text-white font-black rounded-xl text-xl shadow-lg shadow-red-600/20">
              18+
            </div>
            <div>
              <div className="font-black text-white uppercase tracking-widest text-sm mb-1">Attention : Interdit aux Mineurs</div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">L&apos;accès est strictement réservé aux adultes de 18 ans et plus.</div>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-10 bg-white/10" />
          
          <div className="flex-grow max-w-xl">
            <p className="text-xs text-white/60 leading-relaxed">
              L&apos;utilisation comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le <span className="text-white font-bold">09 74 75 13 13</span> (appel non surtaxé) ou visitez{' '}
              <Link href="https://www.joueurs-info-service.fr/" target="_blank" className="text-primary hover:underline font-bold">
                Service d&apos;Aide
              </Link>.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black text-white/40 uppercase tracking-widest">
              Régulé par l&apos;ANJ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
