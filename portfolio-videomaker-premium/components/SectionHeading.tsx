import AnimatedSection from './AnimatedSection';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <AnimatedSection className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="font-display text-xs font-semibold uppercase tracking-[0.38em] text-gold">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-[0.95] text-white text-balance sm:text-5xl lg:text-7xl">
        {title}
      </h2>
      {description ? <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">{description}</p> : null}
    </AnimatedSection>
  );
}
