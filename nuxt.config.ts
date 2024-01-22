// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/test-utils/module", "@nuxtjs/eslint-module"],
  experimental: {
    // prevent error in unit test github action
    appManifest: false,
  },
  eslint: {
    // prevent warning on startup
    lintOnStart: false,
  },
});
