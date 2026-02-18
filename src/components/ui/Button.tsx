import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

type ButtonAsLink = ButtonBaseProps & { href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, 'href' | 'className'>;
type ButtonAsButton = ButtonBaseProps & { href?: never } & Omit<ComponentPropsWithoutRef<'button'>, 'className'>;

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'energy-gradient text-white font-semibold',
    'shadow-[0_4px_14px_-3px_rgba(9,88,179,0.4)]',
    'hover:shadow-[0_6px_20px_-3px_rgba(9,88,179,0.5)]',
    'active:scale-[0.98]',
  ].join(' '),
  secondary: [
    'border-2 border-[var(--color-cyan)] text-[var(--color-cyan)]',
    'hover:bg-[var(--color-cyan)]/8',
  ].join(' '),
  ghost: [
    'bg-white/8 border border-white/20 text-white',
    'hover:bg-white/15',
  ].join(' '),
};

const baseStyles = [
  'inline-flex items-center justify-center',
  'rounded-lg px-8 py-3.5',
  'text-sm font-sans font-semibold',
  'transition-all duration-[var(--duration-base)]',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] focus-visible:ring-offset-2',
].join(' ');

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ('href' in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
