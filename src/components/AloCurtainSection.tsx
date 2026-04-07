import { Hand, Zap, Clock } from 'lucide-react';
import { Reveal } from '@/hooks/useScrollReveal';
import curtainVideo from '@/assets/smart home/curtain_hero.mp4';

const AloCurtainSection = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <Reveal>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-5xl xl:text-[54px] font-bold text-foreground tracking-tight leading-[1.05] whitespace-nowrap">
                Control your <span className="text-primary">Alo</span> smartly.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-sm">
                Wake up to natural sunlight without leaving your bed.
              </p>
            </Reveal>

            {/* Benefits List */}
            <div className="space-y-3 pt-2">
              <Reveal delay={0.1}>
                <div className="flex items-center space-x-4 p-3.5 sm:p-4 rounded-[20px] bg-[#F8F8F8] dark:bg-secondary/30 transition-all duration-300 hover:bg-[#F0F0F0] dark:hover:bg-secondary/50 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-white dark:bg-black/20 rounded-[12px] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Hand className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground font-heading">No physical effort</h3>
                    <p className="text-xs sm:text-sm text-foreground/60">Silent & smooth operation.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex items-center space-x-4 p-3.5 sm:p-4 rounded-[20px] bg-[#F8F8F8] dark:bg-secondary/30 transition-all duration-300 hover:bg-[#F0F0F0] dark:hover:bg-secondary/50 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-white dark:bg-black/20 rounded-[12px] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground font-heading">Instant control</h3>
                    <p className="text-xs sm:text-sm text-foreground/60">App, remote, or voice commands.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex items-center space-x-4 p-3.5 sm:p-4 rounded-[20px] bg-[#F8F8F8] dark:bg-secondary/30 transition-all duration-300 hover:bg-[#F0F0F0] dark:hover:bg-secondary/50 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-white dark:bg-black/20 rounded-[12px] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground font-heading">Fully automated</h3>
                    <p className="text-xs sm:text-sm text-foreground/60">Set morning & evening schedules.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Visual Video */}
          <Reveal delay={0.2} direction="left">
            <div className="relative w-full aspect-video rounded-[32px] overflow-hidden shadow-2xl bg-secondary group mt-6 lg:mt-32">
              <video
                src={curtainVideo}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AloCurtainSection;
