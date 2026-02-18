import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WaveBackground } from "@/components/ui/WaveBackground";
import { DotGrid } from "@/components/ui/DotGrid";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Riviera Energy for project enquiries, workforce solutions, or partnership discussions.",
};

export default function ContactPage() {
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
                  Contact Us
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  Get in Touch
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                  Whether you have a project enquiry, need workforce solutions, or want to discuss
                  how we can support your operations — our team is ready to help.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={300}>
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[var(--color-navy-mid)] to-[var(--color-indigo)] overflow-hidden relative">
                  <WaveBackground variant="dark" className="opacity-50" />
                  <div className="absolute inset-0 flex flex-col justify-center p-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[var(--color-energy-end)]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-sans font-medium text-white/60 uppercase tracking-wide">Phone</p>
                        <p className="mt-1 text-lg font-sans font-semibold text-white">+65 9040 4928</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[var(--color-energy-end)]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-sans font-medium text-white/60 uppercase tracking-wide">Email</p>
                        <p className="mt-1 text-lg font-sans font-semibold text-white">enquiries@rivieraenergy.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[var(--color-energy-end)]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-sans font-medium text-white/60 uppercase tracking-wide">Office</p>
                        <p className="mt-1 text-sm font-sans text-white/80 leading-relaxed">Singapore</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Office Info */}
      <SectionWrapper background="off-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
                Send Us a Message
              </h2>
              <p className="mt-3 text-base font-sans text-[var(--color-text-muted)]">
                Fill out the form below and our team will get back to you promptly.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="mt-8">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal delay={200}>
              <div className="rounded-xl border border-[var(--color-grey-100)] bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <h3 className="font-sans text-lg font-bold text-[var(--color-text-primary)]">
                  Singapore Headquarters
                </h3>

                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--color-cyan)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="text-sm font-sans leading-relaxed text-[var(--color-text-body)]">
                      152 Beach Road, #10-07<br />
                      Gateway East<br />
                      Singapore 189721
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 flex-shrink-0 text-[var(--color-cyan)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <a href="tel:+6590404928" className="text-sm font-sans text-[var(--color-text-body)] hover:text-[var(--color-cyan)] transition-colors">
                      +65 9040 4928
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 flex-shrink-0 text-[var(--color-cyan)]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <a href="mailto:enquiries@rivieraenergy.com" className="text-sm font-sans text-[var(--color-text-body)] hover:text-[var(--color-cyan)] transition-colors">
                      enquiries@rivieraenergy.com
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--color-grey-100)]">
                  <p className="text-xs font-sans font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                    Registration
                  </p>
                  <div className="mt-3 space-y-2">
                    <p className="text-sm font-sans text-[var(--color-text-body)]">
                      <span className="font-medium">Company No:</span> 201438405R
                    </p>
                    <p className="text-sm font-sans text-[var(--color-text-body)]">
                      <span className="font-medium">EA Licence No:</span> 16C8003
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Ready to discuss your next project?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-lg font-sans leading-relaxed text-[var(--color-text-muted)]">
              Our team brings decades of experience across commissioning, consultancy, and workforce solutions.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="/solutions">
                View Our Solutions
              </Button>
              <Button variant="secondary" href="/about">
                Learn About Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </main>
  );
}
