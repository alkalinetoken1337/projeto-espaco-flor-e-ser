import { MessageCircle, Mail, Clock, MapPin, Sparkles } from "lucide-react";
import { siteConfig, createWhatsAppLink } from "@/data/siteConfig";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-linen-100 text-forest-900 border-t border-linen-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-sage-200 flex items-center justify-center text-sage-800">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="font-serif text-2xl font-semibold text-forest-950">
                Flor&nbsp;E&nbsp;Ser
              </span>
            </div>
            <p className="text-xs sm:text-sm text-forest-900/75 leading-relaxed">
              {siteConfig.description}
            </p>
            <p className="text-xs text-sage-800 font-medium">
              {siteConfig.therapistName} • {siteConfig.therapistRole}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-forest-950">
              Navegação
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-sage-700 transition-colors duration-150 focus-ring rounded">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-sage-700 transition-colors duration-150 focus-ring rounded">
                  Sobre a Terapeuta
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-sage-700 transition-colors duration-150 focus-ring rounded">
                  Catálogo de Serviços
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-sage-700 transition-colors duration-150 focus-ring rounded">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-sage-700 transition-colors duration-150 focus-ring rounded">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sage-700 transition-colors duration-150 focus-ring rounded">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-forest-950">
              Canais de Contato
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-forest-900/80">
              <li>
                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-sage-700 transition-colors duration-150 focus-ring rounded"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>WhatsApp: {siteConfig.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-sage-700 transition-colors duration-150 focus-ring rounded"
                  aria-label="Perfil do Flor E Ser no Instagram"
                >
                  <InstagramIcon className="w-4 h-4 text-floral-700 shrink-0" />
                  <span>{siteConfig.instagramHandle}</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Mail className="w-4 h-4 text-sage-600 shrink-0" aria-hidden="true" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours & Location */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-forest-950">
              Atendimento
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-forest-900/80">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{siteConfig.hours}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-linen-200/80 space-y-4 text-center sm:text-left text-xs text-forest-900/60 leading-relaxed">
          <p>
            <strong>Aviso de Cuidado Integrativo:</strong> As práticas oferecidas pelo espaço Flor&nbsp;E&nbsp;Ser são terapias integrativas e complementares de saúde, autocuidado e bem-estar. Elas atuam de forma benéfica e harmônica em conjunto com os cuidados convencionais, não substituindo consultas, diagnósticos ou prescrições médicas e psicológicas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2">
            <p>
              © {currentYear} {siteConfig.name} — Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-forest-900/50">
              Feito com carinho e acolhimento para o seu florescer.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
