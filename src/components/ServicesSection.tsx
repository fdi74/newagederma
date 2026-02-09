import { motion } from "framer-motion";
import { Stethoscope, Scissors, Search, ShieldCheck, Microscope, Activity } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Consulta Dermatológica",
    description: "Avaliação clínica completa da pele, cabelos e unhas com diagnóstico preciso e tratamento personalizado.",
  },
  {
    icon: Scissors,
    title: "Cirurgia Dermatológica",
    description: "Remoção de lesões, cistos, lipomas e tumores cutâneos com técnicas minimamente invasivas.",
  },
  {
    icon: Search,
    title: "Dermatoscopia Digital",
    description: "Mapeamento e acompanhamento de pintas e lesões com tecnologia avançada de imagem.",
  },
  {
    icon: ShieldCheck,
    title: "Câncer de Pele",
    description: "Diagnóstico precoce e tratamento cirúrgico de carcinomas e melanomas.",
  },
  {
    icon: Microscope,
    title: "Biópsia de Pele",
    description: "Procedimento diagnóstico com análise histopatológica para investigação de lesões suspeitas.",
  },
  {
    icon: Activity,
    title: "Tratamentos Clínicos",
    description: "Acne, rosácea, psoríase, dermatite, melasma e outras dermatoses com protocolos atualizados.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
            Especialidades
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground">
            Cuidado completo para a{" "}
            <span className="text-gradient-teal italic font-medium">sua pele</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-teal transition-all duration-500 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-teal flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
