import Image from "next/image";
import { Flower2, Sun, Sparkles, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-white border-y border-linen-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative Frame */}
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-sage-300 -z-10"
                aria-hidden="true"
              />
              <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[3/4] bg-linen-100">
                <Image
                  src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80"
                  alt="Elementos botânicos naturais e luz suave representando o acolhimento terapêutico"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Floating Badge Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-linen-50 p-5 rounded-2xl shadow-xl border border-linen-200/90 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-floral-100 text-floral-700 flex items-center justify-center shrink-0">
                    <Flower2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-forest-950 font-serif">
                      Cuidado com Afeto
                    </h3>
                    <p className="text-xs text-forest-900/70">
                      Mais de 100 vidas acolhidas e transformadas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-floral-100/70 text-floral-800 text-xs font-semibold uppercase tracking-wider">
              <Sun className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Nossa Filosofia & Essência</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-950 font-semibold tracking-tight text-balance leading-tight">
              Um espaço criado para que você possa florescer no seu próprio ritmo.
            </h2>

            <div className="space-y-4 text-forest-900/80 text-base sm:text-lg leading-relaxed">
              <p>
                O espaço terapêutico <strong className="text-forest-950 font-medium">Flor&nbsp;E&nbsp;Ser</strong> nasceu do entendimento profundo de que cada pessoa possui sua própria estação de cura e crescimento. Na correria do dia a dia, frequentemente esquecemos de respirar e nos escutar.
              </p>
              <p>
                Nosso propósito é oferecer um refúgio acolhedor, onde você não precisa dar conta de tudo. Aqui, aliamos a sabedoria ancestral da botânica medicinal (como florais de Bach e óleos essenciais) com técnicas energéticas integrativas para restaurar sua harmonia emocional de forma leve e segura.
              </p>
            </div>

            {/* Core Values checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm font-medium text-forest-950">
                  Escuta terapêutica acolhedora e empática
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm font-medium text-forest-950">
                  Fórmulas e protocolos 100% individualizados
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm font-medium text-forest-950">
                  Atendimento online flexível e presencial sereno
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm font-medium text-forest-950">
                  Ambiente livre de julgamentos e cobranças
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4 border-t border-linen-200">
              <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-700 font-serif font-bold text-xl">
                FS
              </div>
              <div>
                <p className="font-serif text-base font-semibold text-forest-950">
                  {siteConfig.therapistName}
                </p>
                <p className="text-xs text-forest-900/70">
                  {siteConfig.therapistRole} • {siteConfig.attendanceMode}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
