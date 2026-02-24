import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-card rounded-xl gold-border p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center gold-border">
              <ShieldCheck className="w-10 h-10 text-gold" />
            </div>
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            🔒 Seu Risco é <span className="text-gold-gradient">ZERO!</span>
          </h2>

          <h3 className="font-display text-lg md:text-xl text-gold mb-6">
            Garantia Incondicional de 7 Dias
          </h3>

          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Se dentro de 7 dias você sentir que o Guia Páscoa Lucrativa não é para você, basta enviar um e-mail e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia. O risco é todo nosso.
          </p>

          <div className="inline-block bg-gold/10 gold-border rounded-lg px-6 py-3">
            <p className="font-display text-gold font-bold text-lg">
              7 DIAS DE GARANTIA TOTAL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
