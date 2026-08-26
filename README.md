# Site — Psicóloga Beatriz Viana

Site institucional da psicóloga e neuropsicóloga Beatriz Viana. Apresenta seus serviços, conteúdos educativos (blog), vídeos do Instagram e canal de contato via WhatsApp.

**Site no ar:** https://sinngjpeg.github.io/psicobeaviana/

---

## Stack

| Tecnologia | Uso |
|---|---|
| [Astro](https://astro.build/) | Framework que gera o site estático |
| TypeScript | Tipagem dos dados (posts, config) |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilização (configurada via `@theme` no CSS) |
| GitHub Pages | Hospedagem atual (validação de layout) |
| GitHub Actions | Deploy automático a cada push na `main` |

> **Próxima fase:** migração para Netlify + Sanity CMS, para que os conteúdos (blog, vídeos, eventos) possam ser publicados por um painel visual, sem mexer no código.

---

## Estrutura do projeto

```
psicobeaviana/
├── .github/workflows/deploy.yml   # Deploy automático no GitHub Pages
├── public/
│   ├── images/                    # Fotos usadas no site
│   └── favicon.svg
├── src/
│   ├── components/                # Componentes de cada seção
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Sobre.astro
│   │   ├── Servicos.astro
│   │   ├── Videos.astro           # Carrossel de reels do Instagram
│   │   ├── Blog.astro
│   │   ├── Contato.astro
│   │   ├── Footer.astro
│   │   └── WhatsAppButton.astro   # Botão flutuante do WhatsApp
│   ├── data/
│   │   └── posts.ts               # Dados dos artigos do blog (fonte única)
│   ├── layouts/
│   │   └── BaseLayout.astro       # Layout base (fontes, meta tags, SEO)
│   ├── pages/
│   │   ├── index.astro            # Página inicial
│   │   └── blog/
│   │       ├── index.astro        # Lista de todos os artigos
│   │       └── [slug].astro       # Página individual de cada artigo
│   ├── styles/
│   │   └── global.css             # Design system (cores, fontes, espaçamentos)
│   └── config.ts                  # Dados de contato centralizados
├── astro.config.mjs
└── package.json
```

---

## Rodando localmente

Requer [Node.js](https://nodejs.org/) 22 ou superior.

```bash
# 1. Instalar dependências
npm install

# 2. Rodar o servidor de desenvolvimento
npm run dev
```

O site fica disponível em `http://localhost:4321/psicobeaviana/`.

Outros comandos:

```bash
npm run build     # Gera o site estático na pasta dist/
npm run preview   # Pré-visualiza o build de produção localmente
```

---

## Deploy

O deploy é **automático**: a cada `git push` na branch `main`, o GitHub Actions builda o projeto e publica no GitHub Pages. Não é necessário nenhum passo manual.

O workflow está em `.github/workflows/deploy.yml`.

---

## Editando o conteúdo (fase atual)

Enquanto o CMS não está integrado, o conteúdo é editado direto no código:

- **Dados de contato** (WhatsApp, e-mail, telefone, Instagram): `src/config.ts`
- **Artigos do blog**: `src/data/posts.ts`
- **Vídeos do Instagram**: lista de links no topo de `src/components/Videos.astro`
- **Cores, fontes e espaçamentos**: `src/styles/global.css`

Após qualquer alteração, basta dar `git push` na `main` que o site atualiza sozinho em ~1 minuto.

---

## Roadmap

- [x] Fundação: Astro + TypeScript, componentes, deploy no GitHub Pages
- [ ] Migrar hospedagem para Netlify
- [ ] Configurar Sanity CMS (blog, vídeos, eventos)
- [ ] Conectar o CMS aos componentes do site
