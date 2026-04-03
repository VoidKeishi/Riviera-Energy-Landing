'use client';

import { useState } from 'react';

const steps = [
  {
    label: 'Job Brief',
    detail: 'Building a comprehensive understanding of your requirements, timeline, and team fit.',
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
    label: 'Clearance',
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
      <div className="hidden lg:block absolute top-6 left-[8%] right-[8%] h-px bg-white/20" />

      {/* Progress fill line */}
      {active !== null && (
        <div
          className="hidden lg:block absolute top-6 left-[8%] h-px bg-gradient-to-r from-[var(--color-energy-start)] to-[var(--color-energy-end)] transition-all duration-500 ease-[var(--ease-flow)]"
          style={{ width: `${(active / (steps.length - 1)) * 84}%` }}
        />
      )}

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6">
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
                  inline-flex items-center justify-center w-12 h-12 rounded-full
                  relative z-10 mb-3 transition-all duration-[var(--duration-base)] ease-[var(--ease-flow)]
                  ${isActive
                    ? 'energy-gradient border-2 border-[var(--color-energy-end)] shadow-[0_0_24px_rgba(89,218,227,0.35)] scale-110'
                    : 'bg-[var(--color-indigo)] border-2 border-white/30 group-hover:border-[var(--color-energy-end)]/60'
                  }
                `}
              >
                <span
                  className={`
                    text-sm font-sans font-bold transition-colors duration-[var(--duration-base)]
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
