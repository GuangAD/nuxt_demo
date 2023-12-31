// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    // '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  runtimeConfig:{
    public: {}
  },
  app: {
    head:{}
  }
  // tailwindcss: {
  //   cssPath: '~/assets/css/tailwind.css',
  //   configPath: 'tailwind.config',
  //   exposeConfig: false,
  //   exposeLevel: 2,
  //   config: {},
  //   injectPosition: 'first',
  //   viewer: true,
  // }
})
