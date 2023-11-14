// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','~/assets/css/fonts.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/fontaine'],
  app:{
    head:{
      htmlAttrs:{
        lang:"en"
      }
    }
  }
})