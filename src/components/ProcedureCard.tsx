import { motion } from "framer-motion";
import { Sparkles, Droplets, Dna, Waves, Sun, Leaf } from "lucide-react";
import type { Procedure } from "@/data/procedures";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Sparkles, Droplets, Dna, Waves, Sun, Leaf,
};

interface ProcedureCardProps {
  procedure: Procedure;
  index: number;
  onSelect: (p: Procedure) => void;
}

const ProcedureCard = ({ procedure, index, onSelect }: ProcedureCardProps) => {
  const Icon = iconMap[procedure.icon] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => onSelect(procedure)}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-500 h-full">
        <div className="relative h-52 overflow-hidden">
          <img
            src={procedure.image}
            alt={procedure.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <div className="w-10 h-10 rounded-full bg-primary/15 backdrop-blur-sm flex items-center justify-center border border-primary/25">
              <Icon className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-display text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
            {procedure.title}
          </h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            {procedure.summary}
          </p>
          <span className="inline-block mt-4 text-primary text-xs tracking-widest uppercase font-body font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Saiba mais →
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProcedureCard;
