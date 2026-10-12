"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X, Sparkles } from "lucide-react";
import { siteConfig, createWhatsAppLink } from "@/data/siteConfig";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre o Espaço" },
  { href: "#catalogo", label: "Serviços" },
  { href: "#beneficios", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? "bg-linen-50/95 backdrop-blur-md shadow-sm border-b border-linen-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Marca */}
          <Link
            href="#inicio"
            className="flex items-center gap-2.5 group rounded-lg focus-ring p-1.5"
            aria-label={`${siteConfig.name} - Voltar para o topo`}
          >
            <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center border border-sage-300 text-sage-700 group-hover:bg-sage-200 transition-colors duration-150">
              <Sparkles className="w-5 h-5 text-sage-600" aria-hidden="true" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-2xl font-semibold text-forest-900 tracking-tight leading-none group-hover:text-sage-800 transition-colors duration-150">
                Flor&nbsp;E&nbsp;Ser
              </span>
              <span className="text-[11px] font-sans font-medium text-sage-600 uppercase tracking-widest mt-0.5">
                Espaço Terapêutico
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-forest-900/80 hover:text-forest-950 hover:bg-sage-100/60 rounded-full transition-colors duration-150 focus-ring"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Header Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-sage-700 text-white shadow-sm hover:bg-sage-800 active:scale-[0.98] transition-transform duration-150 focus-ring"
            >
              <MessageCircle className="w-4 h-4 text-sage-200" aria-hidden="true" />
              <span>Agendar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-forest-900 hover:bg-sage-100 transition-colors duration-150 focus-ring"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-b border-linen-200 bg-linen-50/98 px-4 pt-2 pb-6 space-y-2 shadow-lg"
        >
          <nav className="flex flex-col space-y-1" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-forest-900 hover:bg-sage-100 rounded-lg transition-colors duration-150 focus-ring"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-linen-200">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold rounded-xl bg-sage-700 text-white shadow-sm hover:bg-sage-800 focus-ring"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Falar conosco no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
