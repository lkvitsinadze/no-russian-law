// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    ['@nuxt/eslint', { fix: true }],
    '@nuxt/ui',
    '@nuxt/fonts'
  ],
  colorMode: {
    preference: 'light'
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  devtools: {
    enabled: true
  },
  typescript: {
    strict: false
  },
  ssr: false,
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
