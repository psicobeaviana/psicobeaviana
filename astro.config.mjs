// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Alvo de deploy: 'netlify' serve na raiz do domínio; caso contrário, GitHub Pages (subpasta).
// Definimos DEPLOY_TARGET=netlify nas variáveis de ambiente do Netlify.
const isNetlify = process.env.DEPLOY_TARGET === 'netlify';

// https://astro.build/config
export default defineConfig({
  site: isNetlify ? 'https://fanciful-dragon-089ea7.netlify.app' : 'https://sinngjpeg.github.io',
  // No GitHub Pages o site vive em /psicobeaviana/; no Netlify, na raiz.
  base: isNetlify ? '/' : '/psicobeaviana/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
