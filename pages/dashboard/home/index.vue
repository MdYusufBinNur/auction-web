<template>
  <v-container class="">
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
        <!-- Display selected component here -->
        <component :is="selectedComponent" @create-ad="loadCreateAdComponent"></component>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChatSVG from "@/components/SVG/ChatSVG";
export default {
  name: "index",
  layout: 'auth',
  data() {
    return {
      items: [
        {title: 'Home', icon: 'mdi-view-dashboard-outline', component: 'HomeComponent'},
        {title: 'Wallet', icon: 'mdi-wallet-outline', component: 'WalletComponent'},
        {title: 'My Ads List', icon: 'mdi-format-list-bulleted', component: 'MyAdsComponent'},
        {title: 'Profile', icon: 'mdi-account-outline', component: 'ProfileComponent'},
        {title: 'Chat', icon: 'mdi-wechat', component: 'ChatComponent'},
      ],
      selectedComponent: 'WalletComponent',
    };
  },
  methods: {
    selectItem(item) {
      this.selectedComponent = item.component;
    },
    isSelected(item) {
      return this.selectedComponent === item.component;
    },
    loadCreateAdComponent() {
      this.selectedComponent = 'CreateAdComponent'
    }
  },
  components: {
    HomeComponent: () => import('@/components/Dashboard/Home'),
    WalletComponent: () => import('@/components/Dashboard/Wallet'),
    MyAdsComponent: () => import('@/components/Dashboard/MyAds'),
    ProfileComponent: () => import('@/components/Dashboard/Account'),
    CreateAdComponent: () => import('@/components/Dashboard/CreateAd'),
    ChatComponent: () => import('@/components/Dashboard/ChatComponent'),
    ChatSVG
  },
};
</script>

<style scoped>
.active-item {
  background-color: #f0f0f0; /* Your desired background color */
  color: #333; /* Your desired text color */
}
</style>
