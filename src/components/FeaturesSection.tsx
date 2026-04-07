import { Shield, Zap, Smartphone, Camera, Thermometer, Lock } from "lucide-react";
import { Reveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: Shield, title: "Advanced Security", description: "Smart cameras, motion sensors, and instant alerts — 24/7." },
  { icon: Zap, title: "Energy Savings", description: "Cut electricity bills by up to 30% with intelligent automation." },
  { icon: Smartphone, title: "One-Tap Control", description: "Every device, one app — control from anywhere in the world." },
  { icon: Camera, title: "Smart Cameras", description: "HD live streaming with night vision and cloud recording." },
  { icon: Thermometer, title: "Climate Control", description: "Auto-adjust AC, fans, and curtains by schedule." },
  { icon: Lock, title: "Smart Locks", description: "Fingerprint, PIN, and app-based access. No more lost keys." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-28 lg:py-40">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28">
            <h2 className="font-heading text-[80px] font-bold text-foreground tracking-tight leading-[1.05]">
              Smart living, simplified.
            </h2>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto">
              Everything your home needs to be intelligent, secure, and efficient.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-16 lg:gap-y-20 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08} direction="up">
              <div className="group text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500 mx-auto">
                  <feature.icon size={22} strokeWidth={1.5} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg lg:text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
