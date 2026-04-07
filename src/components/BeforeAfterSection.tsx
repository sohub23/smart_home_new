import { Check, X } from "lucide-react";
import { Reveal } from "@/hooks/useScrollReveal";

const beforeItems = [
  "Forgetting to switch off lights, AC, fans",
  "Struggling with curtains every morning",
  "Worrying if the door is locked",
  "Higher electricity bills every month",
];

const afterItems = [
  "Auto lights with schedule & app control",
  "Curtains open/close with one tap or voice",
  "Smart lock with fingerprint & app security",
  "Up to 30% lower electricity bills",
];

const BeforeAfterSection = () => {
  return (
    <section className="py-28 lg:py-40">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28">
            <h2 className="font-heading text-[80px] font-bold text-foreground tracking-tight leading-[1.05]">
              The difference is <span className="text-primary">Sohub.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <Reveal delay={0.1} direction="left">
            <div className="rounded-[24px] bg-[#FCEDED] dark:bg-[#FCEDED]/10 p-10 lg:p-12 h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-destructive/70 mb-10">Without Sohub</p>
              <ul className="space-y-6">
                {beforeItems.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white/60 dark:bg-black/20 border border-red-200/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X size={11} strokeWidth={2.5} className="text-destructive/70" />
                    </div>
                    <span className="text-[15px] text-foreground/60 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2} direction="right">
            <div className="rounded-[24px] bg-[#E6F4EA] dark:bg-[#E6F4EA]/10 p-10 lg:p-12 h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary/70 mb-10">With Sohub</p>
              <ul className="space-y-6">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white/60 dark:bg-black/20 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} strokeWidth={2.5} className="text-primary" />
                    </div>
                    <span className="text-[15px] text-foreground/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
