import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5547999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-cream" />
    </motion.a>
  );
};

export default WhatsAppFloat;
