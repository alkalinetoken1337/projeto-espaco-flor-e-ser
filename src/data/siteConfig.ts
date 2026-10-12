export interface SiteConfig {
  name: string;
  tagline: string;
  therapistName: string;
  therapistRole: string;
  description: string;
  phoneRaw: string; // Ex: 5511999999999 (sem caracteres especiais para link wa.me)
  phoneFormatted: string; // Ex: (11) 99999-9999
  instagramHandle: string;
  instagramUrl: string;
  email: string;
  address: string;
  hours: string;
  attendanceMode: string;
  defaultWhatsAppMessage: string;
}

export const siteConfig: SiteConfig = {
  name: "Flor E Ser",
  tagline: "Espaço Terapêutico & Bem-Estar",
  therapistName: "Mari & Terapeuta Responsável",
  therapistRole: "Terapeuta Integrativa & Holística",
  description:
    "Um refúgio acolhedor dedicado ao seu equilíbrio emocional, autocuidado e florescimento interior através de terapias naturais e personalizadas.",
  phoneRaw: "5511999999999",
  phoneFormatted: "(11) 99999-9999",
  instagramHandle: "@floreser.espacoterapeutico",
  instagramUrl: "https://instagram.com",
  email: "contato@floreserterapia.com.br",
  address: "Atendimento Presencial e Online para todo o Brasil",
  hours: "Segunda a Sexta, das 08h às 19h | Sábados, das 09h às 14h",
  attendanceMode: "Sessões Individuais Online e Presenciais",
  defaultWhatsAppMessage:
    "Olá! Conheci o espaço Flor E Ser através do site e gostaria de saber mais informações sobre os atendimentos.",
};

export function createWhatsAppLink(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || siteConfig.defaultWhatsAppMessage);
  return `https://wa.me/${siteConfig.phoneRaw}?text=${text}`;
}
