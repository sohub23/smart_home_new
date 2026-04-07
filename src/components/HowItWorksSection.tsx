import { Reveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", title: "Consultation", description: "Tell us your needs. We recommend the best setup for your home." },
  { num: "02", title: "Planning", description: "Our experts design a custom smart home blueprint tailored to you." },
  { num: "03", title: "Installation", description: "Certified technicians install everything — usually in a single day." },
  { num: "04", title: "Enjoy", description: "Control, automate, relax. Your home is now intelligent." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-28 lg:py-40">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28">
            <h2 className="font-heading text-[80px] font-bold text-foreground tracking-tight leading-[1.05]">
              Four steps to <span className="text-primary">smart.</span>
            </h2>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.12} direction="up">
              <div className={`flex items-start gap-8 lg:gap-12 py-12 lg:py-16 ${i < steps.length - 1 ? "border-b border-border" : ""}`}>
                <span className="font-heading text-5xl lg:text-7xl font-bold text-muted-foreground/20 leading-none flex-shrink-0">
                  {step.num}
                </span>
                <div className="pt-2">
                  <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-md">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
