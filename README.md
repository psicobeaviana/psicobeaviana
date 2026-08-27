# Site — Psicóloga Beatriz Viana

Site institucional da psicóloga e neuropsicóloga Beatriz Viana. Apresenta seus serviços, conteúdos educativos (blog), vídeos do Instagram e canal de contato via WhatsApp.

**Site no ar:** https://fanciful-dragon-089ea7.netlify.app

---

## Stack

| Tecnologia                                  | Uso                                        |
| ------------------------------------------- | ------------------------------------------ |
| [Astro 7](https://astro.build/)             | Framework que gera o site estático         |
| TypeScript                                  | Tipagem dos dados (posts, config)          |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilização via `@theme` no CSS            |
| [Sanity CMS](https://www.sanity.io/)        | Painel de conteúdo (blog, vídeos, eventos) |
| [Netlify](https://www.netlify.com/)         | Hospedagem e deploy automático             |

---

## Funcionalidades

- Design system "Serene Presence" (cores, tipografia, espaçamentos)
- Menu mobile com hamburger animado
- Scroll spy na navbar (destaca a seção ativa)
- Otimização de imagens automática (WebP via Astro Image)
- SEO: Open Graph, Twitter Card, sitemap, robots.txt
- Integração com Sanity CMS (blog e vídeos) com fallback para dados locais
- Seção Blog oculta automaticamente até existirem posts publicados no Sanity
- Botão flutuante do WhatsApp
- Acessibilidade: skip-to-content, ARIA landmarks

---

## Estrutura do projeto

```
psicobeaviana/
├── public/
│   ├── images/                    # Fotos usadas no site
│   ├── robots.txt
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
│   │   └── WhatsAppButton.astro
│   ├── data/
│   │   └── posts.ts               # Dados locais do blog (fallback)
│   ├── layouts/
│   │   └── BaseLayout.astro       # Layout base (fontes, meta tags, SEO)
│   ├── lib/
│   │   └── sanity.ts              # Client e queries do Sanity CMS
│   ├── pages/
│   │   ├── index.astro            # Página inicial
│   │   └── blog/
│   │       ├── index.astro        # Lista de artigos
│   │       └── [slug].astro       # Artigo individual (Portable Text)
│   ├── styles/
│   │   └── global.css             # Design system (cores, fontes, espaçamentos)
│   └── config.ts                  # Dados de contato centralizados
├── studio/                        # Sanity Studio (painel de conteúdo)
│   ├── schemaTypes/
│   │   ├── post.ts                # Schema de artigos do blog
│   │   ├── video.ts               # Schema de vídeos
│   │   └── evento.ts              # Schema de eventos (futuro)
│   └── sanity.config.ts
├── DESIGN.md                      # Especificação do design system
├── SANITY_WEBHOOK.md              # Guia para configurar rebuild automático
├── astro.config.mjs
├── netlify.toml
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

O deploy é **automático via Netlify**: a cada `git push` na branch `main`, o Netlify faz build e publica. Não é necessário nenhum passo manual.

Para rebuild automático quando conteúdo for publicado no Sanity, consulte o arquivo `SANITY_WEBHOOK.md`.

---

## Editando conteúdo

### Via Sanity Studio (recomendado)

Acesse o painel em https://www.sanity.io/manage/project/dae3x0fy para publicar:

- **Artigos do blog** — Aparecem automaticamente no site após rebuild
- **Vídeos** — URLs de reels do Instagram
- **Eventos** — Palestras, lives, workshops (seção futura)

### Via código (alternativa)

- **Dados de contato** (WhatsApp, e-mail, telefone, Instagram): `src/config.ts`
- **Artigos de fallback**: `src/data/posts.ts`
- **Vídeos de fallback**: lista no topo de `src/components/Videos.astro`
- **Cores, fontes e espaçamentos**: `src/styles/global.css`

---

## Roadmap

- [x] Astro + Tailwind + design system
- [x] Componentes: Hero, Sobre, Serviços, Vídeos, Blog, Contato, Footer
- [x] Menu mobile (hamburger)
- [x] SEO (Open Graph, sitemap, robots.txt)
- [x] Integração Sanity CMS (blog + vídeos)
- [x] Otimização de imagens (WebP)
- [x] Acessibilidade (skip-to-content, landmarks, scroll spy)
- [x] Deploy no Netlify
- [ ] Configurar webhook Sanity → Netlify (ver `SANITY_WEBHOOK.md`)
- [ ] Seção de Eventos no site (schema já existe no Sanity)
- [ ] Domínio personalizado
