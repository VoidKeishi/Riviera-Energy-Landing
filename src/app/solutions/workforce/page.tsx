import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { RecruitmentTimeline } from '@/components/workforce/RecruitmentTimeline';

export const metadata: Metadata = {
  title: 'Global Workforce & Mobility Solutions | Riviera Energy',
  description:
    'Integrated delivery and compliant global mobilisation of specialist offshore capability for survey, ROV, inspection, and commissioning activities.',
};

const services = [
  {
    title: 'Contract Hiring',
    description:
      'Site-ready contract candidates sourced globally, matched by skill set, readiness, and experience — mobilised to your project faster.',
  },
  {
    title: 'Permanent Hiring',
    description:
      'Sourcing, selecting, and shortlisting high-performing permanent staff across the energy and construction sectors.',
  },
  {
    title: 'Payroll Services',
    description:
      'Managed payroll ensuring your teams are paid reliably, accurately, and on time across all jurisdictions.',
  },
  {
    title: 'Integrated Crew Management',
    description:
      'End-to-end personnel management with integrated systems, quick turnaround times, and reduced operational expenses.',
  },
  {
    title: 'Travel & Logistics',
    description:
      'Full travel and logistics coordination — accommodations, flights, and wellbeing — at competitive fares with trusted partners.',
  },
  {
    title: 'Diversity Hiring',
    description:
      'Hiring with diversity at the forefront to increase perspective, cultural awareness, and quality of collaboration.',
  },
] as const;

/* Professional industry icons — clean line style, 24x24 viewBox */
const industries = [
  {
    name: 'Oil & Gas',
    scope: 'Onshore & offshore, upstream to downstream',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2v4" />
        <path d="M12 6l4 3v9H8V9l4-3z" />
        <path d="M8 18H6v-5l2-1.5" />
        <path d="M16 18h2v-5l-2-1.5" />
        <path d="M6 22h12" />
        <path d="M8 18v4" />
        <path d="M16 18v4" />
        <path d="M10 12h4" />
        <path d="M10 15h4" />
      </svg>
    ),
  },
  {
    name: 'Renewable Energy',
    scope: 'Wind, solar & emerging sustainable projects',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="2" />
        <path d="M12 10V2.5c0 0 3.5 1 3.5 4.5S12 10 12 10z" />
        <path d="M13.7 12.7l5.3 3.1c0 0-.5 3.5-3.9 2.5S13.7 12.7 13.7 12.7z" />
        <path d="M10.3 12.7l-5.3 3.1c0 0 .5 3.5 3.9 2.5S10.3 12.7 10.3 12.7z" />
        <path d="M10 22h4" />
        <path d="M12 14v8" />
      </svg>
    ),
  },
  {
    name: 'Marine',
    scope: 'Diverse marine projects, global placement',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 16l1.5-8h13L20 16" />
        <path d="M6 8V5h4v3" />
        <path d="M12 8V3l2 1" />
        <path d="M2 16h20" />
        <path d="M2 19c1.5 1.5 3 1.5 4 0s2.5-1.5 4 0 3 1.5 4 0 2.5-1.5 4 0 2.5 1.5 4 0" />
      </svg>
    ),
  },
  {
    name: 'Process Engineering',
    scope: 'Specialists across the engineering lifecycle',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4" />
        <path d="M12 19v4" />
        <path d="M4.22 4.22l2.83 2.83" />
        <path d="M16.95 16.95l2.83 2.83" />
        <path d="M1 12h4" />
        <path d="M19 12h4" />
        <path d="M4.22 19.78l2.83-2.83" />
        <path d="M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    name: 'Construction',
    scope: 'Safety-focused, efficiency-driven staffing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M2 22h20" />
        <path d="M6 22V10l6-4 6 4v12" />
        <path d="M10 22v-5h4v5" />
        <path d="M10 13h4" />
        <path d="M3 22v-6l3-2" />
        <path d="M21 22v-6l-3-2" />
      </svg>
    ),
  },
  {
    name: 'Power Generation',
    scope: 'Thermal, gas & hybrid power systems',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M13 2L4 14h7l-2 8 9-12h-7l2-8z" />
      </svg>
    ),
  },
] as const;

export default function WorkforcePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden bg-[var(--color-indigo)] pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24">
        <GradientMesh variant="dark" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/vessel-aerial.jpg"
            alt="Aerial view of offshore vessel"
            fill
            priority
            className="object-cover opacity-40"
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
              Global Workforce &amp;<br className="hidden sm:block" /> Mobility Solutions
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-8 text-base sm:text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)] max-w-3xl mx-auto">
              Delivering global capability, without disruption. Deployment-ready teams reducing downtime, protecting schedule, and enabling safe, cost-efficient execution.
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

      {/* Overview */}
      <SectionWrapper background="off-white">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Workforce Solutions
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              The People for Project Success
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
              A full-service resourcing and recruitment partner with access to <span className="font-semibold">~100,000+ pre-vetted specialists</span> across six industry sectors. Rigorous screening, full regulatory compliance, and 24/7 operational support — from onboarding through to demobilisation.
            </p>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper background="white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              What We Offer
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Workforce Services
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div className="h-full flex flex-col rounded-xl border border-[var(--color-grey-100)] bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(8,1,69,0.12)] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 energy-gradient" />
                <h3 className="font-sans text-base font-bold text-[var(--color-text-primary)] leading-snug">
                  {service.title}
                </h3>
                <p className="mt-2 flex-grow text-sm font-sans leading-relaxed text-[var(--color-text-muted)]">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Recruitment Journey — interactive */}
      <section className="relative py-14 sm:py-20 md:py-24 bg-[var(--color-indigo)] text-white overflow-hidden">
        <GradientMesh variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-energy-end)]">
                Our Process
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Recruitment Journey
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <RecruitmentTimeline />
          </ScrollReveal>
        </div>
      </section>

      {/* Industries */}
      <section className="py-10 sm:py-14 md:py-16 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
                Sectors
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
                Industries We Serve
              </h2>
            </ScrollReveal>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, i) => (
              <ScrollReveal key={industry.name} delay={i * 60}>
                <div className="h-full flex items-start gap-4 rounded-xl border border-[var(--color-grey-100)] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(8,1,69,0.08)]">
                  <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-lg bg-[var(--color-energy-start)]/8 text-[var(--color-energy-start)]">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-[var(--color-text-primary)] leading-snug">
                      {industry.name}
                    </h3>
                    <p className="mt-1 text-xs font-sans leading-relaxed text-[var(--color-text-muted)]">
                      {industry.scope}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-14 sm:py-20 md:py-28 bg-[var(--color-indigo)] text-white overflow-hidden">
        <GradientMesh variant="dark" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Looking for workforce solutions?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
              Whether you need contract specialists, permanent hires, or full crew management — our team is ready.
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
