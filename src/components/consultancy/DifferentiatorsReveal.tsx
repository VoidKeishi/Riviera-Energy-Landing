'use client';

import { useState } from 'react';

type Differentiator = {
  title: string;
  description: string;
};

export function DifferentiatorsReveal({ items }: { items: readonly Differentiator[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      data-reveal-on-hover
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 items-start"
    >
      {items.map((item, i) => {
        const isActive = active === i;
        return (
          <div
            key={item.title}
            className="group focus:outline-none"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            tabIndex={0}
          >
            <div
              className={`
                w-6 h-0.5 rounded-full bg-[var(--color-energy-end)] mb-4
                transition-all duration-[var(--duration-base)] ease-[var(--ease-flow)]
                ${isActive ? 'w-10 shadow-[0_0_12px_rgba(33,188,238,0.5)]' : ''}
              `}
            />
            <h3
              className={`
                font-sans text-base font-bold leading-snug transition-colors duration-[var(--duration-base)]
                ${isActive ? 'text-[var(--color-energy-end)]' : 'text-white'}
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
                <p className="pt-2 text-sm font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
