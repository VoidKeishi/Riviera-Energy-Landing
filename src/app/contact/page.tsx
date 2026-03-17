import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Riviera Energy for project enquiries, workforce solutions, or partnership discussions.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Riviera Energy",
    description:
      "Get in touch with Riviera Energy for project enquiries, workforce solutions, or partnership discussions.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero + Contact Info — single section, no card wrapper */}
      <section className="relative pt-28 pb-10 sm:pb-14 md:pt-40 md:pb-16 bg-white overflow-hidden">
        <div
          className="absolute top-28 right-8 md:right-20 w-48 h-48 rounded-full bg-[#116BF8] opacity-[0.06] blur-3xl hidden lg:block"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
                Contact Us
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
                Get in Touch
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                Whether you have a project enquiry, need workforce solutions, or
                want to discuss how we can support your operations. Our team is
                ready to help.
              </p>
            </ScrollReveal>
          </div>

          {/* Contact Details — 3-column grid, no card */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-16 lg:gap-x-24">
            {/* Column 1: Address */}
            <ScrollReveal delay={100}>
              <div>
                <h2 className="font-sans text-lg md:text-xl font-bold text-[var(--color-text-primary)]">
                  Singapore Headquarters
                </h2>
                <div className="mt-1 h-0.5 w-10 energy-gradient rounded-full" />
                <p className="mt-5 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                  152 Beach Road, #10-07
                  <br />
                  Gateway East
                  <br />
                  Singapore 189721
                </p>
                <a
                  href="tel:+6589239798"
                  className="mt-4 inline-block text-base md:text-lg font-sans font-medium text-[var(--color-text-body)] hover:text-[var(--color-cyan)] transition-colors"
                >
                  (+65) 8923 9798
                </a>
                <a
                  href="https://www.linkedin.com/company/rivieraenergy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-base md:text-lg font-sans font-medium text-[var(--color-text-body)] hover:text-[var(--color-cyan)] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-[#0A66C2]"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Follow us on LinkedIn
                </a>
              </div>
            </ScrollReveal>

            {/* Column 2: Email contacts */}
            <ScrollReveal delay={200}>
              <div>
                <h2 className="font-sans text-lg md:text-xl font-bold text-[var(--color-text-primary)]">
                  Email Us
                </h2>
                <div className="mt-1 h-0.5 w-10 energy-gradient rounded-full" />

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-xs font-sans font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                      General Enquiries
                    </p>
                    <a
                      href="mailto:operations@riviera-energy.co"
                      className="mt-1 block text-base md:text-lg font-sans text-[var(--color-text-body)] hover:text-[var(--color-cyan)] transition-colors"
                    >
                      operations@riviera-energy.co
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-sans font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                      CV Submission
                    </p>
                    <a
                      href="mailto:resumes@riviera-energy.co"
                      className="mt-1 block text-base md:text-lg font-sans text-[var(--color-text-body)] hover:text-[var(--color-cyan)] transition-colors"
                    >
                      resumes@riviera-energy.co
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Column 3: Registration */}
            <ScrollReveal delay={300}>
              <div>
                <h2 className="font-sans text-lg md:text-xl font-bold text-[var(--color-text-primary)]">
                  Registration
                </h2>
                <div className="mt-1 h-0.5 w-10 energy-gradient rounded-full" />

                <div className="mt-5 space-y-3">
                  <div>
                    <p className="text-xs font-sans font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                      Company No
                    </p>
                    <p className="mt-1 text-base md:text-lg font-sans text-[var(--color-text-body)]">
                      201438405R
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-sans font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                      Employment Agency Licence
                    </p>
                    <p className="mt-1 text-base md:text-lg font-sans text-[var(--color-text-body)]">
                      16C8003
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Google Map — wide with rounded corners */}
      <section className="pt-8 sm:pt-10 pb-12 sm:pb-16 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="mb-6">
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)] mb-1">
                Visit Us
              </p>
              <h2 className="font-sans text-lg md:text-xl font-bold text-[var(--color-text-primary)]">
                Our Singapore Office
              </h2>
            </div>
          </ScrollReveal>
        </div>
        <div className="mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="rounded-xl overflow-hidden shadow-[0_4px_24px_-6px_rgba(8,1,69,0.08)] border border-[var(--color-grey-100)]">
              <iframe
                title="Riviera Energy Singapore Office — 152 Beach Road, Gateway East"
                src="https://maps.google.com/maps?q=Gateway+East,+152+Beach+Road,+Singapore+189721&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[320px] sm:h-[400px] md:h-[450px] block"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
