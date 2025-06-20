import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'AdBarta - %s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'AdBarta is an online marketplace where users can buy and sell a wide range of products. From electronics and fashion to home goods and services, AdBarta offers a convenient platform for all your buying and selling needs. Join our community today and start exploring endless possibilities!'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'AdBarta - Buy and Sell Online' },
      {
        property: 'og:description',
        content: 'AdBarta is an online marketplace where users can buy and sell a wide range of products. From electronics and fashion to home goods and services, AdBarta offers a convenient platform for all your buying and selling needs. Join our community today and start exploring endless possibilities!'
      },
      // { property: 'og:image', content: 'https://example.com/your-image-url.jpg' },  // Replace with the actual image URL
    ],

    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-MNHJX4RFF3",
        async: true,
      },
      {
        src: "gtag.js",
      }
    ]
  },

  // ssr: false,
  // target: 'static',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/globalPlugins.js',
    '@/plugins/axios.js',
    '@/plugins/chatUpdater.js',
    // { src: '@/plugins/socket.io.js', ssr: false }
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
    '@nuxtjs/auth-next',
    "vue-toastification/nuxt",
    '@nuxtjs/i18n',
    '@nuxtjs/dotenv',
    // '@nuxtjs/google-analytics',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
        name: 'English'
      },
      {
        code: 'bn',
        file: 'bn-BN.js',
        name: 'Bangla'
      }

    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL,
    // baseURL: 'https://service.gcare.com.bd/api/v1',


  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: false,
          // autoFetch: true
        },
        endpoints: {
          login: {url: '/login', method: 'post'},
          logout: {url: '/logout', method: 'post'},
          user: {url: '/profile', method: 'get'}
        }
      }
    },
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      callback: '/auth/login',
      home: '/dashboard/wallet'
    }
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
          info: '#4973fd',
          success: '#4CAF50',
          warning: 'rgb(238,194,115)',
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
  build: {},
  router: {
    middleware: ['chatUpdater']

  },
  googleAnalytics: {
    id: 'G-MNHJX4RFF3', // Replace with your Google Analytics tracking ID
  }
  // server: {
  //   host: '0.0.0.0', // default: localhost
  //   port: 3000 // default: 3000
  // }
}
