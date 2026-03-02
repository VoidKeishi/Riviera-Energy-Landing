'use client';

import { useState, useId, type ReactNode } from 'react';
import Image from 'next/image';
import { usePrefersReducedMotion } from '@/hooks/use-reduced-motion';
import { StatCounter } from '@/components/home/StatCounter';

interface ServicePillar {
  shortTitle: string;
  title: string;
  description: string;
  tagline: string;
  image: string;
  imageAlt: string;
}

interface Differentiator {
  readonly title: string;
  readonly description: string;
  readonly icon: ReactNode;
}

interface Stat {
  readonly end: number;
  readonly suffix: string;
  readonly label: string;
}

interface ServiceTabsProps {
  pillars: ServicePillar[];
  differentiators?: readonly Differentiator[];
  stats?: readonly Stat[];
}

export function ServiceTabs({ pillars, differentiators, stats }: ServiceTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const id = useId();
  const prefersReducedMotion = usePrefersReducedMotion();

  const hasWhyUs = differentiators && differentiators.length > 0;
  const totalTabs = pillars.length + (hasWhyUs ? 1 : 0);
  const whyUsIndex = pillars.length;

  function handleKeyDown(e: React.KeyboardEvent) {
    let next = activeIndex;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      next = (activeIndex + 1) % totalTabs;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      next = (activeIndex - 1 + totalTabs) % totalTabs;
    } else if (e.key === 'Home') {
      next = 0;
    } else if (e.key === 'End') {
      next = totalTabs - 1;
    } else {
      return;
    }
    e.preventDefault();
    setActiveIndex(next);
  }

  return (
    <div>
      {/* Tab buttons */}
      <div
        role="tablist"
        aria-label="Service pillars"
        className="mt-10 flex flex-wrap justify-center gap-3"
        onKeyDown={handleKeyDown}
      >
        {pillars.map((pillar, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={pillar.shortTitle}
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={isActive}
              aria-controls={`${id}-panel-${i}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full px-6 py-2.5 text-sm font-sans font-semibold transition-all duration-[var(--duration-base)] ease-[var(--ease-flow)] cursor-pointer ${
                isActive
                  ? 'bg-[var(--color-cyan)] text-white shadow-[0_4px_16px_rgba(0,152,181,0.25)]'
                  : 'bg-[var(--color-off-white)] text-[var(--color-text-muted)] border border-[var(--color-grey-100)] hover:bg-[var(--color-grey-100)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              {pillar.shortTitle}
            </button>
          );
        })}
        {hasWhyUs && (
          <button
            role="tab"
            id={`${id}-tab-${whyUsIndex}`}
            aria-selected={activeIndex === whyUsIndex}
            aria-controls={`${id}-panel-${whyUsIndex}`}
            tabIndex={activeIndex === whyUsIndex ? 0 : -1}
            onClick={() => setActiveIndex(whyUsIndex)}
            className={`rounded-full px-6 py-2.5 text-sm font-sans font-semibold transition-all duration-[var(--duration-base)] ease-[var(--ease-flow)] cursor-pointer ${
              activeIndex === whyUsIndex
                ? 'bg-[var(--color-cyan)] text-white shadow-[0_4px_16px_rgba(0,152,181,0.25)]'
                : 'bg-[var(--color-off-white)] text-[var(--color-text-muted)] border border-[var(--color-grey-100)] hover:bg-[var(--color-grey-100)] hover:text-[var(--color-text-primary)]'
            }`}
          >
            Why Riviera
          </button>
        )}
      </div>

      {/* Tab panels */}
      <div className="mt-10 sm:mt-14">
        {/* Service pillar panels */}
        {pillars.map((pillar, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={pillar.shortTitle}
              role="tabpanel"
              id={`${id}-panel-${i}`}
              aria-labelledby={`${id}-tab-${i}`}
              className={isActive ? 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center' : 'hidden'}
              style={
                !prefersReducedMotion && isActive
                  ? {
                      animation: `fadeIn var(--duration-smooth) var(--ease-flow)`,
                    }
                  : undefined
              }
            >
              <div>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                  {pillar.description}
                </p>
                <p className="mt-4 text-sm font-sans italic text-[var(--color-text-muted)]">
                  &ldquo;{pillar.tagline}&rdquo;
                </p>
              </div>
              <div className="aspect-[16/10] rounded-xl overflow-hidden relative bg-[var(--color-off-white)]">
                <Image
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          );
        })}

        {/* Why Riviera panel */}
        {hasWhyUs && (
          <div
            role="tabpanel"
            id={`${id}-panel-${whyUsIndex}`}
            aria-labelledby={`${id}-tab-${whyUsIndex}`}
            className={activeIndex === whyUsIndex ? '' : 'hidden'}
            style={
              !prefersReducedMotion && activeIndex === whyUsIndex
                ? {
                    animation: `fadeIn var(--duration-smooth) var(--ease-flow)`,
                  }
                : undefined
            }
          >
            {/* Differentiator cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col rounded-xl border border-[var(--color-grey-100)] bg-[var(--color-off-white)] p-6 sm:p-8 transition-colors duration-[var(--duration-base)] hover:bg-[var(--color-grey-100)]"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--color-cyan)]/10 text-[var(--color-cyan)]">
                    {item.icon}
                  </div>
                  <h4 className="mt-5 font-sans text-lg font-bold text-[var(--color-text-primary)]">
                    {item.title}
                  </h4>
                  <p className="mt-2 flex-grow text-sm font-sans leading-relaxed text-[var(--color-text-body)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats row */}
            {stats && stats.length > 0 && (
              <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-8 md:gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={i < stats.length - 1 ? 'md:border-r md:border-[var(--color-grey-100)] md:pr-4' : ''}
                  >
                    <StatCounter end={stat.end} suffix={stat.suffix} label={stat.label} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
