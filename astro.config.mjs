import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  output: "server",
  adapter: vercel(),

  vite: {
    ssr: {
      // add your package to the `noExternal` list
      noExternal: ['ceramic-louge-site']
    }
  }
});