import { Leaf, Clock, HeartHandshake, Home } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Terapias 100% Naturais",
    description:
      "Uso de essências florais puras, óleos essenciais certificados e práticas energéticas que não agridem seu organismo.",
  },
  {
    icon: Clock,
    title: "Sessões Sem Pressa",
    description:
      "Tempo real de escuta e acolhimento para que você possa desacelerar e ser ouvido(a) com a devida atenção.",
  },
  {
    icon: HeartHandshake,
    title: "Fórmulas Personalizadas",
    description:
      "Cada ser humano é único. Não usamos receitas genéricas: cada floral e sinergia é desenhada para você.",
  },
  {
    icon: Home,
    title: "Online ou Presencial",
    description:
      "Receba atendimento com o mesmo calor humano no conforto do seu lar ou em nosso espaço físico acolhedor.",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-sage-600">
            Diferenciais do Espaço
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-950 font-semibold tracking-tight text-balance">
            Cuidado integrativo com respeito à sua individualidade.
          </h2>
          <p className="text-forest-900/75 text-base sm:text-lg leading-relaxed text-pretty">
            Conheça os pilares que tornam o Flor&nbsp;E&nbsp;Ser um espaço de transformação e alívio para a sua jornada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-3xl bg-linen-50 border border-linen-200/80 hover:border-sage-300 transition-colors duration-200 flex flex-col space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-sage-100 text-sage-700 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-forest-950">
                  {benefit.title}
                </h3>
                <p className="text-sm text-forest-900/75 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
