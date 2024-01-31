<template>
  <div>
    <v-app-bar elevation="0" :flat=true scroll-threshold="0" color="primary">
      <v-app-bar-nav-icon>
        <template v-slot:default>
          <v-img @click="$router.push('/')">
            <ShortLogoSVG/>
          </v-img>
        </template>
      </v-app-bar-nav-icon>
      <v-spacer/>

      <div v-show="bp.smAndUp">
        <nuxt-link v-for="(item, i) in items" :key="i"
                   class="mx-3 text-capitalize text-decoration-none text-center"
                   active-class="transparent" elevation="0"
                   :to="item.to"
        >
          <v-icon size="xl">
            {{ item.icon }}
          </v-icon>
          <span class="flex-column justify-center text-center">
            {{ item.title }}
          </span>

        </nuxt-link>
      </div>
      <v-app-bar-nav-icon v-show="bp.xs">
        <template v-slot:default>
          <SearchSVG/>
        </template>
      </v-app-bar-nav-icon>
      <v-app-bar-nav-icon @click.stop="dialog = !dialog" v-show="bp.xs">
        <template v-slot:default>
          <MenuSVG/>
        </template>
      </v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
import ShortLogoSVG from "/static/icons/ShortLogoSVG.svg";
import SearchSVG from "/static/icons/SearchSVG.svg";
import MenuSVG from "/static/icons/MenuSVG.svg";
import ArrowUpRightSVG from "/static/icons/ArrowUpRightSVG.svg";
import Header from "../../components/Common/Header.vue";

export default {
  name: "Header",
  components: {Header, ArrowUpRightSVG, MenuSVG, SearchSVG, ShortLogoSVG},
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
        to: '#',
        icon: "mdi-account-outline"
      },
      {
        title: 'Chat',
        to: '#',
      },
      {
        title: 'My Account',
        to: '#',
      },
    ],
    opacity: 1
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style scoped>

</style>
