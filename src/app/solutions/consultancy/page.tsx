import { Fragment } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GradientMesh } from '@/components/ui/GradientMesh';

const approachStages = [
  {
    number: '01',
    title: 'Assess',
    description:
      'Establish a clear understanding of current conditions, risks, and constraints across technical and operational dimensions.',
  },
  {
    number: '02',
    title: 'Strategise',
    description:
      'Define structured, executable pathways aligned to project objectives, timelines, and delivery realities.',
  },
  {
    number: '03',
    title: 'Execute',
    description:
      'Embed within delivery to maintain control, manage interfaces, and resolve issues in real time.',
  },
  {
    number: '04',
    title: 'Operate',
    description:
      'Ensure seamless transition into operations with systems, teams, and processes ready for sustained performance.',
  },
] as const;

const differentiators = [
  {
    title: 'Execution-First Mindset',
    description: 'We advise from experience, not theory — ensuring relevance on the ground.',
  },
  {
    title: 'Senior-Led Engagement',
    description: 'Specialist expertise remains at the front — no dilution across layers.',
  },
  {
    title: 'Global Reach, Continuous Support',
    description: 'Operating across time zones to maintain momentum and responsiveness.',
  },
  {
    title: 'Lean, High-Impact Model',
    description: 'Focused deployment of expertise — delivering value without unnecessary overhead.',
  },
] as const;

export const metadata: Metadata = {
  title: 'Strategic Project Consultancy',
  description:
    'Execution-led advisory services for complex energy projects — from early-stage concept and design through execution and operational support.',
  alternates: {
    canonical: '/solutions/consultancy',
  },
  openGraph: {
    title: 'Strategic Project Consultancy | Riviera Energy',
    description:
      'Execution-led advisory services for complex energy projects — from early-stage concept and design through execution and operational support.',
    url: 'https://www.riviera-energy.co/solutions/consultancy',
  },
};

export default function ConsultancyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden bg-[var(--color-indigo)] pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24">
        <GradientMesh variant="dark" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/consultancy.jpg"
            alt="Business professionals analysing charts and data"
            fill
            priority
            className="object-cover opacity-40"
            style={{ objectPosition: 'center center' }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-indigo)]/80 via-[var(--color-indigo)]/60 to-[var(--color-indigo)]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-energy-end)] mb-6">
              Our Solutions
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white max-w-5xl mx-auto">
              Strategic Project Consultancy
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-8 text-base sm:text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)] max-w-3xl mx-auto">
              Strategic project consultancy rooted in proven technical expertise and real-world execution experience. Through a global network of senior specialists operating across time zones, we enable cost-efficient decisions, rapid issue resolution, and continuous project momentum.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="/contact">
                Discuss Your Requirements
              </Button>
              <Button variant="ghost" href="/#solutions">
                All Solutions
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 1 — Introduction */}
      <SectionWrapper background="off-white">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Structure, Alignment, Continuity
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
              Strategic project consultancy at Riviera Energy ensures that complex projects are not only well-defined but effectively delivered. We support clients across the full project lifecycle — from early-stage definition through execution and operational transition — providing structure, maintaining alignment, and ensuring continuity across technical, operational, and stakeholder interfaces.
            </p>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Section 2 — Our Approach (Assess → Strategise → Execute → Operate) */}
      <SectionWrapper background="white">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Our Approach
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              From Assessment to Operations
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
              From initial assessment to sustained operations, we apply a disciplined approach that ensures alignment, control, and continuity.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-stretch gap-4 md:gap-2 max-w-6xl mx-auto">
          {approachStages.map((stage, i) => (
            <Fragment key={stage.title}>
              <ScrollReveal delay={i * 100} className="flex-1">
                <div className="h-full flex flex-col items-center text-center px-4 md:px-3">
                  <span className="font-display text-3xl md:text-4xl font-extrabold energy-gradient-text leading-none">
                    {stage.number}
                  </span>
                  <h3 className="mt-4 font-sans text-base md:text-lg font-bold text-[var(--color-text-primary)]">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm font-sans leading-relaxed text-[var(--color-text-muted)]">
                    {stage.description}
                  </p>
                </div>
              </ScrollReveal>
              {i < approachStages.length - 1 && (
                <div
                  className="flex items-center justify-center flex-shrink-0 text-[var(--color-energy-end)]"
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
          ))}
        </div>
      </SectionWrapper>

      {/* Section 3 — The Riviera Difference */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[var(--color-indigo)] text-white overflow-hidden">
        <GradientMesh variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-energy-end)]">
                The Riviera Difference
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Built for delivery — not just advisory.
              </h2>
            </ScrollReveal>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
            {differentiators.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div>
                  <div className="w-6 h-0.5 bg-[var(--color-energy-end)] rounded-full mb-4" />
                  <h3 className="font-sans text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — From Our Managing Partner */}
      <SectionWrapper background="off-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-10">
            <ScrollReveal>
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-full overflow-hidden ring-[3px] ring-[var(--color-energy-end)]/60 shadow-[0_8px_24px_-6px_rgba(8,1,69,0.18)]">
                <Image
                  src="/images/team/julianna-iris-tan.jpg"
                  alt="Julianna Iris Tan, Managing Partner of Riviera Energy"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 18%' }}
                  sizes="(max-width: 640px) 96px, 112px"
                />
              </div>
            </ScrollReveal>

            <div className="flex-1 text-center sm:text-left">
              <ScrollReveal delay={100}>
                <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
                  From Our Managing Partner
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <blockquote className="mt-4 font-display text-xl md:text-2xl font-bold italic leading-snug text-[var(--color-text-primary)]">
                  &ldquo;Complex projects rarely fail due to lack of expertise — they falter in execution, alignment, and decision-making under pressure.&rdquo;
                </blockquote>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="mt-6 text-base font-sans leading-relaxed text-[var(--color-text-body)]">
                  At Riviera Energy, we focus on bringing clarity to complexity, aligning stakeholders, and ensuring that strategy is carried through with discipline and intent. We work alongside our clients to navigate challenges, resolve issues, and maintain momentum where it matters most.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={350}>
                <p className="mt-4 text-base font-sans leading-relaxed text-[var(--color-text-body)]">
                  This approach is further strengthened by our specialised marine and offshore advisory capability, providing practical, experience-led guidance across complex and multi-dimensional project environments.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <p className="mt-6 text-xs font-sans uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  <span className="font-bold text-[var(--color-text-primary)]">Julianna Iris Tan</span>
                  <span className="mx-2 text-[var(--color-grey-300)]">·</span>
                  Managing Partner
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 5 — Closing CTA */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[var(--color-indigo)] text-white overflow-hidden">
        <GradientMesh variant="dark" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Bringing clarity to your next project.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
              Whether defining a new project or navigating delivery challenges, our team is ready to support with targeted expertise and execution-focused solutions.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="/contact">
                Contact Our Team
              </Button>
              <Button variant="ghost" href="/#solutions">
                All Solutions
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
