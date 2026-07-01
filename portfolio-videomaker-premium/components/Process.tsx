import { processSteps } from '@/data/portfolio';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

export default function Process() {
  return (
    <section id="processo" className="section-y overflow-hidden border-y border-white/10 bg-white/[0.02]">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Processo"
          title="Um fluxo claro para uma entrega premium."
          description="Do primeiro contato ao arquivo final, cada etapa existe para manter o projeto organizado, bonito e estratégico."
          align="center"
        />

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-gold via-white/10 to-transparent lg:left-1/2 lg:block" />
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.08}>
                <div className={`relative grid gap-5 lg:grid-cols-2 ${index % 2 === 0 ? '' : 'lg:[&>div:first-child]:col-start-2'}`}>
                  <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold font-display font-bold text-black">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="mt-5 text-base leading-8 text-white/60">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
