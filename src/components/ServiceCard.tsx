import Image from "next/image";
import { Clock, MapPin, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Service } from "@/data/services";
import { createWhatsAppLink } from "@/data/siteConfig";

interface ServiceCardProps {
  service: Service;
  onOpenDetails: (service: Service) => void;
}

export function ServiceCard({ service, onOpenDetails }: ServiceCardProps) {
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-linen-200/80 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
      {/* Service Image Banner */}
      <div className="relative h-52 w-full overflow-hidden bg-linen-100">
        <Image
          src={service.imageUrl}
          alt={`Ilustração do atendimento: ${service.title}`}
          fill
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-300 motion-reduce:transform-none"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-forest-900 shadow-sm backdrop-blur-sm">
            {service.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        {/* Title and duration */}
        <div className="space-y-1">
          <div className="flex items-center gap-3 text-xs text-forest-900/60 mb-1">
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-sage-600" aria-hidden="true" />
              {service.duration}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-sage-600" aria-hidden="true" />
              {service.modality}
            </span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-forest-950 group-hover:text-sage-800 transition-colors duration-150 leading-snug">
            {service.title}
          </h3>
        </div>

        {/* Short Description */}
        <p className="text-forest-900/75 text-sm leading-relaxed flex-grow line-clamp-3">
          {service.shortDescription}
        </p>

        {/* Price Tag if available */}
        {service.price && (
          <div className="pt-2 text-xs font-medium text-sage-800 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-sage-600" aria-hidden="true" />
            <span>Investimento: {service.price}</span>
          </div>
        )}

        {/* Actions Button Group */}
        <div className="pt-3 border-t border-linen-200/80 flex items-center gap-2">
          {/* Saiba mais (Modal) */}
          <button
            type="button"
            onClick={() => onOpenDetails(service)}
            className="flex-1 py-2.5 px-3 rounded-full text-xs sm:text-sm font-semibold text-forest-900 bg-linen-100 hover:bg-linen-200 active:scale-[0.98] transition-colors duration-150 focus-ring text-center"
            aria-label={`Ver detalhes sobre ${service.title}`}
          >
            Saiba mais
          </button>

          {/* Agendar no WhatsApp */}
          <a
            href={createWhatsAppLink(service.whatsappCustomMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-sage-700 hover:bg-sage-800 active:scale-[0.98] transition-transform duration-150 focus-ring text-center shadow-sm"
            aria-label={`Agendar ${service.title} no WhatsApp`}
          >
            <MessageCircle className="w-3.5 h-3.5 text-sage-200" aria-hidden="true" />
            <span>Agendar</span>
          </a>
        </div>
      </div>
    </article>
  );
}
