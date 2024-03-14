import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import svelte from '@astrojs/svelte';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), sitemap()],
  output: "server",
  adapter: vercel(),
  site: 'https://theceramiclounge.com',
  vite: {
    ssr: {
      // add your package to the `noExternal` list
      noExternal: ['ceramic-louge-site']
    }
  }
});