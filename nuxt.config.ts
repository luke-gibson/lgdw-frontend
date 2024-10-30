// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    preset: 'cloudflare-pages'
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  tailwindcss: {
    configPath: 'tailwind.config',
  },
  googleFonts: {
    families: {
      Jost: [400,700],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true
  },
})