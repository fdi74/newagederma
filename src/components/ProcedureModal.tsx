import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const photos = procedure ? [procedure.image, ...(procedure.gallery ?? [])] : [];

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Recalcula o carrossel e volta para a primeira foto ao trocar de procedimento
  useEffect(() => {
    if (!api) return;
    api.reInit();
    setCount(api.scrollSnapList().length);
    api.scrollTo(0);
  }, [api, procedure?.id]);

  if (!procedure) return null;
  const Icon = iconMap[procedure.icon] || Sparkles;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden border-border bg-card">
        <div className="relative h-64 bg-black group/gallery">
          <Carousel setApi={setApi} className="w-full h-full">
            <CarouselContent className="h-64 ml-0">
              {photos.map((src, i) => (
                <CarouselItem key={i} className="h-64 pl-0">
                  <img
                    src={src}
                    alt={`${procedure.title}${photos.length > 1 ? ` — foto ${i + 1}` : ""}`}
                    className="w-full h-64 object-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {photos.length > 1 && (
              <>
                <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 bg-black/50 border-white/30 text-white hover:bg-black/70 hover:text-white z-20" />
                <CarouselNext className="right-3 top-1/2 -translate-y-1/2 bg-black/50 border-white/30 text-white hover:bg-black/70 hover:text-white z-20" />
                <div className="absolute bottom-5 right-6 z-20 flex items-center gap-1.5">
                  {Array.from({ length: count }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => api?.scrollTo(i)}
                      aria-label={`Ver foto ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === current ? "w-5 bg-primary" : "w-1.5 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </Carousel>
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-5 left-6 z-20 flex items-center gap-3">
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
