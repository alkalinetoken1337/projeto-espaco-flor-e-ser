"use client";

import { useState, useMemo } from "react";
import { Sparkles, MessageCircle, HelpCircle } from "lucide-react";
import { servicesData, serviceCategories, ServiceCategory, Service } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { ServiceDetailModal } from "./ServiceDetailModal";
import { createWhatsAppLink } from "@/data/siteConfig";

export function CatalogSection() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>("Todos");
  const [activeModalService, setActiveModalService] = useState<Service | null>(null);

  const filteredServices = useMemo(() => {
    if (selectedCategory === "Todos") {
      return servicesData;
    }
    return servicesData.filter((service) => service.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="catalogo" className="py-24 bg-linen-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Catálogo Terapêutico</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-950 font-semibold tracking-tight text-balance">
            Escolha o cuidado que sua alma e corpo pedem hoje.
          </h2>

          <p className="text-forest-900/75 text-base sm:text-lg leading-relaxed text-pretty">
            Navegue pelas práticas abaixo para conhecer cada modalidade. Clique em
            <strong> “Saiba mais”</strong> para ler sobre a sessão ou agende diretamente
            pelo WhatsApp.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          role="group"
          aria-label="Filtrar serviços por categoria"
        >
          {serviceCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={isSelected}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-150 focus-ring ${
                  isSelected
                    ? "bg-sage-700 text-white shadow-sm"
                    : "bg-white text-forest-900/80 hover:bg-linen-200 border border-linen-200"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grid of Services */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onOpenDetails={(srv) => setActiveModalService(srv)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-linen-200 p-8">
            <HelpCircle className="w-12 h-12 text-sage-500 mx-auto mb-3" aria-hidden="true" />
            <h3 className="font-serif text-xl font-semibold text-forest-950">
              Nenhum serviço encontrado nesta categoria
            </h3>
            <p className="text-sm text-forest-900/70 mt-1">
              Experimente selecionar outra categoria ou entre em contato diretamente pelo WhatsApp.
            </p>
          </div>
        )}

        {/* Reassurance Consultation Bar */}
        <div className="bg-sage-800 text-white rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white">
              Em dúvida sobre qual prática é ideal para você?
            </h3>
            <p className="text-sage-100 text-sm max-w-xl">
              Nossa terapeuta realiza uma orientação inicial sem compromisso pelo WhatsApp para entender o que você está sentindo e indicar o melhor caminho.
            </p>
          </div>
          <a
            href={createWhatsAppLink("Olá! Gostaria de uma orientação terapêutica para saber qual prática do Flor E Ser é a mais indicada para o meu momento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sage-900 font-semibold text-sm hover:bg-sage-50 active:scale-[0.98] transition-transform duration-150 shrink-0 focus-ring shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
            <span>Falar com a Terapeuta</span>
          </a>
        </div>
      </div>

      {/* Accessible Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
      />
    </section>
  );
}
