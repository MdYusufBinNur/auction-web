<template>
  <v-container align="center">
    <v-row align="end" justify="end" align-content="end" :style="bp.mdAndUp ? 'height: 400px' : 'height: 400px;'">
      <v-col cols="12" sm="12" md="12" lg="12" align-self="end">
        <v-card
          class="mx-auto pa-2"
          style="background-color: transparent"
          flat
        >
          <v-card
            class="mx-auto"
            max-width="344"
            style="background-color: transparent"
            flat
          >
            <v-img :src="emptyParcelBox" aspect-ratio="2.5" contain />
          </v-card>

          <v-card-title>
            <v-spacer />
            Nothing to preview
            <v-spacer />
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import emptyParcelBox from '@/static/noMessage.png'

  export default {
    data: () => ({
      reveal: false,
      emptyParcelBox
    })
  }
</script>

<style scoped>
  .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
  }
</style>
