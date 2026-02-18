'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/about', label: 'About Us', hasDropdown: false },
  { href: '/solutions', label: 'Solutions', hasDropdown: true },
  { href: '/projects', label: 'Projects', hasDropdown: false },
  { href: '/contact', label: 'Contact Us', hasDropdown: false },
] as const;

const solutionLinks = [
  { href: '/solutions/commissioning', label: 'Commissioning & Operational Readiness' },
  { href: '/solutions/consultancy', label: 'Strategic Project Consultancy' },
  { href: '/solutions/workforce', label: 'Global Workforce & Mobility Solutions' },
] as const;

export function HeaderClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeDrawer = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-cyan)] focus:px-4 focus:py-2 focus:text-white focus:text-sm focus:font-semibold focus:outline-none"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 z-50 w-full transition-all duration-[var(--duration-base)] ${
          isScrolled
            ? 'bg-white/95 shadow-sm border-b border-[var(--color-grey-100)] backdrop-blur-md'
            : 'bg-white/80 border-b border-transparent backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          {/* Logo */}
          <Link href="/" aria-label="Riviera Energy — Home">
            <Image
              src="/logo-light.png"
              alt="Riviera Energy"
              width={300}
              height={300}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    className="flex items-center gap-1 text-sm font-sans font-medium text-[var(--color-text-body)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] focus-visible:ring-offset-2 rounded-sm"
                    aria-expanded={isSolutionsOpen}
                    aria-controls="solutions-dropdown"
                  >
                    {link.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className={`transition-transform duration-[var(--duration-fast)] ${isSolutionsOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M3 5 L6 8 L9 5" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  <div
                    id="solutions-dropdown"
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-xl bg-white border border-[var(--color-grey-100)] shadow-lg transition-all duration-[var(--duration-base)] origin-top ${
                      isSolutionsOpen
                        ? 'opacity-100 scale-100 pointer-events-auto'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                    role="menu"
                  >
                    <div className="p-2">
                      {solutionLinks.map((sl) => (
                        <Link
                          key={sl.href}
                          href={sl.href}
                          role="menuitem"
                          onClick={() => setIsSolutionsOpen(false)}
                          className="block rounded-lg px-4 py-3 text-sm font-sans text-[var(--color-text-body)] transition-colors duration-[var(--duration-fast)] hover:bg-[var(--color-off-white)] hover:text-[var(--color-navy)]"
                        >
                          {sl.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-sans font-medium text-[var(--color-text-body)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] focus-visible:ring-offset-2 rounded-sm"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-sans font-semibold text-white energy-gradient shadow-[0_4px_14px_-3px_rgba(9,88,179,0.4)] transition-all duration-[var(--duration-base)] hover:shadow-[0_6px_20px_-3px_rgba(9,88,179,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] focus-visible:ring-offset-2"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[var(--color-text-body)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] rounded-sm"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-[var(--duration-base)] md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={closeDrawer}
        />

        {/* Drawer */}
        <div
          id="mobile-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`absolute right-0 top-0 h-full w-full max-w-xs bg-[var(--color-indigo)] transition-transform duration-[var(--duration-base)] ease-[var(--ease-flow)] ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close button */}
          <div className="flex items-center justify-between px-6 h-18">
            <Image
              src="/logo-light.png"
              alt="Riviera Energy"
              width={120}
              height={50}
              className="h-8 w-auto"
            />
            <button
              onClick={closeDrawer}
              className="p-2 text-white/70 hover:text-white transition-colors duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] rounded-sm"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
          </div>

          {/* Drawer nav */}
          <nav className="px-6 py-8" aria-label="Mobile navigation">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/about"
                  onClick={closeDrawer}
                  className="block py-3 text-base font-sans font-medium text-white/80 hover:text-white transition-colors duration-[var(--duration-fast)]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <span className="block py-3 text-base font-sans font-medium text-white/80">
                  Solutions
                </span>
                <ul className="ml-4 space-y-1 border-l border-white/10 pl-4">
                  {solutionLinks.map((sl) => (
                    <li key={sl.href}>
                      <Link
                        href={sl.href}
                        onClick={closeDrawer}
                        className="block py-2.5 text-sm font-sans text-white/60 hover:text-white transition-colors duration-[var(--duration-fast)]"
                      >
                        {sl.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link
                  href="/projects"
                  onClick={closeDrawer}
                  className="block py-3 text-base font-sans font-medium text-white/80 hover:text-white transition-colors duration-[var(--duration-fast)]"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={closeDrawer}
                  className="block py-3 text-base font-sans font-medium text-white/80 hover:text-white transition-colors duration-[var(--duration-fast)]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Mobile CTA */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <Link
                href="/contact"
                onClick={closeDrawer}
                className="flex items-center justify-center w-full rounded-lg px-6 py-3.5 text-sm font-sans font-semibold text-white energy-gradient shadow-[0_4px_14px_-3px_rgba(9,88,179,0.4)]"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
