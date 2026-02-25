import { useState } from "react";
import { motion } from "framer-motion";
import { procedures, type Procedure } from "@/data/procedures";
import ProcedureCard from "./ProcedureCard";
import ProcedureModal from "./ProcedureModal";

const ProceduresSection = () => {
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);

  return (
    <section className="py-20 px-6 bg-background" id="procedimentos">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body font-medium mb-3">
            Excelência em cada detalhe
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
            Nossos <span className="text-gradient-teal italic">Procedimentos</span>
          </h2>
          <p className="text-muted-foreground font-body text-sm max-w-lg mx-auto">
            Tecnologia de ponta aliada a um olhar clínico refinado. Conheça os tratamentos que transformam a sua relação com a pele.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {procedures.map((proc, i) => (
            <ProcedureCard key={proc.id} procedure={proc} index={i} onSelect={setSelectedProcedure} />
          ))}
        </div>
      </div>

      <ProcedureModal
        procedure={selectedProcedure}
        open={!!selectedProcedure}
        onOpenChange={(open) => !open && setSelectedProcedure(null)}
      />
    </section>
  );
};

export default ProceduresSection;
