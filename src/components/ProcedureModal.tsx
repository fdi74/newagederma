import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sparkles, Droplets, Dna, Waves, Sun, Leaf, Check } from "lucide-react";
import type { Procedure } from "@/data/procedures";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Sparkles, Droplets, Dna, Waves, Sun, Leaf,
};

interface ProcedureModalProps {
  procedure: Procedure | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProcedureModal = ({ procedure, open, onOpenChange }: ProcedureModalProps) => {
  if (!procedure) return null;
  const Icon = iconMap[procedure.icon] || Sparkles;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden border-border bg-card">
        <div className="relative h-64 bg-black">
          <img src={procedure.image} alt={procedure.title} className="w-full h-full object-contain" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          <div className="absolute bottom-5 left-6 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary/15 backdrop-blur-sm flex items-center justify-center border border-primary/30">
              <Icon className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>

        <div className="px-7 pb-7 -mt-2 relative">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl font-light text-foreground">
              {procedure.title}
            </DialogTitle>
          </DialogHeader>

          <div className="mt-5">
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary font-body font-semibold mb-2">
              O que é?
            </h4>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              {procedure.description}
            </p>
          </div>

          <div className="mt-5">
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary font-body font-semibold mb-2">
              Principais Indicações
            </h4>
            <ul className="space-y-2">
              {procedure.indications.map((ind, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground font-body">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {ind}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-teal text-primary-foreground px-6 py-3 text-sm tracking-widest uppercase font-body font-semibold hover:opacity-90 transition-opacity rounded-lg"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProcedureModal;
