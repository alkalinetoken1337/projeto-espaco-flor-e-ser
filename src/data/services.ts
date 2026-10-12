export interface Service {
  id: string;
  title: string;
  category: "Todos" | "Florais & Aromas" | "Energia & Relaxamento" | "Consultoria & Autocuidado";
  shortDescription: string;
  fullDescription: string;
  duration: string;
  modality: "Online & Presencial" | "Presencial" | "Online";
  targetAudience: string;
  benefits: string[];
  price?: string;
  imageUrl: string;
  whatsappCustomMessage: string;
}

export const serviceCategories = [
  "Todos",
  "Florais & Aromas",
  "Energia & Relaxamento",
  "Consultoria & Autocuidado",
] as const;

export type ServiceCategory = (typeof serviceCategories)[number];

export const servicesData: Service[] = [
  {
    id: "terapia-floral",
    title: "Terapia Floral (Florais de Bach)",
    category: "Florais & Aromas",
    shortDescription:
      "Harmonização sutil das emoções e alívio do estresse através de essências florais personalizadas para sua fase de vida.",
    fullDescription:
      "A Terapia Floral utiliza essências energéticas extraídas de flores silvestres para tratar a raiz emocional dos desequilíbrios. Em uma conversa acolhedora e sem julgamentos, identificamos as fórmulas ideais para auxiliar no acolhimento da ansiedade, insegurança, cansaço mental e fases de transição.",
    duration: "60 min",
    modality: "Online & Presencial",
    targetAudience:
      "Pessoas vivenciando sobrecarga emocional, ansiedade, mudanças de ciclo ou buscando mais serenidade diária.",
    benefits: [
      "Harmonização de estados de angústia e ansiedade",
      "Clareza mental para tomada de decisões",
      "Tratamento 100% natural sem efeitos colaterais",
      "Fórmula floral personalizada formulada especificamente para você",
    ],
    price: "Sob consulta",
    imageUrl:
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
    whatsappCustomMessage:
      "Olá! Gostei muito da Terapia Floral no Flor E Ser e gostaria de entender como funciona a sessão e agendar uma consulta.",
  },
  {
    id: "aromaterapia-integrativa",
    title: "Aromaterapia Integrativa",
    category: "Florais & Aromas",
    shortDescription:
      "O poder curativo e restaurador dos óleos essenciais puros para equilíbrio físico, emocional e respiratório.",
    fullDescription:
      "Uma imersão no universo botânico dos óleos essenciais terapêuticos. Avaliamos suas queixas de sono, foco, tensão muscular ou fadiga, e desenvolvemos um guia personalizado de inalações, aromatização ambiental e sinergias aromáticas seguras para o seu dia a dia.",
    duration: "50 min",
    modality: "Online & Presencial",
    targetAudience:
      "Quem busca qualidade de sono, alívio de tensões, conexão com a natureza e apoio botânico para o bem-estar.",
    benefits: [
      "Indução de relaxamento profundo e noites reparadoras",
      "Estímulo à concentração e disposição mental",
      "Prescrição segura de óleos essenciais com dosagens adequadas",
      "Rituais olfativos práticos para momentos de estresse",
    ],
    price: "Sob consulta",
    imageUrl:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    whatsappCustomMessage:
      "Olá! Gostaria de agendar uma consulta de Aromaterapia Integrativa pelo espaço Flor E Ser. Como podemos proceder?",
  },
  {
    id: "reiki-alinhamento-energetico",
    title: "Reiki & Alinhamento dos Chakras",
    category: "Energia & Relaxamento",
    shortDescription:
      "Canalização suave de energia vital para desbloqueio energético, relaxamento profundo e serenidade da mente.",
    fullDescription:
      "Técnica integrativa de imposição de mãos que atua nos principais centros de energia (chakras). Ajuda a dissolver nós de tensão acumulados pela rotina agitada, estimulando o sistema natural de autorrecuperação do corpo e trazendo uma reconfortante sensação de paz interior.",
    duration: "60 min",
    modality: "Online & Presencial",
    targetAudience:
      "Pessoas que sentem esgotamento físico ou mental, excesso de ruído interno ou necessidade de reequilíbrio energético.",
    benefits: [
      "Relaxamento muscular e alívio do estresse acumulado",
      "Reequilíbrio dos vórtices energéticos (chakras)",
      "Sensação imediata de acolhimento e tranquilidade",
      "Fortalecimento da vitalidade e da presença consciente",
    ],
    price: "Sob consulta",
    imageUrl:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    whatsappCustomMessage:
      "Olá! Tenho interesse na sessão de Reiki & Alinhamento dos Chakras no Flor E Ser. Vocês têm horários disponíveis?",
  },
  {
    id: "consultoria-holistica-autocuidado",
    title: "Consultoria Holística de Autocuidado",
    category: "Consultoria & Autocuidado",
    shortDescription:
      "Acompanhamento terapêutico sob medida com rituais práticos, escuta empática e ferramentas sustentáveis de bem-estar.",
    fullDescription:
      "Uma consultoria individualizada que une escuta atenta, diagnóstico integrativo e planejamento de rotinas gentis de autocuidado. Criamos juntos um roteiro viável para seu estilo de vida, integrando pausas conscientes, hábitos regenerativos e ferramentas naturais de sustentação emocional.",
    duration: "75 min",
    modality: "Online & Presencial",
    targetAudience:
      "Mulheres e homens com rotinas aceleradas que desejam desacelerar, colocar limites saudáveis e cuidar de si com consistência.",
    benefits: [
      "Mapeamento holístico das suas principais fontes de sobrecarga",
      "Plano personalizado com rituais diários simples e transformadores",
      "Acompanhamento humanizado e materiais de apoio exclusivos",
      "Resgate do amor-próprio e do tempo para o próprio florescimento",
    ],
    price: "Sob consulta",
    imageUrl:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    whatsappCustomMessage:
      "Olá! Gostaria de saber mais sobre a Consultoria Holística de Autocuidado no Flor E Ser e como funciona o acompanhamento.",
  },
  {
    id: "meditacao-respiracao-consciente",
    title: "Meditação Guiada & Respiração Consciente",
    category: "Energia & Relaxamento",
    shortDescription:
      "Sessões imersivas de presença plena e respiração diafragmática para desacelerar a mente e ancorar no presente.",
    fullDescription:
      "Aprenda técnicas respiratórias simples e cientificamente validadas (pranayamas suaves) aliadas a meditações guiadas que acalmam o sistema nervoso simpático. Uma experiência prática para quem tem dificuldade em parar de pensar e busca uma âncora de serenidade.",
    duration: "45 min",
    modality: "Online & Presencial",
    targetAudience:
      "Quem sofre com pensamentos acelerados, insônia, agitação interna ou quer dar os primeiros passos na meditação sem frustração.",
    benefits: [
      "Regulação fisiológica dos batimentos e da respiração",
      "Redução instantânea do pico de ansiedade",
      "Técnicas fáceis para praticar sozinho em qualquer lugar",
      "Maior consciência corporal e ancoramento no agora",
    ],
    price: "Sob consulta",
    imageUrl:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    whatsappCustomMessage:
      "Olá! Tenho interesse na prática de Meditação Guiada & Respiração Consciente no Flor E Ser. Como podemos agendar?",
  },
  {
    id: "harmonizacao-cristais-ervas",
    title: "Harmonização com Cristais & Banhos Terapêuticos",
    category: "Consultoria & Autocuidado",
    shortDescription:
      "Prática integrativa que une a vibração das pedras naturais e a sabedoria das ervas para renovação sutil.",
    fullDescription:
      "Uma imersão sensorial que utiliza a frequência mineral dos cristais terapêuticos e o conhecimento tradicional dos banhos de ervas medicinais. Ideal para períodos de cansaço extremo, limpeza de energias densas e restauração do campo áurico.",
    duration: "60 min",
    modality: "Presencial",
    targetAudience:
      "Pessoas que sentem necessidade de limpeza energética, proteção espiritual, leveza e conexão com os elementos naturais.",
    benefits: [
      "Desbloqueio e alinhamento do campo magnético pessoal",
      "Prescrição botânica de banhos e infusões de ervas para sua intenção",
      "Sensação revigorante de leveza e frescor físico e mental",
      "Reconexão profunda com os ciclos e a sabedoria da natureza",
    ],
    price: "Sob consulta",
    imageUrl:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    whatsappCustomMessage:
      "Olá! Gostaria de agendar uma sessão de Harmonização com Cristais e Ervas no espaço Flor E Ser. Como posso começar?",
  },
];
