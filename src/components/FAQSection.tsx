import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "Do I need to rewire my home?", a: "No. Most devices work with existing wiring. Smart switches directly replace traditional ones." },
  { q: "Can I control everything from my phone?", a: "Yes. The Sohub app gives you full control over all devices — from anywhere. Voice assistants supported too." },
  { q: "What if my internet goes down?", a: "Devices continue working via local control and physical buttons. Scheduled automations run locally." },
  { q: "How long does installation take?", a: "Most homes are fully set up within a single day by our certified technicians." },
  { q: "Is there a warranty?", a: "All Sohub devices come with a 3-year warranty and lifetime technical support." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-28 lg:py-40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-20 lg:mb-28">
              <h2 className="font-heading text-[80px] font-bold text-foreground tracking-tight leading-[1.05]">
                Questions? <span className="text-muted-foreground/40">Answers.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Accordion type="single" collapsible className="space-y-0">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border py-2">
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-6 text-lg lg:text-xl">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 max-w-xl">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
