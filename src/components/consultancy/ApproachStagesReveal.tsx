'use client';

import { Fragment, useState } from 'react';

type Stage = {
  number: string;
  title: string;
  description: string;
};

export function ApproachStagesReveal({ stages }: { stages: readonly Stage[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      data-reveal-on-hover
      className="flex flex-col md:flex-row md:items-start gap-4 md:gap-2"
    >
      {stages.map((stage, i) => {
        const isActive = active === i;
        return (
          <Fragment key={stage.title}>
            <div
              className="flex-1 group focus:outline-none"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              tabIndex={0}
            >
              <div className="h-full flex flex-col items-center text-center px-4 md:px-3">
                <span
                  className={`
                    font-display text-3xl md:text-4xl font-extrabold energy-gradient-text leading-none
                    transition-transform duration-[var(--duration-base)] ease-[var(--ease-flow)]
                    ${isActive ? 'scale-110' : ''}
                  `}
                >
                  {stage.number}
                </span>
                <h3
                  className={`
                    mt-4 font-sans text-base md:text-lg font-bold leading-tight transition-colors duration-[var(--duration-base)]
                    ${isActive ? 'text-[var(--color-energy-start)]' : 'text-[var(--color-text-primary)]'}
                  `}
                >
                  {stage.title}
                </h3>
                <div
                  data-reveal-target
                  className="grid w-full transition-[grid-template-rows,opacity] duration-[var(--duration-base)] ease-[var(--ease-flow)]"
                  style={{
                    gridTemplateRows: isActive ? '1fr' : '0fr',
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="pt-3 text-sm font-sans leading-relaxed text-[var(--color-text-muted)]">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {i < stages.length - 1 && (
              <div
                className="flex items-center justify-center flex-shrink-0 text-[var(--color-energy-end)] md:pt-2"
                aria-hidden="true"
              >
                <svg
                  className="w-6 h-6 rotate-90 md:rotate-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
