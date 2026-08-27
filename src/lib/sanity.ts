import { createClient } from '@sanity/client';
import type { PortableTextBlock } from '@portabletext/to-html';

// Client público (sem token) — lê apenas dados publicados.
export const sanityClient = createClient({
  projectId: '2d5ej2fb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

// ─── Tipos ────────────────────────────────────────────────────────────────────

export interface SanityPost {
  titulo: string;
  slug: string;
  categoria: string;
  resumo: string;
  imagemCapa: string | null;
  imagemCapaAlt: string | null;
  conteudo: PortableTextBlock[];
  dataPublicacao: string;
}

export interface SanityVideo {
  titulo: string;
  descricao: string | null;
  url: string;
  data: string;
}

export interface SanityEvento {
  titulo: string;
  descricao: string | null;
  imagem: string | null;
  imagemAlt: string | null;
  data: string;
  modalidade: 'online' | 'presencial';
  local: string | null;
  linkInscricao: string | null;
}

// ─── Queries ──────────────────────────────────────────────────────────────────

const POSTS_FIELDS = `
  titulo,
  "slug": slug.current,
  categoria,
  resumo,
  "imagemCapa": imagemCapa.asset->url,
  "imagemCapaAlt": imagemCapa.alt,
  conteudo,
  dataPublicacao
`;

/** Busca os N posts mais recentes (para a home e listagem). */
export async function getPosts(limit?: number): Promise<SanityPost[]> {
  const slice = limit ? `[0...${limit}]` : '';
  const query = `*[_type == "post"] | order(dataPublicacao desc) ${slice} { ${POSTS_FIELDS} }`;
  return sanityClient.fetch<SanityPost[]>(query);
}

/** Busca um post específico pelo slug. */
export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] { ${POSTS_FIELDS} }`;
  return sanityClient.fetch<SanityPost | null>(query, { slug });
}

/** Busca todos os slugs (para getStaticPaths). */
export async function getAllPostSlugs(): Promise<string[]> {
  const query = `*[_type == "post"]{ "slug": slug.current }.slug`;
  return sanityClient.fetch<string[]>(query);
}

/** Busca vídeos ordenados por data. */
export async function getVideos(limit?: number): Promise<SanityVideo[]> {
  const slice = limit ? `[0...${limit}]` : '';
  const query = `*[_type == "video"] | order(data desc) ${slice} { titulo, descricao, url, data }`;
  return sanityClient.fetch<SanityVideo[]>(query);
}

/** Busca eventos futuros ordenados por data. */
export async function getEventos(): Promise<SanityEvento[]> {
  const query = `*[_type == "evento" && data > now()] | order(data asc) {
    titulo,
    descricao,
    "imagem": imagem.asset->url,
    "imagemAlt": imagem.alt,
    data,
    modalidade,
    local,
    linkInscricao
  }`;
  return sanityClient.fetch<SanityEvento[]>(query);
}
