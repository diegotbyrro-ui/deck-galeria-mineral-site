export type Stone = {
  slug: string;
  name: string;
  category: string;
  origin: string;
  mood: string;
  description: string;
  story: string;
  image: string;
  applications: string[];
};

type StoneSeed = [slug: string, name: string, category: string];

const toneProfiles = [
  {
    match: /verde|green|emerald|ubatuba|guatemala|da-vinci/i,
    mood: "Natureza profunda",
    description: "Tons verdes e desenho orgânico para projetos que aproximam arquitetura e natureza.",
    presence: "uma presença viva, profunda e conectada à natureza",
  },
  {
    match: /azul|blue|macaubas|azuli|ijen/i,
    mood: "Azul escultural",
    description: "Camadas azuis e movimentos minerais que transformam a superfície em ponto focal.",
    presence: "um azul de caráter escultural, capaz de conduzir todo o ambiente",
  },
  {
    match: /branc|white|carrara|pigu|mont-blanc|calacat|super-white|light-gray|imaculada|polar/i,
    mood: "Elegância luminosa",
    description: "Uma base clara, desenhada por nuances e veios que ampliam a luz do ambiente.",
    presence: "leveza visual, luminosidade e elegância sem excessos",
  },
  {
    match: /preto|nero|black|marrom|brown|corten|bronze|tabaco|bronzite|armani|dark-gray/i,
    mood: "Contraste marcante",
    description: "Tons profundos e desenho expressivo para composições de personalidade sofisticada.",
    presence: "contraste, profundidade e uma atmosfera de sofisticação silenciosa",
  },
  {
    match: /vermelh|pitaya|bordeaux|ouro|gold|amarel|stellar|ocre|crema|bege/i,
    mood: "Calor mineral",
    description: "Nuances quentes e textura mineral para espaços elegantes, acolhedores e autorais.",
    presence: "calor, personalidade e uma sensação imediata de acolhimento",
  },
];

function profileFor(name: string) {
  return toneProfiles.find((profile) => profile.match.test(name)) ?? {
    mood: "Equilíbrio atemporal",
    description: "Textura, movimento e tonalidade equilibrados para uma arquitetura que atravessa o tempo.",
    presence: "equilíbrio, textura e uma elegância que permanece",
  };
}

function originFor(name: string, category: string) {
  if (category === "Superfícies de Quartzo" || category === "Ultracompactos") return "Superfície tecnológica";
  if (/Carrara/i.test(name)) return "Itália";
  if (/Crema Marfil|Nero Marquina/i.test(name)) return "Espanha";
  if (/Green Paquistanês/i.test(name)) return "Paquistão";
  if (category === "Granitos" || category === "Quartzitos") return "Brasil";
  if (category === "Mármores" || category === "Travertinos" || category === "Ônix" || category === "Limestone") return "Seleção internacional";
  return "Seleção Deck";
}

function applicationsFor(category: string) {
  const applications: Record<string, string[]> = {
    Granitos: ["Cozinhas", "Áreas gourmet", "Escadas", "Fachadas"],
    Mármores: ["Banheiros", "Painéis", "Pisos internos", "Mobiliário"],
    Quartzitos: ["Ilhas", "Bancadas", "Painéis", "Mesas"],
    Travertinos: ["Pisos", "Paredes", "Fachadas", "Escadas"],
    Ônix: ["Painéis iluminados", "Bares", "Lavabos", "Detalhes"],
    Limestone: ["Fachadas", "Paredes", "Pisos internos", "Escadas"],
    "Superfícies de Quartzo": ["Cozinhas", "Bancadas", "Lavabos", "Mobiliário"],
    Ultracompactos: ["Cozinhas", "Fachadas", "Bancadas", "Áreas externas"],
  };
  return applications[category] ?? ["Bancadas", "Painéis", "Pisos", "Mobiliário"];
}

function storyFor(name: string, category: string, presence: string) {
  const stories: Record<string, string> = {
    Granitos: `A história do ${name} começa em grandes massas de rocha formadas lentamente nas profundezas da Terra. O resfriamento mineral desenhou seus grãos, variações e pontos de cor sem repetir uma única composição. Quando chega à arquitetura, essa memória geológica se transforma em ${presence}, com a resistência necessária para acompanhar a vida por muitos anos.`,
    Mármores: `O ${name} nasceu da transformação: antigas camadas de calcário encontraram calor, pressão e tempo até ganhar um novo desenho mineral. Seus veios registram esse movimento como linhas irrepetíveis. No ambiente, essa história aparece como ${presence}, fazendo de cada recorte uma peça singular.`,
    Quartzitos: `Antes de se tornar ${name}, a matéria atravessou um processo geológico de enorme pressão e tempo, tornando-se uma rocha de grande resistência e beleza cristalina. Cada veio guarda a direção desse movimento natural. Em projeto, essa origem se revela como ${presence}, unindo desempenho e expressão artística.`,
    Travertinos: `O ${name} carrega a memória da água. Ao longo do tempo, águas ricas em minerais depositaram camada após camada, criando poros, linhas e tonalidades que dão identidade à rocha. Aplicado à arquitetura, ele oferece ${presence}, com uma textura que convida o olhar e o toque.`,
    Ônix: `O ${name} foi construído pela natureza em camadas delicadas, depositadas lentamente por águas minerais. Essa formação cria desenhos translúcidos que mudam quando encontram a luz. Retroiluminado ou usado como ponto focal, ele revela ${presence} e transforma a superfície em experiência.`,
    Limestone: `O ${name} guarda uma história sedimentar escrita em camadas suaves. A compactação natural da matéria criou uma superfície de textura serena e tonalidade contínua. Na arquitetura, essa origem se traduz em ${presence}, valorizando volumes, luz e proporção.`,
    "Superfícies de Quartzo": `A história da ${name} nasce do encontro entre minerais selecionados e engenharia de precisão. O processo controla tonalidade e textura para criar uma superfície consistente, prática e contemporânea. No uso diário, ela entrega ${presence} com facilidade de manutenção e liberdade de composição.`,
    Ultracompactos: `${name} representa uma nova geração de superfícies. Minerais são submetidos a tecnologia de alta pressão e temperatura para alcançar estabilidade, baixa absorção e grande versatilidade. O resultado leva à arquitetura ${presence}, inclusive em aplicações que exigem desempenho elevado.`,
  };
  return stories[category] ?? `A história de ${name} une matéria, técnica e olhar humano. Cada detalhe foi selecionado para levar ao projeto ${presence}.`;
}

function makeStone([slug, name, category]: StoneSeed): Stone {
  const profile = profileFor(name);
  return {
    slug,
    name,
    category,
    image: `/images/catalogo-pedras-v6/${slug}.webp`,
    origin: originFor(name, category),
    mood: profile.mood,
    description: profile.description,
    story: storyFor(name, category, profile.presence),
    applications: applicationsFor(category),
  };
}

const stoneSeeds: StoneSeed[] = [
  ["granito-branco-dallas", "Granito Branco Dallas", "Granitos"],
  ["granito-arabesco", "Granito Arabesco", "Granitos"],
  ["granito-bordeaux", "Granito Bordeaux", "Granitos"],
  ["granito-branco-dalmata", "Granito Branco Dálmata", "Granitos"],
  ["granito-branco-floral", "Granito Branco Floral", "Granitos"],
  ["granito-branco-imaculada", "Granito Branco Imaculada", "Granitos"],
  ["granito-branco-itaunas", "Granito Branco Itaúnas", "Granitos"],
  ["granito-branco-polar", "Granito Branco Polar", "Granitos"],
  ["granito-cinza-andorinha", "Granito Cinza Andorinha", "Granitos"],
  ["granito-cinza-corumba", "Granito Cinza Corumbá", "Granitos"],
  ["granito-cinza-ocre", "Granito Cinza Ocre", "Granitos"],
  ["granito-marrom-absoluto", "Granito Marrom Absoluto", "Granitos"],
  ["granito-marrom-tabaco", "Granito Marrom Tabaco", "Granitos"],
  ["granito-ouro-branco", "Granito Ouro Branco", "Granitos"],
  ["granito-pitaya", "Granito Pitaya", "Granitos"],
  ["granito-preto-sao-gabriel", "Granito Preto São Gabriel", "Granitos"],
  ["granito-preto-sao-marcos", "Granito Preto São Marcos", "Granitos"],
  ["granito-preto-sao-rafael", "Granito Preto São Rafael", "Granitos"],
  ["granito-verde-ubatuba", "Granito Verde Ubatuba", "Granitos"],

  ["marmore-branco-carrara-gioia", "Mármore Branco Carrara Gioia", "Mármores"],
  ["marmore-branco-especial", "Mármore Branco Especial", "Mármores"],
  ["marmore-branco-pigues", "Mármore Branco Piguês", "Mármores"],
  ["marmore-branco-rajado-levigado", "Mármore Branco Rajado Levigado", "Mármores"],
  ["marmore-branco-rajado", "Mármore Branco Rajado", "Mármores"],
  ["marmore-crema-marfil", "Mármore Crema Marfil", "Mármores"],
  ["marmore-gris-armani", "Mármore Gris Armani", "Mármores"],
  ["marmore-marta-rocha", "Mármore Marta Rocha", "Mármores"],
  ["marmore-nero-marquina", "Mármore Nero Marquina", "Mármores"],
  ["marmore-travertino-bruto-romano", "Mármore Travertino Bruto Romano", "Mármores"],
  ["marmore-verde-guatemala", "Mármore Verde Guatemala", "Mármores"],
  ["marmore-marrom-imperial", "Mármore Marrom Imperial", "Mármores"],

  ["quartzito-perla-santanna", "Quartzito Perla Santanna", "Quartzitos"],
  ["quartzito-emerald-green", "Quartzito Emerald Green", "Quartzitos"],
  ["quartzito-verde-da-vinci", "Quartzito Verde Da Vinci", "Quartzitos"],
  ["quartzito-bronzite", "Quartzito Bronzite", "Quartzitos"],
  ["quartzito-azul-macaubas", "Quartzito Azul Macaubas", "Quartzitos"],
  ["quartzito-mont-blanc", "Quartzito Mont Blanc", "Quartzitos"],
  ["quartzito-ijen-blue", "Quartzito Ijen Blue", "Quartzitos"],
  ["quartzito-azuli", "Quartzito Azuli", "Quartzitos"],
  ["quartzito-kalahari", "Quartzito Kalahari", "Quartzitos"],

  ["travertino-romano-polido", "Travertino Romano Polido", "Travertinos"],
  ["travertino-romano-bruto", "Travertino Romano Bruto", "Travertinos"],
  ["travertino-navona", "Travertino Navona", "Travertinos"],
  ["travertino-marta-rocha", "Travertino Marta Rocha", "Travertinos"],

  ["onix-green-paquistanes", "Ônix Green Paquistanês", "Ônix"],
  ["onix-branco", "Ônix Branco", "Ônix"],
  ["onix-branco-perola", "Ônix Branco Pérola", "Ônix"],
  ["limestone-mon-realy", "Limestone Mon Realy", "Limestone"],

  ["superficie-amarela-lisa", "Amarela Lisa", "Superfícies de Quartzo"],
  ["superficie-branca-lisa", "Branca Lisa", "Superfícies de Quartzo"],
  ["superficie-cinza-lisa", "Cinza Lisa", "Superfícies de Quartzo"],
  ["superficie-vermelha-lisa", "Vermelha Lisa", "Superfícies de Quartzo"],
  ["superficie-azul-escura-lisa", "Azul Escura Lisa", "Superfícies de Quartzo"],
  ["superficie-amarelo-stellar", "Amarelo Stellar", "Superfícies de Quartzo"],
  ["superficie-branco-stellar", "Branco Stellar", "Superfícies de Quartzo"],
  ["superficie-cinza-stellar", "Cinza Stellar", "Superfícies de Quartzo"],
  ["superficie-vermelho-stellar", "Vermelho Stellar", "Superfícies de Quartzo"],
  ["superficie-azul-escuro-stellar", "Azul Escuro Stellar", "Superfícies de Quartzo"],

  ["ultracompacto-bege-travertine", "Bege Travertine", "Ultracompactos"],
  ["ultracompacto-golden-spider", "Golden Spider", "Ultracompactos"],
  ["ultracompacto-corten-brown", "Corten Brown", "Ultracompactos"],
  ["ultracompacto-pure-gray", "Pure Gray", "Ultracompactos"],
  ["ultracompacto-bamboo-black", "Bamboo Black", "Ultracompactos"],
  ["ultracompacto-light-gray", "Light Gray", "Ultracompactos"],
  ["ultracompacto-calacata-macchia-oro", "Calacata Macchia Oro", "Ultracompactos"],
  ["ultracompacto-calacata-fine", "Calacata Fine", "Ultracompactos"],
  ["ultracompacto-super-white", "Super White", "Ultracompactos"],
  ["ultracompacto-corten-light", "Corten Light", "Ultracompactos"],
  ["ultracompacto-nero-marquina", "Nero Marquina", "Ultracompactos"],
  ["ultracompacto-nero-portoro", "Nero Portoro", "Ultracompactos"],
  ["ultracompacto-dark-gray", "Dark Gray", "Ultracompactos"],
  ["ultracompacto-calacata-white", "Calacata White", "Ultracompactos"],
  ["ultracompacto-calacata-oro", "Calacata Oro", "Ultracompactos"],
  ["ultracompacto-absolut-black", "Absolut Black", "Ultracompactos"],
  ["ultracompacto-pietra-gray", "Pietra Gray", "Ultracompactos"],
  ["ultracompacto-bronze-arman", "Bronze Arman", "Ultracompactos"],
];

export const stones: Stone[] = stoneSeeds.map(makeStone);

export const projectImages = [
  "/images/deck-ambiente-greenstar.png",
  "/images/deck-collection-gallery.png",
  "/images/deck-hero-cinematic.png",
  "/images/deck-collection-gallery.png",
  "/images/deck-ambiente-greenstar.png",
  "/images/deck-hero-cinematic.png",
  "/images/deck-ambiente-greenstar.png",
  "/images/deck-collection-gallery.png",
  "/images/deck-hero-cinematic.png",
  "/images/deck-collection-gallery.png",
  "/images/deck-ambiente-greenstar.png",
  "/images/deck-hero-cinematic.png",
];

export const whatsAppUrl =
  "https://wa.me/5582996152694?text=Ol%C3%A1%2C%20conheci%20a%20Deck%20pelo%20novo%20site%20e%20gostaria%20de%20falar%20sobre%20meu%20projeto.";
