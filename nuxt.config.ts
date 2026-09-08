// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  devtools: {
    enabled: true
  },

  app: {
    head: {
      title: 'Construct - Build Apps Visually',
      meta: [
        { name: 'description', content: 'The all-in-one platform for building modern applications. Code, design, and deploy with integrated AI assistance.' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  content: {
    documentDriven: false,
    highlight: {
      theme: 'github-dark'
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000',
      apiKey: process.env.NUXT_PUBLIC_API_KEY || 'api',
      appName: 'Construct'
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/features': { prerender: true },
    '/pricing': { prerender: true },
    '/download': { prerender: true },
    '/changelog': { prerender: true },
    '/contact': { prerender: true },
    '/about': { prerender: true },
    '/privacy': { prerender: true },
    '/terms': { prerender: true },
    '/dashboard/**': { ssr: false }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
