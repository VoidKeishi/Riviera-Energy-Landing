'use client';

import { useState } from 'react';

const steps = [
  {
    label: 'Job Brief',
    detail: 'Building a comprehensive understanding of your requirements, timeline, and team fit.',
  },
  {
    label: 'Ad Copy',
    detail: 'Crafting compelling positioning to attract the right calibre of specialist.',
  },
  {
    label: 'Talent Search',
    detail: 'Activating our 100K+ global database and recruiter network.',
  },
  {
    label: 'Screening',
    detail: 'Rigorous assessment of skills, certifications, and deployment readiness.',
  },
  {
    label: 'Shortlisting',
    detail: 'Testing, verification, and presenting only the strongest candidates.',
  },
  {
    label: 'References',
    detail: 'Full verification of credentials, experience, and regulatory compliance.',
  },
  {
    label: 'Onboarding',
    detail: 'Offer delivery, negotiation, and seamless mobilisation to site.',
  },
] as const;

export function RecruitmentTimeline() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Connecting line — desktop */}
      <div className="hidden lg:block absolute top-5 left-[7%] right-[7%] h-px bg-white/15" />

      {/* Progress fill line */}
      {active !== null && (
        <div
          className="hidden lg:block absolute top-5 left-[7%] h-px bg-gradient-to-r from-[var(--color-energy-start)] to-[var(--color-energy-end)] transition-all duration-500 ease-[var(--ease-flow)]"
          style={{ width: `${(active / (steps.length - 1)) * 86}%` }}
        />
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-4">
        {steps.map((step, i) => {
          const isActive = active === i;

          return (
            <div
              key={step.label}
              className="relative text-center cursor-pointer group"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Circle */}
              <div
                className={`
                  inline-flex items-center justify-center w-10 h-10 rounded-full
                  relative z-10 mb-3 transition-all duration-[var(--duration-base)] ease-[var(--ease-flow)]
                  ${isActive
                    ? 'bg-[var(--color-energy-start)] border-2 border-[var(--color-energy-end)] shadow-[0_0_20px_rgba(17,107,248,0.4)] scale-110'
                    : 'bg-[var(--color-indigo)] border border-white/20 group-hover:border-white/40'
                  }
                `}
              >
                <span
                  className={`
                    text-xs font-sans font-bold transition-colors duration-[var(--duration-base)]
                    ${isActive ? 'text-white' : 'text-[var(--color-energy-end)]'}
                  `}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Label */}
              <p
                className={`
                  text-sm font-sans font-medium leading-snug transition-colors duration-[var(--duration-base)]
                  ${isActive ? 'text-white' : 'text-white/70'}
                `}
              >
                {step.label}
              </p>

              {/* Detail — always reserves space, fades on hover */}
              <div className="mt-3 min-h-[3rem]">
                <p
                  className={`
                    text-xs font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]
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
