'use client';

import { useState, type FormEvent } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const subjects = [
  'General Enquiry',
  'Commissioning',
  'Consultancy',
  'Workforce',
  'Partnership',
] as const;

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const inputBase = [
  'w-full rounded-lg border bg-white px-4 py-3.5',
  'text-base font-sans text-[var(--color-text-body)]',
  'placeholder:text-[var(--color-grey-500)]',
  'focus:outline-none focus:ring-2 focus:ring-[var(--color-cyan)] focus:ring-offset-2',
  'transition-colors duration-200',
].join(' ');

const inputNormal = `${inputBase} border-[var(--color-grey-300)]`;
const inputError = `${inputBase} border-red-500`;

const labelStyles = 'block text-sm font-sans font-medium text-[var(--color-text-body)] mb-1.5';

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FormErrors];
        return next;
      });
    }
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    setErrors({});

    setTimeout(() => {
      setStatus('success');
      setFormData(initialFormData);
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-sans text-lg font-bold text-emerald-900">
          Thank you for your enquiry
        </h3>
        <p className="mt-2 text-sm font-sans text-emerald-700">
          We&apos;ll be in touch within 1–2 business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-sans font-semibold text-[var(--color-cyan)] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {status === 'error' && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-sans text-red-700">
            Something went wrong. Please try again or email us directly.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className={labelStyles}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            aria-required="true"
            value={formData.fullName}
            onChange={(e) => updateField('fullName', e.target.value)}
            placeholder="Your full name"
            className={errors.fullName ? inputError : inputNormal}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-sm font-sans text-red-500">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelStyles}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            aria-required="true"
            value={formData.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="you@company.com"
            className={errors.email ? inputError : inputNormal}
          />
          {errors.email && (
            <p className="mt-1.5 text-sm font-sans text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className={labelStyles}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder="+65 xxxx xxxx"
            className={inputNormal}
          />
        </div>

        <div>
          <label htmlFor="company" className={labelStyles}>
            Company Name
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => updateField('company', e.target.value)}
            placeholder="Your company"
            className={inputNormal}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelStyles}>
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          aria-required="true"
          value={formData.subject}
          onChange={(e) => updateField('subject', e.target.value)}
          className={`${errors.subject ? inputError : inputNormal} ${!formData.subject ? 'text-[var(--color-grey-500)]' : ''}`}
        >
          <option value="" disabled>Select a subject</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.subject && (
          <p className="mt-1.5 text-sm font-sans text-red-500">{errors.subject}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelStyles}>
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          aria-required="true"
          rows={5}
          value={formData.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="Tell us about your project or enquiry..."
          className={`${errors.message ? inputError : inputNormal} resize-none`}
        />
        {errors.message && (
          <p className="mt-1.5 text-sm font-sans text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={[
          'inline-flex items-center justify-center',
          'rounded-lg px-8 py-3.5',
          'text-sm font-sans font-semibold text-white',
          'energy-gradient',
          'shadow-[0_4px_14px_-3px_rgba(9,88,179,0.4)]',
          'hover:shadow-[0_6px_20px_-3px_rgba(9,88,179,0.5)]',
          'active:scale-[0.98]',
          'transition-all duration-[var(--duration-base)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] focus-visible:ring-offset-2',
          'disabled:opacity-60 disabled:cursor-not-allowed',
        ].join(' ')}
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
