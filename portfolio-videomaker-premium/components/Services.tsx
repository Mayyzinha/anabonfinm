import { services } from '@/data/portfolio';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

export default function Services() {
  return (
    <section id="servicos" className="section-y overflow-hidden border-y border-white/10 bg-white/[0.02]">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Serviços"
            title="Produção completa, da ideia à entrega."
            description="Soluções audiovisuais para campanhas, marcas, eventos e redes sociais."
          />
          <AnimatedSection className="max-w-sm text-sm leading-7 text-white/50">
            Cada serviço pode ser contratado separadamente ou como pacote completo, de acordo com o objetivo da sua marca.
          </AnimatedSection>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={index * 0.04}>
                <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-panel p-6 transition duration-500 hover:-translate-y-2 hover:border-gold/45 hover:shadow-gold">
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-gold/10 blur-2xl transition duration-500 group-hover:bg-gold/20" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mt-8 font-display text-xl font-semibold text-white">{service.title}</h3>
                  <p className="relative mt-4 text-sm leading-7 text-white/55">{service.description}</p>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
