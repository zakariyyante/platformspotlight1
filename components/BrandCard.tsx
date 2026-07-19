'use client';

import Image from 'next/image';
import { Fragment } from 'react';
import { Brand } from '@/app/data/brands';
import { track } from '@vercel/analytics';

interface BrandCardProps {
  brand: Brand;
  gclidValue?: string;
  rank: number;
  variant?: 'default' | 'modal';
  priority?: boolean;
}

export const buildUrl = (url: string, gclid?: string) => {
  if (!gclid) return url;
  return `${url}${gclid}`;
};

// Picks readable text color for a given badge background color.
const getBadgeTextColor = (hex: string) => {
  const match = /^#?([a-f\d]{6})$/i.exec(hex);
  if (!match) return '#000';
  const num = parseInt(match[1], 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? '#0a0514' : '#fff';
};

// Simple seeded PRNG so per-brand "randomness" stays stable across server/client renders.
const seededRandom = (seed: string) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return () => {
    hash = (hash * 1103515245 + 12345) >>> 0;
    return hash / 0xffffffff;
  };
};

const BITCOIN_LOGO = '/bitcoin.png';
const OTHER_PAYMENT_LOGOS = ['/BankTransfer.png', '/mastercard.webp', '/paypal.jpg', '/visa.webp'];

// Bitcoin always shows, plus 2 more logos picked deterministically per brand so the
// mix varies across cards but stays stable between server/client renders.
const pickPaymentLogos = (seed: string) => {
  const rand = seededRandom(seed);
  const shuffled = [...OTHER_PAYMENT_LOGOS];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return [BITCOIN_LOGO, ...shuffled.slice(0, 2)];
};

// Derives the displayed score from the card's position (not a fixed field), so
// scores always read in descending order and automatically follow whatever
// order the brands are listed in — reordering them just re-ranks the scores.
const generateDynamicRating = (rank: number) => {
  return Math.max(9.0, 9.9 - (rank - 1) * 0.1);
};

// Wraps numeric bonus amounts (and their currency/unit) in a gold accent for emphasis.
const highlightBonus = (text: string) => {
  const parts = text.split(/(\d[\d.,\s]*(?:%|€|\$)?(?:\s?(?:EUR|RG|FS|TG))?)/gi);
  return parts.map((part, i) =>
    /\d/.test(part) ? (
      <span key={i} className="gold-text whitespace-nowrap">{part}</span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
};

export default function BrandCard({ brand, gclidValue, rank, variant = 'default', priority }: BrandCardProps) {
  const finalUrl = buildUrl(brand.url, gclidValue);
  const isModal = variant === 'modal';
  const paymentLogos = pickPaymentLogos(brand.id);
  const dynamicRating = generateDynamicRating(rank);

  const handleCardClick = () => {
    track('Brand Click', { brand: brand.name });
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative">
      {/* Badge sits outside/above the card so the logo inside can be bigger */}
      {brand.badge && (
        <div
          className={`absolute z-20 rounded-full font-black uppercase tracking-widest shadow-lg ${isModal ? '-top-2.5 left-3 px-2.5 py-1 text-[8px]' : '-top-3 left-4 px-3 py-1 text-[10px]'}`}
          style={{ backgroundColor: brand.badge.color, color: getBadgeTextColor(brand.badge.color) }}
        >
          {brand.badge.text}
        </div>
      )}

      <div
        onClick={handleCardClick}
        className="bg-gradient-to-b from-[#120b26] to-[#0a0517] border border-white/10 relative group cursor-pointer rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5"
      >
        <div className={isModal ? 'p-4' : 'p-5'}>
          {/* Brand (logo + score) left, Bonus + CTA right */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col items-start flex-shrink-0">
              <div className={`relative flex items-center justify-center ${isModal ? 'w-28 h-14 mb-1.5' : 'w-44 h-20 mb-2'}`}>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  priority={priority}
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
              </div>

              <div className={`flex items-center gap-1 ${isModal ? 'mb-1.5' : 'mb-2'}`}>
                <div className={`flex text-[#f9d423] ${isModal ? 'text-[8px]' : 'text-[9px]'}`} aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className={`font-bold text-white/90 ${isModal ? 'text-[10px]' : 'text-[11px]'}`}>{dynamicRating.toFixed(1)}</span>
                <span className={`text-white/40 font-medium ${isModal ? 'text-[8px]' : 'text-[9px]'}`}>/10</span>
              </div>

              <div className="flex items-center gap-1">
                {paymentLogos.map((logo) => (
                  <div key={logo} className={`relative rounded-sm overflow-hidden bg-white/95 ${isModal ? 'w-5 h-3.5' : 'w-6 h-4'}`}>
                    <Image src={logo} alt="" fill className="object-contain" sizes="24px" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end text-right flex-grow min-w-0">
              <div className={`inline-block rounded-full bg-white/5 border border-white/10 ${isModal ? 'px-2 py-0.5 mb-1.5' : 'px-2.5 py-1 mb-2'}`}>
                <span className={`font-black uppercase tracking-[0.2em] text-primary ${isModal ? 'text-[7px]' : 'text-[9px]'}`}>
                  BONUS EXCLUSIF
                </span>
              </div>
              <div className={`font-black leading-snug tracking-tight ${isModal ? 'text-[13px] mb-2.5' : 'text-lg md:text-xl mb-3'}`}>
                {highlightBonus(brand.bonus)}
              </div>

              {/* CTA Button */}
              <button className={`w-full btn-gradient rounded-xl shadow-lg shadow-primary/20 active:scale-95 group-hover:scale-[1.01] overflow-hidden relative transition-all duration-300 ${isModal ? 'py-2.5' : 'py-3'}`}>
                <span className={`relative z-10 font-black uppercase tracking-[0.2em] ${isModal ? 'text-[10px]' : 'text-xs'}`}>
                  JOUER SUR {brand.name}
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
