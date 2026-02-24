import { Moon, Clock, Instagram, MessageCircle } from "lucide-react";

const pains = [
  {
    icon: Moon,
    text: "Você vira noites na cozinha, produz sem parar, mas no final o lucro mal cobre os ingredientes...",
  },
  {
    icon: Clock,
    text: "Você gasta horas tentando montar um cardápio atrativo, mas fica insegura se os preços estão certos...",
  },
  {
    icon: Instagram,
    text: "Você fica travada no Instagram, sem saber o que postar, e acaba copiando o que as outras fazem...",
  },
  {
    icon: MessageCircle,
    text: "Sua caixa de mensagens está vazia enquanto outras confeiteiras parecem vender sem esforço...",
  },
];

const PainSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
          🛑 Chega a Páscoa e a história se repete...{" "}
          <span className="text-gold-gradient">Se identifica?</span>
        </h2>

        <div className="max-w-2xl mx-auto space-y-6">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-lg bg-muted/50 gold-border transition-all duration-300 hover:gold-glow"
            >
              <pain.icon className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
              <p className="font-body text-foreground/80 leading-relaxed">
                {pain.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <blockquote className="bg-secondary text-secondary-foreground p-6 md:p-8 rounded-lg text-center gold-border">
            <p className="font-display text-lg md:text-xl italic leading-relaxed">
              "A verdade é uma só: fazer um ovo perfeito não é suficiente se você não souber{" "}
              <span className="text-gold font-bold not-italic">vendê-lo com lucro.</span>"
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
