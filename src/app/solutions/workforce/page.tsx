import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WaveBackground } from "@/components/ui/WaveBackground";
import { DotGrid } from "@/components/ui/DotGrid";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Global Workforce & Mobility Solutions",
  description:
    "Full-service workforce resourcing, recruitment, and global mobilisation for the energy sector.",
  alternates: {
    canonical: "/solutions/workforce",
  },
  openGraph: {
    title: "Global Workforce & Mobility Solutions | Riviera Energy",
    description:
      "Full-service workforce resourcing, recruitment, and global mobilisation for the energy sector.",
    url: "/solutions/workforce",
  },
};

const serviceAreas = [
  {
    title: "Contract Hiring",
    description:
      "We understand the varying business needs of our clients and how challenging it can be to find, manage and build a contractor network. Our global team of recruiters leverage their expertise to extend contract hiring solutions, ensuring only the most suitable candidates are shortlisted and presented based on skill set, readiness and experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Permanent Hiring",
    description:
      "Finding well-suited and high-performing permanent staff requires knowledge, negotiation, and a great understanding of the relevant industry. We pride ourselves on sourcing, selecting and shortlisting the right candidates for any role within the oil and gas, energy and construction sectors.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Payroll Services",
    description:
      "We provide managed payroll services to businesses across the energy and construction sectors. Whether it's your permanent or contract team, it is critical that they are paid reliably and accurately. We offer comprehensive payroll services ensuring your team is paid accurately and on time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Integrated Crew Management",
    description:
      "Our integrated crew management services allow you to focus on the bigger projects while we handle human resources and logistics functions. We provide completely integrated systems that handle complex logistics and end-to-end personnel management with quick turnaround times.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Travel & Logistics Management",
    description:
      "We expertly manage the travel and logistics of successful recruits. From introductory services and local accommodations to flight bookings and the general well-being of travelling staff. We manage all travel and logistical requirements at the best fares with a team of trusted partners.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Diversity Hiring",
    description:
      "Being a global provider of people for project success across industries and regions, we pride ourselves on the diverse background of our team. We know the importance of hiring with diversity in mind to increase perspective, cultural awareness and quality of human collaboration.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
] as const;

const recruitmentSteps = [
  "Building a comprehensive and detailed job brief",
  "Creating compelling ad copy",
  "Talent search across our global database",
  "Talent screening and assessment",
  "Shortlisting, interviewing, testing and verification",
  "Completion of full reference checks",
  "Offer delivery and negotiations",
] as const;

const industries = [
  {
    title: "Oil & Gas",
    description: "Onshore and offshore, upstream, midstream and downstream, natural gas",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: "Renewable Energy",
    description: "Wind, solar, and emerging sustainable energy projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Marine",
    description: "Diverse marine projects with global placement capability",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Process Engineering",
    description: "Process unit specialists across the engineering lifecycle",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Construction",
    description: "Effectiveness, efficiency, sustainability and safety focused staffing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
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
] as const;

export default function WorkforcePage() {
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
                  Workforce Solutions
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  Global Workforce & Mobility Solutions
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-4 text-lg font-display italic text-[var(--color-text-muted)]">
                  &ldquo;Delivering global capability, without disruption&rdquo;
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                  Integrated delivery and compliant global mobilisation of specialist offshore
                  capability for survey, ROV, inspection, and commissioning activities.{" "}
                  <strong>Efficient, deployment-ready teams</strong>, reducing downtime, protecting
                  schedule, and enabling safe, cost-efficient execution.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={300}>
                <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-[var(--color-navy-mid)] to-[var(--color-indigo)] overflow-hidden relative lg:-mr-8">
                  <WaveBackground variant="dark" className="opacity-50" />
                  <div className="absolute inset-0 flex items-end p-8">
                    <div className="text-white">
                      <div className="font-display text-5xl font-extrabold energy-gradient-text">100K+</div>
                      <div className="mt-1 text-sm font-sans font-medium text-white/70 uppercase tracking-wide">
                        Global Talent Database
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <SectionWrapper background="off-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
                Who We Are
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
                The People for Project Success
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                Riviera Energy is a full-service resourcing and recruitment agency delivering
                rapid and consistent mobilisation solutions to the oil and gas, energy, and
                construction sectors. Our global reach and in-industry experience are
                indisputable — when you choose to partner with Riviera Energy, you benefit from
                a team of <strong>vastly connected, accountable and knowledgeable people</strong> taking
                a seat at your talent table.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="mt-4 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                With access to a global talent database of ~100,000+ specialists, supported by
                rigorous screening processes and full compliance with local and international
                hiring regulations, we ensure quality, reliability, and risk-managed workforce
                delivery.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={200}>
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[var(--color-navy-mid)] to-[var(--color-indigo)] overflow-hidden relative">
                <WaveBackground variant="dark" className="opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-5xl font-extrabold energy-gradient-text">6</div>
                    <div className="mt-2 text-sm font-sans font-medium uppercase tracking-wide text-white/70">
                      Service Areas
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <DotGrid size="4x4" variant="light" className="absolute -top-4 -right-4 hidden lg:block" />
          </div>
        </div>
      </SectionWrapper>

      {/* Six Service Areas */}
      <SectionWrapper background="white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Our Services
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Full-Service Workforce Solutions
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceAreas.map((area, i) => (
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

      {/* Recruitment Journey */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-[var(--color-indigo)] text-white overflow-hidden">
        <WaveBackground variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-energy-end)]">
                Our Process
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Our Recruitment Journey
              </h2>
            </ScrollReveal>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            {recruitmentSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={`flex gap-8 ${i < recruitmentSteps.length - 1 ? "pb-10" : ""}`}>
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/[0.1] border border-white/[0.2] flex items-center justify-center">
                      <span className="font-display text-xl font-extrabold energy-gradient-text">
                        {i + 1}
                      </span>
                    </div>
                    {i < recruitmentSteps.length - 1 && (
                      <div className="flex-grow w-px bg-white/[0.15] mt-3" />
                    )}
                  </div>
                  <div className="pt-2.5">
                    <p className="text-base font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
                      {step}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <SectionWrapper background="off-white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Sectors
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Industries We Serve
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, i) => (
            <ScrollReveal key={industry.title} delay={i * 100} className="h-full">
              <div className="h-full flex flex-col rounded-xl bg-white border border-[var(--color-grey-100)] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(8,1,69,0.1)]">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--color-off-white)] text-[var(--color-cyan)]">
                  {industry.icon}
                </div>
                <h3 className="mt-5 font-sans text-lg font-bold text-[var(--color-text-primary)]">
                  {industry.title}
                </h3>
                <p className="mt-2 flex-grow text-sm font-sans leading-relaxed text-[var(--color-text-muted)]">
                  {industry.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Job Vacancies Placeholder */}
      <SectionWrapper background="white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Careers
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Current Opportunities
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-16 max-w-2xl mx-auto text-center rounded-xl bg-[var(--color-off-white)] border border-[var(--color-grey-100)] p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-[var(--color-cyan)] mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <p className="text-base font-sans leading-relaxed text-[var(--color-text-muted)]">
              No current vacancies are listed at this time. Register your interest and we&apos;ll
              notify you of new opportunities as they arise.
            </p>
            <div className="mt-8">
              <Button variant="primary" href="/contact">
                Register Your Interest
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative py-14 sm:py-20 md:py-28 bg-[var(--color-indigo)] text-white overflow-hidden">
        <WaveBackground variant="dark" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Looking for workforce solutions for your next project?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
              From contract hiring to full crew management — our team delivers rapid,
              compliant mobilisation solutions across the global energy sector.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="/contact">
                Contact Our Team
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
