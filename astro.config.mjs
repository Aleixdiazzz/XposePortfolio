// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  image: {
    domains: ['minio.xpose.es'],
  },
  server: {
    host: true  // ← This tells Astro to listen on 0.0.0.0
  },
  integrations: [tailwind()],
  adapter: node({
    mode: 'standalone'
  })
});