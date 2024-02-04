<template>

  <v-bottom-navigation
    v-model="value"
    :bg-color="'primary'"
    shift
    fixed
    app
  >
    <v-btn @click.prevent="$router.push('/')">
      <v-icon>mdi-home-outline</v-icon>
      <span>Home</span>
    </v-btn>
    <v-btn @click.prevent="$router.push('/dashboard/ads')">
      <v-icon>mdi-invoice-outline</v-icon>
      <span>All Ads</span>
    </v-btn>
    <v-btn @click.prevent="$router.push('/dashboard/ads/create')">
      <v-icon>mdi-book-plus-outline</v-icon>
      <span>Post Ad</span>
    </v-btn>

    <v-btn @click.prevent="$router.push('/auth/login')">
      <v-icon>mdi-account-outline</v-icon>
      <span>Account</span>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {
      value: 0
    }
  }
}
</script>


<style scoped>

</style>
