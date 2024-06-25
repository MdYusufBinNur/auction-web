<template>
  <v-app>
    <v-app-bar elevation="0" flat color="background" fixed app>
      <v-container class="d-flex flex-row align-center">
        <v-spacer v-if="bp.smAndDown"/>
        <v-app-bar-nav-icon :ripple="false">

          <template v-slot:default>
            <v-img @click="$router.push('/')" :src="'/icons/Adbarta.svg'" contain aspect-ratio="11"/>
          </template>
        </v-app-bar-nav-icon>
        <v-spacer/>
        <div v-show="bp.mdAndUp">
          <nuxt-link v-for="(item, i) in items" :key="i"
                     class="mx-3 text-capitalize text-decoration-none text-shades-white white--text"
                     active-class="transparent" elevation="0"
                     :to="item.to"
          >
              <span class="text-sm-body-2">
                {{ item.title }}
              </span>
          </nuxt-link>
          <v-btn class="text-capitalize white--text" text @click.prevent="gotoRoute('ChatComponent')" rounded
                 :ripple="false">
            Chat
          </v-btn>
          <v-btn class="bg-white text-capitalize mx-3" @click.prevent="gotoRoute('MyAdsComponent')" rounded
                 :ripple="false">
            Post your AD
          </v-btn>
<!--          <LanguageSwitcher/>-->
        </div>
      </v-container>
    </v-app-bar>
    <v-dialog
      v-model="dialog"
      :fullscreen="true"
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <v-card color="primary">
        <v-toolbar
          dark
          color="primary"
        >
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              :icon="true"
              dark
              @click="dialog = false"
            >
              <v-icon color="white">mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card
          v-for="(item, i) in items" :key="i"
          flat
          color="transparent"
          style="width: 100%"
          class="px-15 py-2"
        >
          <v-card-actions class="px-0">
            <template v-slot:default>
              <div class="text-h6 white--text text--white text-uppercase ">
                {{ item.title }}
              </div>
              <v-spacer/>
            </template>
            <template v-slot:default>
              <v-icon size="30">
                <ArrowUpRightSVG/>
              </v-icon>
            </template>
          </v-card-actions>
          <v-divider v-if="i < items.length - 1" :thickness="1" color="white" style="opacity: inherit" class="px-8"/>
        </v-card>
        <v-card
          flat
          color="transparent"
          style="width: 100%"
          class="px-15 py-6"
        >
          <v-btn rounded color="secondary">
            Post your Ad
          </v-btn>
        </v-card>
      </v-card>
    </v-dialog>
    <v-main class="bg-white">
      <nuxt/>
    </v-main>
    <BottomNavigation v-if="bp.smAndDown"/>
    <Footer v-if="bp.mdAndUp"/>
  </v-app>
</template>

<script>
import Footer from "../components/Common/Footer.vue";
import LogoSVG from "/static/icons/logoSVG.svg";
import SearchSVG from "/static/icons/SearchSVG.svg";
import MenuSVG from "/static/icons/MenuSVG.svg";
import ArrowUpRightSVG from "/static/icons/ArrowUpRightSVG.svg";
import ShortLogoSVG from "/static/icons/ShortLogoSVG.svg";
import BottomNavigation from "../components/Common/BottomNavigation.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import WhatsAppButton from "@/components/Social/WhatsAppButton";

export default {
  name: "default",
  components: {
    WhatsAppButton,
    LanguageSwitcher, BottomNavigation, ShortLogoSVG, LogoSVG, ArrowUpRightSVG, MenuSVG, SearchSVG, Footer},
  data: () => ({
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    drawer: false,
    group: null,
    items: [
      {
        title: 'All Ads',
        to: '/products',
      },
      {
        title: 'My Account',
        to: '/auth/login',
      },
    ],
    opacity: 1
  }),
  watch: {
    group() {
      this.drawer = false
    },
  },

  methods: {
    gotoRoute(item) {
      localStorage.setItem('selectedComponent', item);
      this.$router.push('/dashboard/wallet')
    }
  }

}
</script>

<style scoped>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}

</style>
