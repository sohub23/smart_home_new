import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Reveal } from "@/hooks/useScrollReveal";

const testimonials = [
  { name: "Rafiq Ahmed", role: "Homeowner, Dhaka", text: "Sohub completely transformed our daily routine. The smart locks and automated lighting give us peace of mind — even when we're traveling abroad." },
  { name: "Nusrat Jahan", role: "Apartment Owner, Chittagong", text: "The installation was seamless and the app is incredibly easy to use. Our electricity bill dropped by almost 25% in the first month!" },
  { name: "Imran Hossain", role: "Villa Owner, Sylhet", text: "From smart curtains to security cameras — everything works perfectly together. Sohub's support team is outstanding." },
  { name: "Taslima Begum", role: "Homeowner, Rajshahi", text: "I never thought smart home tech could be this affordable in Bangladesh. Sohub made it happen beautifully." },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => { setCurrent(index); setIsAnimating(false); }, 300);
  };

  return (
    <section id="testimonials" className="py-28 lg:py-40 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="font-heading text-[80px] font-bold text-foreground tracking-tight leading-[1.05]">
              Loved by homeowners.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-10">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="text-primary fill-primary" />
              ))}
            </div>

            <div
              className="min-h-[180px] flex flex-col items-center justify-center"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? "translateY(16px)" : "translateY(0)",
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <p className="text-2xl lg:text-3xl xl:text-4xl font-heading text-foreground leading-snug tracking-tight mb-10">
                "{testimonials[current].text}"
              </p>
              <p className="font-heading font-semibold text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground mt-1">{testimonials[current].role}</p>
            </div>

            <div className="flex justify-center gap-2 mt-14">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${i === current ? "bg-primary w-8" : "bg-border w-2 hover:bg-muted-foreground/30"}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
