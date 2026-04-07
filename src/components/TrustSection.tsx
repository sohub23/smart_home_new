import { Reveal } from "@/hooks/useScrollReveal";

const compatibleWith = ["Google Home", "Amazon Alexa", "Apple HomeKit", "Samsung SmartThings"];

const TrustSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Compatibility — whisper-quiet */}
        <Reveal delay={0.3}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
            <span className="text-[10px] sm:text-xs font-bold text-muted-foreground/70 uppercase tracking-[0.2em] shrink-0">
              Works seamlessly with
            </span>
            <div className="hidden md:block h-[1px] w-8 lg:w-16 bg-gradient-to-r from-transparent via-border to-transparent shrink-0" />
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
              {compatibleWith.map((name) => (
                <span 
                  key={name} 
                  className="text-xs sm:text-sm font-heading font-semibold text-muted-foreground/50 hover:text-foreground transition-all duration-300 cursor-default shrink-0"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TrustSection;
