# Portfolio - Gabriel Santana Padovesi

Portfolio profissional para apresentacao de trajetoria, stack tecnica, projetos reais e canais de contato.

## Visao Geral

Este repositorio contem uma aplicacao React + TypeScript com foco em:

- posicionamento profissional como Desenvolvedor Full Stack;
- apresentacao de experiencia e tecnologias;
- listagem de projetos com pagina de detalhe;
- conversao de visitante via LinkedIn, WhatsApp e formulario com envio de e-mail.

## Stack

- React 19
- TypeScript 5
- Vite 7
- Styled Components 6
- React Router DOM 7
- Nodemailer
- React Toastify
- react-wrap-balancer
- API serverless com `@vercel/node`

## Arquitetura

- `src/pages`: composicao das paginas (`HomePage`, `ProjectPage`);
- `src/sections`: blocos de tela (`Welcome`, `Trajectory`, `Projects`, `Project`, `Contact`);
- `src/components`: componentes reutilizaveis (`Header`, `Footer`, `Button`, `Field`, `ProjectCard`, `Modal`, `Toast` etc.);
- `src/utils`: dados e funcoes auxiliares (slug, scroll, redirecionamento, projetos, transporte SMTP);
- `src/emails/contact`: templates e builder dos e-mails de contato;
- `api/contact/index.ts`: endpoint serverless para processar envio de e-mail.

## Rotas

- `/`: landing principal (welcome, trajetoria, projetos e contato);
- `/project/:projectName`: detalhe de projeto por slug;
- `POST /api/contact`: endpoint de envio de contato.

Payload esperado em `/api/contact`:

```json
{
  "name": "Nome",
  "email": "email@dominio.com",
  "message": "Mensagem do visitante"
}
```

## Formulario e E-mail

Fluxo atual de contato:

1. usuario preenche formulario na secao de contato;
2. frontend valida campos e chama `POST /api/contact`;
3. API valida dados e envia e-mail para o dono do portfolio;
4. API envia e-mail de confirmacao para o usuario;
5. frontend mostra toast de sucesso/erro e estado de mensagem enviada.

## Testes Automatizados

Fluxos criticos cobertos atualmente:

- validacao e submissao do formulario de contato (`ContactForm`);
- handler da API `/api/contact` (metodo invalido, payload invalido e envio de e-mails);
- normalizacao de slug de projeto (`toProjectSlug`).

## Variaveis de Ambiente

Crie um arquivo `.env` com:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=seu-email@dominio.com
EMAIL_PASS=sua-senha-de-app
```

Observacoes:

- o projeto atualmente usa conexao SMTP segura (`secure: true`);
- para Gmail, utilize senha de app (nao senha normal da conta);
- para testar a API localmente, prefira `vercel dev`.

## Como Executar Localmente

Instalacao:

```bash
npm install
```

Desenvolvimento (frontend):

```bash
npm run dev
```

Desenvolvimento com API serverless:

```bash
npm run vercel
```

## Scripts

- `npm run dev`: inicia Vite em modo desenvolvimento;
- `npm run vercel`: sobe ambiente Vercel local (incluindo `/api/contact`);
- `npm run build`: executa `tsc -b` e build de producao com Vite;
- `npm run lint`: executa ESLint;
- `npm run test`: executa os testes automatizados (Vitest);
- `npm run test:watch`: executa testes em modo watch;
- `npm run preview`: preview do build local.

## Melhorias Futuras Recomendadas

- incluir testes automatizados para fluxos criticos;
