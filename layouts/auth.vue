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
        <v-menu v-if="isLoggedIn" offset-y left transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text plain small rounded v-bind="attrs" class="px-0" v-on="on" style="background-color: transparent">
              <v-avatar size="30" v-show="bp.mdAndUp">
                <v-img :src="'https://cdn.vuetifyjs.com/images/john.png'"></v-img>
              </v-avatar>
              <v-list-item-content v-show="bp.mdAndUp" class="px-0">

            <span class="pa-0 px-2 caption text-left text-capitalize white--text">
              {{ username }}
            </span>
              </v-list-item-content>
              <v-icon left color="white">
                mdi-menu-down
              </v-icon>
            </v-btn>

          </template>
          <v-card style="border-radius: 10px" max-width="200px">
            <v-list dense>
              <v-list-item
                class="black--text small"
                dense
                selectable
              >
                <v-avatar size="40" v-show="bp.mdAndUp">
                  <v-img :src="'https://cdn.vuetifyjs.com/images/john.png'"></v-img>
                </v-avatar>
                <v-list-item-content v-show="bp.mdAndUp">
                  <v-card-subtitle class="pa-0 px-2">
                    {{ username }}
                  </v-card-subtitle>
                  <span class="pa-0 px-2 caption">
                {{ userRole ? userRole : '-' }}
              </span>
                </v-list-item-content>

              </v-list-item>
              <v-divider/>
              <v-list-item dense @click="logout">
                <v-list-item-avatar size="20">
                  <v-img :src="logoutIcon" contain/>
                </v-list-item-avatar>
                <v-list-item-title class="text-capitalize">
                  <v-btn text small plain :loading="loading">
                    logout
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>

        </v-menu>

      </v-container>
    </v-app-bar>
    <v-main class="bg-white">
      <nuxt/>
      <slot/>
    </v-main>
    <BottomNavigation v-if="bp.smAndDown"/>
    <Footer v-if="bp.mdAndUp"/>
  </v-app>
</template>

<script>
import LogoSVG from "/static/icons/logoSVG.svg";
import logoutIcon from "/static/icons/Logout.png";
import BottomNavigation from "@/components/Common/BottomNavigation";
import Footer from "@/components/Common/Footer";

export default {
  name: "auth",
  middleware: ['auth'],
  components: {Footer, BottomNavigation},
  data() {
    return {
      LogoSVG,
      loadingState: false,
      loading: false,
      show: false,
      logoutIcon,
      profileImg: null,
      userRole: null,
      date: '',
      menu2: false,
      adminMenu: false,
      isLoggedIn: false,
      dialog: false,
      drawer: true,
      username: '',
      userImage: '',

    }

  },
  beforeCreate() {
    this.isLoggedIn = this.$auth?.loggedIn
  },
  created() {
    this.initUser()
  },
  methods: {
    initUser() {
      this.isLoggedIn = this.$auth?.loggedIn
      this.username = this.$auth?.user?.data?.name
      this.userRole = this.$auth?.user?.data?.role
    },
    logout() {
      this.loading = true
      this.$auth.logout()
        .then((response) => {
          this.isLoggedIn = false
          this.$router.push('/auth/login')
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message)
        })
        .finally(() => {
          this.loading = false
        })
    }
  },

}
</script>

<style scoped>
.v-navigation-drawer__border {
  display: none;
}
</style>
