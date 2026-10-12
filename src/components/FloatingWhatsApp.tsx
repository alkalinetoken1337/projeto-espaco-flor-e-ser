import { MessageCircle } from "lucide-react";
import { siteConfig, createWhatsAppLink } from "@/data/siteConfig";

export function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Atendimento rápido pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      <div className="hidden sm:block bg-white text-forest-900 text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg border border-linen-200 pointer-events-none animate-fade-in">
        Dúvidas? Fale no WhatsApp
      </div>

      <a
        href={createWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-transform duration-150 focus-ring relative group"
        aria-label="Iniciar conversa com a terapeuta do Flor E Ser no WhatsApp"
      >
        <span
          className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-sage-400 rounded-full border-2 border-white animate-pulse"
          aria-hidden="true"
        />
        <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
      </a>
    </aside>
  );
}
