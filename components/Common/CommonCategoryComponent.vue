<template>
  <v-container >

    <v-row :dense="true" class="d-flex justify-center">
      <v-col cols="12" class="text-center">
        <div :class="bp.smAndDown ? 'text-h6 py-5' : 'text-h4 py-5'" v-text="'All Article'" />
      </v-col>
      <v-col
          v-for="card in data"
          :key="card.title"
          :cols="bp.mdAndUp ? 3 : 6">
        <v-card elevation="0">
          <v-img
              :src="card.src"
              class="align-end elevation-0"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              :cover="true"

          >
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart">
              {{ card.title }}
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "CommonCategoryComponent",
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  computed: {
    cols() {

    }
  }

}
</script>

<style scoped>

</style>
