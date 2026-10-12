import Image from "next/image";
import { ArrowDown, MessageCircle, Heart, Sparkles, ShieldCheck } from "lucide-react";
import { siteConfig, createWhatsAppLink } from "@/data/siteConfig";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-linen-100/60 via-linen-50 to-linen-50"
    >
      {/* Decorative background aura blobs */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-sage-200/40 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-48 right-0 w-[400px] h-[300px] bg-floral-200/30 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 border border-sage-200/80 text-sage-800 text-xs sm:text-sm font-medium tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-sage-600" aria-hidden="true" />
              <span>Bem-vindo ao espaço terapêutico Flor&nbsp;E&nbsp;Ser</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest-950 font-semibold tracking-tight leading-[1.12] text-balance">
              Permita-se desacelerar, florescer e reencontrar o seu equilíbrio.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-forest-900/80 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed text-pretty">
              Um catálogo acolhedor de terapias integrativas, florais e práticas
              naturais criadas para cuidar da sua saúde emocional, energética e física
              com escuta atenta e respeito ao seu tempo.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#catalogo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-sage-700 text-white font-medium text-base shadow-sm hover:bg-sage-800 active:scale-[0.98] transition-transform duration-150 focus-ring"
              >
                <span>Conhecer os Serviços</span>
                <ArrowDown className="w-4 h-4 text-sage-200" aria-hidden="true" />
              </a>

              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-linen-200/70 border border-linen-300 text-forest-900 font-medium text-base hover:bg-linen-200 active:scale-[0.98] transition-transform duration-150 focus-ring"
              >
                <MessageCircle className="w-5 h-5 text-emerald-700" aria-hidden="true" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>

            {/* Quick Pillars */}
            <div className="pt-8 border-t border-linen-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sage-100 text-sage-700 shrink-0">
                  <Heart className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-forest-950">Atendimento Humanizado</h3>
                  <p className="text-xs text-forest-900/70 leading-snug">Escuta sem julgamentos</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sage-100 text-sage-700 shrink-0">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-forest-950">Práticas 100% Naturais</h3>
                  <p className="text-xs text-forest-900/70 leading-snug">Respeito à sua biologia</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sage-100 text-sage-700 shrink-0">
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-forest-950">Online & Presencial</h3>
                  <p className="text-xs text-forest-900/70 leading-snug">Flexibilidade para você</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white/80 aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=85"
                  alt="Ambiente acolhedor e sereno de meditação e práticas terapêuticas"
                  fill
                  priority
                  fetchPriority="high"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-forest-950/40 backdrop-blur-md border border-white/20">
                  <p className="text-xs font-semibold uppercase tracking-wider text-sage-200">
                    Espaço Flor E Ser
                  </p>
                  <p className="font-serif text-lg font-medium text-white/95 mt-1 leading-snug">
                    “O autocuidado não é um luxo, é a raiz de toda a nossa força.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
