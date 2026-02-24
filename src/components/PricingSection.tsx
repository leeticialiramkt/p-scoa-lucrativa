import { Check, Shield, Zap, ShieldCheck } from "lucide-react";
import CtaButton from "./CtaButton";

const items = [
  { name: "O Guia Completo Páscoa Lucrativa 2026", value: "R$ 97,00" },
  { name: "Mega Prompts de IA para Cronograma e Posts", value: "R$ 147,00" },
  { name: "Mega Prompt de Cardápio e Precificação", value: "R$ 97,00" },
  { name: "Scripts de Vendas e Fechamento para WhatsApp", value: "R$ 97,00" },
  { name: "Mega Prompt para Artes e Materiais Offline", value: "R$ 97,00" },
];

const PricingSection = () => {
  return (
    <section className="py-20 md:py-28 bg-dark-premium">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
            🎁 Veja tudo o que você está{" "}
            <span className="text-gold-gradient">levando hoje:</span>
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto">
            Se você fosse contratar profissionais para fazer tudo o que este guia faz por você, este seria o seu investimento:
          </p>
        </div>

        {/* Items list */}
        <div className="max-w-2xl mx-auto space-y-4 mb-12">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-start justify-between gap-4 p-4 bg-card rounded-lg border border-border"
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <span className="font-body text-foreground text-sm md:text-base">{item.name}</span>
              </div>
              <span className="font-body text-muted-foreground text-sm whitespace-nowrap">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Anchor price */}
        <div className="text-center mb-10">
          <p className="text-muted-foreground font-body text-sm mb-2">Valor Total Real do Material:</p>
          <p className="font-display text-4xl md:text-5xl font-bold text-muted-foreground/50 line-through">
            R$ 535,00
          </p>
        </div>

        {/* Persuasive break */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="font-body text-foreground/80 text-base md:text-lg leading-relaxed mb-4">
            Mas você não vai pagar R$ 500.
            <br />
            Na verdade, você não vai pagar nem o valor de capa de R$ 97.
          </p>
          <p className="font-body text-foreground/70 text-base md:text-lg leading-relaxed">
            Para que você pare de bater cabeça e comece a agir agora mesmo para sair na frente da concorrência, eu liberei uma condição absurda de pré-campanha.
          </p>
        </div>

        {/* Final price card */}
        <div className="max-w-lg mx-auto card-premium p-8 md:p-12 text-center mb-10">
          <p className="font-body text-muted-foreground text-sm md:text-base mb-6">
            Você leva o método completo + todos os comandos de Inteligência Artificial por apenas:
          </p>

          <div className="mb-2">
            <span className="font-display text-5xl md:text-7xl font-bold text-gold-gradient">
              R$ 47,00
            </span>
          </div>
          <p className="font-body text-foreground/70 text-sm mb-1">à vista</p>
          <p className="font-body text-muted-foreground text-sm mb-6">
            ou em até <strong className="text-foreground">5x de R$ 10,11</strong> no cartão
          </p>

          <p className="font-body text-gold text-xs italic">
            Menos que o lucro de 1 único ovo premium
          </p>
        </div>

        {/* CTA */}
        <div className="max-w-xl mx-auto">
          <CtaButton>
            👉 QUERO GARANTIR MINHA PÁSCOA LUCRATIVA POR R$ 47
          </CtaButton>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-body">
              <Shield className="w-5 h-5 text-gold" />
              <span>Compra 100% segura</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-body">
              <Zap className="w-5 h-5 text-gold" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-body">
              <ShieldCheck className="w-5 h-5 text-gold" />
              <span>Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
