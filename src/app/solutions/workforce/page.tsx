import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GradientMesh } from '@/components/ui/GradientMesh';

export const metadata: Metadata = {
  title: 'Global Workforce & Mobility Solutions | Riviera Energy',
  description:
    'Integrated delivery and compliant global mobilisation of specialist offshore capability for survey, ROV, inspection, and commissioning activities.',
};

const services = [
  {
    title: 'Contract Hiring',
    description:
      'Leveraging our global recruiter network to source site-ready contract candidates matched by skill set, readiness, and experience. We mobilise local and global talent based on your project requirements — faster.',
  },
  {
    title: 'Permanent Hiring',
    description:
      'Sourcing, selecting, and shortlisting high-performing permanent staff across the energy and construction sectors. We work alongside you to fully understand the role and your business, ensuring the right fit.',
  },
  {
    title: 'Payroll Services',
    description:
      'Comprehensive managed payroll services ensuring your permanent and contract teams are paid reliably, accurately, and on time across all jurisdictions.',
  },
  {
    title: 'Integrated Crew Management',
    description:
      'End-to-end personnel management with integrated systems handling complex logistics, quick turnaround times, and reduced operational expenses.',
  },
  {
    title: 'Travel & Logistics Management',
    description:
      'Expert management of recruit travel and logistics — from accommodations and flight bookings to general wellbeing — at competitive fares with trusted partners.',
  },
  {
    title: 'Diversity Hiring',
    description:
      'Hiring with diversity at the forefront to increase perspective, cultural awareness, and quality of collaboration. A partnership with Riviera Energy is an investment in people, culture, and the future.',
  },
] as const;

const steps = [
  'Comprehensive job brief',
  'Compelling ad copy',
  'Talent search',
  'Talent screening',
  'Shortlisting & interviews',
  'Reference checks',
  'Offer & onboarding',
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
              Global Workforce &amp; Mobility Solutions
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-8 text-base sm:text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)] max-w-3xl mx-auto">
              Integrated delivery and compliant global mobilisation of specialist offshore capability for survey, ROV, inspection, and commissioning activities. Deployment-ready teams reducing downtime, protecting schedule, and enabling safe, cost-efficient execution.
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
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
              The People for Project Success
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-8 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
              Riviera Energy is a full-service resourcing and recruitment partner delivering rapid and consistent mobilisation solutions to the oil &amp; gas, energy, and construction sectors. With access to a global talent database of ~100,000+ specialists, supported by rigorous screening and full compliance with local and international hiring regulations, we ensure quality, reliability, and risk-managed workforce delivery.
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
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Workforce Services
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div className="h-full flex flex-col rounded-xl border border-[var(--color-grey-100)] bg-white p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(8,1,69,0.1)]">
                <h3 className="font-sans text-lg font-bold text-[var(--color-text-primary)]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-grow text-sm font-sans leading-relaxed text-[var(--color-text-muted)]">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Recruitment Journey */}
      <SectionWrapper background="off-white">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Our Process
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Recruitment Journey
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
              A full-service recruitment process from partnership to successful onboarding.
            </p>
          </ScrollReveal>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {steps.map((step, i) => (
              <ScrollReveal key={step} delay={i * 60}>
                <div className="flex items-center gap-3 rounded-full border border-[var(--color-grey-100)] bg-white px-5 py-2.5 shadow-sm">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-cyan)]/10 text-xs font-sans font-bold text-[var(--color-cyan)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-sans font-medium text-[var(--color-text-primary)]">
                    {step}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

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
              Whether you need contract specialists, permanent hires, or full crew management, our team is ready.
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
