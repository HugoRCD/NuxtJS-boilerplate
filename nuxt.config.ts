export default defineNuxtConfig({
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    layoutTransition: { name: "fade", mode: "out-in" },
  },

  ssr: false,

  css: ["~/assets/style/main.scss"],

  components: true,

  modules: ["nuxt-icon", "@nuxt/image-edge", "@pinia/nuxt", "nuxt-headlessui"],

  imports: {
    dirs: ["store"],
  },

  runtimeConfig: {
    public: {
      appEnv: process.env.NUXT_APP_ENV,
      googleClientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID,
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },

  experimental: {
    reactivityTransform: false,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  image: {
    dir: "assets/media",
  },
});
