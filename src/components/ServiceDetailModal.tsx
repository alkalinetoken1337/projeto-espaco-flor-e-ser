"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, Clock, MapPin, CheckCircle, MessageCircle, Sparkles } from "lucide-react";
import { Service } from "@/data/services";
import { createWhatsAppLink } from "@/data/siteConfig";

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
}

export function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!service) return;

    // Save previous active element to restore focus on close
    const previousActiveElement = document.activeElement as HTMLElement | null;

    // Focus close button on open
    closeButtonRef.current?.focus();

    // Prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Handle Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-forest-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-linen-50 rounded-3xl shadow-2xl border border-linen-200 overflow-hidden z-10 my-8 transition-transform duration-200 motion-reduce:transition-none"
      >
        {/* Header Image */}
        <div className="relative h-60 sm:h-72 w-full bg-linen-200">
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 672px) 100vw, 672px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />

          {/* Close button */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-forest-950/60 text-white hover:bg-forest-950/80 active:scale-95 transition-transform duration-150 focus-ring"
            aria-label="Fechar detalhes do serviço"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Title on image overlay */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-sage-600/90 text-white backdrop-blur-sm mb-2">
              {service.category}
            </span>
            <h2 id="modal-service-title" className="font-serif text-2xl sm:text-3xl font-semibold leading-tight">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Quick info row */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-forest-900/80 pb-4 border-b border-linen-200">
            <div className="flex items-center gap-1.5 bg-linen-100 px-3 py-1.5 rounded-full">
              <Clock className="w-4 h-4 text-sage-600" aria-hidden="true" />
              <span>Duração: <strong>{service.duration}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 bg-linen-100 px-3 py-1.5 rounded-full">
              <MapPin className="w-4 h-4 text-sage-600" aria-hidden="true" />
              <span>Modalidade: <strong>{service.modality}</strong></span>
            </div>
            {service.price && (
              <div className="flex items-center gap-1.5 bg-floral-100 text-floral-800 px-3 py-1.5 rounded-full font-medium">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>{service.price}</span>
              </div>
            )}
          </div>

          {/* Detailed description */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-forest-950">
              Como funciona o atendimento
            </h3>
            <p className="text-forest-900/80 text-sm sm:text-base leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Target Audience */}
          <div className="p-4 rounded-2xl bg-sage-50 border border-sage-200/70 text-xs sm:text-sm text-forest-900/90">
            <strong className="text-sage-800 block mb-1">Para quem é recomendado:</strong>
            {service.targetAudience}
          </div>

          {/* Benefits List */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-forest-950">
              Principais benefícios sentidos
            </h3>
            <ul className="space-y-2.5">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-forest-900/80">
                  <CheckCircle className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-linen-100/70 border-t border-linen-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-forest-900/70 text-center sm:text-left">
            Tire dúvidas e agende diretamente com a terapeuta pelo WhatsApp.
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-medium rounded-full text-forest-900/80 hover:bg-linen-200 transition-colors duration-150 focus-ring"
            >
              Voltar
            </button>
            <a
              href={createWhatsAppLink(service.whatsappCustomMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-full bg-sage-700 text-white shadow-sm hover:bg-sage-800 active:scale-[0.98] transition-transform duration-150 focus-ring"
            >
              <MessageCircle className="w-4 h-4 text-sage-200" aria-hidden="true" />
              <span>Agendar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
