import procToxina from "@/assets/proc-toxina.webp";
import procPreenchimento from "@/assets/proc-preenchimento.webp";
import procBioestimulador from "@/assets/proc-bioestimulador.webp";
import procUltraformer from "@/assets/proc-ultraformer.webp";
import procLavieen from "@/assets/proc-lavieen.webp";
import procLimpeza from "@/assets/proc-limpeza.webp";
import procPeelingProfundo from "@/assets/procPeelingProfundo.jpeg";

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
      image: procPeelingProfundo, // Certifique-se de importar esta imagem
      icon: "RefreshCw",
    },
  
  {
    id: "preenchimento-acido-hialuronico",
    title: "Preenchimento com Ácido Hialurônico",
    summary: "Reposição de volume e harmonização dos contornos faciais com sofisticação.",
    description:
      "Utilizamos géis de ácido hialurônico de alta performance para restaurar a estrutura e o volume facial perdidos com o tempo. A técnica promove sustentação dos tecidos, hidratação profunda e contornos harmoniosos — tudo com resultados imediatos e aspecto natural.",
    indications: [
      "Olheiras profundas",
      "Definição e volume labial",
      "Contorno de mandíbula e queixo",
      "Maçãs do rosto e sulco nasogeniano",
    ],
    image: procPreenchimento,
    icon: "Droplets",
  },
  {
    id: "bioestimuladores-colageno",
    title: "Bioestimuladores de Colágeno",
    summary: "Tratamento avançado para combater a flacidez e restaurar a firmeza da pele.",
    description:
      "Os bioestimuladores são substâncias injetáveis que ativam os fibroblastos — células responsáveis pela produção de colágeno. O tratamento promove uma renovação gradual e duradoura, melhorando a textura, a firmeza e a qualidade geral da pele ao longo de semanas e meses.",
    indications: [
      "Flacidez facial e corporal",
      "Perda de contorno e definição",
      "Melhora global da qualidade da pele",
    ],
    image: procBioestimulador,
    icon: "Dna",
  },

];
