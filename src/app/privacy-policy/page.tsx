import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Riviera Energy's Privacy Policy — how we collect, use, disclose, store, and protect your personal data under the Singapore PDPA.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Riviera Energy",
    description:
      "Riviera Energy's Privacy Policy — how we collect, use, disclose, store, and protect your personal data under the Singapore PDPA.",
    url: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-6 md:pt-40 md:pb-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Legal
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Privacy Policy
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-4 text-sm font-sans text-[var(--color-text-muted)]">
              Last amended on 2 April 2026
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="prose-legal">
            <ScrollReveal>
              <p>
                Riviera Energy Pte. Ltd. (&ldquo;Riviera Energy&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your personal data in accordance with applicable data protection laws, including the Singapore Personal Data Protection Act (PDPA).
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, store, and protect personal data obtained through our website and services.
              </p>
              <p>
                By accessing our website, submitting information, or engaging with our services, you acknowledge and agree to this Privacy Policy.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Personal Data We Collect</h2>
              <p>We may collect personal data that you voluntarily provide, including but not limited to:</p>
              <ul>
                <li>Name, email address, phone number, and other contact details</li>
                <li>Employment history, qualifications, certifications, and work experience</li>
                <li>Resume/CV and supporting documents</li>
                <li>Identification documents (e.g. passport, licenses, certificates)</li>
                <li>Account registration details (where applicable)</li>
                <li>Billing and payment information (where relevant)</li>
                <li>Any information submitted via forms, email, or direct communication</li>
              </ul>
              <p>Where applicable, we will indicate which information is mandatory and which is optional.</p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Purpose of Collection, Use and Disclosure</h2>
              <p>Your personal data may be collected, used, and disclosed for purposes including:</p>
              <ul>
                <li>Assessing suitability for employment, contractor engagement, or project opportunities</li>
                <li>Facilitating recruitment, onboarding, and workforce deployment</li>
                <li>Submitting profiles to clients for job or project consideration</li>
                <li>Managing contracts, payroll coordination, travel, and operational logistics</li>
                <li>Communicating with you regarding opportunities, services, or administrative matters</li>
                <li>Processing billing, invoicing, and related financial transactions</li>
                <li>Improving our services, systems, and user experience</li>
                <li>Complying with legal, regulatory, audit, and contractual requirements</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Disclosure of Personal Data</h2>
              <p>We may disclose your personal data to third parties where necessary, including:</p>
              <ul>
                <li>Clients evaluating candidates or personnel for roles or projects</li>
                <li>Service providers supporting our operations (e.g. IT, payroll, travel, compliance, document management)</li>
                <li>Professional advisers (e.g. legal, audit, insurance)</li>
                <li>Regulatory authorities, government agencies, or law enforcement where required by law</li>
              </ul>
              <p>We take reasonable steps to ensure that third parties handle personal data appropriately and only for authorised purposes.</p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Cross-Border Data Transfers</h2>
              <p>
                Riviera Energy may transfer personal data outside Singapore where required for client submissions, project deployment, or operational support.
              </p>
              <p>
                We will take reasonable steps to ensure that such recipients provide a standard of protection comparable to applicable data protection laws. However, where personal data is disclosed to third parties outside Singapore (including clients and project partners), such parties operate under their own jurisdictions, and Riviera Energy does not control their ongoing handling of the data.
              </p>
              <p>
                Riviera Energy shall not be responsible for any unauthorised use or disclosure of personal data by third parties beyond our reasonable control.
              </p>
              <p>
                Where necessary for service delivery, such cross-border transfers shall be deemed consented to by the individual.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Data Retention</h2>
              <p>
                We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required for legal, regulatory, contractual, and operational purposes.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Your Rights</h2>
              <p>Subject to applicable law, you may request to:</p>
              <ul>
                <li>Access personal data we hold about you</li>
                <li>Correct inaccurate or incomplete personal data</li>
                <li>Withdraw consent for the collection, use, or disclosure of your personal data</li>
                <li>Seek clarification on how your personal data has been used or disclosed</li>
              </ul>
              <p>
                Please note that withdrawing consent may affect our ability to provide services, consider you for opportunities, or continue certain processes.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Protection of Personal Data</h2>
              <p>
                We implement reasonable administrative, technical, and physical safeguards to protect personal data against unauthorised access, collection, use, disclosure, copying, modification, disposal, or similar risks.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Cookies and Tracking Technologies</h2>
              <p>
                Our website may use cookies or similar technologies to enhance user experience and analyse website usage.
              </p>
              <p>
                You may manage cookie preferences through your browser settings. Disabling cookies may affect certain functionalities of the website.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Third-Party Links and Features</h2>
              <p>
                Our website may contain links to third-party websites or include third-party features. We are not responsible for the privacy practices or content of such third parties. Users are encouraged to review their respective privacy policies.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Legal Disclosure and Business Transfers</h2>
              <p>We may disclose personal data:</p>
              <ul>
                <li>To comply with legal obligations or regulatory requirements</li>
                <li>To protect our rights, business, systems, or safety of individuals</li>
                <li>In connection with investigations of fraud or unlawful activity</li>
              </ul>
              <p>
                In the event of a merger, acquisition, restructuring, or sale of assets, personal data may be transferred as part of the transaction, subject to applicable legal requirements.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Contact Us</h2>
              <p>
                For any questions, requests, or concerns regarding this Privacy Policy or your personal data, please contact:
              </p>
              <p>
                <strong>Riviera Energy Pte. Ltd.</strong>
                <br />
                Email:{" "}
                <a href="mailto:operations@riviera-energy.co">
                  operations@riviera-energy.co
                </a>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be published on this page, and continued use of our website or services constitutes acceptance of the updated policy.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="mt-6 pt-5 border-t-2 border-[var(--color-grey-300)]">
                <p className="text-sm font-sans font-semibold text-[var(--color-text-primary)] mb-2">Related Policies</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/terms-of-use" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-cyan)] hover:text-[var(--color-energy-start)] transition-colors duration-[var(--duration-fast)]">
                    <span aria-hidden="true">&rarr;</span> Terms of Use
                  </Link>
                  <Link href="/data-protection-notice" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-cyan)] hover:text-[var(--color-energy-start)] transition-colors duration-[var(--duration-fast)]">
                    <span aria-hidden="true">&rarr;</span> Data Protection Notice
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
