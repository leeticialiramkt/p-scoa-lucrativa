import { Sparkles } from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Cardápio Estratégico",
    description: "Monte um cardápio lucrativo que vende por você, com precificação inteligente e mix de produtos certeiro.",
    hasMegaPrompt: true,
  },
  {
    number: "02",
    title: "Precificação Lucrativa",
    description: "Descubra exatamente quanto cobrar para ter lucro real, considerando o aumento do cacau e todos os custos.",
    hasMegaPrompt: true,
  },
  {
    number: "03",
    title: "Conteúdo Magnético para Instagram",
    description: "Posts, legendas e stories prontos que atraem clientes e geram desejo instantâneo pelos seus produtos.",
    hasMegaPrompt: true,
  },
  {
    number: "04",
    title: "WhatsApp que Converte",
    description: "Scripts e mensagens de vendas para transformar curiosos em clientes pagantes pelo WhatsApp.",
    hasMegaPrompt: true,
  },
  {
    number: "05",
    title: "Agenda Lotada",
    description: "Estratégias para encher sua agenda de encomendas com antecedência, sem depender da sorte.",
    hasMegaPrompt: true,
  },
  {
    number: "06",
    title: "Organização e Produção Inteligente",
    description: "Planeje sua produção para entregar tudo sem estresse, sem virar noites e com qualidade impecável.",
    hasMegaPrompt: true,
  },
];

const ModulesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          📦 O Que Tem Dentro
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12 max-w-xl mx-auto">
          6 módulos práticos com Mega Prompts prontos para usar
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {modules.map((mod) => (
            <div
              key={mod.number}
              className="card-premium p-6 transition-all duration-300 hover:-translate-y-1 hover:gold-glow"
            >
              <span className="text-gold font-display text-3xl font-bold opacity-30">
                {mod.number}
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">
                {mod.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                {mod.description}
              </p>
              {mod.hasMegaPrompt && (
                <div className="flex items-center gap-2 text-gold text-sm font-body font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Inclui Mega Prompt</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
