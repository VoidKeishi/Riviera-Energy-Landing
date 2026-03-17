import { GradientMesh } from '@/components/ui/GradientMesh';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { VideoBackground } from '@/components/ui/VideoBackground';
import { StatCounter } from '@/components/home/StatCounter';
import Image from 'next/image';
import Link from 'next/link';

const solutions = [
  {
    title: 'Commissioning & Operational Readiness',
    href: '/solutions/commissioning',
    image: '/images/offshore-platform-night.jpg',
    imageAlt: 'Offshore platform illuminated at night',
    imagePosition: 'center center',
  },
  {
    title: 'Strategic Project Consultancy',
    href: '/solutions/consultancy',
    image: '/images/refinery-complex.jpg',
    imageAlt: 'Industrial refinery complex in daylight',
    imagePosition: 'center 100%',
  },
  {
    title: 'Global Workforce & Mobility',
    href: '/solutions/workforce',
    image: '/images/vessel-aerial.jpg',
    imageAlt: 'Aerial view of offshore vessel with helipad',
    imagePosition: 'center center',
  },
];

const differentiators = [
  {
    title: 'Professional & Experienced',
    description: '50+ years combined expertise across design, commissioning, and construction.',
  },
  {
    title: 'Fast-track Service',
    description: 'Accelerated response and submission with dedicated 24/7 client support.',
  },
  {
    title: 'Measurable Results',
    description: 'Value-driven proposals ensuring optimal outcomes for every engagement.',
  },
  {
    title: 'Trusted Talent Network',
    description: '~100,000+ specialists with rigorous screening and full regulatory compliance.',
  },
  {
    title: '24/7 End-to-End Support',
    description: 'Full lifecycle coverage from onboarding through to demobilisation.',
  },
  {
    title: 'Global Reach',
    description: 'Mobilising expertise worldwide from Singapore across six continents.',
  },
] as const;

const stats = [
  { end: 50, suffix: '+', label: 'Years Combined Experience' },
  { end: 100, suffix: 'K+', label: 'Global Talent Database' },
  { end: 100, suffix: '+', label: 'Projects Executed' },
] as const;

const partners = [
  { name: 'ExxonMobil', src: '/images/partner-logo/exxonmobil.png', width: 2200, height: 845 },
  { name: 'Shell', src: '/images/partner-logo/shell.png', width: 1024, height: 951 },
  { name: 'Santos', src: '/images/partner-logo/santos.png', width: 990, height: 236 },
  { name: 'BW Offshore', src: '/images/partner-logo/bwoffshore.png', width: 2000, height: 506 },
  { name: 'MODEC', src: '/images/partner-logo/modec.png', width: 640, height: 154 },
  { name: 'IKM', src: '/images/partner-logo/ikm.png', width: 2000, height: 2000 },
  { name: 'Nabors', src: '/images/partner-logo/nabors.png', width: 1528, height: 291 },
  { name: 'COSCO Shipping', src: '/images/partner-logo/coscoshipping.png', width: 1581, height: 1007 },
  { name: 'Cyan Renewables', src: '/images/partner-logo/cyanrenewables.png', width: 2000, height: 2000 },
  { name: 'Twinza', src: '/images/partner-logo/twinza.png', width: 500, height: 104 },
  { name: 'Argo Marine', src: '/images/partner-logo/argomarine.png', width: 1188, height: 344 },
  { name: 'SOFEC', src: '/images/partner-logo/sofec.png', width: 400, height: 104 },
  { name: 'Yinson Production', src: '/images/partner-logo/yinsonproduction.png', width: 700, height: 280 },
  { name: 'UTEC Geo-services', src: '/images/partner-logo/utecgeoservices.png', width: 300, height: 90 },
  { name: 'TechnipFMC', src: '/images/partner-logo/technipfmc.png', width: 1200, height: 627 },
  { name: 'Red Rock Oilfield Services', src: '/images/partner-logo/redrockoilfieldservices.png', width: 500, height: 315 },
  { name: 'OMS Group', src: '/images/partner-logo/omsgroup.png', width: 1200, height: 800 },
  { name: 'LD Armateurs', src: '/images/partner-logo/ldarmateurs.png', width: 500, height: 405 },
  { name: 'LD Travocean', src: '/images/partner-logo/ldtravocean.png', width: 2493, height: 2245 },
  { name: 'SafeLink', src: '/images/partner-logo/safelink.png', width: 960, height: 180 },
  { name: 'AOS Offshore', src: '/images/partner-logo/aosoffshore.png', width: 800, height: 336 },
  { name: 'Zamil Offshore', src: '/images/partner-logo/zamiloffshore.png', width: 1200, height: 700 },
  { name: 'Dana Petroleum', src: '/images/partner-logo/danapetroleum.png', width: 623, height: 386 },
] as const;

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden bg-[#031050] pt-36 pb-32 sm:pt-40 sm:pb-40 md:pt-48 md:pb-48 lg:pb-56">
        <VideoBackground />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#031050]/60 via-[#031050]/40 to-[#031050]/80" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal delay={300}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              Where Partnership
              <br />
              Meets Performance
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={450}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="/#solutions">
                Our Solutions
              </Button>
              <Button variant="ghost" href="/contact">
                Get in Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <SectionWrapper background="off-white">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              What Drives Us
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Mission &amp; Vision
            </h2>
          </ScrollReveal>

          <div className="mt-10 space-y-6">
            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl font-sans leading-relaxed text-[var(--color-text-body)]">
                To redefine project delivery and facility start-up through governed, <span className="text-[var(--color-cyan)] font-semibold">data-driven innovation</span> that accelerates execution and unlocks <span className="text-[var(--color-cyan)] font-semibold">commercial value</span>.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-lg md:text-xl font-sans leading-relaxed text-[var(--color-text-body)]">
                To set the new standard for how complex projects are delivered — <span className="text-[var(--color-cyan)] font-semibold">faster, smarter</span>, and with improved <span className="text-[var(--color-cyan)] font-semibold">outcome certainty</span>.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </SectionWrapper>

      {/* Solutions */}
      <section id="solutions" className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
                Our Solutions
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
                What We Do
              </h2>
            </ScrollReveal>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((solution, i) => (
              <ScrollReveal key={solution.title} delay={i * 100}>
                <Link
                  href={solution.href}
                  className="group relative block aspect-[4/5] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(8,1,69,0.2)]"
                >
                  <Image
                    src={solution.image}
                    alt={solution.imageAlt}
                    fill
                    className="object-cover transition-transform duration-[var(--duration-smooth)] ease-[var(--ease-flow)] group-hover:scale-105"
                    style={{ objectPosition: solution.imagePosition }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-[var(--duration-base)] group-hover:from-[var(--color-indigo)]/90 group-hover:via-[var(--color-indigo)]/40" />
                  <div className="absolute inset-0 flex items-end p-6 sm:p-8">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                        {solution.title}
                      </h3>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-[var(--color-energy-end)] opacity-0 translate-y-2 transition-all duration-[var(--duration-base)] ease-[var(--ease-flow)] group-hover:opacity-100 group-hover:translate-y-0">
                        Learn More
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Riviera */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[var(--color-indigo)] text-white overflow-hidden">
        <GradientMesh variant="dark" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/refinery-complex.jpg"
            alt="Industrial refinery complex"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-indigo)]/85 via-[var(--color-indigo)]/70 to-[var(--color-indigo)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-energy-end)]">
                Why Us
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                What Sets Us Apart
              </h2>
            </ScrollReveal>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {differentiators.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div>
                  <div className="w-6 h-0.5 bg-[var(--color-energy-end)] rounded-full mb-4" />
                  <h4 className="font-sans text-base font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-sm font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={i < stats.length - 1 ? 'md:border-r md:border-white/10 md:pr-4' : ''}
              >
                <StatCounter end={stat.end} suffix={stat.suffix} label={stat.label} dark />
              </div>
            ))}
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
            <div className="flex animate-scroll-x gap-8">
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center h-8 min-w-[80px] px-4"
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={Math.round((partner.width / partner.height) * 32)}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* CTA Band */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[var(--color-indigo)] text-white overflow-hidden">
        <GradientMesh variant="dark" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Ready to discuss your next project?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
              Whether you need commissioning support, strategic advisory, or workforce solutions, our team is ready.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="/contact">
                Contact Us
              </Button>
              <Button variant="ghost" href="/#solutions">
                View Our Solutions
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
