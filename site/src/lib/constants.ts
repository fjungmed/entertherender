export const WHATSAPP_URL =
  "https://wa.me/5519989842020?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20serviços%20da%20Enter%20the%20Render.";

export const CONTACT = {
  email: "hello@entertherender.com",
  phone: "+55 19 98984-2020",
  instagram: "@enter.therender",
  behance: "behance.net/entertherender",
};

export const NAV_ITEMS = [
  { id: "hero", label: "HOME" },
  { id: "services", label: "SERVIÇOS" },
  { id: "projects", label: "PROJETOS" },
  { id: "process", label: "PROCESSO" },
  { id: "contact", label: "CONTATO" },
];

export const SERVICES = [
  {
    id: "archviz",
    icon: "◈",
    title: "ARCHVIZ",
    subtitle: "Imagens Estáticas",
    desc: "Renders fotorrealistas que vendem projetos antes da primeira fundação. Qualidade editorial para incorporadoras, escritórios e portfólios.",
    tools: ["3DS MAX", "V-RAY", "CORONA", "AI UPSCALE"],
  },
  {
    id: "immersive",
    icon: "▣",
    title: "IMERSÃO 3D",
    subtitle: "Real-Time Tours",
    desc: "Experiências interativas em tempo real. O cliente caminha pelo projeto, abre portas, muda acabamentos. Antes da primeira parede.",
    tools: ["UNREAL 5", "LUMEN", "NANITE", "VR"],
  },
  {
    id: "films",
    icon: "▶",
    title: "FILMES",
    subtitle: "Animação Arquitetônica",
    desc: "Narrativas cinematográficas que contam a história do espaço. Para lançamentos imobiliários, institucionais e portfólios autorais.",
    tools: ["SEQUENCER", "DAVINCI", "MOTION", "SOUND"],
  },
  {
    id: "ai",
    icon: "◎",
    title: "AI-ENHANCED",
    subtitle: "Visualização Generativa",
    desc: "Iteração rápida de conceitos visuais com AI generativa. De mood boards a materiais finais em horas, não semanas.",
    tools: ["MIDJOURNEY", "SD", "COMFYUI", "PROMPT"],
  },
];

export const PROJECTS = [
  {
    id: 1,
    slug: "residencia-costeira",
    title: "RESIDÊNCIA COSTEIRA",
    category: "RESIDENCIAL",
    location: "FLORIANÓPOLIS, BR",
    year: "2026",
    type: "ARCHVIZ + FILME",
    color: "#6B7F4A",
    heroImage: "/images/portfolio/residencia-costeira/hero.webp",
  },
  {
    id: 2,
    slug: "loft-contemporaneo",
    title: "LOFT CONTEMPORÂNEO",
    category: "INTERIORES",
    location: "SÃO PAULO, BR",
    year: "2025",
    type: "IMERSÃO 3D",
    color: "#C4963A",
    heroImage: "/images/portfolio/loft-contemporaneo/hero.webp",
  },
  {
    id: 3,
    slug: "fachada-monolito",
    title: "FACHADA MONOLITO",
    category: "COMERCIAL",
    location: "RIO DE JANEIRO, BR",
    year: "2026",
    type: "ARCHVIZ",
    color: "#8B2D2D",
    heroImage: "/images/portfolio/fachada-monolito/hero.webp",
  },
  {
    id: 4,
    slug: "refugio-mineral",
    title: "REFÚGIO MINERAL",
    category: "RESIDENCIAL",
    location: "CURITIBA, BR",
    year: "2025",
    type: "FILME + AI",
    color: "#4A5A33",
    heroImage: "/images/portfolio/refugio-mineral/hero.webp",
  },
];

export const STATS = [
  { value: "50+", label: "PROJETOS" },
  { value: "4", label: "FERRAMENTAS CORE" },
  { value: "∞", label: "MUNDOS POSSÍVEIS" },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "BRIEFING",
    desc: "Entendemos o projeto, referências, público e objetivos. Definimos escopo e pipeline.",
    icon: ">_",
    detail: "CALL + MOODBOARD",
  },
  {
    step: "02",
    title: "CONCEITO",
    desc: "AI generativa para iteração rápida de conceitos. Validação de ângulos, luz e atmosfera.",
    icon: "◎",
    detail: "AI + CONCEPT ART",
  },
  {
    step: "03",
    title: "PRODUÇÃO",
    desc: "Modelagem, texturização, iluminação e renderização com pipeline otimizado.",
    icon: "▣",
    detail: "3D + RENDER + REAL-TIME",
  },
  {
    step: "04",
    title: "ENTREGA",
    desc: "Pós-produção, ajustes finais e entrega nos formatos necessários. Revisões inclusas.",
    icon: "✓",
    detail: "FINAL + REVISÕES",
  },
];

export const MANIFESTO =
  "Entre o pixel e o concreto, entre a linha de código e a linha de fuga, existe um lugar onde arquitetura vira experiência antes de virar parede. Nós construímos esse lugar.";

export const TOOL_BADGES = ["UNREAL ENGINE 5", "3DS MAX", "AI GENERATIVA", "REAL-TIME"];
