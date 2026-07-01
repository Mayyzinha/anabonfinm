import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center text-white">
      <section className="max-w-xl">
        <p className="mb-4 font-display text-sm uppercase tracking-[0.4em] text-gold">Erro 404</p>
        <h1 className="font-display text-5xl font-semibold sm:text-7xl">Página não encontrada</h1>
        <p className="mt-6 text-white/60">O link pode ter mudado ou a página não existe mais.</p>
        <Link
          href="/"
          className="mt-10 inline-flex rounded-full border border-gold/50 px-7 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-black"
        >
          Voltar para o início
        </Link>
      </section>
    </main>
  );
}
