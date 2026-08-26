import { defineType, defineField } from 'sanity';

/**
 * Schema de Artigo do Blog.
 * A psicóloga preenche esses campos no painel do Sanity para publicar um artigo.
 */
export const post = defineType({
  name: 'post',
  title: 'Artigo do Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required().error('O título é obrigatório.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (endereço na URL)',
      type: 'slug',
      description: 'Gerado automaticamente a partir do título. Ex.: entendendo-a-ansiedade',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('O slug é obrigatório.'),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'string',
      description: 'Ex.: Ansiedade, Autoconhecimento, Bem-estar',
      options: {
        list: [
          { title: 'Ansiedade', value: 'Ansiedade' },
          { title: 'Autoconhecimento', value: 'Autoconhecimento' },
          { title: 'Bem-estar', value: 'Bem-estar' },
          { title: 'Relacionamentos', value: 'Relacionamentos' },
          { title: 'Neuropsicologia', value: 'Neuropsicologia' },
        ],
      },
    }),
    defineField({
      name: 'resumo',
      title: 'Resumo',
      type: 'text',
      rows: 3,
      description: 'Texto curto que aparece no card do artigo (2-3 linhas).',
      validation: (rule) => rule.required().max(200).warning('Ideal manter até 200 caracteres.'),
    }),
    defineField({
      name: 'imagemCapa',
      title: 'Imagem de capa',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo (acessibilidade)',
          type: 'string',
          description: 'Descreva a imagem para leitores de tela.',
        }),
      ],
    }),
    defineField({
      name: 'conteudo',
      title: 'Conteúdo do artigo',
      type: 'array',
      description: 'Escreva o artigo aqui, com títulos, parágrafos, listas, negrito, etc.',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'dataPublicacao',
      title: 'Data de publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
  // Ordena por data de publicação (mais recente primeiro) no painel
  orderings: [
    {
      title: 'Data de publicação (mais recente)',
      name: 'dataDesc',
      by: [{ field: 'dataPublicacao', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'categoria',
      media: 'imagemCapa',
    },
  },
});
