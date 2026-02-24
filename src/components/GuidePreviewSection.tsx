import { useState } from "react";
import { Check, Zap, X } from "lucide-react";
import guideImage from "@/assets/banner-pascoa.png";

const GuidePreviewSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
              📖 Veja o Guia Por Dentro{" "}
              <span className="text-gold-gradient">(Material Real)</span>
            </h2>
            <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto">
              Nada de promessa vazia. Esse é o material que você recebe imediatamente após a compra.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image - first on mobile */}
            <div className="order-1 md:order-2">
              <div
                className="relative cursor-pointer group"
                onClick={() => setLightboxOpen(true)}
              >
                <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                  <img
                    src={guideImage}
                    alt="Preview do Guia Páscoa Lucrativa"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                {/* Selo dourado */}
                <div className="absolute top-4 right-4 bg-gold-gradient text-primary-foreground font-body font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                  <Zap className="w-3 h-3" />
                  Acesso Imediato
                </div>
                <p className="text-center text-muted-foreground text-xs mt-3 font-body">
                  Clique para ampliar
                </p>
              </div>
            </div>

            {/* Text - second on mobile */}
            <div className="order-2 md:order-1 space-y-6">
              <p className="font-body text-foreground/80 leading-relaxed text-base md:text-lg">
                Você não vai receber um PDF genérico.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed text-base md:text-lg">
                Você terá acesso a um guia estruturado, organizado e pensado para ser executado{" "}
                <strong className="text-foreground">passo a passo</strong>.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed text-base md:text-lg">
                Cada módulo foi desenhado para tirar você do caos e levar direto ao lucro —{" "}
                <strong className="text-gold">sem achismo e sem improviso.</strong>
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Estrutura clara",
                  "Estratégia aplicada",
                  "Execução simplificada",
                  "Acesso imediato",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <span className="font-body text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-background hover:text-gold transition-colors"
            onClick={() => setLightboxOpen(false)}
            aria-label="Fechar"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={guideImage}
            alt="Preview do Guia Páscoa Lucrativa"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default GuidePreviewSection;
