import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone, CalendarDays, Stethoscope, Scissors, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const Estetica = lazy(() => import("@/components/ProceduresSection"));
const WhatsAppFloat = lazy(() => import("@/components/WhatsAppFloat"));

// Mesmo número da clínica; a mensagem já avisa que o paciente é de Curitiba.
const WHATSAPP_LINK =
  "https://wa.me/5547991549098?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20em%20Curitiba.";

const ENDERECO = "Av. Anita Garibaldi, 850 – Salas 601/602 – Cabral, Curitiba – PR";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Av.+Anita+Garibaldi,+850,+Cabral,+Curitiba+PR";

const destaques = [
  { icon: Stethoscope, titulo: "Dermatologia clínica", texto: "Acne, melasma, manchas, queda de cabelo, dermatites, vitiligo e psoríase, com diagnóstico preciso." },
  { icon: Scissors, titulo: "Cirurgia dermatológica", texto: "Biópsias, remoção de pintas, cistos e verrugas, cirurgia de câncer de pele e reparo de lóbulo de orelha." },
  { icon: Sparkles, titulo: "Estética e laser", texto: "Laser CO2 ultrafracionado, peelings, toxina botulínica, Bioplastia com ácido hialurônico e Lift Diamond." },
];

const Curitiba = () => {

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* HERO CURITIBA */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hero-bg-1920.webp"
              srcSet="/hero-bg-828.webp 828w, /hero-bg-1920.webp 1920w"
              sizes="100vw"
              width={1920}
              height={1080}
              alt="New Age Derma - Dermatologista em Curitiba"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate/90 via-slate/75 to-slate/40" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center md:text-left w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <span className="font-body text-sm tracking-[0.3em] uppercase text-teal-light mb-4 block">
                Dr. Fabricio Dall'Igna — Dermatologista
              </span>

              <h1 className="font-display text-5xl md:text-7xl font-light text-cream leading-[0.95] mb-6">
                Dermatologista{" "}
                <span className="text-gradient-teal italic font-medium">em Curitiba</span>
              </h1>

              <p className="font-body text-lg md:text-xl text-cream-dark/80 mb-6 max-w-lg leading-relaxed">
                Consulta dermatológica, cirurgias dermatológicas e tratamentos a laser com
                atendimento individualizado no bairro Cabral.
              </p>

              <div className="flex flex-col gap-2 mb-10 font-body text-cream-dark/80 text-base items-center md:items-start">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal" /> Av. Anita Garibaldi, 850 – Cabral
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-teal" /> Atendimento de segunda a quarta
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-teal text-primary-foreground font-body font-medium px-8 py-4 rounded-full inline-flex items-center justify-center gap-3 text-lg shadow-teal hover:scale-105 transition-transform duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar consulta em Curitiba
                </a>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body font-medium px-8 py-4 rounded-full inline-flex items-center justify-center border border-cream-dark/30 text-cream-dark/90 hover:border-teal hover:text-teal transition-colors duration-300"
                >
                  Ver no mapa
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* O QUE ATENDEMOS EM CURITIBA */}
        <section id="sobre" className="py-20 md:py-28 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block text-center">
              Atendimento em Curitiba
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground text-center mb-4">
              Tudo em um só lugar, <span className="italic text-primary">perto de você</span>
            </h2>
            <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-14">
              Consultório com sala de procedimentos e equipamentos de laser de última geração.
              Você não precisa viajar para ter o tratamento completo.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {destaques.map(({ icon: Icon, titulo, texto }) => (
                <div key={titulo} className="rounded-2xl border border-border bg-card p-8 shadow-soft">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display text-2xl text-foreground mb-3">{titulo}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{texto}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-teal text-primary-foreground font-body font-medium px-8 py-4 rounded-full inline-flex items-center justify-center gap-3 shadow-teal hover:scale-105 transition-transform duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        <ServicesSection />

        <Suspense fallback={null}>
          <section id="depoimentos">
            <TestimonialsSection />
          </section>
          <Estetica />
        </Suspense>

        {/* CTA FINAL CURITIBA */}
        <section className="py-24 md:py-32 bg-gradient-dark relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <span className="font-body text-sm tracking-[0.3em] uppercase text-teal-light mb-4 block">
              Agende Agora
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-light text-cream leading-tight mb-6">
              Sua consulta <span className="text-gradient-teal italic font-medium">em Curitiba</span>
            </h2>
            <p className="font-body text-lg text-cream-dark/60 max-w-2xl mx-auto mb-10">
              Atendimento de segunda a quarta, no Cabral. Chame no WhatsApp e escolha o melhor horário.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-teal text-primary-foreground font-body font-semibold px-10 py-5 rounded-full inline-flex items-center gap-3 text-lg shadow-teal hover:scale-105 transition-transform duration-300 mb-12"
            >
              <MessageCircle className="w-6 h-6" />
              Agendar pelo WhatsApp
            </a>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-cream-dark/60 font-body text-sm">
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-teal">
                <MapPin className="w-4 h-4 text-teal" />
                {ENDERECO}
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal" />
                (47) 99154-9098
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate py-8 text-center font-body text-xs text-cream-dark/50 px-6">
        New Age Derma · Dr. Fabricio Dall'Igna · {ENDERECO} · Também atendemos em Balneário Camboriú (quinta e sexta)
      </footer>

      <Suspense fallback={null}>
        <WhatsAppFloat />
      </Suspense>
    </>
  );
};

export default Curitiba;
