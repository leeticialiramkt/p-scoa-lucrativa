interface CtaButtonProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

const CHECKOUT_URL = "https://pay.kiwify.com.br/RavY755";

const CtaButton = ({ children, subtitle, className = "" }: CtaButtonProps) => {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full max-w-xl bg-gold-gradient text-primary-foreground font-body font-bold text-base md:text-lg uppercase tracking-wider py-4 md:py-5 px-8 md:px-12 rounded-lg text-center transition-all duration-300 hover:scale-[1.03] hover:brightness-110 animate-pulse-gold min-h-[44px]"
      >
        {children}
      </a>
      {subtitle && (
        <p className="text-muted-foreground text-sm font-body">{subtitle}</p>
      )}
    </div>
  );
};

export default CtaButton;
