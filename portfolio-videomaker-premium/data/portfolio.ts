import {
  BadgeCheck,
  Camera,
  Clapperboard,
  Drone,
  Film,
  MonitorPlay,
  Palette,
  PlayCircle,
  Sparkles,
  Wand2
} from 'lucide-react';

export type ProjectCategory = 'Todos' | 'Comerciais' | 'Institucionais' | 'Eventos' | 'Reels' | 'Drone';

export type Project = {
  id: string;
  title: string;
  client: string;
  category: Exclude<ProjectCategory, 'Todos'>;
  description: string;
  services: string[];
  videoUrl: string;
  year: string;
};

export const services = [
  {
    title: 'Captação de vídeo',
    description: 'Direção de imagem, composição, enquadramento e captação com estética profissional.',
    icon: Camera
  },
  {
    title: 'Edição profissional',
    description: 'Cortes precisos, ritmo, narrativa, sound design e finalização para alta retenção.',
    icon: Clapperboard
  },
  {
    title: 'Reels',
    description: 'Conteúdos verticais com gancho forte, dinâmica e acabamento pronto para redes sociais.',
    icon: PlayCircle
  },
  {
    title: 'Comerciais',
    description: 'Vídeos persuasivos para campanhas, lançamentos, produtos, serviços e marcas locais.',
    icon: MonitorPlay
  },
  {
    title: 'Institucionais',
    description: 'Narrativas que traduzem posicionamento, estrutura, confiança e autoridade da empresa.',
    icon: Film
  },
  {
    title: 'Eventos',
    description: 'Cobertura audiovisual com emoção, bastidores, highlights e entrega otimizada.',
    icon: Sparkles
  },
  {
    title: 'Motion Graphics',
    description: 'Animações, títulos, elementos gráficos e movimentos elegantes para reforçar a mensagem.',
    icon: Wand2
  },
  {
    title: 'Color Grading',
    description: 'Tratamento de cor cinematográfico para criar identidade visual e acabamento premium.',
    icon: Palette
  }
];

export const categories: ProjectCategory[] = ['Todos', 'Comerciais', 'Institucionais', 'Eventos', 'Reels', 'Drone'];

export const projects: Project[] = [
  {
    id: 'comercial-cafe',
    title: 'Campanha de Produto',
    client: 'Marca de Café',
    category: 'Comerciais',
    description:
      'Peça curta criada para apresentar um produto com estética premium, cortes rápidos e direção visual voltada para conversão.',
    services: ['Roteiro', 'Captação', 'Edição', 'Color Grading'],
    videoUrl: '/videos/showreel.mp4',
    year: '2026'
  },
  {
    id: 'institucional-empresa',
    title: 'Filme Institucional',
    client: 'Empresa Local',
    category: 'Institucionais',
    description:
      'Vídeo institucional com foco em autoridade, confiança, estrutura e posicionamento profissional da marca.',
    services: ['Briefing', 'Captação', 'Entrevistas', 'Edição'],
    videoUrl: '/videos/showreel.mp4',
    year: '2026'
  },
  {
    id: 'evento-corporativo',
    title: 'Aftermovie de Evento',
    client: 'Evento Empresarial',
    category: 'Eventos',
    description:
      'Cobertura de evento com narrativa emocional, cenas de bastidores, público, palestras e momentos-chave.',
    services: ['Cobertura', 'Edição', 'Sound Design'],
    videoUrl: '/videos/showreel.mp4',
    year: '2026'
  },
  {
    id: 'reels-fashion',
    title: 'Reels de Marca',
    client: 'Cliente de Moda',
    category: 'Reels',
    description:
      'Sequência vertical com cortes dinâmicos, transições suaves e estética editorial para redes sociais.',
    services: ['Captação vertical', 'Edição', 'Legendas', 'Finalização'],
    videoUrl: '/videos/showreel.mp4',
    year: '2026'
  },
  {
    id: 'drone-real-estate',
    title: 'Captação Aérea',
    client: 'Imobiliária',
    category: 'Drone',
    description:
      'Imagem aérea para apresentar localização, escala, estrutura e impacto visual em campanhas imobiliárias.',
    services: ['Drone', 'Edição', 'Color Grading'],
    videoUrl: '/videos/showreel.mp4',
    year: '2026'
  },
  {
    id: 'comercial-restaurante',
    title: 'Vídeo Gastronômico',
    client: 'Restaurante',
    category: 'Comerciais',
    description:
      'Conteúdo com close-ups, textura, movimento e cortes pensados para despertar desejo e fortalecer a marca.',
    services: ['Direção', 'Captação', 'Edição', 'Motion'],
    videoUrl: '/videos/showreel.mp4',
    year: '2026'
  }
];

export const processSteps = [
  {
    title: 'Briefing',
    description: 'Entendimento do objetivo, público, linguagem, referências e entrega ideal para a campanha.'
  },
  {
    title: 'Planejamento',
    description: 'Definição de roteiro, cenas, estética, cronograma, formatos e direção criativa.'
  },
  {
    title: 'Captação',
    description: 'Produção das imagens com atenção a luz, movimento, composição, som e detalhes.'
  },
  {
    title: 'Edição',
    description: 'Construção da narrativa com ritmo, trilha, cortes, cor, motion e acabamento profissional.'
  },
  {
    title: 'Entrega',
    description: 'Arquivos otimizados para Instagram, YouTube, tráfego pago, WhatsApp e demais canais.'
  }
];

export const testimonials = [
  {
    name: 'Cliente Comercial',
    role: 'Empresária',
    text: 'O vídeo ficou elegante, objetivo e com cara de marca grande. A edição valorizou muito o produto.'
  },
  {
    name: 'Cliente Institucional',
    role: 'Gestor de Marketing',
    text: 'O processo foi organizado do briefing até a entrega. O resultado transmitiu confiança e profissionalismo.'
  },
  {
    name: 'Cliente de Evento',
    role: 'Organizadora',
    text: 'Conseguiu captar a energia do evento sem exageros. O aftermovie ficou emocionante e muito bem finalizado.'
  }
];

export const stats = [
  { label: 'Clientes', value: 28, suffix: '+' },
  { label: 'Projetos', value: 85, suffix: '+' },
  { label: 'Horas editadas', value: 1200, suffix: '+' },
  { label: 'Anos de experiência', value: 3, suffix: '+' }
];

export const faqs = [
  {
    question: 'Você atende somente presencial?',
    answer:
      'A captação depende da cidade e do projeto, mas edição, reels, comerciais e finalizações podem ser feitos de forma remota.'
  },
  {
    question: 'Quanto custa um vídeo?',
    answer:
      'O valor muda conforme duração, quantidade de cenas, captação, edição, motion, prazo e formatos de entrega. O ideal é solicitar um orçamento personalizado.'
  },
  {
    question: 'Você entrega vídeos para Instagram e YouTube?',
    answer:
      'Sim. As entregas podem ser adaptadas para Reels, Stories, Feed, Shorts, YouTube, anúncios e WhatsApp.'
  },
  {
    question: 'O projeto inclui roteiro?',
    answer:
      'Pode incluir. Dependendo do pacote, o roteiro, a direção criativa e a organização das cenas já entram no planejamento.'
  }
];

export const differentials = [
  {
    title: 'Olhar comercial',
    description: 'Criação visual pensada para valorizar marca, produto e conversão.',
    icon: BadgeCheck
  },
  {
    title: 'Estética cinematográfica',
    description: 'Cores, cortes e composição com acabamento sofisticado.',
    icon: Film
  },
  {
    title: 'Entrega estratégica',
    description: 'Formatos otimizados para cada canal e objetivo.',
    icon: Drone
  }
];
