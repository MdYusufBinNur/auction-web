<template>
  <v-container :fluid="true" class="pa-0">
    <CommonBlackCard title="Search here" />
    <Category />
  </v-container>
</template>

<script>
import Category from "@/components/Category";
export default {
  name: "index",
  components: {Category},
  layout: 'auth'
}
</script>

<style scoped>

</style>
