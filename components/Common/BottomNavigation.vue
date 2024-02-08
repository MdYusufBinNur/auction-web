<template>

  <v-bottom-navigation
    v-model="value"
    shift
    fixed
    app
    class="primary"
  >
    <v-btn @click.prevent="$router.push('/')" class="white--text">
      <v-icon color="white">mdi-home-outline</v-icon>
      <span>Home</span>
    </v-btn>
    <v-btn @click.prevent="$router.push('/dashboard/ads')" class="white--text">
      <v-icon color="white">mdi-invoice-outline</v-icon>
      <span>All Ads</span>
    </v-btn>
    <v-btn @click.prevent="$router.push('/dashboard/ads/create')" class="white--text">
      <v-icon color="white">mdi-book-plus-outline</v-icon>
      <span>Post Ad</span>
    </v-btn>

    <!--    <v-btn @click.prevent="$router.push('/auth/login')" class="white&#45;&#45;text">-->
    <!--      <v-icon color="white">mdi-dots-vertical</v-icon>-->
    <!--      <span>Account</span>-->
    <!--    </v-btn>-->
    <v-menu
      bottom
      left
      top
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          icon
          v-bind="attrs"
          v-on="on"
          class="white--text"
        >
          <v-icon color="white">mdi-dots-vertical</v-icon>
          <span>more</span>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click.prevent="gotoRoute(item.title)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      items: [
        {title: 'Wallet'},
        {title: 'Chat'},
        {title: 'Profile'},
        {title: 'Purchase'},
      ],
    }
  },
  methods: {
    gotoRoute(target) {
      switch (target) {
        case 'Chat': {
          localStorage.setItem('selectedComponent', 'ChatComponent');
          this.$router.push('/dashboard/home')
          return
        }
        case 'Profile': {
          localStorage.setItem('selectedComponent', 'ProfileComponent');
          this.$router.push('/dashboard/home')
          return
        }
        case 'Wallet': {
          localStorage.setItem('selectedComponent', 'WalletComponent');
          this.$router.push('/dashboard/home')
          return
        }
        case 'Purchase': {
          localStorage.setItem('selectedComponent', 'PurchaseComponent');
          this.$router.push('/dashboard/home')
          return
        }
      }
    }
  }
}
</script>


<style scoped>

</style>
