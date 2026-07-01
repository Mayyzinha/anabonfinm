import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0B',
        gold: '#FFC300',
        muted: '#A3A3A3',
        panel: '#121212'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        display: ['var(--font-space)', 'Space Grotesk', 'sans-serif']
      },
      boxShadow: {
        gold: '0 0 60px rgba(255, 195, 0, 0.18)',
        soft: '0 24px 80px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        'gold-radial': 'radial-gradient(circle at center, rgba(255,195,0,0.22), transparent 45%)',
        'cinema-grid': 'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)'
      },
      animation: {
        marquee: 'marquee 24s linear infinite',
        float: 'float 7s ease-in-out infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
