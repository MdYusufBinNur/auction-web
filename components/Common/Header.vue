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
    <v-dialog
        v-model="dialog"
        :fullscreen="true"
        :scrim="false"
        transition="dialog-bottom-transition"
    >
      <v-card color="bg_darker">
        <v-toolbar
            dark
            color="bg_darker"
        >
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
                icon
                dark
                @click="dialog = false"
            >
              <v-icon color="primary">mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <!--        <v-list>-->
        <!--          <v-list-item v-for="(item, i) in items" :key="i" class="pa-5 px-10 primary">-->
        <!--            <div @click.prevent="$router.push(item.value)" class="text-h5 pb-3 primary" >-->
        <!--              {{ item.title }}-->
        <!--            </div>-->
        <!--            <template v-slot:append>-->
        <!--              <v-icon>-->
        <!--                <ArrowUpRightSVG />-->
        <!--              </v-icon>-->
        <!--            </template>-->
        <!--            <v-divider class="primary" color="primary"/>-->
        <!--          </v-list-item>-->
        <!--        </v-list>-->
        <v-card
            v-for="(item, i) in items" :key="i"
            flat="true"
            color="transparent"
            style="width: 100%"
            class="px-15 py-2"
        >
          <v-card-item class="px-0">
            <template v-slot:title>
              <div class="text-h6 text-primary text-uppercase ">
                {{ item.title }}
              </div>
              <v-spacer/>
            </template>
            <template v-slot:append>
              <v-icon color="primary" size="30">
                <ArrowUpRightSVG/>
              </v-icon>
            </template>
          </v-card-item>
          <v-divider v-if="i < items.length - 1" :thickness="1" color="primary" style="opacity: inherit" class="px-8"/>

        </v-card>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ShortLogoSVG from "../../assets/icons/ShortLogoSVG.vue";
import SearchSVG from "../../assets/icons/SearchSVG.vue";
import MenuSVG from "../../assets/icons/MenuSVG.vue";
import ArrowUpRightSVG from "../../assets/icons/ArrowUpRightSVG.vue";
import menuSVG from "../../assets/icons/MenuSVG.vue";
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
