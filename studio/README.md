# Sanity Studio — Painel de Conteúdo

Esta pasta contém os **esquemas de conteúdo** (schemas) que definem o que a psicóloga poderá publicar pelo painel do Sanity:

- **Artigo do Blog** (`post`) — título, categoria, imagem de capa, conteúdo rich text, data
- **Vídeo** (`video`) — título, descrição, link (Instagram/YouTube), data
- **Evento** (`evento`) — título, descrição, data, modalidade (online/presencial), local, link de inscrição

Os schemas já estão prontos. Falta apenas conectar a uma conta do Sanity.

---

## Como ativar o painel (quando tiver a conta)

Requer [Node.js](https://nodejs.org/) 22+.

### 1. Criar o projeto no Sanity

- Acesse [sanity.io](https://www.sanity.io/) e crie uma conta gratuita
- Crie um novo projeto (dataset: `production`)
- Copie o **Project ID** gerado

### 2. Conectar os schemas

- Abra `studio/sanity.config.ts`
- Substitua `SEU_PROJECT_ID` pelo Project ID copiado

### 3. Instalar e rodar o Studio

```bash
cd studio
npm install
npm run dev
```

O painel abre em `http://localhost:3333`.

### 4. Publicar o painel online (opcional)

```bash
npx sanity deploy
```

Isso publica o painel em `https://SEU_NOME.sanity.studio`, onde a psicóloga poderá acessar de qualquer lugar.

---

## Observações de segurança

- O **Project ID** e o **dataset** NÃO são secretos — podem ficar no código.
- Os **tokens de API** (usados pelo site para ler o conteúdo) SÃO secretos e ficarão em variáveis de ambiente (`.env`), nunca no repositório.
