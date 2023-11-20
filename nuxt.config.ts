import eslint from 'vite-plugin-eslint'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  vite: {
    plugins: [eslint()],
  },
})
