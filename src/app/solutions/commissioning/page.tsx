import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { FlipCard } from '@/components/commissioning/FlipCard';
import { RivieraAdvantageReveal } from '@/components/commissioning/RivieraAdvantageReveal';

const approachPillars = [
  {
    title: 'Planning',
    image: {
      src: '/images/commissioning/approach-planning.jpg',
      alt: 'Engineers reviewing project plans and equipment models on blueprints',
    },
    description:
      'Our structured approach to system and asset planning streamlines the commissioning process. By testing each component in the correct sequence and managing system interdependencies, we reduce delays and support the smooth achievement of commissioning and handover milestones.',
  },
  {
    title: 'Technology',
    image: {
      src: '/images/commissioning/approach-technology.jpg',
      alt: 'Digital commissioning interface with real-time data dashboards',
    },
    description:
      'We use advanced digital commissioning and completion tools to streamline testing and handover — tracking progress in real time, capturing accurate data, and producing clear, comprehensive reports that support collaboration and enable a smooth transition from testing through to final handover.',
  },
  {
    title: 'Performance & Integrated Testing',
    image: {
      src: '/images/commissioning/approach-performance.jpg',
      alt: 'Engineers performing integrated systems testing on industrial equipment',
    },
    description:
      'We develop and deliver robust performance and integrated testing programs to confirm that all systems operate correctly, both individually and as a fully integrated whole — ensuring the complete installation meets performance requirements and is ready for reliable operation from day one.',
  },
] as const;

const rivieraAdvantage = [
  {
    title: 'Faster Transition',
    detail: 'From construction to stable operations — without unnecessary delays.',
  },
  {
    title: 'Reduced Risk',
    detail: 'Minimising rework, technical uncertainty, and downstream disruption.',
  },
  {
    title: 'Stronger Alignment',
    detail: 'Clear coordination across stakeholders, disciplines, and execution teams.',
  },
  {
    title: 'Reliable Performance',
    detail: 'Assets delivered ready — operating as intended from day one.',
  },
] as const;

const lifecyclePhases = [
  {
    name: 'Pre-Commissioning',
    image: {
      src: '/images/commissioning/lifecycle-pre-commissioning.jpg',
      alt: 'Engineer monitoring industrial control room dashboards before system start-up',
    },
    tagline: 'Where readiness is built.',
    description:
      'Establishing system integrity and ensuring all components are installed, verified, and prepared for safe introduction into service.',
    focus: 'System readiness · Verification · Integrity',
  },
  {
    name: 'Commissioning',
    image: {
      src: '/images/commissioning/lifecycle-commissioning.jpg',
      alt: 'Industrial commissioning activity at an energised facility',
    },
    tagline: 'Where performance is proven.',
    description:
      'Energising and testing systems to validate functionality, performance, and compliance against design intent.',
    focus: 'Energisation · Testing · Validation',
  },
  {
    name: 'Operational Readiness',
    image: {
      src: '/images/commissioning/lifecycle-operational-readiness.jpg',
      alt: 'Operations team coordinating handover to stable production',
    },
    tagline: 'Where operations take ownership.',
    description:
      'Preparing people, processes, and systems to ensure a smooth transition into stable, sustainable operations.',
    focus: 'People · Process · Sustainability',
  },
] as const;

export const metadata: Metadata = {
  title: 'Commissioning & Operational Readiness',
  description:
    'Pre-commissioning, commissioning, and operational readiness services. Defined technical capability aligned to specific project scopes.',
  alternates: {
    canonical: '/solutions/commissioning',
  },
  openGraph: {
    title: 'Commissioning & Operational Readiness | Riviera Energy',
    description:
      'Pre-commissioning, commissioning, and operational readiness services. Defined technical capability aligned to specific project scopes.',
    url: 'https://www.riviera-energy.co/solutions/commissioning',
  },
};

export default function CommissioningPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden bg-[var(--color-indigo)] pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24">
        <GradientMesh variant="dark" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/commissioning.jpg"
            alt="Engineers inspecting industrial piping at a refinery"
            fill
            priority
            className="object-cover opacity-40"
            style={{ objectPosition: 'center 65%' }}
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
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white max-w-5xl mx-auto">
              Commissioning &amp; Operational Readiness
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-8 text-base sm:text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)] max-w-3xl mx-auto">
              Defined technical capability aligned to specific project scopes — combining expertise with compliant, timely deployment across borders to ensure the right team is integrated, accountable, and effective from day one.
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

      {/* Section 1 — Approach (flip cards) */}
      <SectionWrapper background="off-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Engineered for Operational Confidence
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
              At Riviera Energy, all work is carried out by fully licensed and qualified commissioning technicians and engineers, ensuring reliable and compliant installations. We deliver tailored, project-specific documentation — including test plans, commissioning procedures, and verification checklists — so every system is commissioned thoroughly, efficiently, and to the highest standard.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {approachPillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 100}>
              <FlipCard
                variant="light"
                image={pillar.image}
                title={pillar.title}
                body={pillar.description}
              />
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 2 — The Riviera Advantage (replaces the 5-Step Execution Framework) */}
      <SectionWrapper background="white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              The Riviera Advantage
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Why This Approach Delivers
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
              Without a structured assessment phase, commissioning risk increases significantly. A disciplined, engineering-led approach is what separates a smooth transition from a costly one — bringing structure, experience, and execution clarity from day one.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-14 max-w-5xl mx-auto">
          <ScrollReveal delay={200}>
            <RivieraAdvantageReveal items={rivieraAdvantage} />
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Section 3 — Project Lifecycle (flip cards on dark) */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[var(--color-indigo)] text-white overflow-hidden">
        <GradientMesh variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-energy-end)]">
                Project Lifecycle
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Three Phases. One Continuum.
              </h2>
            </ScrollReveal>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {lifecyclePhases.map((phase, i) => (
              <ScrollReveal key={phase.name} delay={i * 100}>
                <FlipCard
                  variant="dark"
                  image={phase.image}
                  title={phase.name}
                  tagline={phase.tagline}
                  body={phase.description}
                  focus={phase.focus}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Managing Director Message */}
      <SectionWrapper background="off-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-10">
            <ScrollReveal>
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-full overflow-hidden ring-[3px] ring-[var(--color-energy-end)]/60 shadow-[0_8px_24px_-6px_rgba(8,1,69,0.18)]">
                <Image
                  src="/images/team/jason-antunovich.jpg"
                  alt="Jason Antunovich, Managing Director of Riviera Energy"
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
                  From Our Managing Director
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <blockquote className="mt-4 font-display text-xl md:text-2xl font-bold italic leading-snug text-[var(--color-text-primary)]">
                  &ldquo;Execution begins with clarity, not assumptions. Commissioning success is driven by experience, discipline, and responsiveness — not theory alone.&rdquo;
                </blockquote>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="mt-6 text-base font-sans leading-relaxed text-[var(--color-text-body)]">
                  When you partner with Riviera Energy, you can be confident your systems will be tested thoroughly, commissioned safely, and handed over fully operational and performance ready. Backed by extensive commissioning expertise, we deliver the seamless integration of complex systems, setting new benchmarks for operational readiness across global critical infrastructure assets.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <p className="mt-6 text-xs font-sans uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  <span className="font-bold text-[var(--color-text-primary)]">Jason Antunovich</span>
                  <span className="mx-2 text-[var(--color-grey-300)]">·</span>
                  Managing Director
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 5 — Closing CTA */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[var(--color-indigo)] text-white overflow-hidden">
        <GradientMesh variant="dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-snug text-white">
              Planning your next commissioning
              <br />
              or restart phase?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
              Engage a team that brings structure, experience, and execution clarity from day one.
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
