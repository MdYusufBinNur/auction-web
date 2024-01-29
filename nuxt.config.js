import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Auction - %s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'In the tapestry of my journey, I am guided by a steadfast belief in the power of long-term vision. For me, social work is a calling, a way of life that I embrace with a sense of purpose that runs deep. From the very first act of kindness, as a child, when I donated my excess clothes to those in need, I knew that this path was meant for me. It ignited a fire within, a commitment to serve, to stand alongside those who seek betterment, to be a beacon of hope.'
      },
      {name: 'format-detection', content: 'telephone=no'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'Auction'},
      {
        property: 'og:description',
        content: 'In the tapestry of my journey, I am guided by a steadfast belief in the power of long-term vision. For me, social work is a calling, a way of life that I embrace with a sense of purpose that runs deep. From the very first act of kindness, as a child, when I donated my excess clothes to those in need, I knew that this path was meant for me. It ignited a fire within, a commitment to serve, to stand alongside those who seek betterment, to be a beacon of hope.'
      },
      // Replace with the actual image URL

    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  ssr: false,
  target: 'static',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/globalPlugins.js',
    '@/plugins/axios.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'http://lab-api/api/v2',
    baseURL: 'https://api.faraaz.info/api/v1',
    // baseURL: 'http://faraaz-api/api/v1',

  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          background: '#252525',
          surface: '#FFFFFF',
          // primary: '#6200EE',
          'primary-darken-1': '#262626',
          // secondary: '#03DAC6',
          'secondary-darken-1': '#018786',
          error: '#B00020',
          info: 'rgba(18,130,218,0.92)',
          success: '#4CAF50',
          warning: 'rgb(178,180,180)',
          primary: '#252525',
          accent: '#252525',
          secondary: '#FFFFFF',
          lighter: '#FFFFFF',
          darker: '#FFFFFF',
        },
        dark: {
          background: '#252525',
          surface: '#FFFFFF',
          // primary: '#6200EE',
          'primary-darken-1': '#262626',
          // secondary: '#03DAC6',
          'secondary-darken-1': '#018786',
          error: '#B00020',
          info: 'rgba(18,130,218,0.92)',
          success: '#4CAF50',
          warning: 'rgb(178,180,180)',
          primary: '#252525',
          accent: '#252525',
          secondary: '#FFFFFF',
          lighter: '#FFFFFF',
          darker: '#FFFFFF',
        },
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
