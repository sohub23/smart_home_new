import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#testimonials" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-2xl">
      <div className="container mx-auto flex items-center justify-between h-12 px-4 lg:px-8">
        <a href="#" className="flex items-center">
          <img src={logo} alt="sohub logo" className="h-[42px] w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-black hover:text-black/70 transition-colors duration-300 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button size="sm" asChild className="hidden md:inline-flex bg-black text-white hover:bg-black/90 rounded-full text-xs h-8 px-5 font-medium cursor-pointer">
          <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Get a Quote</a>
        </Button>

        <button className="md:hidden text-black" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-2xl px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block py-3 text-sm font-medium text-black cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="w-full mt-2 bg-black text-white hover:bg-black/90 rounded-full text-sm cursor-pointer">
            <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Get a Quote</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
