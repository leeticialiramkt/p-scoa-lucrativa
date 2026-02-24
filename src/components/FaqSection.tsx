import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Eu não entendo nada de IA. Consigo usar mesmo assim?",
    answer:
      "Com certeza! O guia foi feito justamente para quem nunca usou IA. Você vai receber Mega Prompts prontos — é só copiar, colar e usar. Não precisa de nenhum conhecimento técnico.",
  },
  {
    question: "Sou iniciante na confeitaria. O guia serve para mim?",
    answer:
      "Sim! O guia é perfeito tanto para iniciantes quanto para confeiteiras experientes. As estratégias de precificação, marketing e vendas se aplicam a qualquer nível de experiência.",
  },
  {
    question: "Quando terei acesso ao material?",
    answer:
      "O acesso é imediato! Assim que o pagamento for confirmado, você receberá o link de acesso por e-mail e poderá começar a usar na mesma hora.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-center text-foreground mb-12">
          Perguntas <span className="text-gold-gradient">Frequentes</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-premium px-6 border-none"
              >
                <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:text-gold transition-colors hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
