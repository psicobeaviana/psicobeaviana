# Webhook: Sanity → Netlify (rebuild automático)

Quando a Beatriz publicar/atualizar um post, vídeo ou evento no Sanity Studio, o site no Netlify será reconstruído automaticamente.

## Passo 1 — Criar Build Hook no Netlify

1. Acesse o painel do Netlify: https://app.netlify.com
2. Vá em **Site configuration → Build & deploy → Build hooks**
3. Clique em **Add build hook**
4. Nome: `sanity-publish`
5. Branch: `main`
6. Copie a URL gerada (algo como `https://api.netlify.com/build_hooks/abc123...`)

## Passo 2 — Criar Webhook no Sanity

1. Acesse o painel do Sanity: https://www.sanity.io/manage/project/dae3x0fy
2. Vá em **API → Webhooks**
3. Clique em **Create webhook**
4. Configure:
   - **Name:** Netlify Deploy
   - **URL:** Cole a URL do Build Hook do Netlify (do passo 1)
   - **Dataset:** production
   - **Trigger on:** Create, Update, Delete
   - **Filter:** Deixe vazio (dispara para qualquer documento) ou use `_type in ["post", "video", "evento"]` para limitar
   - **Projection:** Deixe vazio
   - **HTTP method:** POST
   - **Status:** Enabled
5. Salve

## Resultado

Após essa configuração, sempre que a Beatriz:
- Publicar um novo artigo
- Editar um artigo existente
- Adicionar/remover um vídeo
- Criar/alterar um evento

...o Netlify recebe o webhook e faz um novo build automaticamente (~1 minuto).

## Testando

Após configurar, crie um documento de teste no Sanity Studio e verifique no painel do Netlify se um novo deploy foi disparado em **Deploys**.
