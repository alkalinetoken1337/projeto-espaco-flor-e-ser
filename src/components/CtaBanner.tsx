import { MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig, createWhatsAppLink } from "@/data/siteConfig";

export function CtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-sage-800 via-sage-900 to-forest-950 text-white relative overflow-hidden">
      {/* Decorative floral aura */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 bg-sage-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-floral-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-700/60 border border-sage-500/40 text-sage-200 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Sua Jornada de Autocuidado Começa Aqui</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-balance">
          Dê a si mesmo(a) a oportunidade de desacelerar e ser acolhido(a).
        </h2>

        <p className="text-sage-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-pretty">
          Seja para aliviar o estresse, resgatar a vitalidade ou encontrar clareza emocional, o Flor&nbsp;E&nbsp;Ser está de portas abertas para você.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-forest-950 font-semibold text-base shadow-lg hover:bg-linen-100 active:scale-[0.98] transition-transform duration-150 focus-ring"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600" aria-hidden="true" />
            <span>Iniciar Consultoria no WhatsApp</span>
          </a>

          <a
            href="#catalogo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-sage-800/80 border border-sage-600/50 text-white font-medium text-base hover:bg-sage-700 active:scale-[0.98] transition-transform duration-150 focus-ring"
          >
            <span>Explorar Serviços</span>
            <ArrowUpRight className="w-4 h-4 text-sage-300" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
