import { Quote } from 'lucide-react';
import { testimonials } from '@/data/portfolio';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  return (
    <section className="section-y container-px mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Depoimentos"
        title="O que os clientes sentem no resultado final."
        description="Textos demonstrativos. Substitua pelos depoimentos reais quando tiver autorização dos clientes."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <AnimatedSection key={item.name} delay={index * 0.08}>
            <article className="glass-panel h-full rounded-[2rem] p-6 sm:p-8">
              <Quote className="h-8 w-8 text-gold" />
              <p className="mt-8 text-lg leading-8 text-white/70">“{item.text}”</p>
              <div className="mt-8 h-px bg-white/10" />
              <p className="mt-6 font-display text-xl font-semibold text-white">{item.name}</p>
              <p className="mt-1 text-sm text-white/45">{item.role}</p>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
