import bannerImage from "@/assets/banner-pascoa.png";
import CtaButton from "./CtaButton";
import { Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Banner image as subtle background */}
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt="Banner Guia Páscoa Lucrativa"
          className="w-full h-full object-cover opacity-10"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative container mx-auto py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Pre-headline */}
          <p className="text-gold font-body text-sm md:text-base mb-6 tracking-wide">
            ⚠️ Atenção Confeiteiras: O custo do cacau subiu e o comportamento do cliente mudou. Trabalhar até a exaustão já não é garantia de lucro.
          </p>

          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Transforme a Páscoa de 2026 na{" "}
            <span className="text-gold-gradient">Mais Lucrativa</span>{" "}
            da Sua Vida
          </h1>

          <p className="font-display text-lg md:text-xl text-foreground/70 italic mb-6">
            (Sem Trabalhar 24h por Dia e Sem Ficar Perdida no Instagram)
          </p>

          {/* Sub-headline */}
          <p className="text-muted-foreground font-body text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Descubra o método exato e os comandos de Inteligência Artificial que vão criar o seu cardápio, escrever seus posts e lotar sua agenda no WhatsApp em questão de minutos.{" "}
            <strong className="text-gold">Chega de pagar para trabalhar!</strong>
          </p>

          {/* CTA */}
          <CtaButton subtitle="💳 Compra 100% segura. Acesso imediato.">
            👉 QUERO GARANTIR MINHA PÁSCOA LUCRATIVA AGORA!
          </CtaButton>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-body">
              <Shield className="w-5 h-5 text-gold" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-body">
              <Zap className="w-5 h-5 text-gold" />
              <span>Acesso imediato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
