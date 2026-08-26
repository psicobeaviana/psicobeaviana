// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL final do site — atualizar para o domínio customizado quando disponível
  site: 'https://sinngjpeg.github.io',
  // base corresponde ao nome do repositório no GitHub Pages
  base: '/psicobeaviana',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
