import CtaButton from "./CtaButton";

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-premium">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-secondary-foreground mb-6">
          ✨ A Solução: O Fim do{" "}
          <span className="text-gold-gradient">"Achismo"</span>{" "}
          na Confeitaria Artesanal
        </h2>

        <p className="text-secondary-foreground/70 font-body text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Apresentamos o <strong className="text-secondary-foreground">Guia Páscoa Lucrativa</strong>: O Manual Definitivo e Prático para 2026. Um guia direto ao ponto, com <strong className="text-gold">Mega Prompts prontos</strong> para copiar e colar no ChatGPT ou Gemini.
        </p>

        <div className="max-w-lg mx-auto bg-gold/10 gold-border rounded-xl p-6 md:p-8 mb-10">
          <p className="font-display text-lg md:text-xl text-gold font-semibold italic">
            "A IA fará o trabalho de uma equipe inteira por você."
          </p>
        </div>

        <CtaButton>
          👉 QUERO MEU GUIA AGORA!
        </CtaButton>
      </div>
    </section>
  );
};

export default SolutionSection;
