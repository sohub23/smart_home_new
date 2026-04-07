import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/hooks/useScrollReveal";
import benefit1 from "@/assets/smart home/benefit 1.png";
import benefit2 from "@/assets/smart home/benefit 2.jpg";

const benefits = [
  "Switch glass to opaque instantly for total privacy.",
  "Enjoy natural sunlight without compromising privacy.",
  "Modern, minimalist aesthetic that complements any room.",
  "Highly durable, long-lasting, and requires zero maintenance.",
  "Smart tinting technology ensuring continuous peace of mind.",
];

const PDLCFilmSection = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecondImage((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 lg:py-16 border-t border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">

          {/* Visual Images (Left) */}
          <Reveal delay={0.2} direction="right">
            <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl bg-secondary group mt-6 lg:mt-24">
              <img
                src={benefit1}
                alt="PDLC Film benefit 1"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-105"
                style={{
                  opacity: showSecondImage ? 0 : 1,
                  transform: showSecondImage ? 'scale(1.05)' : 'scale(1)'
                }}
              />
              <img
                src={benefit2}
                alt="PDLC Film benefit 2"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-105"
                style={{
                  opacity: showSecondImage ? 1 : 0,
                  transform: showSecondImage ? 'scale(1)' : 'scale(1.05)'
                }}
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </Reveal>

          {/* Content (Right) */}
          <div className="space-y-8 lg:pl-6">
            <Reveal>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-5xl xl:text-[54px] font-bold text-foreground tracking-tight leading-[1.05] whitespace-nowrap">
                Why <span className="text-primary">PDLC</span> Film?
              </h2>
            </Reveal>

            {/* Benefits List */}
            <div className="space-y-3 pt-2">
              {benefits.map((benefit, index) => (
                <Reveal key={index} delay={0.1 * index}>
                  <div className="flex items-center space-x-4 p-3.5 sm:p-4 rounded-[20px] bg-[#F8F8F8] dark:bg-secondary/30 transition-all duration-300 hover:bg-[#F0F0F0] dark:hover:bg-secondary/50 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-white dark:bg-black/20 rounded-[12px] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm font-bold text-foreground font-heading leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PDLCFilmSection;
