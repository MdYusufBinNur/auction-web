<template>
  <v-app>
    <v-app-bar elevation="0" flat color="background" fixed app>
      <v-container class="d-flex flex-row align-center">
        <v-app-bar-nav-icon :ripple="false" class="px-15">
          <template v-slot:default>
            <v-img @click="$router.push('/')" :src="'/icons/Adbarta.svg'" contain aspect-ratio="11"/>

          </template>
        </v-app-bar-nav-icon>
        <v-spacer/>
        <v-menu v-if="isLoggedIn" offset-y left transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text plain small rounded v-bind="attrs" class="px-0" v-on="on" style="background-color: transparent">
              <v-avatar :size="bp.smAndDown ? 20 : 30" v-show="bp.mdAndUp" >
                <v-img :src="userImage"></v-img>
              </v-avatar>
              <v-list-item-content  class="px-0">

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
                  <v-img :src="userImage"></v-img>
                </v-avatar>
                <v-list-item-content >
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
      <v-container>
        <v-row>
          <v-col cols="12" md="3" class="hidden-sm-and-down grey lighten-5">
            <v-card outlined class="mx-auto fill-height transparent" flat style="min-height: 80vh">
              <v-list class="transparent">
                <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  :ripple="false"
                  @click="selectItem(item)"
                  :class="{ 'active-item': isSelected(item) }"
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="12" md="9" sm="12">
            <v-alert
              color="yellow lighten-4"
              v-if="this.$auth?.user?.data?.status !== 'approved'"
            >
              <div class="text-h6">
                Profile not approved yet.
              </div>
              <div class="black--text">
                Your profile is under review. Until it's approved you won't be able to place any AD.
                Thank You
              </div>
            </v-alert>
            <nuxt/>
            <slot/>
          </v-col>
        </v-row>
      </v-container>
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
  name: "dashboard",
  middleware: ['auth-redirect'],
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
      userImage: 'https://cdn.vuetifyjs.com/images/john.png',
      selectedComponent: 'WalletComponent',
      items: [
        // {title: 'Home', icon: 'mdi-view-dashboard-outline', component: 'HomeComponent'},
        {title: 'Wallet', icon: 'mdi-wallet-outline', component: 'WalletComponent'},
        {title: 'My Ads List', icon: 'mdi-format-list-bulleted', component: 'MyAdsComponent'},
        // {title: 'Purchase List', icon: 'mdi-chart-timeline', component: 'PurchaseComponent'},
        {title: 'Profile', icon: 'mdi-account-outline', component: 'ProfileComponent'},
        {title: 'Chat', icon: 'mdi-wechat', component: 'ChatComponent'},
      ],
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
      this.userImage = this.$auth?.user?.data?.photo
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
    },
    selectItem(item) {
      this.selectedComponent = item.component
      switch (item.component) {
        case 'WalletComponent':
          this.$router.push('/dashboard/wallet')
          return
        case 'MyAdsComponent':
          this.$router.push('/dashboard/ads')
          return
        case 'ProfileComponent':
          this.$router.push('/dashboard/profile')
          return
        case 'ChatComponent':
          this.$router.push('/dashboard/chat')
          return
        default:
          this.$router.push('/dashboard/wallet')
          return
      }
    },
    isSelected(item) {
      return this.selectedComponent === item.component;
    },
  },

}
</script>

<style scoped>
.v-navigation-drawer__border {
  display: none;
}
</style>
