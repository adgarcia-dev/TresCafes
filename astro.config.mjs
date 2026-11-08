// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  // Fuentes: Astro las descarga de Google Fonts al compilar y las sirve
  // desde nuestra propia web (más rápido y sin enviar datos a Google).
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Gloock', // serif de alto contraste, solo para títulos y precios grandes
      cssVariable: '--font-gloock',
      weights: [400], // Gloock solo existe en peso 400
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Bodoni 72', 'Didot', 'Georgia', 'serif']
    },
    {
      provider: fontProviders.google(),
      name: 'Hanken Grotesk', // sans-serif para texto, etiquetas, menú y botones
      cssVariable: '--font-hanken',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif']
    }
  ]
});
