import { Award, ShieldCheck, Wifi, Globe } from "lucide-react";
import { Reveal } from "@/hooks/useScrollReveal";

import googleHomeLogo from "@/assets/smart home/home-logo-transparent.png";
import alexaLogo from "@/assets/smart home/Amazon-alexa-logo-vector-transparent.png";
import homeKitLogo from "@/assets/smart home/Apple_HomeKit_logo.svg-transparent.png";
import smartThingsLogo from "@/assets/smart home/levant-SMART-THINGS-541517019-transparent.png";
import zigbeeLogo from "@/assets/smart home/png-transparent-zigbee-full-logo-tech-companies-transparent.png";
import zWaveLogo from "@/assets/smart home/png-clipart-logo-scalable-graphics-z-wave-automation-blue-text-transparent.png";
import matterLogo from "@/assets/smart home/matter-icon-logo-png_seeklogo-477960-transparent.png";
import threadLogo from "@/assets/smart home/png-transparent-thread-internet-of-things-zigbee-ieee-802-15-4-nest-labs-others-text-trademark-logo-transparent.png";

const certifications = [
  {
    icon: Award,
    title: "CE Certified",
    description: "All products carry the CE mark — meeting European safety, health, and environmental standards.",
    bgColor: "bg-[#F0F4FD] dark:bg-[#F0F4FD]/10",
  },
  {
    icon: ShieldCheck,
    title: "RoHS Compliant",
    description: "Free from hazardous substances. Safe for your family, safe for the environment.",
    bgColor: "bg-[#E6F4EA] dark:bg-[#E6F4EA]/10",
  },
  {
    icon: Wifi,
    title: "Zigbee & Z-Wave",
    description: "Industry-standard protocols ensuring reliable, interference-free smart home communication.",
    bgColor: "bg-[#FFF8E1] dark:bg-[#FFF8E1]/10",
  },
  {
    icon: Globe,
    title: "Global Ecosystem",
    description: "Seamlessly integrates with Google Home, Alexa, Apple HomeKit, and Samsung SmartThings.",
    bgColor: "bg-[#FCEDED] dark:bg-[#FCEDED]/10",
  },
];

const ecosystems = [
  { name: "Google Home", logo: googleHomeLogo },
  { name: "Amazon Alexa", logo: alexaLogo },
  { name: "Apple HomeKit", logo: homeKitLogo },
  { name: "SmartThings", logo: smartThingsLogo },
  { name: "Zigbee", logo: zigbeeLogo },
  { name: "Z-Wave", logo: zWaveLogo },
  { name: "Matter", logo: matterLogo },
  { name: "Thread", logo: threadLogo },
];

const EuropeanStandardSection = () => {
  return (
    <section className="py-28 lg:py-40">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-28">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
              Quality & Standards
            </p>
            <h2 className="font-heading text-[80px] font-bold text-foreground tracking-tight leading-[1.05]">
              European standard. <span className="text-primary">Bangladesh price.</span>
            </h2>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto">
              We source only CE-certified, internationally compliant products — ensuring world-class quality and safety for every home.
            </p>
          </div>
        </Reveal>

        {/* Certification Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-20 lg:mb-28">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.1} direction="up">
              <div className={`group ${cert.bgColor} rounded-[24px] p-7 lg:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 h-full text-center`}>
                <div className="w-11 h-11 rounded-full bg-white/60 dark:bg-black/20 border border-foreground/5 flex items-center justify-center mx-auto mb-5 group-hover:shadow-md transition-all duration-500">
                  <cert.icon size={20} strokeWidth={1.5} className="text-primary" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-foreground/80 mb-3">{cert.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed font-normal">{cert.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Ecosystem Compatibility */}
        <Reveal delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60 mb-10">
              Seamless integration with every ecosystem
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 lg:gap-4">
              {ecosystems.map((eco) => (
                <div
                  key={eco.name}
                  className="flex flex-col items-center gap-2.5 group cursor-default"
                >
                  <div className="w-20 h-20 flex items-center justify-center group-hover:-translate-y-0.5 transition-all duration-400">
                    <img src={eco.logo} alt={eco.name} className="w-14 h-14 object-contain" />
                  </div>
                  <span className="text-[9px] font-medium text-muted-foreground/50 group-hover:text-foreground transition-colors duration-400">
                    {eco.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default EuropeanStandardSection;
