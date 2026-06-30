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
    if (gclid && mobileBrands.length > 0) {
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
        <div className="sticky top-0 z-[110] bg-background/80 backdrop-blur-xl border-b border-white/5 p-6 flex items-center justify-between">
          <div className="relative w-40 h-10">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" />
          </div>
          <button 
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = 'unset';
            }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-grow">
          <section className="py-16 px-6 text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">
                EXCLUSIF MOBILE
              </span>
            </div>
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter leading-none">
              LES MEILLEURES <br />
              <span className="gold-text">OFFRES DU JOUR</span>
            </h2>
            <p className="text-white/40 text-sm max-w-xs mx-auto font-medium">
              Sélection premium optimisée pour votre smartphone.
            </p>
          </section>

          <div className="px-4 pb-12">
            <div className="grid grid-cols-1 gap-6 mb-12">
              {mobileBrands.map((brand, index) => (
                <BrandCard 
                  key={brand.id} 
                  brand={brand} 
                  gclidValue={gclid || undefined} 
                  rank={index + 1} 
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
        <div className="bg-black/40 p-10 border-t border-white/5 text-center">
          <div className="text-[9px] text-white/10 uppercase tracking-[0.4em] font-black">
            © 2026 PLATFORMSPOTLIGHT.COM
          </div>
        </div>
      </div>
    </div>
  );
}
