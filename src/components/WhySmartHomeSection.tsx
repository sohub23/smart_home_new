import { Shield, Leaf, Brain, Home, TrendingUp, Eye } from "lucide-react";
import { Reveal } from "@/hooks/useScrollReveal";

const reasons = [
  {
    icon: Shield,
    title: "Security That Never Sleeps",
    description: "Smart locks, motion sensors, and live HD cameras — monitor every corner of your home from anywhere.",
    stat: "73%",
    statLabel: "reduction in break-ins",
  },
  {
    icon: Leaf,
    title: "Save Energy, Save Money",
    description: "Automated lighting, climate control, and smart curtains reduce wastage automatically.",
    stat: "30%",
    statLabel: "lower electricity bills",
  },
  {
    icon: Brain,
    title: "Intelligence That Adapts",
    description: "Your home anticipates your needs — adjusting temperature, dimming lights, waking you with natural light.",
    stat: "24/7",
    statLabel: "autonomous operation",
  },
  {
    icon: Home,
    title: "Future-Proof Your Property",
    description: "Smart homes command 5-8% higher resale value. Intelligent homes are the new standard.",
    stat: "8%",
    statLabel: "higher property value",
  },
  {
    icon: TrendingUp,
    title: "Next Generation Standard",
    description: "Leading developers in Dhaka are making smart features mandatory in premium projects.",
    stat: "2026",
    statLabel: "the tipping point",
  },
  {
    icon: Eye,
    title: "Peace of Mind, Always",
    description: "Check your doors, cameras, and appliances with a single tap — from anywhere in the world.",
    stat: "∞",
    statLabel: "peace of mind",
  },
];

const WhySmartHomeSection = () => {
  return (
    <section className="py-28 lg:py-40">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-28">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
              Why Smart Home
            </p>
            <h2 className="font-heading text-[80px] font-bold text-foreground tracking-tight leading-[1.05]">
              Your home should <span className="text-primary">protect you.</span>
            </h2>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto">
              In a world that's always connected, your home deserves to be intelligent, secure, and effortlessly efficient.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.08} direction="up">
              <div className="bg-secondary/50 rounded-3xl p-10 lg:p-12 h-full group hover:bg-secondary transition-colors duration-500">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors duration-500">
                  <reason.icon size={22} strokeWidth={1.5} className="text-primary" />
                </div>
                <p className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-1">{reason.stat}</p>
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground/60 mb-6">{reason.statLabel}</p>
                <h3 className="font-heading text-lg lg:text-xl font-semibold text-foreground mb-3">{reason.title}</h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySmartHomeSection;
