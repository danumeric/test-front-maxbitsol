// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/test-utils', '@nuxt/image', '@nuxt/eslint', '@pinia/nuxt'],

  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
    {
      path: '~/components/common',
      pathPrefix: false,
    },
  ],

  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: [
    '~/assets/styles/normalize.css',
    '~/assets/styles/variables.css',
    '~/assets/styles/index.scss',
  ],

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
