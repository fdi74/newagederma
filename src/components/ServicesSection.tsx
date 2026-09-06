import { motion } from "framer-motion";
import { Scissors, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Dermatologia Cirúrgica",
    description:
      "Procedimentos para remoção ou cauterização de lesões benignas como verrugas, pintas e calosidades. Cirurgia de cisto sebáceo, lipoma, corpo estranho e cantoplastia (unha encravada). Cirurgia para cânceres de pele com ou sem retalhos ou enxertos, biópsias para diagnóstico e reparo de lóbulo de orelha — priorizando segurança, resolução da patologia e resultado estético.",
    highlights: [
      "Remoção de verrugas, pintas e calosidades",
      "Cisto sebáceo, lipoma e corpo estranho",
      "Cantoplastia (unha encravada)",
      "Cirurgia oncológica com retalhos e enxertos",
      "Biópsia de pele para diagnóstico",
      "Reparo de lóbulo de orelha",
    ],
  },
  {
    icon: Stethoscope,
    title: "Dermatologia Clínica",
    description:
      "Focada na prevenção, diagnóstico e tratamento de doenças que afetam a pele, cabelos e unhas. Inclui cuidados contínuos, acompanhamento individualizado e terapias baseadas em evidências científicas.",
    highlights: [
      "Prevenção e diagnóstico de doenças de pele",
      "Tratamento de cabelos e unhas",
      "Acompanhamento individualizado",
      "Terapias baseadas em evidências",
    ],
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group p-10 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-teal transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-3xl font-medium text-foreground mb-4">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
