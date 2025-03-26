// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/test-utils', '@nuxt/image', '@nuxt/eslint', '@pinia/nuxt'],

  eslint: {
    config: {
      tooling: true, //activate JSdoc and unicorn eslint plugins
    },
  },

  postcss: {
    plugins: {
      cssnano: {
        preset: 'default',
      },
    },
  },

  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      API_URL: process.env.API_URL,
      APP_ENVIROMENT_NAME: process.env.APP_ENVIROMENT_NAME,
    },
  },
})
