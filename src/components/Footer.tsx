import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div>
            <img src={logo} alt="sohub logo" className="h-[42px] w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Bangladesh's trusted smart home brand. Making every home intelligent.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50 mb-5">Products</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors duration-300">ALO Smart Curtain</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-300">Smart Switch</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-300">PDLC Film</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-300">Smart Light</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50 mb-5">Company</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-300">Gallery</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors duration-300">Careers</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50 mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>+880 1234-567890</li>
              <li>hello@sohub.com.bd</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/40">
            © {new Date().getFullYear()} Solution Hub Technologies (SOHUB)
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground/40">
            <a href="#" className="hover:text-foreground transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
