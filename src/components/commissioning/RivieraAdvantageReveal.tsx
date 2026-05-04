'use client';

import { useState } from 'react';

type Item = {
  title: string;
  detail: string;
};

export function RivieraAdvantageReveal({ items }: { items: readonly Item[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div data-reveal-on-hover className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 items-start">
      {items.map((item, i) => {
        const isActive = active === i;
        return (
          <div
            key={item.title}
            className="relative flex gap-4 cursor-default group focus:outline-none"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            tabIndex={0}
          >
            <div
              className={`
                flex-shrink-0 rounded-full bg-gradient-to-b from-[var(--color-energy-start)] to-[var(--color-energy-end)]
                transition-all duration-[var(--duration-base)] ease-[var(--ease-flow)]
                ${isActive ? 'w-[3px] shadow-[0_0_12px_rgba(17,107,248,0.45)]' : 'w-0.5'}
              `}
            />
            <div className="flex-1">
              <h3
                className={`
                  font-display text-lg md:text-xl font-bold leading-tight whitespace-nowrap transition-colors duration-[var(--duration-base)]
                  ${isActive ? 'text-[var(--color-energy-start)]' : 'text-[var(--color-text-primary)]'}
                `}
              >
                {item.title}
              </h3>
              <div
                data-reveal-target
                className="grid transition-[grid-template-rows,opacity] duration-[var(--duration-base)] ease-[var(--ease-flow)]"
                style={{
                  gridTemplateRows: isActive ? '1fr' : '0fr',
                  opacity: isActive ? 1 : 0,
                }}
              >
                <div className="overflow-hidden">
                  <p className="pt-3 text-sm font-sans leading-relaxed text-[var(--color-text-body)]">
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
