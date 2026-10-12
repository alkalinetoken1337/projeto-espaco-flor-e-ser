import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { faqData } from "@/data/faq";
import { createWhatsAppLink } from "@/data/siteConfig";

export function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Perguntas Frequentes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-950 font-semibold tracking-tight text-balance">
            Tire suas dúvidas antes de iniciar seu atendimento.
          </h2>

          <p className="text-forest-900/75 text-base sm:text-lg leading-relaxed text-pretty">
            Transparência e segurança são essenciais para uma relação terapêutica acolhedora.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <details
              key={index}
              className="group bg-linen-50 rounded-2xl border border-linen-200/90 p-5 sm:p-6 transition-colors duration-150 open:bg-linen-100/60 open:border-sage-300"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none text-forest-950 font-serif text-lg sm:text-xl font-medium focus-ring rounded-lg p-1">
                <span className="text-left pr-4">{item.question}</span>
                <span className="p-1.5 rounded-full bg-white group-open:rotate-180 transition-transform duration-200 motion-reduce:transition-none text-sage-700 shrink-0 border border-linen-200">
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </span>
              </summary>
              <div className="pt-4 text-forest-900/80 text-sm sm:text-base leading-relaxed border-t border-linen-200/60 mt-3">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Bottom Contact Help Box */}
        <div className="text-center pt-6">
          <p className="text-sm text-forest-900/75 mb-3">
            Sua dúvida não está aqui? Pergunte diretamente para a terapeuta:
          </p>
          <a
            href={createWhatsAppLink("Olá! Li a seção de dúvidas no site do Flor E Ser, mas ainda tenho uma pergunta antes de agendar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sage-700 text-white font-medium text-sm hover:bg-sage-800 active:scale-[0.98] transition-transform duration-150 focus-ring shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-sage-200" aria-hidden="true" />
            <span>Tirar dúvidas no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
