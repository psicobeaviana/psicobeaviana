import { defineType, defineField } from 'sanity';

/**
 * Schema de Evento.
 * Palestras, workshops, lives e outros eventos que a psicóloga queira divulgar.
 */
export const evento = defineType({
  name: 'evento',
  title: 'Evento',
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
      rows: 4,
      description: 'Sobre o que é o evento, para quem é destinado, etc.',
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem do evento',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo (acessibilidade)',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'data',
      title: 'Data e horário',
      type: 'datetime',
      validation: (rule) => rule.required().error('A data do evento é obrigatória.'),
    }),
    defineField({
      name: 'modalidade',
      title: 'Modalidade',
      type: 'string',
      options: {
        list: [
          { title: 'Online', value: 'online' },
          { title: 'Presencial', value: 'presencial' },
        ],
        layout: 'radio',
      },
      initialValue: 'online',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'local',
      title: 'Local',
      type: 'string',
      description: 'Endereço (se presencial) ou plataforma (se online, ex.: Zoom, Instagram Live).',
    }),
    defineField({
      name: 'linkInscricao',
      title: 'Link de inscrição',
      type: 'url',
      description: 'Link para o participante se inscrever ou entrar no evento.',
      validation: (rule) => rule.uri({ scheme: ['http', 'https'] }),
    }),
  ],
  orderings: [
    {
      title: 'Data do evento (próximos primeiro)',
      name: 'dataAsc',
      by: [{ field: 'data', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'data',
      media: 'imagem',
    },
  },
});
