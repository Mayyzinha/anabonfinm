import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

// Seções abaixo da primeira dobra carregam de forma dinâmica para ajudar performance.
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });
const Stats = dynamic(() => import('@/components/Stats'), { ssr: true });
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Stats />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
