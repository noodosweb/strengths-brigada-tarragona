// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // La portada vive en /parcs-i-jardins; la raíz solo redirige.
  redirects: {
    '/': '/parcs-i-jardins',
  },
});
