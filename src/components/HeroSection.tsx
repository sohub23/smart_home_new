import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-smart-home-v2.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section className="pt-14 bg-background">
      {/* Apple-style: Big centered text block */}
      <div className="container mx-auto px-4 lg:px-8 pt-20 lg:pt-28 pb-12 text-center">
        <p
          className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-6"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          Bangladesh's #1 Smart Home Brand
        </p>

        <h1
          className="font-heading text-[80px] font-bold text-foreground leading-[1.05] tracking-tight max-w-4xl mx-auto"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          Every home deserves <span className="text-primary">to be smart.</span>
        </h1>

        <p
          className="mt-6 text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-lg mx-auto"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
          }}
        >
          Secure. Energy-efficient. Effortlessly controlled — all from your fingertips.
        </p>

        <div
          className="mt-8 flex flex-wrap justify-center gap-3"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.55s",
          }}
        >
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-sm px-8 gap-2 h-12 cursor-pointer">
            <a href="#configurator" onClick={(e) => {
              e.preventDefault();
              document.getElementById("configurator")?.scrollIntoView({ behavior: "smooth" });
            }}>
              Build Your Smart Home
              <ArrowRight size={16} />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="rounded-full text-sm px-8 h-12 cursor-pointer">
            <a href="#how-it-works" onClick={(e) => {
              e.preventDefault();
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
            }}>
              How It Works
            </a>
          </Button>
        </div>
      </div>

      {/* Full-width image below — Apple product-shot style */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0) scale(1)" : "translateY(40px) scale(0.98)",
          transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-[16/7]">
            <img
              src={heroImage}
              alt="Modern smart home with ambient lighting and connected devices"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
            {/* Subtle bottom gradient fade into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
