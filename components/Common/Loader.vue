<template>
  <div>
    <v-overlay
      :opacity="1"
      :value="overlay"
    >
      <v-progress-circular indeterminate color="secondary" size="64">
        Loading...
      </v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  data: () => ({
    overlay: true,
  }),
  mounted() {
    // hide the overlay when everything has loaded
    // you could choose some other event, e.g. if you're loading
    // data asynchronously, you could wait until that process returns
    this.overlay = false
  },
}
</script >
