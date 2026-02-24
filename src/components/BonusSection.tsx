import { Gift, TrendingUp } from "lucide-react";

const BonusSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6">
          🎁 BÔNUS EXCLUSIVO DE{" "}
          <span className="text-gold-gradient">AÇÃO RÁPIDA</span>
        </h2>

        <div className="max-w-2xl mx-auto card-premium p-8 md:p-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center animate-float">
              <TrendingUp className="w-8 h-8 text-gold" />
            </div>
          </div>

          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
            Guia Rápido de Tráfego Pago (Meta Ads)
          </h3>

          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Aprenda a criar anúncios simples e eficazes no Instagram e Facebook para alcançar novos clientes na sua região. Os detalhes completos serão revelados após a compra.
          </p>

          <div className="flex items-center justify-center gap-2 text-gold font-body font-semibold text-sm">
            <Gift className="w-5 h-5" />
            <span>Disponível para quem garantir o acesso agora</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
