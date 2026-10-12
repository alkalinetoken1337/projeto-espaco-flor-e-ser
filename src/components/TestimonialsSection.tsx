import { Star, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 bg-linen-100/60 border-t border-linen-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-floral-700">
            Histórias de Transformação
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest-950 font-semibold tracking-tight text-balance">
            O carinho e a transformação de quem já foi acolhido.
          </h2>
          <p className="text-forest-900/75 text-base sm:text-lg leading-relaxed text-pretty">
            Relatos genuínos de pessoas que encontraram alívio, serenidade e novas perspectivas através de nossos atendimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, index) => (
            <figure
              key={index}
              className="bg-white p-8 rounded-3xl border border-linen-200/90 shadow-sm flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                {/* Stars and quote badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500" aria-label="Avaliação 5 estrelas">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-sage-200/80" aria-hidden="true" />
                </div>

                <blockquote className="text-forest-900/85 text-sm sm:text-base leading-relaxed italic">
                  {item.quote}
                </blockquote>
              </div>

              <figcaption className="pt-4 border-t border-linen-200 flex items-center justify-between">
                <div>
                  <strong className="block text-sm font-semibold text-forest-950 font-serif">
                    {item.author}
                  </strong>
                  <span className="text-xs text-forest-900/65">{item.location}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-sage-100 text-sage-800">
                  {item.service}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
