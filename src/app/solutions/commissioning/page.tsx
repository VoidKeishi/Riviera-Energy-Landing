import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WaveBackground } from "@/components/ui/WaveBackground";
import { DotGrid } from "@/components/ui/DotGrid";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Commissioning & Operational Readiness",
  description:
    "Pre-Commissioning, Commissioning & Operational Readiness services powered by the ICORA framework.",
};

const icoraPillars = [
  {
    title: "Smarter Technology",
    description:
      "An ICORA technology platform, focused on Commissioning, Start-up and Operational Readiness, using integrated data and information management, interrogation, and insight to drive business decisions, risk and delay mitigation and cost reductions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Smarter Process",
    description:
      "An ICORA process that considers the transfer and custody of assets and information throughout the engineering, construction, commissioning, and handover project stages, applying verification of readiness requirements to achieve a smooth and successful start-up and transition into a normal operational state.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "Smarter People",
    description:
      "An ICORA team of commissioning and operations readiness specialists, engaged to drive project schedule and cost reductions through a verification of readiness planning and activity execution process utilising integrated project information and data.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
] as const;

const keyBenefits = [
  "An integrated team, customer-driven with an owner-operator",
  "Early involvement — the right knowledge and experience at the right time",
  "Fast-track commissioning and start-up, reducing project duration and costs",
  "Maximise efficiencies, early cash flow and long-term sustainable operations and maintenance",
  "Early risk identification and mitigation — finding the showstoppers and taking action",
  "Drives a verification of readiness process, reducing manpower and turnaround time",
  "Safety focused, ensuring technical integrity at start-up",
] as const;

const executionSteps = [
  {
    step: 1,
    title: "Field Condition Assessment",
    description:
      "Multidisciplinary inspection of process units, utilities, rotating equipment, tank farms, logistics infrastructure, and power distribution.",
  },
  {
    step: 2,
    title: "Documentation & Technical Verification",
    description:
      "Review and reconciliation of PFDs, P&IDs, equipment lists, corrosion circuits, and historical inspection data records.",
  },
  {
    step: 3,
    title: "Preservation & Metallurgy Review",
    description:
      "Identification of degradation risks, corrosion exposure, metallurgy issues, and catalyst-related restart blockers.",
  },
  {
    step: 4,
    title: "Regulatory & Environmental Gaps",
    description:
      "Analysis of emissions compliance, sulfur limits, product specs, flare compliance, and global fuel quality standards.",
  },
  {
    step: 5,
    title: "Restart Feasibility & Cost Model",
    description:
      "Structured decision framework determining technical/economic viability, risk-ranked constraints, and CAPEX/OPEX drivers.",
  },
] as const;

const credentials = [
  "Decades of restart experience across U.S., Middle East, & Australasia (BP, Shell, Caltex)",
  "Full-facility assessments for 80–300 kbpd refineries",
  "West Texas GTL Case: Disproved nitrogen-preservation claims; uncovered hidden failures",
  "Government Advisory: Middle East refinery rehabilitation & modular replacement strategies",
  "200+ major equipment packages inspected globally",
] as const;

const assetServices = [
  {
    title: "Asset Sustainability O&M Support",
    description:
      "Ongoing operational and maintenance support ensuring long-term asset performance, safety compliance, and cost-effective lifecycle management.",
  },
  {
    title: "Hazard Area (EEHA) Verification & Inspection Services",
    description:
      "Specialist verification and inspection of electrical equipment in hazardous areas, ensuring regulatory compliance and operational safety.",
  },
] as const;

export default function CommissioningPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white overflow-hidden">
        <DotGrid size="6x6" variant="light" className="absolute top-28 right-8 md:right-20 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
                  Commissioning
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  Pre-Commissioning, Commissioning & Operational Readiness
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-4 text-lg font-display italic text-[var(--color-text-muted)]">
                  &ldquo;From completion to confident operation&rdquo;
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                  Defined technical capability aligned to specific project scopes, not individual
                  resources. This solution combines <strong>technical capability with compliant,
                  timely deployment</strong> across borders — ensuring the right expertise is
                  integrated, accountable, and effective from day one.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={300}>
                <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-[var(--color-navy-mid)] to-[var(--color-indigo)] overflow-hidden relative lg:-mr-8">
                  <WaveBackground variant="dark" className="opacity-50" />
                  <div className="absolute inset-0 flex items-end p-8">
                    <div className="text-white">
                      <div className="font-display text-5xl font-extrabold energy-gradient-text">ICORA</div>
                      <div className="mt-1 text-sm font-sans font-medium text-white/70 uppercase tracking-wide">
                        Integrated Framework
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ICORA Framework */}
      <SectionWrapper background="off-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
                Our Framework
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
                The ICORA Framework
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="mt-2 text-lg font-sans font-medium text-[var(--color-text-muted)]">
                Integrated Commissioning, Operational Readiness Assurance
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                ICORA provides readiness assurance for commissioning, start-up, asset integrity,
                and sustained operations and maintenance. The framework encompasses technology,
                process, and a structured team to deliver outcomes. ICORA makes it possible for
                facilities to be designed, built, commissioned, and started in a{" "}
                <strong>safe, environmentally responsible and cost-effective manner</strong>.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <blockquote className="mt-8 border-l-4 border-[var(--color-cyan)] pl-6 py-2">
                <p className="text-base md:text-lg font-display italic text-[var(--color-navy)]">
                  &ldquo;Early engagement, integrated data-driven assurance, successful start-up&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={200}>
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[var(--color-navy-mid)] to-[var(--color-indigo)] overflow-hidden relative">
                <WaveBackground variant="dark" className="opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-4xl font-extrabold energy-gradient-text">3</div>
                    <div className="mt-2 text-sm font-sans font-medium uppercase tracking-wide text-white/70">
                      Pillars of Readiness
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <DotGrid size="4x4" variant="light" className="absolute -top-4 -right-4 hidden lg:block" />
          </div>
        </div>
      </SectionWrapper>

      {/* Three ICORA Pillars */}
      <SectionWrapper background="white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              The ICORA Pillars
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Smarter Outcomes Through Integration
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {icoraPillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 100} className="h-full">
              <div className="h-full flex flex-col rounded-xl bg-white border border-[var(--color-grey-100)] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(8,1,69,0.1)]">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--color-off-white)] text-[var(--color-cyan)]">
                  {pillar.icon}
                </div>
                <h3 className="mt-5 font-sans text-lg font-bold text-[var(--color-text-primary)]">
                  {pillar.title}
                </h3>
                <p className="mt-2 flex-grow text-sm font-sans leading-relaxed text-[var(--color-text-muted)]">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <p className="mt-12 text-center text-base md:text-lg font-display italic text-[var(--color-text-muted)]">
            &ldquo;With Smarter People, Smarter Technology and Smarter Processes we build a Smarter Business.&rdquo;
          </p>
        </ScrollReveal>
      </SectionWrapper>

      {/* Key Benefits */}
      <section className="relative py-24 md:py-32 bg-[var(--color-indigo)] text-white overflow-hidden">
        <WaveBackground variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-energy-end)]">
                Why ICORA
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Key Benefits
              </h2>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyBenefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 80} className="h-full">
                <div className="h-full flex items-start gap-4 rounded-xl bg-white/[0.08] border border-white/[0.15] p-6 transition-colors duration-[var(--duration-base)] hover:bg-white/[0.12]">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-energy-end)]/20 flex items-center justify-center mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-energy-end)" strokeWidth="2" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-sm font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
                    {benefit}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Execution Scope */}
      <SectionWrapper background="off-white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Execution Scope
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Initial Assessment Phase
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="mt-2 text-lg font-sans text-[var(--color-text-muted)]">
              5-Step Execution Scope
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          {executionSteps.map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 100}>
              <div className={`flex gap-8 ${i < executionSteps.length - 1 ? "pb-12" : ""}`}>
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-[var(--color-grey-100)] flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <span className="font-display text-2xl font-extrabold energy-gradient-text">
                      {item.step}
                    </span>
                  </div>
                  {i < executionSteps.length - 1 && (
                    <div className="flex-grow w-px bg-[var(--color-grey-100)] mt-3" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="font-sans text-xl font-bold text-[var(--color-text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base font-sans leading-relaxed text-[var(--color-text-body)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Outcomes & Credentials */}
      <SectionWrapper background="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
                Track Record
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
                Outcomes We Deliver
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Verified asset condition", "Restart risk profile", "Credible cost/schedule ranges"].map((outcome) => (
                  <span
                    key={outcome}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-sans font-semibold bg-[var(--color-cyan)]/10 text-[var(--color-cyan)] border border-[var(--color-cyan)]/20"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-8 space-y-4">
                {credentials.map((credential, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="1.5" className="w-5 h-5 flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <p className="text-sm font-sans leading-relaxed text-[var(--color-text-body)]">
                      {credential}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={200}>
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[var(--color-navy-mid)] to-[var(--color-indigo)] overflow-hidden relative">
                <WaveBackground variant="dark" className="opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-6xl font-extrabold energy-gradient-text">200+</div>
                    <div className="mt-2 text-sm font-sans font-medium uppercase tracking-wide text-white/70">
                      Equipment Packages Inspected
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <DotGrid size="4x4" variant="light" className="absolute -top-4 -right-4 hidden lg:block" />
          </div>
        </div>
      </SectionWrapper>

      {/* Asset Management Services */}
      <SectionWrapper background="off-white">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Additional Services
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Asset Management Services
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
              OGS provides expert Asset Management and Support services to ensure clients maintain
              plant safety, avoid unplanned downtime and comply with increasingly complex regulatory
              requirements.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {assetServices.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100 + 200} className="h-full">
              <div className="h-full flex flex-col rounded-xl bg-white border border-[var(--color-grey-100)] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(8,1,69,0.1)]">
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

      {/* CTA */}
      <section className="relative py-20 md:py-28 bg-[var(--color-indigo)] text-white overflow-hidden">
        <WaveBackground variant="dark" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Discuss your commissioning requirements
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
              From pre-commissioning through to operational readiness — our team brings decades
              of experience to every engagement.
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
