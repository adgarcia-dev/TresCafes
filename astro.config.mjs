// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },


  i18n: {
    locales: ['es', 'gl', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false
    }
  },


  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Gloock', 
      cssVariable: '--font-gloock',
      weights: [400], 
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Bodoni 72', 'Didot', 'Georgia', 'serif']
    },
    {
      provider: fontProviders.google(),
      name: 'Hanken Grotesk',
      cssVariable: '--font-hanken',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif']
    }
  ]
});
