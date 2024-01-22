// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/test-utils/module",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/eslint-module",
  ],
  experimental: {
    // prevent error in unit test github action
    appManifest: false,
  },
  tailwindcss: {
    // prevent message on startup
    viewer: false,
  },
  eslint: {
    // prevent warning on startup
    lintOnStart: false,
  },
});
