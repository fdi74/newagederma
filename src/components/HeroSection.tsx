import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import LaserBackground from "./LaserBackground";

const WHATSAPP_LINK = "https://wa.me/5547991549098?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fundo: laser fracionado + foto do Dr. Fabricio + SmartXide */}
      <div className="absolute inset-0 bg-[#060d10]" aria-hidden="true">
        <LaserBackground />
        <div className="absolute inset-y-0 right-0 w-full md:w-[60%] lg:w-[52%] pointer-events-none">
          <img
            src="/dr-fabricio-hero.webp"
            alt=""
            width={640}
            height={721}
            className="absolute bottom-0 right-1/2 translate-x-1/2 md:translate-x-0 md:right-[4%] lg:right-[12%] h-[62vh] md:h-[88vh] lg:h-[82vh] w-auto max-w-none opacity-50 md:opacity-100"
            style={{
              WebkitMaskImage: "radial-gradient(ellipse 62% 70% at 50% 42%, #000 55%, transparent 100%)",
              maskImage: "radial-gradient(ellipse 62% 70% at 50% 42%, #000 55%, transparent 100%)",
            }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <img
            src="/smartxide-hero.webp"
            alt=""
            width={260}
            height={530}
            className="hidden lg:block absolute bottom-[3vh] right-[1%] h-[42vh] w-auto"
            style={{ filter: "drop-shadow(0 0 28px rgba(64, 224, 208, 0.35)) brightness(0.92)" }}
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="absolute inset-0 bg-[#060d10]/50 md:bg-transparent md:bg-gradient-to-r md:from-[#060d10]/95 md:via-[#060d10]/60 md:to-transparent" />
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
              New Age Derma · Dr. Fabricio Dall'Igna
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
