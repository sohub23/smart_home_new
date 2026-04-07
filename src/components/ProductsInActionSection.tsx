import { Reveal } from "@/hooks/useScrollReveal";

const scenes = [
  {
    time: "7:00 AM",
    title: "Morning",
    description: "Curtains open. Lights brighten. Coffee brews.",
    gradient: "from-amber-100 via-orange-50 to-yellow-50",
    glowColor: "hover:shadow-amber-200/40",
    accentColor: "text-amber-600",
    dotColor: "bg-amber-400",
  },
  {
    time: "2:00 PM",
    title: "Away",
    description: "Lights simulate presence. Cameras record.",
    gradient: "from-sky-100 via-blue-50 to-cyan-50",
    glowColor: "hover:shadow-sky-200/40",
    accentColor: "text-sky-600",
    dotColor: "bg-sky-400",
  },
  {
    time: "8:00 PM",
    title: "Movie Night",
    description: "Lights dim. Curtains close. TV turns on.",
    gradient: "from-violet-100 via-purple-50 to-fuchsia-50",
    glowColor: "hover:shadow-violet-200/40",
    accentColor: "text-violet-600",
    dotColor: "bg-violet-400",
  },
  {
    time: "11:00 PM",
    title: "Bedtime",
    description: "Lights off. Doors locked. AC adjusts.",
    gradient: "from-slate-200 via-slate-100 to-gray-50",
    glowColor: "hover:shadow-slate-300/40",
    accentColor: "text-slate-600",
    dotColor: "bg-slate-500",
  },
];

const ProductsInActionSection = () => {
  return (
    <section className="py-28 lg:py-40">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
              See It in Action
            </p>
            <h2 className="font-heading text-[80px] font-bold text-foreground tracking-tight leading-[1.05]">
              Smart, <span className="text-primary">all day.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md mx-auto">
              Your home adapts to your rhythm — automatically.
            </p>
          </div>
        </Reveal>

        {/* Timeline connector line (visible on desktop only) */}
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute top-1/2 left-[8%] right-[8%] h-px bg-gradient-to-r from-amber-200 via-sky-200 via-violet-200 to-slate-300 -translate-y-1/2 z-0 opacity-60" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {scenes.map((scene, i) => (
              <Reveal key={scene.title} delay={i * 0.12} direction="up">
                <div className={`group relative bg-gradient-to-br ${scene.gradient} rounded-[24px] p-6 lg:p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${scene.glowColor} cursor-default overflow-hidden`}>
                  
                  {/* Subtle decorative dot */}
                  <div className={`w-2 h-2 ${scene.dotColor} rounded-full mx-auto mb-5 opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Time stamp — the visual anchor */}
                  <p className={`font-heading text-2xl lg:text-3xl font-bold tracking-tight ${scene.accentColor} mb-2 transition-transform duration-500 group-hover:scale-105`}>
                    {scene.time}
                  </p>

                  {/* Scene name */}
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/50 mb-4">
                    {scene.title}
                  </h3>
                  
                  {/* Thin separator */}
                  <div className="w-8 h-px bg-foreground/10 mx-auto mb-4" />

                  {/* Description */}
                  <p className="text-sm text-foreground/60 leading-relaxed font-normal">
                    {scene.description}
                  </p>

                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <Reveal delay={0.5}>
          <p className="text-center text-xs text-muted-foreground/50 mt-10 tracking-wide">
            One tap. Four scenes. Zero effort.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default ProductsInActionSection;
