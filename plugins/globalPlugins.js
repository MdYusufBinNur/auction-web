import Vue from 'vue'
import momentTimezone from 'moment-timezone'
import vueDebounce from 'vue-debounce'
Vue.use(vueDebounce)
import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueSocialSharing);
Vue.mixin({
  data() {
    return {

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

