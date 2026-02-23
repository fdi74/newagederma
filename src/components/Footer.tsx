import { Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate py-12 border-t border-slate-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="font-display text-2xl font-semibold text-cream mb-1">
              New Age <span className="text-gradient-teal">Derma</span>
            </div>
            <p className="font-body text-sm text-cream/40">
              Dr. Fabricio Dall'Igna · Dermatologia & Medicina Estética
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-cream/50 font-body text-sm">
            <a href="#" className="flex items-center gap-2 hover:text-teal transition-colors">
              <Instagram className="w-4 h-4" />
              @newagedermabc
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Balneário Camboriú, SC
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (47) 99154 - 9098
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-light text-center">
          <p className="font-body text-xs text-cream/30">
            © {new Date().getFullYear()} New Age Derma BC. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
