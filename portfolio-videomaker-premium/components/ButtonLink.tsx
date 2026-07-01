import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
};

const variants = {
  primary: 'bg-gold text-black hover:bg-white hover:text-black border-gold',
  secondary: 'border-white/20 bg-white/5 text-white hover:border-gold/70 hover:bg-gold/10 hover:text-gold',
  ghost: 'border-transparent bg-transparent text-white/70 hover:text-gold'
};

export default function ButtonLink({ href, children, variant = 'primary', className = '', ...props }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
