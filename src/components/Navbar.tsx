import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const WHATSAPP_LINK = "https://wa.me/5547999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="New Age Derma" className="h-12 w-auto rounded" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="font-body text-sm text-cream/70 hover:text-teal transition-colors">
            Especialidades
          </a>
          <a href="#sobre" className="font-body text-sm text-cream/70 hover:text-teal transition-colors">
            Sobre
          </a>
          <a href="#depoimentos" className="font-body text-sm text-cream/70 hover:text-teal transition-colors">
            Depoimentos
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-teal text-primary-foreground font-body font-medium px-5 py-2.5 rounded-full inline-flex items-center gap-2 text-sm shadow-teal hover:scale-105 transition-transform duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar Consulta
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cream"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate/95 backdrop-blur-md border-t border-teal/10 px-6 py-6 flex flex-col gap-4"
        >
          <a href="#servicos" onClick={() => setMenuOpen(false)} className="font-body text-cream/80 hover:text-teal transition-colors">
            Especialidades
          </a>
          <a href="#sobre" onClick={() => setMenuOpen(false)} className="font-body text-cream/80 hover:text-teal transition-colors">
            Sobre
          </a>
          <a href="#depoimentos" onClick={() => setMenuOpen(false)} className="font-body text-cream/80 hover:text-teal transition-colors">
            Depoimentos
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-teal text-primary-foreground font-body font-medium px-5 py-3 rounded-full inline-flex items-center justify-center gap-2 shadow-teal"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar Consulta
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
