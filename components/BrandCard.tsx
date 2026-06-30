'use client';

import Image from 'next/image';
import { Brand } from '@/app/data/brands';
import { track } from '@vercel/analytics';

interface BrandCardProps {
  brand: Brand;
  gclidValue?: string;
  rank: number;
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

export default function BrandCard({ brand, gclidValue, rank }: BrandCardProps) {
  const finalUrl = buildUrl(brand.url, gclidValue);

  const handleCardClick = () => {
    track('Brand Click', { brand: brand.name });
    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      window.gtag_report_conversion();
    }
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  const getRankBadge = (rank: number) => {
    if (rank > 3) return null;
    const colors = {
      1: 'from-[#f9d423] to-[#e2b74b]',
      2: 'from-[#e0e0e0] to-[#bdbdbd]',
      3: 'from-[#cd7f32] to-[#a0522d]'
    };
    const labels = { 1: 'TOP 1', 2: 'ELITE', 3: 'PRO' };
    
    return (
      <div className={`absolute top-0 right-0 bg-linear-to-bl ${colors[rank as 1|2|3]} text-black font-black text-[10px] px-4 py-1.5 rounded-bl-xl z-10 tracking-[0.2em]`}>
        {labels[rank as 1|2|3]}
      </div>
    );
  };

  return (
    <div 
      onClick={handleCardClick}
      className="platform-card-bg relative group cursor-pointer rounded-2xl overflow-hidden purple-glow"
    >
      {getRankBadge(rank)}
      
      {/* Spotlight effect on hover */}
      <div className="absolute -inset-px bg-linear-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-1">
        <div className="bg-[#150a25] rounded-[15px] p-6 flex flex-col md:flex-row items-center gap-8">
          {/* Rank Number */}
          <div className="absolute top-4 left-6 text-4xl font-black text-white/5 italic">
            {rank < 10 ? `0${rank}` : rank}
          </div>

          {/* LEFT col: logo + rating */}
          <div className="flex flex-col items-center md:items-start md:w-1/3 gap-4 pt-4 md:pt-0">
            <div className="relative w-28 h-28 bg-white/[0.03] rounded-2xl p-4 flex items-center justify-center border border-white/5 group-hover:border-primary/20 transition-colors">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="text-xl font-black uppercase tracking-tight text-white/90">{brand.name}</div>
              <div className="flex items-center gap-3 mt-1">
                <div className="text-primary font-black text-2xl">{brand.rating.toFixed(1)}</div>
                <div className="flex text-primary/40 text-[10px]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(brand.rating / 2) ? 'text-primary' : ''}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT col: bonus + CTA */}
          <div className="flex flex-col flex-grow w-full md:w-2/3 gap-6">
            <div className="relative p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-lg md:text-xl font-bold text-white text-center md:text-left leading-tight">
                {brand.bonus}
              </p>
              <div className="mt-2 text-[10px] text-white/30 uppercase tracking-widest text-center md:text-left">
                {brand.votes.toLocaleString()} UTILISATEURS ONT VOTÉ
              </div>
            </div>

            <button 
              className="w-full py-5 bg-linear-to-r from-primary via-[#f9d423] to-primary text-black font-black uppercase tracking-[0.2em] text-xs rounded-xl shadow-2xl hover:scale-[1.02] transition-all gold-shimmer"
            >
              Réclamer l&apos;Offre
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
