import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/hooks/useScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";

const CTASection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="py-32 lg:py-48">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <Reveal>
          <h2 className="font-heading text-[80px] font-bold text-foreground tracking-tight leading-[1]">
            Ready to go smart?
          </h2>
          <p className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-md mx-auto">
            Get a free consultation and custom plan — no commitment required.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base px-10 h-14 gap-2">
                  Book Free Consultation
                  <ArrowRight size={18} />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] rounded-[32px] overflow-hidden border-none p-0 bg-transparent shadow-none">
                <div className="bg-white dark:bg-black rounded-[32px] p-8 lg:p-12 border border-border shadow-2xl animate-in zoom-in-95 duration-500">
                  <DialogHeader className="mb-6">
                    <DialogTitle className="text-3xl lg:text-4xl font-heading font-bold text-foreground tracking-tight leading-tight">
                      Let's build your <span className="text-primary">smart home.</span>
                    </DialogTitle>
                    <DialogDescription className="text-lg text-muted-foreground mt-2">
                      Fill out the form below and our specialist will reach out to schedule your free consultation.
                    </DialogDescription>
                  </DialogHeader>
                  <ContactForm onSuccess={() => setOpen(false)} />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
