// Dados dos artigos do blog — fonte única usada na home e na página de artigos.
// Serão substituídos pelo Sanity CMS na issue #7.

export interface Post {
  categoria: string;
  titulo: string;
  resumo: string;
  image: string;
  imageAlt: string;
  slug: string;
  // Parágrafos do conteúdo do artigo (placeholder até o Sanity CMS na issue #7)
  conteudo?: string[];
}

const base = import.meta.env.BASE_URL;

export const posts: Post[] = [
  {
    categoria: 'Ansiedade',
    titulo: 'Entendendo os gatilhos da ansiedade no dia a dia',
    resumo:
      'Pequenas mudanças na rotina podem ajudar a identificar e lidar com momentos de tensão antes que eles se agravem.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnb1UbjIb6EzwNP6oG9FXFVXRpgW0JFAHP5WIhoWeAehlwOYFecbIHy7gSvmsOiodmlsA6T2I0I0_YuB_CnETAqVIgftt_lECwDDgw-xJQz8V0RiXXq8WEQohZ3g8xHHNgaq-GJMtbHsuf14kEq5BOaV-pMvychlic5CnO_hIqPLysTl87KhSphidNp_DnfTAAzzxXmMFZRNUMTwHux1u0eln_f9ZIv2F6xzegXZKcv5ilUS-KHkOJ0Qg1luQksi_MCLM',
    imageAlt: 'Pessoa escrevendo em diário, refletindo sobre sentimentos',
    slug: 'gatilhos-ansiedade',
    conteudo: [
      'Este é um artigo de exemplo. O conteúdo completo será publicado em breve através do painel de conteúdos.',
      'A ansiedade é uma resposta natural do organismo diante de situações percebidas como ameaçadoras. Identificar os gatilhos que a disparam no dia a dia é um passo importante para lidar com ela de forma mais consciente.',
      'Pequenas mudanças na rotina, como pausas para respiração, organização do tempo e momentos de autocuidado, podem ajudar a reduzir a tensão antes que ela se agrave.',
    ],
  },
  {
    categoria: 'Autoconhecimento',
    titulo: 'A importância de estabelecer limites saudáveis',
    resumo:
      'Dizer não é um ato de autocuidado fundamental para a manutenção da nossa saúde mental nas relações interpessoais.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASJFiAqFfhy-1i8H5YoJ9oMq8UT2YDK8iyH6j6VY_PNhpVT5frKNYl27MKLWkgP-5E4w749Hhqm5eqqiJBv2DHY6yOFEOD6GEQNAn_zBgKa8j8MHUq6sbItSTdvf4a2kah-n3wUsCEp-gWmJzi8kIlDFehyaOzLtneBHDVmK93xJa8CNPQJrGSZOp8uzD115fnIr8wRN5ln-XHXo-VlDosi7bE-oxMUFq-01WwQrriE-l9zdzqPuqANYUDgPgjcw7_apM',
    imageAlt: 'A importância de estabelecer limites saudáveis',
    slug: 'limites-saudaveis',
    conteudo: [
      'Este é um artigo de exemplo. O conteúdo completo será publicado em breve através do painel de conteúdos.',
      'Estabelecer limites saudáveis é um ato de autocuidado fundamental. Dizer não quando necessário protege nossa energia e preserva a qualidade das nossas relações.',
      'Aprender a comunicar necessidades e limites de forma clara e respeitosa é uma habilidade que se desenvolve com o tempo, e a terapia pode ser um espaço valioso para esse aprendizado.',
    ],
  },
  {
    categoria: 'Bem-estar',
    titulo: 'Desmistificando a terapia: Quando buscar ajuda?',
    resumo:
      'Muitas vezes esperamos o sofrimento ficar insuportável para procurar um profissional, mas a prevenção é chave.',
    image: `${base}images/456e50e5-aac6-4403-97da-57c865bcb02c.jpeg`,
    imageAlt: 'Desmistificando a terapia',
    slug: 'quando-buscar-ajuda',
    conteudo: [
      'Este é um artigo de exemplo. O conteúdo completo será publicado em breve através do painel de conteúdos.',
      'Muitas vezes esperamos o sofrimento ficar insuportável para procurar ajuda profissional. Mas a terapia não é apenas para momentos de crise, ela também é uma ferramenta de prevenção e autoconhecimento.',
      'Buscar apoio psicológico é um sinal de cuidado consigo mesmo. Quanto mais cedo damos esse passo, mais recursos temos para lidar com os desafios da vida.',
    ],
  },
];
