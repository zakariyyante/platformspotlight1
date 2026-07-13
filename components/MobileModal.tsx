'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Brand, brands } from '@/app/data/brands';
import BrandCard from './BrandCard';
import Image from 'next/image';

export default function MobileModal() {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const gclid = searchParams.get('gclid');

  const mobileBrands = brands.filter(b => b.isMobile);

  useEffect(() => {
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768;

    if (gclid && mobileBrands.length > 0 && isMobileDevice) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [gclid, mobileBrands.length]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background overflow-y-auto animate-in fade-in duration-500">
      <div className="min-h-screen flex flex-col spotlight-bg">
        {/* Modal Header */}
        <div className="sticky top-0 z-[110] bg-[#06020f]/80 backdrop-blur-xl border-b border-white/5 px-4 py-3 flex items-center justify-between">
          <div className="relative w-32 h-8">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </div>
          
          {/* Burger Menu Mock */}
          <button className="text-white p-2">
            <div className="w-5 h-4 flex flex-col justify-between items-end">
              <span className="h-0.5 w-5 bg-primary rounded-full" />
              <span className="h-0.5 w-3 bg-primary rounded-full" />
              <span className="h-0.5 w-5 bg-primary rounded-full" />
            </div>
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-grow">
          <section className="pt-2 pb-6 px-6 text-center">
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-primary">
                EXCLUSIF MOBILE
              </span>
            </div>
            <h2 className="text-4xl font-black mb-3 uppercase tracking-tighter leading-[0.9]">
              LES MEILLEURES <br />
              <span className="gold-text">OFFRES DU JOUR</span>
            </h2>
            <p className="text-white/40 text-[11px] max-w-xs mx-auto font-medium mb-6">
              Sélection premium optimisée pour votre smartphone.
            </p>

            {/* Floating Trust Badges - Infinite Marquee */}
            <div className="relative w-full overflow-hidden pb-4 pt-2">
              <div className="animate-marquee gap-2">
                {[...Array(2)].map((_, listIdx) => (
                  <div key={listIdx} className="flex gap-2 px-1">
                    {[
                      { icon: 'licensed', text: 'Levantamentos Rápidos', color: 'bg-primary/10 border-primary/20 text-primary' },
                      { icon: '18plus', text: '18+', color: 'bg-red-500/10 border-red-500/20 text-red-500' },
                      { icon: 'expert', text: 'Licença Segura', color: 'bg-green-500/10 border-green-500/20 text-green-500' },
                      { icon: 'withdraw', text: 'Suporte 24/7', color: 'bg-accent/10 border-accent/20 text-accent' }
                    ].map((badge, i) => (
                      <div 
                        key={`${listIdx}-${i}`} 
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm whitespace-nowrap ${badge.color}`}
                      >
                        <div className="relative w-3 h-3">
                          <Image src={`/icons/${badge.icon}.svg`} alt={badge.text} fill className="object-contain brightness-110" />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest">{badge.text}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="px-3 pb-8">
            <div className="grid grid-cols-1 gap-4 mb-10">
              {mobileBrands.map((brand, index) => (
                <BrandCard 
                  key={brand.id} 
                  brand={brand} 
                  gclidValue={gclid || undefined} 
                  rank={index + 1} 
                  variant="modal"
                />
              ))}
            </div>

            {/* Compliance in Modal */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 text-center">
              <div className="flex justify-center gap-4 mb-6">
                <div className="w-8 h-8 relative opacity-30 grayscale">
                  <Image src="/icons/18plus.svg" alt="18+" fill className="object-contain" />
                </div>
                <div className="w-20 h-8 relative opacity-30 grayscale">
                  <Image src="/anj.png" alt="ANJ" fill className="object-contain" />
                </div>
                <div className="w-20 h-8 relative opacity-30 grayscale">
                  <Image src="/gambleaware.png" alt="Responsabilité" fill className="object-contain" />
                </div>
              </div>
              <p className="text-[10px] text-white/30 leading-relaxed font-bold uppercase tracking-widest">
                L&apos;utilisation doit rester un plaisir. <br />
                Appelez le 09 74 75 13 13 pour de l&apos;aide.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-black/40 p-6 border-t border-white/5 text-center">
          <div className="text-[8px] text-white/10 uppercase tracking-[0.4em] font-black">
            © 2026 PLATFORMSPOTLIGHT.COM
          </div>
        </div>
      </div>
    </div>
  );
}
