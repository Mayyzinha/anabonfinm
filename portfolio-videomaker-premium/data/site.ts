export const siteConfig = {
  name: 'Ana Bonfim',
  professionalName: 'Ana Bonfim | Videomaker',
  url: 'https://portfolio-videomaker-premium.vercel.app',
  location: 'Primavera do Leste, MT',
  whatsapp: '5566933002120',
  whatsappLabel: '(66) 9 3300-2120',
  instagram: '@anabonfinmm',
  instagramUrl: 'https://instagram.com/anabonfinmm',
  email: 'maite.bof@gmail.com',
  heroVideo: '/videos/showreel.mp4',
  heroPoster: '/poster.svg',
  seo: {
    title: 'Ana Bonfim | Videomaker Premium',
    description:
      'Portfólio profissional de videomaker com captação, edição, reels, comerciais, institucionais, eventos, motion graphics e color grading.',
    keywords: [
      'videomaker',
      'produção audiovisual',
      'edição de vídeo',
      'reels',
      'comerciais',
      'institucional',
      'motion graphics',
      'color grading',
      'Primavera do Leste'
    ]
  }
};

export const contactLinks = {
  whatsapp: `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    'Olá, Ana! Vim pelo seu portfólio e gostaria de solicitar um orçamento.'
  )}`,
  instagram: siteConfig.instagramUrl,
  email: `mailto:${siteConfig.email}?subject=${encodeURIComponent('Orçamento de vídeo')}`
};
