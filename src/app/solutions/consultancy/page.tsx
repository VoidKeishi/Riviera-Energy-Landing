import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WaveBackground } from "@/components/ui/WaveBackground";
import { DotGrid } from "@/components/ui/DotGrid";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Strategic Project Consultancy",
  description:
    "Advisory services rooted in technical expertise and real-world execution experience across the energy sector.",
  alternates: {
    canonical: "/solutions/consultancy",
  },
  openGraph: {
    title: "Strategic Project Consultancy | Riviera Energy",
    description:
      "Advisory services rooted in technical expertise and real-world execution experience across the energy sector.",
    url: "/solutions/consultancy",
  },
};

const specialistAreas = [
  {
    title: "Engineering Design & Construction Advisory",
    description: "Multidisciplinary engineering expertise across the full project lifecycle.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
      </svg>
    ),
  },
  {
    title: "Completions & Commissioning Strategy",
    description: "Planning and execution strategy for commissioning and start-up activities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "Verification of Readiness Assurance",
    description: "Systematic assurance that all readiness requirements are identified and addressed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Operations & Maintenance Planning",
    description: "Operational readiness and sustained O&M planning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.06a1.5 1.5 0 01-.737-1.295V7.364a1.5 1.5 0 01.737-1.295l5.1-3.06a1.5 1.5 0 011.5 0l5.1 3.06a1.5 1.5 0 01.737 1.295v3.451a1.5 1.5 0 01-.737 1.295l-5.1 3.06a1.5 1.5 0 01-1.5 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-7.5" />
      </svg>
    ),
  },
  {
    title: "Safety and Technical Integrity",
    description: "Ensuring technical integrity and safety compliance at every stage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
] as const;

const valueItems = [
  "Improved asset data integrity, driving capital cost reductions and faster market entry",
  "Integrated construction and commissioning schedule management reducing costs",
  "Enhanced commissioning, operations and maintenance data handover processes",
  "Timely, accurate information reducing risk review time",
  "Improved procurement planning achieving spare part cost reductions",
  "Data and design reuse driving commissioning and start-up cost reduction",
] as const;

const sectors = [
  {
    title: "Oil & Gas",
    description: "Upstream, midstream, and downstream operations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: "Renewables",
    description: "Wind, solar, and emerging sustainable energy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Power Generation",
    description: "Thermal, gas, and hybrid power systems",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Marine Energy",
    description: "Offshore and marine energy operations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
] as const;

export default function ConsultancyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pb-24 md:pt-40 md:pb-32 bg-white overflow-hidden">
        <DotGrid size="6x6" variant="light" className="absolute top-28 right-8 md:right-20 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
                  Consultancy
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  Strategic Project Consultancy
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-4 text-lg font-display italic text-[var(--color-text-muted)]">
                  &ldquo;Experience-led expertise supporting execution around the clock&rdquo;
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                  Strategic project consultancy rooted in proven technical expertise and real-world
                  execution experience. Through a <strong>global network of partners and senior
                  specialists</strong> operating across time zones, we enable cost-efficient decisions,
                  rapid issue resolution, and continuous project momentum.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={300}>
                <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-[var(--color-navy-mid)] to-[var(--color-indigo)] overflow-hidden relative lg:-mr-8">
                  <WaveBackground variant="dark" className="opacity-50" />
                  <div className="absolute inset-0 flex items-end p-8">
                    <div className="text-white">
                      <div className="font-display text-5xl font-extrabold energy-gradient-text">5</div>
                      <div className="mt-1 text-sm font-sans font-medium text-white/70 uppercase tracking-wide">
                        Specialist Areas
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Rooted in Execution */}
      <SectionWrapper background="off-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
                What We Offer
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
                Advisory Rooted in Execution
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                Our consultancy services draw from decades of direct project experience — not
                theoretical frameworks. We provide advisory services from{" "}
                <strong>early-stage concept and design through execution and operational
                support</strong>. Our experience spans new developments, mothballed and preserved
                facilities, and long-idle hydrocarbon assets.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={200}>
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[var(--color-navy-mid)] to-[var(--color-indigo)] overflow-hidden relative">
                <WaveBackground variant="dark" className="opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-5xl font-extrabold energy-gradient-text">50+</div>
                    <div className="mt-2 text-sm font-sans font-medium uppercase tracking-wide text-white/70">
                      Years Combined Experience
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <DotGrid size="4x4" variant="light" className="absolute -top-4 -right-4 hidden lg:block" />
          </div>
        </div>
      </SectionWrapper>

      {/* Specialist Areas */}
      <SectionWrapper background="white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Expertise
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Specialist Areas
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialistAreas.map((area, i) => (
            <ScrollReveal key={area.title} delay={i * 100} className="h-full">
              <div className="h-full flex flex-col rounded-xl bg-white border border-[var(--color-grey-100)] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(8,1,69,0.1)]">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--color-off-white)] text-[var(--color-cyan)]">
                  {area.icon}
                </div>
                <h3 className="mt-5 font-sans text-lg font-bold text-[var(--color-text-primary)]">
                  {area.title}
                </h3>
                <p className="mt-2 flex-grow text-sm font-sans leading-relaxed text-[var(--color-text-muted)]">
                  {area.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* How We Work */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-[var(--color-indigo)] text-white overflow-hidden">
        <WaveBackground variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-energy-end)]">
                Our Process
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                How We Work
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-6 text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
                The ICORA team establishes an overall commissioning and operations readiness
                project schedule outlining all required deliverables and activities for meeting
                the Ready for Start-Up (RFSU) date. Progress is tracked and reported directly
                to the owner-operator for full transparency.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <blockquote className="mt-8 border-l-4 border-[var(--color-energy-end)] pl-6 py-2 text-left">
                <p className="text-base md:text-lg font-display italic text-white/90">
                  &ldquo;This approach ensures design, procurement, factory acceptance testing,
                  logistics and construction are pursued with a &lsquo;commissioning first&rsquo;
                  mindset to avoid start-up bottlenecks.&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Value Delivered */}
      <SectionWrapper background="off-white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Impact
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Value We Deliver
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="h-full flex items-start gap-4 rounded-xl bg-white border border-[var(--color-grey-100)] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(8,1,69,0.1)]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-cyan)]/10 flex items-center justify-center mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="2" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-sm font-sans leading-relaxed text-[var(--color-text-body)]">
                  {item}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Sectors We Serve */}
      <SectionWrapper background="white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Industries
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Sectors We Serve
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, i) => (
            <ScrollReveal key={sector.title} delay={i * 100} className="h-full">
              <div className="h-full flex flex-col text-center rounded-xl bg-white border border-[var(--color-grey-100)] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(8,1,69,0.1)]">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--color-off-white)] text-[var(--color-cyan)] mx-auto">
                  {sector.icon}
                </div>
                <h3 className="mt-5 font-sans text-lg font-bold text-[var(--color-text-primary)]">
                  {sector.title}
                </h3>
                <p className="mt-2 flex-grow text-sm font-sans leading-relaxed text-[var(--color-text-muted)]">
                  {sector.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <p className="mt-12 text-center text-base md:text-lg font-display italic text-[var(--color-text-muted)]">
            &ldquo;Whatever your project requirements, wherever you operate, whatever your
            timeframes — Riviera Energy is your partner for success.&rdquo;
          </p>
        </ScrollReveal>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative py-14 sm:py-20 md:py-28 bg-[var(--color-indigo)] text-white overflow-hidden">
        <WaveBackground variant="dark" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Explore how our consultancy can support your project
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
              From engineering advisory to operational readiness — our team delivers experience-led
              expertise at every stage.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="/contact">
                Contact Us
              </Button>
              <Button variant="ghost" href="/solutions">
                View All Solutions
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
