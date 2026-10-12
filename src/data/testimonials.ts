export interface Testimonial {
  quote: string;
  author: string;
  service: string;
  location: string;
}

export const testimonialsData: Testimonial[] = [
  {
    quote:
      "“Cheguei ao Flor E Ser em um momento de esgotamento total com o trabalho. As sessões de florais e a escuta da terapeuta foram um divisor de águas. Hoje sinto que reencontrei meu centro e resgatei minha leveza.”",
    author: "Juliana Mendes",
    service: "Terapia Floral",
    location: "São Paulo, SP",
  },
  {
    quote:
      "“O cuidado com que fui acolhida me tocou profundamente. A sinergia de óleos essenciais indicada para o meu sono mudou completamente minhas noites. Dá para sentir o amor em cada detalhe.”",
    author: "Camila Rocha",
    service: "Aromaterapia Integrativa",
    location: "Atendimento Online",
  },
  {
    quote:
      "“A sessão de Reiki trouxe uma paz indescritível que eu não experimentava há anos. Saí com o corpo leve e a mente serena. O espaço é realmente um refúgio de cura e acolhimento.”",
    author: "Beatriz Oliveira",
    service: "Reiki & Chakras",
    location: "Presencial",
  },
];
