'use client';

import Image from 'next/image';
import { Brand } from '@/app/data/brands';
import { track } from '@vercel/analytics';

interface BrandCardProps {
  brand: Brand;
  gclidValue?: string;
  rank: number;
  variant?: 'default' | 'modal';
}

export const buildUrl = (url: string, gclid?: string) => {
  if (!gclid) return url;
  return `${url}${gclid}`;
};

declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => void;
  }
}

export default function BrandCard({ brand, gclidValue, rank, variant = 'default' }: BrandCardProps) {
  const finalUrl = buildUrl(brand.url, gclidValue);

  const handleCardClick = () => {
    track('Brand Click', { brand: brand.name });
    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      window.gtag_report_conversion();
    }
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'modal') {
    // Compact style for mobile modal inspired by screenshot
    return (
      <div 
        onClick={handleCardClick}
        className="bg-[#0f0821] border border-white/5 relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
      >
        {/* Top Badge */}
        {brand.badge && (
          <div 
            className="absolute top-0 left-0 px-3 py-1 rounded-br-xl text-[9px] font-black uppercase tracking-widest z-20 shadow-lg"
            style={{ backgroundColor: brand.badge.color, color: '#000' }}
          >
            {brand.badge.text}
          </div>
        )}

        <div className="p-3 md:p-5">
          <div className="flex flex-row items-center gap-3 mb-3">
            
            {/* Left Column: Logo + Rating */}
            <div className="flex flex-col items-center w-[35%] flex-shrink-0">
              <div className="relative w-full h-14 flex items-center justify-center mb-2">
                <Image src={brand.logo} alt={brand.name} fill className="object-contain" />
              </div>
              
              <div className="flex text-[#f9d423] scale-75 origin-center mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(brand.rating / 2) ? 'text-[#f9d423]' : 'text-white/20'}>★</span>
                ))}
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-xl font-black text-white">{brand.rating.toFixed(1)}</span>
                <span className="text-white/40 font-bold text-[10px]">/10</span>
              </div>
            </div>

            {/* Right Column: Bonus Info */}
            <div className="flex flex-col flex-grow items-center justify-center text-center">
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 mb-1.5">
                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-primary">BONUS EXCLUSIF</span>
              </div>
              <div className="text-xs md:text-sm font-black text-white leading-tight tracking-tight">
                {brand.bonus}
              </div>
            </div>
          </div>

          {/* Bottom Button */}
          <button className="w-full py-3 btn-gradient rounded-xl shadow-lg shadow-primary/10 transition-all active:scale-95 overflow-hidden relative">
            <span className="relative z-10 text-[9px] font-black uppercase tracking-[0.2em]">
              VISITER {brand.name}
            </span>
          </button>
        </div>
      </div>
    );
  }

  // New Screenshot-inspired style (Default / Desktop)
  return (
    <div 
      onClick={handleCardClick}
      className="bg-[#0f0821] border border-white/5 relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-primary/30"
    >
      {/* Top Left Badge */}
      {brand.badge && (
        <div 
          className="absolute top-0 left-0 px-3.5 py-1 rounded-br-xl text-[9px] font-black uppercase tracking-widest z-20 shadow-lg"
          style={{ backgroundColor: brand.badge.color, color: '#000' }}
        >
          {brand.badge.text}
        </div>
      )}

      <div className="p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          
          {/* Left Side: Logo + Rating */}
          <div className="flex flex-col items-center md:items-start md:w-[35%]">
            <div className="relative w-32 h-20 mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <Image src={brand.logo} alt={brand.name} width={120} height={80} className="object-contain" />
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <div className="flex text-[#f9d423] mb-1.5 text-xs">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(brand.rating / 2) ? 'text-[#f9d423]' : 'text-white/20'}>★</span>
                ))}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-white">{brand.rating.toFixed(1)}</span>
                <span className="text-white/40 font-bold text-base">/10</span>
              </div>
            </div>
          </div>

          {/* Right Side: Bonus + CTA */}
          <div className="flex flex-col flex-grow w-full md:w-[65%] gap-6">
            <div className="flex flex-col items-center md:items-center">
              <div className="inline-block px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-3 self-center">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">OFFRE EXCLUSIVE</span>
              </div>
              <div className="text-xl md:text-2xl font-black text-white text-center leading-tight tracking-tight min-h-[3.5rem] flex items-center justify-center">
                {brand.bonus}
              </div>
            </div>

            <button className="w-full py-4 btn-gradient rounded-xl shadow-2xl shadow-primary/20 scale-100 group-hover:scale-[1.02] transition-all duration-500 overflow-hidden relative">
              <span className="relative z-10 text-xs font-black uppercase tracking-[0.2em]">
                DÉCOUVRIR {brand.name}
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
