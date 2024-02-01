<template>
  <v-row class="d-flex flex-row justify-space-between">
    <v-col cols="6"  class="mx-auto">
      <div class="text-h5 font-weight-bold">
        {{ title }}
      </div>
    </v-col>
    <v-col cols="6" class="mx-auto" align="end">
      <v-btn rounded small class="primary px-5">
        Add Credit
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "CardHeader",
  props: {
    title: {
      type: String,
      required: true
    },
    button: {
      type: Boolean,
    }
  }
}
</script>

<style scoped>

</style>
