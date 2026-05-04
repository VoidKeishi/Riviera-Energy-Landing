'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePrefersReducedMotion } from '@/hooks/use-reduced-motion';

type Variant = 'light' | 'dark';

interface FlipCardProps {
  image: { src: string; alt: string };
  title: string;
  body: string;
  tagline?: string;
  focus?: string;
  variant?: Variant;
}

export function FlipCard({
  image,
  title,
  body,
  tagline,
  focus,
  variant = 'light',
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  const isDark = variant === 'dark';

  const backSurface = isDark
    ? 'bg-[var(--color-indigo)] border border-white/10'
    : 'bg-white border border-[var(--color-grey-300)] shadow-[0_12px_40px_-12px_rgba(8,1,69,0.18)]';
  const backTitleColor = isDark ? 'text-white' : 'text-[var(--color-text-primary)]';
  const backBodyColor = isDark
    ? 'text-[var(--color-text-on-dark-muted)]'
    : 'text-[var(--color-text-body)]';
  const backTaglineColor = isDark
    ? 'text-[var(--color-energy-end)]'
    : 'text-[var(--color-cyan)]';
  const backFocusLabelColor = isDark ? 'text-white/60' : 'text-[var(--color-text-muted)]';
  const backFocusValueColor = isDark ? 'text-white/90' : 'text-[var(--color-text-primary)]';
  const backDividerColor = isDark ? 'border-white/10' : 'border-[var(--color-grey-300)]';

  return (
    <div
      className="group relative w-full"
      style={{ perspective: '1600px' }}
    >
      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        aria-pressed={flipped}
        aria-label={`${title} — ${flipped ? 'show image' : 'show details'}`}
        className="relative block w-full aspect-[5/6] cursor-pointer rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-energy-end)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      >
        <div
          className={
            reducedMotion
              ? 'relative w-full h-full'
              : 'relative w-full h-full transition-transform duration-[var(--duration-smooth)] ease-[var(--ease-flow)]'
          }
          style={
            reducedMotion
              ? undefined
              : {
                  transformStyle: 'preserve-3d',
                  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }
          }
        >
          {/* Front */}
          <div
            className={
              reducedMotion
                ? `absolute inset-0 rounded-2xl overflow-hidden transition-opacity duration-[var(--duration-base)] ease-[var(--ease-flow)] ${flipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`
                : 'absolute inset-0 rounded-2xl overflow-hidden'
            }
            style={reducedMotion ? undefined : { backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-flow)] group-hover:scale-[1.04]"
            />
            {/* Bottom gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,38,152,0.92)] via-[rgba(5,38,152,0.25)] to-transparent" />

            {/* Title */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
              <h3 className="font-display text-2xl sm:text-[1.625rem] font-bold leading-tight text-white drop-shadow-sm text-left">
                {title}
              </h3>
            </div>
          </div>

          {/* Back */}
          <div
            className={
              reducedMotion
                ? `absolute inset-0 rounded-2xl overflow-hidden transition-opacity duration-[var(--duration-base)] ease-[var(--ease-flow)] ${flipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`
                : `absolute inset-0 rounded-2xl overflow-hidden ${backSurface}`
            }
            style={
              reducedMotion
                ? undefined
                : {
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }
            }
          >
            <div className={reducedMotion ? `w-full h-full ${backSurface} flex flex-col p-6 sm:p-7` : 'w-full h-full flex flex-col p-6 sm:p-7'}>
              {/* Top accent bar */}
              <div className="w-10 h-[3px] flex-shrink-0 rounded-full bg-gradient-to-r from-[var(--color-energy-start)] to-[var(--color-energy-end)] mb-4" />

              <h3 className={`flex-shrink-0 font-display text-lg sm:text-xl font-bold leading-tight text-left ${backTitleColor}`}>
                {title}
              </h3>

              {tagline && (
                <p className={`flex-shrink-0 mt-1.5 font-sans italic text-sm text-left ${backTaglineColor}`}>
                  {tagline}
                </p>
              )}

              <p className={`mt-3 text-[13px] sm:text-sm font-sans leading-relaxed text-left ${backBodyColor}`}>
                {body}
              </p>

              {focus && (
                <div className={`flex-shrink-0 mt-auto pt-4 border-t ${backDividerColor}`}>
                  <p className={`text-[11px] font-sans font-semibold uppercase tracking-[0.15em] ${backFocusLabelColor}`}>
                    Focus
                  </p>
                  <p className={`mt-1 text-[13px] font-sans text-left ${backFocusValueColor}`}>
                    {focus}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
