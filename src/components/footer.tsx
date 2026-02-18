import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/solutions", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
] as const;

const solutionLinks = [
  { href: "/solutions/commissioning", label: "Commissioning & Readiness" },
  { href: "/solutions/consultancy", label: "Strategic Consultancy" },
  { href: "/solutions/workforce", label: "Workforce & Mobility" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[var(--color-indigo)] text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block" aria-label="Riviera Energy — Home">
              <Image
                src="/logo-dark.png"
                alt="Riviera Energy"
                width={160}
                height={67}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-on-dark-muted)] max-w-xs">
              Where Partnership Meets Performance. Engineering and asset
              integrity consultancy since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-sans font-semibold tracking-wide uppercase text-[var(--color-text-on-dark-muted)]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-on-dark-muted)] transition-colors duration-[var(--duration-fast)] hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-sans font-semibold tracking-wide uppercase text-[var(--color-text-on-dark-muted)]">
              Solutions
            </h3>
            <ul className="mt-4 space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-on-dark-muted)] transition-colors duration-[var(--duration-fast)] hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-sans font-semibold tracking-wide uppercase text-[var(--color-text-on-dark-muted)]">
              Contact
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-[var(--color-text-on-dark-muted)]">
              <p>
                152 Beach Road, #10-07
                <br />
                Gateway East, Singapore 189721
              </p>
              <p>
                <a
                  href="tel:+6590404928"
                  className="transition-colors duration-[var(--duration-fast)] hover:text-white"
                >
                  +65 9040 4928
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-[var(--color-text-on-dark-muted)]">
            &copy; {new Date().getFullYear()} Riviera Energy Pte Ltd. All
            rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-on-dark-muted)]">
            Company No. 201438405R &middot; EA Licence No. 16C8003
          </p>
        </div>
      </div>
    </footer>
  );
}
