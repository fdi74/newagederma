import procToxina from "@/assets/proc-toxina.webp";
import procPreenchimento from "@/assets/proc-preenchimento.webp";
import procPeelingProfundo from "@/assets/procPeelingProfundo.jpeg";
import procPeelingGlicolico from "@/assets/peeling-glicolico-resultado.jpg";
import procSubcisao from "@/assets/subcisao-celulite-resultado.jpg";

export interface Procedure {
  id: string;
  title: string;
  summary: string;
  description: string;
  indications: string[];
  image: string;
  icon: string;
}

export const procedures: Procedure[] = [
  {
    id: "toxina-botulinica",
    title: "Toxina Botulínica",
    summary: "Suavização de rugas e linhas de expressão com naturalidade e precisão.",
    description:
      "A toxina botulínica é uma proteína purificada que, ao ser aplicada de forma estratégica, promove o relaxamento controlado da musculatura facial. O resultado é uma aparência descansada e rejuvenescida, preservando a expressividade natural do rosto. Na New Age, cada aplicação é personalizada para realçar a beleza única de cada paciente.",
    indications: [
      "Rugas na testa e região frontal",
      "Linhas ao redor dos olhos (pés de galinha)",
      "Vincos entre as sobrancelhas (glabela)",
    ],
    image: procToxina,
    icon: "Sparkles",
  },
  {
    id: "bioplastia-acido-hialuronico",
    title: "Bioplastia Facial com Ácido Hialurônico",
    summary: "Harmonização e rejuvenescimento facial completo, com técnica e naturalidade — o nosso maior destaque em medicina estética.",
    description:
      "A bioplastia facial com ácido hialurônico é uma das nossas especialidades: uma técnica completa de harmonização e rejuvenescimento que vai muito além da reposição pontual de volume. Utilizamos géis de alta performance para restaurar a estrutura facial, redefinir contornos, suavizar sulcos e devolver o equilíbrio natural do rosto — sempre com planejamento individualizado, técnica precisa e resultado harmônico, sem exageros.",
    indications: [
      "Olheiras profundas e sulco nasogeniano",
      "Definição e volume labial",
      "Contorno de mandíbula e queixo",
      "Maçãs do rosto e projeção malar",
      "Harmonização facial completa (rosto como um todo, não pontos isolados)",
    ],
    image: procPreenchimento,
    icon: "Droplets",
  },
  {
    id: "peeling-quimico-profundo",
    title: "Peeling Químico Profundo",
    summary: "Renovação celular intensa para o tratamento de rugas profundas e textura da pele.",
    description:
      "O peeling químico profundo é um procedimento padrão-ouro para o rejuvenescimento facial severo. Ao atingir as camadas mais profundas da derme, ele promove uma reorganização completa das fibras de colágeno, eliminando rugas marcadas, manchas actínicas e cicatrizes. É o tratamento ideal para quem busca um efeito de 'lifting' sem cirurgia, resultando em uma pele nova, firme e com brilho incomparável.",
    indications: [
      "Rugas profundas e vincos faciais acentuados",
      "Fotoenvelhecimento severo (danos solares crônicos)",
      "Cicatrizes de acne e irregularidades na textura",
      "Flacidez cutânea moderada",
    ],
    image: procPeelingProfundo,
    icon: "RefreshCw",
  },
  {
    id: "peeling-superficial-acido-glicolico",
    title: "Peeling Superficial com Ácido Glicólico",
    summary: "Renovação leve e progressiva da pele, com resultado consistente e sem tempo de recuperação.",
    description:
      "O peeling superficial com ácido glicólico é um procedimento simples e muito eficaz quando bem indicado e respeitado o tempo correto de aplicação: renova a camada mais superficial da pele, melhora textura e luminosidade e ajuda no controle de cravos, oleosidade e pequenas manchas — de forma gradual, confortável e sem sofrimento para a paciente. Costuma ser realizado em série, com resultado acumulativo.",
    indications: [
      "Textura irregular e poros dilatados",
      "Oleosidade e cravos",
      "Manchas superficiais e melasma leve",
      "Manutenção e brilho saudável da pele",
    ],
    image: procPeelingGlicolico,
    icon: "Leaf",
  },
  {
    id: "bioplastia-corporal-subcisao",
    title: "Subcisão para Celulite (com Retração)",
    summary: "Tratamento minimamente invasivo para celulite com sulcos e retrações, liberando as fibras que puxam a pele.",
    description:
      "A subcisão é indicada para celulites do tipo depressão/retração, causadas por fibras que prendem a pele ao tecido mais profundo. O procedimento libera essas fibras, suavizando os sulcos visíveis. Pode ser associado a outras técnicas para potencializar o resultado, sempre com avaliação individual do padrão de celulite de cada paciente.",
    indications: [
      "Celulite com sulcos e retrações visíveis",
      "Depressões localizadas em glúteos e coxas",
    ],
    image: procSubcisao,
    icon: "Waves",
  },
];
