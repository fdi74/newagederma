import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_LINK = "https://wa.me/5547999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="New Age Derma - Dermatologia em Balneário Camboriú"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate/90 via-slate/70 to-slate/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4"
          >
            <span className="font-body text-sm tracking-[0.3em] uppercase text-teal-light">
              Dr. Fabricio Dall'Igna — CRM/SC
            </span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-[0.95] mb-6">
            Dermatologia{" "}
            <span className="text-gradient-teal italic font-medium">de excelência</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-body text-lg md:text-xl text-cream-dark/80 mb-10 max-w-lg leading-relaxed"
          >
            Diagnóstico preciso, cirurgias dermatológicas e tratamentos avançados 
            com atendimento humanizado em Balneário Camboriú.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-teal text-primary-foreground font-body font-medium px-8 py-4 rounded-full inline-flex items-center justify-center gap-3 text-lg shadow-teal hover:scale-105 transition-transform duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Agende sua Consulta
            </a>
            <a
              href="#servicos"
              className="font-body font-medium px-8 py-4 rounded-full inline-flex items-center justify-center border border-cream-dark/30 text-cream-dark/90 hover:border-teal hover:text-teal transition-colors duration-300"
            >
              Conheça as Especialidades
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-cream-dark/30 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-teal" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
