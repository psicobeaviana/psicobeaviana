import { defineType, defineField } from 'sanity';

/**
 * Schema de Vídeo.
 * Usado para os reels/vídeos exibidos na seção "Insights em Vídeo".
 */
export const video = defineType({
  name: 'video',
  title: 'Vídeo',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required().error('O título é obrigatório.'),
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
      rows: 2,
      description: 'Texto opcional que descreve o vídeo.',
    }),
    defineField({
      name: 'url',
      title: 'Link do vídeo',
      type: 'url',
      description: 'Cole o link do reel do Instagram ou do vídeo do YouTube.',
      validation: (rule) =>
        rule
          .required()
          .uri({ scheme: ['http', 'https'] })
          .error('Informe um link válido (Instagram ou YouTube).'),
    }),
    defineField({
      name: 'data',
      title: 'Data',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'Data (mais recente)',
      name: 'dataDesc',
      by: [{ field: 'data', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'url',
    },
  },
});
