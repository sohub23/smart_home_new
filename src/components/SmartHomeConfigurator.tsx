import { useState } from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/hooks/useScrollReveal";

type RoomType = {
  id: string;
  name: string;
  emoji: string;
  basePrice: number;
};

type Feature = {
  id: string;
  name: string;
  emoji: string;
  pricePerRoom: number;
};

const roomTypes: RoomType[] = [
  { id: "1bhk", name: "1 BHK", emoji: "🏠", basePrice: 25000 },
  { id: "2bhk", name: "2 BHK", emoji: "🏡", basePrice: 45000 },
  { id: "3bhk", name: "3 BHK", emoji: "🏘️", basePrice: 65000 },
  { id: "4bhk", name: "4+ BHK / Duplex", emoji: "🏰", basePrice: 95000 },
  { id: "villa", name: "Villa / Penthouse", emoji: "🏛️", basePrice: 150000 },
];

const features: Feature[] = [
  { id: "curtain", name: "Smart Curtains", emoji: "🪟", pricePerRoom: 8000 },
  { id: "switch", name: "Smart Switches", emoji: "🔘", pricePerRoom: 3000 },
  { id: "light", name: "Smart Lighting", emoji: "💡", pricePerRoom: 4000 },
  { id: "lock", name: "Smart Locks", emoji: "🔐", pricePerRoom: 12000 },
  { id: "camera", name: "Security Cameras", emoji: "📹", pricePerRoom: 6000 },
  { id: "ac", name: "AC Control", emoji: "❄️", pricePerRoom: 5000 },
  { id: "film", name: "PDLC Smart Film", emoji: "🪟", pricePerRoom: 15000 },
  { id: "sensor", name: "Motion Sensors", emoji: "📡", pricePerRoom: 2500 },
];

const SmartHomeConfigurator = () => {
  const [step, setStep] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const selectedRoomData = roomTypes.find((r) => r.id === selectedRoom);

  const calculateTotal = () => {
    if (!selectedRoomData) return 0;
    const featuresTotal = selectedFeatures.reduce((sum, fId) => {
      const feature = features.find((f) => f.id === fId);
      return sum + (feature?.pricePerRoom || 0);
    }, 0);
    return selectedRoomData.basePrice + featuresTotal;
  };

  const formatPrice = (price: number) =>
    `${price.toLocaleString("en-BD")} BDT`;

  const stepLabels = ["Home Type", "Features", "Estimate", "Quotation"];

  return (
    <section id="configurator" className="py-28 lg:py-40">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary mb-6">
              Configure Your Home
            </p>
            <h2 className="font-heading text-[80px] font-bold text-foreground tracking-tight leading-[1.05]">
              Build your <span className="text-primary">smart home.</span>
            </h2>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto">
              Get an approximate quotation in 30 seconds.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="max-w-3xl mx-auto">

            {/* ─── Progress Stepper ─── */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-14">
              {stepLabels.map((label, i) => (
                <div key={label} className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-500 ${
                      step > i
                        ? "bg-primary text-primary-foreground"
                        : step === i
                          ? "bg-foreground text-background"
                          : "bg-foreground/5 text-foreground/30"
                    }`}>
                      {step > i ? <Check size={13} strokeWidth={3} /> : i + 1}
                    </div>
                    <span className={`text-xs font-medium hidden sm:block transition-colors duration-500 ${
                      step >= i ? "text-foreground" : "text-foreground/30"
                    }`}>{label}</span>
                  </div>
                  {i < 3 && (
                    <div className={`w-10 sm:w-16 h-px transition-colors duration-500 ${
                      step > i ? "bg-primary" : "bg-foreground/10"
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* ─── Step 1: Room Type ─── */}
            {step === 0 && (
              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/40 mb-6">
                  Select your home type
                </p>
                {roomTypes.map((room) => {
                  const isSelected = selectedRoom === room.id;
                  return (
                    <button
                      key={room.id}
                      onClick={() => setSelectedRoom(room.id)}
                      className={`w-full flex items-center gap-5 p-5 rounded-[20px] text-left transition-all duration-300 ${
                        isSelected
                          ? "bg-[#E6F4EA] dark:bg-[#E6F4EA]/10 shadow-md"
                          : "bg-[#F8F8F8] dark:bg-secondary/30 hover:bg-[#F0F0F0] dark:hover:bg-secondary/50"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl transition-all duration-300 ${
                        isSelected
                          ? "bg-white/70 dark:bg-black/20 shadow-sm"
                          : "bg-white/50 dark:bg-black/10"
                      }`}>
                        {room.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-heading font-semibold text-base text-foreground">{room.name}</p>
                        <p className="text-sm text-foreground/40">
                          Starting from {formatPrice(room.basePrice)}
                        </p>
                      </div>
                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Check size={13} strokeWidth={3} className="text-primary-foreground" />
                        </div>
                      )}
                    </button>
                  );
                })}
                <div className="pt-8 flex justify-end">
                  <Button
                    onClick={() => setStep(1)}
                    disabled={!selectedRoom}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-12 gap-2 text-sm font-semibold"
                  >
                    Next <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            )}

            {/* ─── Step 2: Features ─── */}
            {step === 1 && (
              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/40 mb-6">
                  Select features you want
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature) => {
                    const isSelected = selectedFeatures.includes(feature.id);
                    return (
                      <button
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        className={`flex items-center gap-4 p-5 rounded-[20px] text-left transition-all duration-300 ${
                          isSelected
                            ? "bg-[#E6F4EA] dark:bg-[#E6F4EA]/10 shadow-md"
                            : "bg-[#F8F8F8] dark:bg-secondary/30 hover:bg-[#F0F0F0] dark:hover:bg-secondary/50"
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-[12px] flex items-center justify-center text-xl transition-all duration-300 ${
                          isSelected
                            ? "bg-white/70 dark:bg-black/20 shadow-sm"
                            : "bg-white/50 dark:bg-black/10"
                        }`}>
                          {feature.emoji}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-heading font-semibold text-sm text-foreground">{feature.name}</p>
                          <p className="text-xs text-foreground/40">
                            +{formatPrice(feature.pricePerRoom)}
                          </p>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <Check size={11} strokeWidth={3} className="text-primary-foreground" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
                <div className="pt-8 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(0)} className="rounded-full px-8 h-12 gap-2 border-foreground/10 text-sm font-semibold">
                    <ArrowLeft size={16} /> Back
                  </Button>
                  <Button
                    onClick={() => setStep(2)}
                    disabled={selectedFeatures.length === 0}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-12 gap-2 text-sm font-semibold"
                  >
                    See Estimate <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            )}

            {/* ─── Step 3: Estimate ─── */}
            {step === 2 && selectedRoomData && (
              <div className="text-center">
                <div className="bg-[#F0F4FD] dark:bg-[#F0F4FD]/10 rounded-[24px] p-10 lg:p-14 mb-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/40 mb-6">
                    Approximate Estimate
                  </p>
                  <p className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-2">
                    {formatPrice(calculateTotal())}
                  </p>
                  <p className="text-sm text-foreground/50 mb-10">
                    For {selectedRoomData.name} with {selectedFeatures.length} feature{selectedFeatures.length > 1 ? "s" : ""}
                  </p>

                  {/* Breakdown */}
                  <div className="border-t border-foreground/5 pt-8 space-y-3.5 max-w-sm mx-auto text-left">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/50">Base ({selectedRoomData.name})</span>
                      <span className="font-semibold text-foreground">{formatPrice(selectedRoomData.basePrice)}</span>
                    </div>
                    {selectedFeatures.map((fId) => {
                      const f = features.find((x) => x.id === fId);
                      if (!f) return null;
                      return (
                        <div key={fId} className="flex justify-between text-sm">
                          <span className="text-foreground/50">{f.name}</span>
                          <span className="font-semibold text-foreground">+{formatPrice(f.pricePerRoom)}</span>
                        </div>
                      );
                    })}
                    <div className="border-t border-foreground/10 pt-4 flex justify-between text-base font-bold">
                      <span className="text-foreground">Total</span>
                      <span className="text-primary">{formatPrice(calculateTotal())}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-foreground/30 mb-8">
                  * This is an approximate estimate. Final pricing may vary based on site survey and customization.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  <Button 
                    onClick={() => setStep(3)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-12 gap-2 text-sm font-semibold"
                  >
                    Get a Quotation <ArrowRight size={16} />
                  </Button>
                  <Button variant="outline" onClick={() => { setStep(0); setSelectedRoom(null); setSelectedFeatures([]); }} className="rounded-full px-8 h-12 border-foreground/10 text-sm font-semibold">
                    Start Over
                  </Button>
                </div>

                <div className="pt-4">
                  <Button variant="ghost" onClick={() => setStep(1)} className="rounded-full px-8 h-10 gap-2 text-sm text-foreground/50 hover:text-foreground">
                    <ArrowLeft size={14} /> Modify Features
                  </Button>
                </div>
              </div>
            )}

            {/* ─── Step 4: Final Form ─── */}
            {step === 3 && (
              <div className="bg-[#F8F8F8] dark:bg-secondary/30 rounded-[32px] p-8 lg:p-12 animate-in fade-in zoom-in-95 duration-500">
                <div className="max-w-md mx-auto">
                  <div className="text-center mb-10">
                    <h3 className="text-3xl font-heading font-bold text-foreground mb-3">Finalize Quotation</h3>
                    <p className="text-muted-foreground text-sm">
                      Please provide your details so we can send the formal quotation for your **{selectedRoomData?.name}** setup.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground/40 px-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full h-12 px-4 rounded-xl border border-foreground/5 bg-white dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground/40 px-1">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+880 1XXX-XXXXXX" 
                        className="w-full h-12 px-4 rounded-xl border border-foreground/5 bg-white dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground/40 px-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="email@example.com" 
                        className="w-full h-12 px-4 rounded-xl border border-foreground/5 bg-white dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-bold uppercase tracking-wider text-foreground/40 px-1">Installation Address</label>
                      <textarea 
                        placeholder="Your residential address in Bangladesh..." 
                        className="w-full h-24 p-4 rounded-xl border border-foreground/5 bg-white dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      />
                    </div>
                    
                    <div className="pt-4 flex flex-col gap-3">
                      <Button 
                        onClick={() => {
                          alert("Quotation request submitted! We will contact you soon.");
                          setStep(0);
                          setSelectedRoom(null);
                          setSelectedFeatures([]);
                        }}
                        className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
                      >
                        Submit Information
                      </Button>
                      <Button 
                        variant="ghost" 
                        onClick={() => setStep(2)}
                        className="text-foreground/50 hover:text-foreground text-sm"
                      >
                        Back to Summary
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SmartHomeConfigurator;
