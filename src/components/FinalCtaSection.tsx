import CtaButton from "./CtaButton";

const FinalCtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-premium">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-secondary-foreground mb-6">
          A Páscoa de 2026 já começou para quem tem{" "}
          <span className="text-gold-gradient">estratégia.</span>
        </h2>

        <p className="text-secondary-foreground/70 font-body text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Enquanto outras confeiteiras vão repetir os mesmos erros, você pode ter um plano completo, com IA trabalhando ao seu lado, para vender mais, lucrar de verdade e curtir a Páscoa sem estresse.
        </p>

        <CtaButton subtitle="💳 Compra 100% segura. Acesso imediato. Garantia de 7 dias.">
          👉 QUERO COMEÇAR A VENDER HOJE MESMO!
        </CtaButton>
      </div>
    </section>
  );
};

export default FinalCtaSection;
