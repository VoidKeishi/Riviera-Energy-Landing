import Link from 'next/link';
import { WaveBackground } from '@/components/ui/WaveBackground';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { DotGrid } from '@/components/ui/DotGrid';
import { Button } from '@/components/ui/Button';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { StatCounter } from '@/components/home/StatCounter';

const servicePillars = [
  {
    title: 'Commissioning & Operational Readiness',
    description:
      'Defined technical capability aligned to specific project scopes. Combining technical capability with compliant, timely deployment across borders — ensuring the right expertise is integrated, accountable, and effective from day one.',
    tagline: 'From completion to confident operation',
    href: '/solutions/commissioning',
    gradient: 'from-[#0958B3] to-[#2585C4]',
  },
  {
    title: 'Strategic Project Consultancy',
    description:
      'Strategic project consultancy rooted in proven technical expertise and real-world execution experience. Through a global network of senior specialists operating across time zones, we enable cost-efficient decisions, rapid issue resolution, and continuous project momentum.',
    tagline: 'Experience-led expertise supporting execution around the clock',
    href: '/solutions/consultancy',
    gradient: 'from-[#2585C4] to-[#40B2D4]',
  },
  {
    title: 'Global Workforce & Mobility Solutions',
    description:
      'Integrated delivery and compliant global mobilisation of specialist offshore capability for survey, ROV, inspection, and commissioning activities. Efficient, deployment-ready teams reducing downtime and enabling safe, cost-efficient execution.',
    tagline: 'Delivering global capability, without disruption',
    href: '/solutions/workforce',
    gradient: 'from-[#40B2D4] to-[#59DAE3]',
  },
] as const;

const differentiators = [
  {
    title: 'Professional & Experienced',
    description: 'A team of experts in the field with more than 50 years of experience.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
  },
  {
    title: 'Fast-track Service',
    description: 'Accelerated response time and submission with dedicated 24/7 client support.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Measurable Results Target',
    description: 'A client-focused approach delivering high-quality, value-driven proposals with the flexibility to ensure optimal outcomes and maximum value for every engagement.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Trusted Talent Network',
    description: 'A global talent database of ~100,000+ specialists, supported by rigorous screening processes and full compliance with local and international hiring regulations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: '24/7 End-to-End Support',
    description: 'Continuous support throughout the full lifecycle, from onboarding and mobilisation through to rotation management and demobilisation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Global Reach',
    description: 'Mobilising expertise worldwide from Singapore across USA, Europe, Middle East, Asia, Africa, and Australia.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
] as const;

const partners = [
  'ExxonMobil', 'Woodside Energy', 'Shell', 'BP', 'Santos', 'BW Offshore',
  'Nabors', 'COSCO Shipping', 'Cyan Renewables', 'Twinza', 'Argo Marine',
  'SOFEC', 'Yinson Production', 'IKM', 'UTEC Geo-services',
  'Red Rock Oilfield Services', 'OMS Group', 'LD Armateurs', 'LD Travocean',
  'SafeLink', 'AOS Offshore', 'Zamil Offshore', 'MODEC', 'Dana Petroleum',
] as const;

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-indigo)]">
        <WaveBackground variant="dark" />
        <DotGrid size="6x6" variant="dark" className="absolute top-24 right-12 md:right-24 hidden md:block" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <ScrollReveal delay={300}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.9] text-white">
              Where Partnership
              <br />
              Meets Performance
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={450}>
            <p className="mt-6 text-lg md:text-xl text-[var(--color-text-on-dark-muted)] max-w-2xl mx-auto leading-relaxed font-sans">
              Engineering and asset integrity consultancy delivering
              high-confidence project outcomes across the global energy sector.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="/solutions">
                Our Solutions
              </Button>
              <Button variant="ghost" href="/contact">
                Get in Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Introduction */}
      <SectionWrapper background="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
                Who We Are
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
                Integrated Solutions Across the Project Lifecycle
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                Riviera Energy is an Energy Industry consultancy providing project consulting services,
                specialist technical workforce resources, and integrated full-package project solutions
                to clients across the <strong>oil &amp; gas, renewables, power generation, and marine energy</strong> sectors.
                With over a decade of experience, we support complex projects by delivering highly qualified
                engineering professionals and tailored consultancy services across the full project lifecycle.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="mt-4 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-muted)]">
                Our capability spans early-stage concept and design through execution and operational support,
                enabling clients to mobilise efficiently, manage risk, and achieve consistent project outcomes.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={200}>
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[var(--color-navy-mid)] to-[var(--color-indigo)] overflow-hidden relative">
                <WaveBackground variant="dark" className="opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-6xl font-extrabold energy-gradient-text">10+</div>
                    <div className="mt-2 text-sm font-sans font-medium uppercase tracking-wide text-white/70">
                      Years of Excellence
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <DotGrid size="4x4" variant="light" className="absolute -top-4 -right-4 hidden lg:block" />
          </div>
        </div>
      </SectionWrapper>

      {/* Service Pillars */}
      <SectionWrapper background="off-white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Our Services
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              What We Do
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicePillars.map((pillar, i) => (
            <ScrollReveal key={pillar.href} delay={i * 100}>
              <Link
                href={pillar.href}
                className={`group block rounded-xl bg-white border border-[var(--color-grey-100)] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(8,1,69,0.12)] ${
                  i === 1 ? 'md:mt-8' : i === 2 ? 'md:mt-16' : ''
                }`}
              >
                <div className={`h-1 rounded-t-xl bg-gradient-to-r ${pillar.gradient}`} />

                <div className="aspect-[16/9] bg-gradient-to-br from-[var(--color-navy-mid)] to-[var(--color-indigo)] relative overflow-hidden">
                  <WaveBackground variant="dark" className="opacity-40" />
                </div>

                <div className="p-8">
                  <h3 className="font-sans text-xl md:text-2xl font-bold text-[var(--color-text-primary)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base font-sans leading-relaxed text-[var(--color-text-body)]">
                    {pillar.description}
                  </p>
                  <p className="mt-4 text-sm font-sans italic text-[var(--color-text-muted)]">
                    &ldquo;{pillar.tagline}&rdquo;
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-sans font-semibold text-[var(--color-cyan)] group-hover:gap-3 transition-all duration-[var(--duration-base)]">
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* What Sets Us Apart */}
      <section className="relative py-24 md:py-32 bg-[var(--color-indigo)] text-white overflow-hidden">
        <WaveBackground variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-energy-end)]">
                Why Riviera Energy
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                What Sets Us Apart
              </h2>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100} className="h-full">
                <div className="flex h-full flex-col rounded-xl bg-white/[0.08] border border-white/[0.15] p-8 transition-colors duration-[var(--duration-base)] hover:bg-white/[0.12]">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/[0.12] text-[var(--color-energy-end)]">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 font-sans text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-grow text-sm font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <div className="md:border-r md:border-white/10 md:pr-4">
              <StatCounter end={50} suffix="+" label="Years Combined Experience" />
            </div>
            <div className="md:border-r md:border-white/10 md:pr-4">
              <StatCounter end={100} suffix="K+" label="Global Talent Database" />
            </div>
            <div className="md:border-r md:border-white/10 md:pr-4">
              <StatCounter end={200} suffix="+" label="Equipment Packages Inspected" />
            </div>
            <div>
              <StatCounter end={6} label="Global Regions" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <SectionWrapper background="white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Our Partners
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Trusted By Industry Leaders
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-16 relative overflow-hidden">
            <div className="flex animate-scroll-x gap-12">
              {[...partners, ...partners].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center px-6 py-4 rounded-lg border border-[var(--color-grey-100)] bg-[var(--color-off-white)]"
                >
                  <span className="text-sm font-sans font-semibold text-[var(--color-text-muted)] whitespace-nowrap">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* CTA Band */}
      <section className="relative py-20 md:py-28 bg-[var(--color-indigo)] text-white overflow-hidden">
        <WaveBackground variant="dark" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Ready to discuss your next project?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
              Whether you need commissioning support, strategic advisory, or workforce solutions — our team is ready.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="/contact">
                Contact Us
              </Button>
              <Button variant="ghost" href="/solutions">
                View Our Solutions
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
