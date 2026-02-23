# Portfolio - Gabriel Santana Padovesi

Portfolio profissional desenvolvido para apresentar minha trajetoria, especialidades tecnicas, experiencia de mercado e projetos reais em tecnologia educacional.

## Analise Geral do Projeto

### O que este projeto e

Este repositorio contem uma aplicacao web de portfolio pessoal, com foco em:

- posicionamento profissional como Desenvolvedor Full Stack;
- apresentacao de experiencia e stack tecnica;
- exibicao de projetos com contexto de negocio;
- conversao de visitantes para contato (LinkedIn, WhatsApp e email).

### Stack e arquitetura

- React 19 + TypeScript
- Vite 7 (build e desenvolvimento)
- Styled Components 6 (estilizacao)
- React Router DOM 7 (roteamento)
- react-wrap-balancer (melhor distribuicao de texto)

A arquitetura esta organizada por responsabilidade:

- `src/pages`: composicao das telas (`HomePage` e `ProjectPage`);
- `src/sections`: blocos principais da landing page (`Welcome`, `Trajectory`, `Projects`, `Contact`);
- `src/components`: componentes reutilizaveis (Title, Paragraph, Button, Card, Header, Footer etc.);
- `src/utils`: dados e funcoes auxiliares (projetos, slug, redirecionamento, scroll).

### Fluxo da aplicacao

1. A rota `/` renderiza a landing principal com as secoes:
- Welcome (apresentacao e CTA);
- Trajectory (perfil, experiencia e skills);
- Projects (cards de projetos);
- Contact (redes sociais e contato direto).

2. A rota `/project/:projectName` abre o detalhe de um projeto com base no slug.

### Qualidade tecnica observada

- Estrutura modular e facil de manter.
- Componentes base de tipografia (`Title` e `Paragraph`) com escalas responsivas.
- Reuso consistente de componentes visuais.
- Dados de projetos centralizados em `projectsData.ts`.
- Build, lint e tipagem integrados via scripts do projeto.

### Pontos de evolucao recomendados

- revisar textos com problema de codificacao em alguns arquivos;
- padronizar ainda mais semantica de espacamento entre secoes;
- fortalecer camada de acessibilidade (aria-labels e contraste em alguns pontos);
- incluir testes de componentes/fluxos criticos (ex.: roteamento e cards de projetos).

## Descricao Profissional (PT-BR)

Sou Gabriel Santana Padovesi, Desenvolvedor Full Stack com foco em criacao de plataformas web, sistemas digitais e experiencias orientadas a resultado. Tenho atuacao pratica em projetos educacionais de media e alta complexidade, participando de ponta a ponta do desenvolvimento: interface, regras de negocio, backend, autenticacao, areas administrativas e integracoes.

No portfolio, apresento trabalhos realizados em ambientes reais, com foco em performance, usabilidade e valor para o usuario final. Minha base tecnica inclui React, Next.js, TypeScript, Node.js e MongoDB, com perfil colaborativo, visao de produto e compromisso com qualidade de entrega.

Meu objetivo e transformar necessidades de negocio em solucoes digitais robustas, escalaveis e bem estruturadas.

## Como executar localmente

```bash
yarn
yarn dev
```

## Scripts disponiveis

- `yarn dev`: inicia ambiente de desenvolvimento;
- `yarn build`: executa TypeScript build e gera bundle de producao;
- `yarn lint`: executa analise estatica com ESLint;
- `yarn preview`: sobe preview do build local.
