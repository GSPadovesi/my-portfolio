export interface ProjectData {
  id: number;
  title: string;
  enterprise: string;
  description: string;
  link: string;
  technologies: string[];
  cover: string;
}

// export const projectsData: ProjectData[] = [
//   {
//     id: 1,
//     title: "Eureka Digital",
//     enterprise: "Grupo Eureka",
//     description: "Atuei no desenvolvimento da Eureka Digital, uma plataforma educacional robusta e com múltiplas camadas, voltada para o ensino. Trata-se de uma grande biblioteca digital com conteúdos diversos como exercícios, vídeos, sequências didáticas e tarefas interativas para alunos. A plataforma foi desenvolvida como um produto white label, permitindo sua adaptação a diferentes instituições. Trabalhei tanto no front-end quanto no back-end, incluindo sistema de login, áreas administrativas e estrutura de servidores.",
//     link: "https://www.site.eurekadigital.app/",
//     technologies: ["React", "Node.js", "Express", "GraphQL", "MongoDB", "Azure"],
//     cover: "/eurekadigital.jpeg"
//     // cover: "/s.png"
//   },
//   {
//     id: 2,
//     title: "Fabcon",
//     enterprise: "Gastech",
//     description: "Na Fabcon, solução da Gastech, desenvolvi uma plataforma voltada à produção de conteúdo digital sob demanda, especialmente para o setor educacional. A ferramenta combina uma inteligência artificial de alto desempenho com curadoria humana, permitindo a criação de materiais de forma ágil, precisa e em escala. Os pedidos feitos pelos usuários são processados rapidamente pela IA e refinados por profissionais especializados. Atuei no desenvolvimento do front-end, back-end, área administrativa e infraestrutura técnica, garantindo fluidez em todo o fluxo — do pedido inicial à entrega final.",
//     link: "https://acesso.fabcon.app/login",
//     technologies: ["Next.js", "Node.js", "Express", "SWR", "MongoDB", "vercel"],
//     cover: "/fabcon.jpeg"
//   },
//   {
//     id: 3,
//     title: "ProfessorIA",
//     enterprise: "Grupo Eureka",
//     description: "A ProfessorIA é uma rede social educacional white label baseada em inteligência artificial, que conecta estudantes e educadores em um ambiente interativo. Desenvolvi recursos que permitiam a publicação e reaproveitamento de conteúdos, aulas ao vivo, criação de provas e questionários, além de um sistema de dúvidas integrado com assistência por IA. Essa inteligência atua diretamente na organização das interações, sugestões de conteúdos e apoio à aprendizagem dos alunos. A solução foi desenvolvida com estrutura completa, com minha atuação em front-end, back-end, painéis administrativos e servidores.",
//     link: "https://site.rj.eurekadigital.app/",
//     technologies: ["React", "Node.js", "Express", "GraphQL", "MongoDB", "Azure"],
//     cover: "/professoria.jpeg"

//   },
//   {
//     id: 4,
//     title: "EnsinaAI",
//     enterprise: "Gastech",
//     description: "O EnsinaAI é uma plataforma avançada de estudos para provas como o ENEM, Saeb e outras avaliações. Com estrutura white label e foco direto no usuário final (estudantes), conta com uma inteligência artificial altamente sofisticada, responsável por gerar diagnósticos personalizados, planos de estudo, quizzes dinâmicos e novos exercícios em tempo real, com base no desempenho individual. A tecnologia ainda permite integração com conteúdo externo via Fabcon, além da possibilidade de acompanhamento docente. Fui responsável pelo desenvolvimento completo do sistema — front, back-end, login, áreas administrativas e suporte à IA — integrando todos os módulos de forma fluida e escalável.",
//     link: "",
//     technologies: ["Next.js", "Node.js", "Express", "SWR", "MongoDB", "vercel"],
//     cover: "/ensinaai.jpeg"    
//   }
// ];



export interface ProjectData {
  id: number;
  title: string;
  enterprise: string;
  description: string;
  longDescription: string;
  link: string;
  technologies: string[];
  cover: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'Eureka Digital',
    enterprise: 'Grupo Eureka',
    description: 'Plataforma educacional white label com biblioteca digital de exercicios, videos e atividades interativas. Atuei de forma full stack no front-end, back-end, autenticacao, e estrutura tecnica.',
    longDescription: 'Atuei no desenvolvimento da Eureka Digital, uma plataforma educacional robusta e com multiplas camadas, voltada para o ensino. Trata-se de uma grande biblioteca digital com conteudos diversos como exercicios, videos, sequencias didaticas e tarefas interativas para alunos. A plataforma foi desenvolvida como um produto white label, permitindo adaptacao para diferentes instituicoes. Trabalhei tanto no front-end quanto no back-end, incluindo sistema de login, areas administrativas e estrutura de servidores.',
    link: 'https://www.site.eurekadigital.app/',
    technologies: ['React', 'Node.js', 'Express', 'GraphQL', 'MongoDB', 'Azure'],
    cover: '/eurekadigital.jpeg',
  },
  {
    id: 2,
    title: 'Fabcon',
    enterprise: 'Gastech',
    description: 'Plataforma de conteudo sob demanda para o setor educacional, combinando IA de alto desempenho com curadoria humana. Atuei em front-end, back-end, area administrativa e infraestrutura para manter fluidez do pedido ate a entrega.',
    longDescription: 'Na Fabcon, solucao da Gastech, desenvolvi uma plataforma voltada a producao de conteudo digital sob demanda, especialmente para o setor educacional. A ferramenta combina uma inteligencia artificial de alto desempenho com curadoria humana, permitindo criacao de materiais de forma agil, precisa e em escala. Os pedidos feitos pelos usuarios sao processados rapidamente pela IA e refinados por profissionais especializados. Atuei no desenvolvimento de front-end e back-end garantindo fluidez em todo o fluxo do pedido inicial ate a entrega final.',
    link: 'https://acesso.fabcon.app/login',
    technologies: ['Next.js', 'Node.js', 'Express', 'SWR', 'MongoDB', 'Vercel'],
    cover: '/fabcon.jpeg',
  },
  {
    id: 3,
    title: 'ProfessorIA',
    enterprise: 'Grupo Eureka',
    description: 'Rede social educacional white label com IA, conectando estudantes e educadores em um ambiente interativo. Desenvolvi recursos de publicacao de conteudo, aulas ao vivo, provas, questionarios e suporte inteligente.',
    longDescription: 'A ProfessorIA e uma rede social educacional white label baseada em inteligencia artificial, que conecta estudantes e educadores em um ambiente interativo. Desenvolvi recursos para publicacao e reaproveitamento de conteudos, aulas ao vivo, criacao de provas e questionarios, alem de um sistema de duvidas com assistencia por IA. Essa inteligencia atua na organizacao das interacoes, sugestoes de conteudo e apoio a aprendizagem dos alunos. A solucao foi desenvolvida com estrutura completa, com minha atuacao em front-end, back-end, paineis administrativos e servidores.',
    link: 'https://site.rj.eurekadigital.app/',
    technologies: ['React', 'Node.js', 'Express', 'GraphQL', 'MongoDB', 'Azure'],
    cover: '/professoria.jpeg',
  },
  {
    id: 4,
    title: 'EnsinaAI',
    enterprise: 'Gastech',
    description: 'Plataforma de estudos com IA para ENEM, Saeb e outras avaliacoes, com diagnosticos personalizados, planos de estudo, quizzes dinamicos e geracao de exercicios em tempo real. Atuei na construcao completa da solucao.',
    longDescription: 'O EnsinaAI e uma plataforma avancada de estudos para provas como ENEM, Saeb e outras avaliacoes. Com estrutura white label e foco no usuario final, conta com inteligencia artificial sofisticada para gerar diagnosticos personalizados, planos de estudo, quizzes dinamicos e novos exercicios em tempo real com base no desempenho individual. A tecnologia ainda permite integracao com conteudo externo via Fabcon, alem de acompanhamento docente. Fui responsavel pelo desenvolvimento completo do sistema: front-end, back-end, login, areas administrativas e suporte a IA, integrando todos os modulos de forma fluida e escalavel.',
    link: 'https://www.gastech.com.br/',
    technologies: ['Next.js', 'Node.js', 'Express', 'SWR', 'MongoDB', 'Vercel'],
    cover: '/ensinaai.jpeg',
  },
];
