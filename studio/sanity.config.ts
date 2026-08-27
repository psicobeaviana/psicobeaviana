import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

/**
 * Configuração do Sanity Studio (painel de conteúdo).
 *
 * IMPORTANTE: preencha o projectId após criar o projeto no sanity.io.
 * O projectId NÃO é secreto — pode ficar no código sem problema.
 */
export default defineConfig({
  name: 'default',
  title: 'Psicóloga Beatriz Viana',

  // Substituir 'SEU_PROJECT_ID' pelo ID gerado ao criar o projeto no sanity.io
  projectId: 'dae3x0fy',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
