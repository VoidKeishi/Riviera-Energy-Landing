'use client';

import { useState } from 'react';

type Step = {
  number: string;
  title: string;
  detail: string;
};

export function ExecutionFrameworkTimeline({ steps }: { steps: readonly Step[] }) {
  const [active, setActive] = useState<number | null>(null);
  const span = 80;
  const startOffset = 10;

  return (
    <div className="relative">
      {/* Connecting line — desktop */}
      <div
        className="hidden lg:block absolute top-6 h-px bg-[var(--color-grey-300)]"
        style={{ left: `${startOffset}%`, right: `${startOffset}%` }}
      />

      {/* Progress fill line */}
      {active !== null && (
        <div
          className="hidden lg:block absolute top-6 h-px bg-gradient-to-r from-[var(--color-energy-start)] to-[var(--color-energy-end)] transition-all duration-500 ease-[var(--ease-flow)]"
          style={{
            left: `${startOffset}%`,
            width: `${(active / (steps.length - 1)) * span}%`,
          }}
        />
      )}

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-6">
        {steps.map((step, i) => {
          const isActive = active === i;

          return (
            <div
              key={step.number}
              className="relative text-center cursor-pointer group"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Circle */}
              <div
                className={`
                  inline-flex items-center justify-center w-12 h-12 rounded-full
                  relative z-10 mb-3 transition-all duration-[var(--duration-base)] ease-[var(--ease-flow)]
                  ${isActive
                    ? 'energy-gradient border-2 border-[var(--color-energy-end)] shadow-[0_0_24px_rgba(17,107,248,0.25)] scale-110'
                    : 'bg-white border-2 border-[var(--color-grey-300)] group-hover:border-[var(--color-energy-end)]/60'
                  }
                `}
              >
                <span
                  className={`
                    text-sm font-sans font-bold transition-colors duration-[var(--duration-base)]
                    ${isActive ? 'text-white' : 'energy-gradient-text'}
                  `}
                >
                  {step.number}
                </span>
              </div>

              {/* Label */}
              <p
                className={`
                  text-sm font-sans font-semibold leading-snug transition-colors duration-[var(--duration-base)] px-2
                  ${isActive ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-muted)]'}
                `}
              >
                {step.title}
              </p>

              {/* Detail — always reserves space, fades on hover */}
              <div className="mt-3 min-h-[5rem] px-2">
                <p
                  className={`
                    text-xs font-sans leading-relaxed text-[var(--color-text-muted)]
                    transition-opacity duration-[var(--duration-base)] ease-[var(--ease-flow)]
                    ${isActive ? 'opacity-100' : 'opacity-0'}
                  `}
                >
                  {step.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
