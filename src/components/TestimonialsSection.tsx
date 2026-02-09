import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carolina M.",
    procedure: "Cirurgia Dermatológica",
    text: "Fiz a remoção de uma lesão suspeita e o Dr. Fabricio foi extremamente cuidadoso. Resultado excelente e cicatrização perfeita.",
    rating: 5,
  },
  {
    name: "Roberto S.",
    procedure: "Câncer de Pele",
    text: "Diagnóstico precoce que fez toda a diferença. Profissional atencioso, me explicou cada etapa do tratamento com clareza.",
    rating: 5,
  },
  {
    name: "Juliana R.",
    procedure: "Tratamento de Acne",
    text: "Depois de anos lutando com acne, finalmente encontrei um tratamento que funciona. Atendimento humanizado e resultados reais.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground">
            A confiança de quem{" "}
            <span className="text-gradient-teal italic font-medium">já se cuidou</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-8 rounded-2xl bg-background border border-border shadow-soft"
            >
              <Quote className="w-8 h-8 text-teal/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-teal text-teal" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-body font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="font-body text-sm text-primary">
                  {testimonial.procedure}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
