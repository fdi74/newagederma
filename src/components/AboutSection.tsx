import { motion } from "framer-motion";
import { MessageCircle, Award, Clock, Users } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const WHATSAPP_LINK = "https://wa.me/5547999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

const stats = [
  { icon: Users, value: "5.000+", label: "Pacientes atendidos" },
  { icon: Award, value: "10+", label: "Anos de experiência" },
  { icon: Clock, value: "98%", label: "Satisfação" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-gradient-dark text-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-teal">
              <img
                src={aboutImage}
                alt="Resultados dermatológicos"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-teal/30 rounded-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-sm tracking-[0.3em] uppercase text-teal-light mb-4 block">
              Dr. Fabricio Dall'Igna
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
              Dermatologia com{" "}
              <span className="text-gradient-teal italic font-medium">precisão</span>{" "}
              e humanização
            </h2>
            <p className="font-body text-cream-dark/70 text-lg leading-relaxed mb-4">
              Especialista em dermatologia clínica e cirúrgica, o Dr. Fabricio Dall'Igna 
              é referência em Balneário Camboriú no diagnóstico e tratamento de doenças 
              de pele, cirurgias dermatológicas e prevenção do câncer de pele.
            </p>
            <p className="font-body text-cream-dark/70 text-lg leading-relaxed mb-8">
              Na New Age Derma, cada paciente recebe atendimento individualizado, 
              com tecnologia de ponta e protocolos baseados em evidências científicas.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-5 h-5 text-teal mx-auto mb-2" />
                  <div className="font-display text-2xl md:text-3xl font-semibold text-teal">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs text-cream-dark/60 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-teal text-primary-foreground font-body font-medium px-8 py-4 rounded-full inline-flex items-center gap-3 shadow-teal hover:scale-105 transition-transform duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Consulta
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
