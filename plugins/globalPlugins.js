import Vue from 'vue'
import momentTimezone from 'moment-timezone'
import vueDebounce from 'vue-debounce'
Vue.use(vueDebounce)
// import * as VueGoogleMaps from 'vue2-google-maps'
import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueSocialSharing);
Vue.mixin({
  data() {
    return {
      tiny_api_key: 'mw34pc21bdb4huz4mvu639u3pka3tmggjygirmj07to8lhe8',
    }
  },
  computed: {
    bp() {
      return this.$vuetify.breakpoint
    },
    baseURL() {
      return 'https://gcare.com.bd'
      // return 'http://127.0.0.1:8000/'
    },
  },
  methods: {
    formatTimeZone(date) {
      let momentDate = momentTimezone(date)
      return momentDate.format('ll')
      // return momentDate.tz('Asia/Dhaka').format('lll')
    },
    getDayName(date) {
      let dt = momentTimezone(date, "YYYY-MM-DD")
      return dt.format('dddd').substring(0, 3)
    }
  },
})
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyCaElQyMCbsyjftm6nbFJxPDkN7G0rcRrA',
//     libraries: 'places',
//     // This is required if you use the Autocomplete plugin
//     // OR: libraries: 'places,drawing'
//     // OR: libraries: 'places,drawing,visualization'
//     //     // (as you require)
//     //     // If you want to set the version, you can do so:
//     //     // v: '3.26',
//   },
// })
