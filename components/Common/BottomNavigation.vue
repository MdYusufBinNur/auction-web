<template>

  <v-bottom-navigation
      v-model="value"
      :bg-color="'primary'"
      mode="shift"
  >
    <v-btn @click.prevent="$router.push('/')">
      <v-icon>mdi-home-outline</v-icon>
      <span>Home</span>
    </v-btn>
    <v-btn>
      <v-icon>mdi-invoice-outline</v-icon>
      <span>All Ads</span>
    </v-btn>
    <v-btn>
      <v-icon>mdi-book-plus-outline</v-icon>
      <span>Post Ad</span>
    </v-btn>

    <v-btn>
      <v-icon>mdi-account-outline</v-icon>
      <span>Account</span>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {
      value : 0
    }
  }
}
</script>


<style scoped>

</style>
