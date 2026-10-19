import { useEffect, useState, FormEvent } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MessageCircle, Lock } from "lucide-react";

// Teste A/B do Google Ads: nesta versão da página, qualquer botão de WhatsApp
// abre primeiro um formulário curto (nome + WhatsApp). Ao enviar:
//  1) registra a conversão "Whatsapp" no Google Ads (com o telefone, para conversões otimizadas);
//  2) abre o WhatsApp com a mensagem já preenchida.

const WHATSAPP_NUMERO = "5547991549098";
const ADS_CONVERSAO = "AW-16568229025/wDnyCMOiqP4bEKG5rNw9";

type Props = { cidade: string };

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

// Mesmo formato que o gtag.js usa (a tag do Google já é carregada pelo Tag Manager).
function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

const soDigitos = (v: string) => v.replace(/\D/g, "");

const formatarTelefone = (v: string) => {
  const d = soDigitos(v).slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const LeadFormGate = ({ cidade }: Props) => {
  const [aberto, setAberto] = useState(false);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);

  // Intercepta qualquer clique em link de WhatsApp da página (menu, botões, botão flutuante).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const alvo = (e.target as HTMLElement | null)?.closest?.("a[href*='wa.me']");
      if (!alvo) return;
      e.preventDefault();
      e.stopPropagation();
      setErro("");
      setAberto(true);
    };
    window.addEventListener("click", onClick, true);
    return () => window.removeEventListener("click", onClick, true);
  }, []);

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    const primeiroNome = nome.trim().split(/\s+/)[0] || "";
    const digitos = soDigitos(telefone);
    if (primeiroNome.length < 2) return setErro("Informe seu nome.");
    if (digitos.length < 10 || digitos.length > 11) return setErro("Informe um WhatsApp com DDD.");
    setErro("");
    setEnviando(true);

    const msg = `Olá! Sou ${nome.trim()} e gostaria de agendar uma consulta em ${cidade}.`;
    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(msg)}`;
    let foi = false;
    const abrirWhatsApp = () => {
      if (foi) return;
      foi = true;
      window.location.href = url;
    };

    try {
      gtag("set", "user_data", { phone_number: `+55${digitos}`, address: { first_name: primeiroNome } });
      gtag("event", "conversion", { send_to: ADS_CONVERSAO, event_callback: abrirWhatsApp });
      window.dataLayer?.push({ event: "lead_form_submit", lead_cidade: cidade });
    } catch {
      /* se algo falhar no rastreamento, o paciente segue para o WhatsApp mesmo assim */
    }
    setTimeout(abrirWhatsApp, 900);
  };

  return (
    <Dialog open={aberto} onOpenChange={setAberto}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl font-light">
            Agendar consulta em <span className="italic text-primary">{cidade}</span>
          </DialogTitle>
          <DialogDescription className="font-body">
            Deixe seu nome e WhatsApp. Em seguida a conversa abre com a nossa equipe.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={enviar} className="space-y-4 mt-2" noValidate>
          <div>
            <label htmlFor="lead-nome" className="block text-sm font-body font-medium mb-1">Nome</label>
            <input
              id="lead-nome"
              autoComplete="name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-base focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="lead-tel" className="block text-sm font-body font-medium mb-1">WhatsApp com DDD</label>
            <input
              id="lead-tel"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              value={telefone}
              onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-base focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="(41) 99999-9999"
            />
          </div>

          {erro && <p className="text-sm text-destructive font-body">{erro}</p>}

          <button
            type="submit"
            disabled={enviando}
            className="w-full bg-[#25D366] text-white font-body font-semibold px-6 py-4 rounded-full inline-flex items-center justify-center gap-2 text-lg disabled:opacity-70"
          >
            <MessageCircle className="w-5 h-5" />
            {enviando ? "Abrindo o WhatsApp…" : "Continuar no WhatsApp"}
          </button>

          <p className="flex items-start gap-2 text-xs text-muted-foreground font-body">
            <Lock className="w-3.5 h-3.5 mt-0.5 shrink-0" />
            <span>
              Atendimento particular. Seus dados são usados só para o contato sobre o seu agendamento e
              para medir nossos anúncios. <a href="/privacidade" target="_blank" className="underline">Política de privacidade</a>.
            </span>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormGate;
