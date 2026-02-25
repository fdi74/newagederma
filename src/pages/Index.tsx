import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Estetica from "@/components/ProceduresSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider"; // Importando o componente base
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// 1. Importar as imagens (Aqui você cria um "apelido" para o arquivo)
import antesFacial from "@/assets/before.jpg";
import depoisFacial from "@/assets/after.jpg";

// 2. Definição dos dados (Use o "apelido" SEM aspas)
const transformations = [
  { 
    id: 1, 
    label: "Facial", 
    beforeImage: antesFacial, // Variável, não string!
    afterImage: depoisFacial 
  },
  { 
    id: 2, 
    label: "Corporal", 
    beforeImage: antesFacial, 
    afterImage: depoisFacial 
  },
  { 
    id: 3, 
    label: "Capilar", 
    beforeImage: antesFacial, 
    afterImage: depoisFacial 
  },
];

const Index = () => {
  // 2. Estado para controlar qual transformação está ativa
  const [activeIndex, setActiveIndex] = useState(0);
  const active = transformations[activeIndex];

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        
        <section id="depoimentos">
          <TestimonialsSection />
        </section>
        
        <Estetica />

        {/* 3. Seção de Transformações (Antes e Depois) integrada aqui */}
        <section className="flex flex-col items-center justify-center px-4 py-20 bg-background">
          <span className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Resultados Comprovados
          </span>
          <h2 className="mb-3 text-center font-display text-4xl font-bold text-foreground md:text-5xl">
            Transformações Reais
          </h2>
          <p className="mb-12 max-w-lg text-center text-muted-foreground font-light">
            Veja os resultados alcançados com nossos tratamentos na New Age.
          </p>

          <div className="relative w-full max-w-5xl mx-auto">
            {/* Botões de Categoria sobrepostos */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex gap-2 w-max">
              {transformations.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIndex(i)}
                  className={`px-5 py-2 rounded-full text-xs font-medium uppercase transition-all duration-300 backdrop-blur-md border ${
                    i === activeIndex
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background/60 text-foreground/80 border-border hover:border-primary/50"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* O Componente de Slider que recebe as imagens do estado "active" */}
            <BeforeAfterSlider
              beforeImage={active.beforeImage}
              afterImage={active.afterImage}
              beforeLabel="Antes"
              afterLabel="Depois"
            />
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path d="M8 5L3 12L8 19M16 5L21 12L16 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Arraste o marcador para comparar
          </p>
        </section>

        <CTASection />
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index; // APENAS UMA VEZ AQUI
