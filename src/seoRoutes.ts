// Título, descrição e URL canônica de cada página.
// Usado em dois lugares: no build (gera um HTML próprio por página, que o Google lê)
// e no navegador (atualiza as tags quando o visitante troca de página).
export const SITE_URL = "https://newagedermabc.com.br";

export type RouteSeo = { title: string; description: string };

export const SEO_ROUTES: Record<string, RouteSeo> = {
  "/": {
    title: "Dermatologista em Balneário Camboriú | Dr. Fabricio Dall'Igna",
    description:
      "Dr. Fabrício Dall'Igna, dermatologista em Balneário Camboriú. Especialista em melasma, acne, peeling profundo e estética avançada. Agende sua consulta.",
  },
  "/lift-diamond": {
    title: "Lift Diamond™ | Laser CO2 + Exossomos – Dr. Fabricio Dall'Igna",
    description:
      "Lift Diamond™: programa exclusivo de regeneração da pele com Laser CO2 ultrafracionado e exossomos, com acompanhamento médico do Dr. Fabricio Dall'Igna em Balneário Camboriú e Curitiba.",
  },
  "/curitiba": {
    title: "Dermatologista em Curitiba | Dr. Fabricio Dall'Igna – New Age Derma",
    description:
      "Dermatologista em Curitiba (Cabral). Consulta dermatológica, cirurgia dermatológica, laser e estética com o Dr. Fabricio Dall'Igna. Agende pelo WhatsApp.",
  },
  "/contato": {
    title: "Contato e Agendamento | New Age Derma – Dr. Fabricio Dall'Igna",
    description:
      "Agende sua consulta dermatológica com o Dr. Fabricio Dall'Igna em Balneário Camboriú ou Curitiba. Fale com a New Age Derma.",
  },
};

export const canonicalFor = (path: string) =>
  path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
