import { ExternalLink, Image as ImageIcon } from "lucide-react";
import { Reveal } from "@/hooks/useScrollReveal";
import aloVideo from "@/assets/smart home/new curtain.mp4";
import lightsImg from "@/assets/smart home/unwatermarked_lights_transparent.webp";
import switchImg from "@/assets/smart home/switch_1_transparent.webp";

const products = [
  {
    id: "curtain",
    emoji: "🪟",
    name: "ALO SMART CURTAIN",
    description: "Automated curtain control with voice, app, and scheduling. Seamless integration with natural lighting.",
    video: aloVideo,
    image: null,
    bgColor: "bg-[#F0F4FD] dark:bg-[#F0F4FD]/10", // Google Blue tint
    borderColor: "border-[#A8C7FA]/50 dark:border-[#A8C7FA]/20", // Subtle active border
  },
  {
    id: "switch",
    emoji: "🔘",
    name: "SMART SWITCH",
    description: "Touch-panel switches that replace existing ones. No rewiring required.",
    image: switchImg,
    bgColor: "bg-[#FCEDED] dark:bg-[#FCEDED]/10", // Google Red tint
    borderColor: "border-transparent text-transparent",
  },
  {
    id: "film",
    emoji: "🛡️",
    name: "PDLC SMART FILM",
    description: "Switchable privacy glass — clear or frosted instantly with a single tap.",
    image: null,
    bgColor: "bg-[#E6F4EA] dark:bg-[#E6F4EA]/10", // Google Green tint
    borderColor: "border-transparent text-transparent",
  },
  {
    id: "light",
    emoji: "💡",
    name: "SMART LIGHT ECOSYSTEM",
    description: "Dimmable, color-adjustable bulbs for every mood. Seamlessly integrate with routines and sensors.",
    image: lightsImg,
    bgColor: "bg-[#FFF8E1] dark:bg-[#FFF8E1]/10", // Google Yellow tint
    borderColor: "border-transparent text-transparent",
  }
];

const ProductCard = ({ product }: { product: typeof products[0] }) => (
  <Reveal direction="up" className="w-full h-full flex">
    <div className={`w-full ${product.bgColor} border ${product.borderColor} rounded-[24px] p-6 pb-10 flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-1`}>
      
      {/* Media Placeholder: Scaled up slightly */}
      <div className="h-[200px] sm:h-[240px] relative mb-6 w-full rounded-[16px] bg-white dark:bg-black overflow-hidden flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        {product.video ? (
          <video 
            src={product.video}
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          />
        ) : product.image ? (
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <>
            <span className="text-6xl text-foreground/40">{product.emoji}</span>
            {/* Placeholder helper icon */}
            <div className="absolute top-3 right-3">
              <ImageIcon className="w-4 h-4 text-foreground/20" />
            </div>
          </>
        )}
      </div>

      <div className="flex-grow flex flex-col justify-center items-center px-4">
        <span className="text-xs font-bold tracking-[0.12em] text-foreground/50 uppercase mb-4 text-center">
          {product.name}
        </span>

        <p className="text-base sm:text-lg text-foreground/80 leading-[1.6] font-medium max-w-[320px]">
          {product.description}
        </p>
      </div>

    </div>
  </Reveal>
);

const ProductsSection = () => {
  return (
    <section id="products" className="py-28 lg:py-40">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <h2 className="font-heading text-[80px] font-bold text-foreground tracking-tight leading-[1.05]">
              Designed for <span className="text-primary">Bangladesh.</span>
            </h2>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto">
              Reliable, affordable, and beautifully engineered smart devices.
            </p>
          </div>
        </Reveal>

        {/* Scaled up grid: increased max-width and gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto lg:px-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
