<template>
  <v-card :flat="true" class="px-0 txt" color="primary" :min-height="'200px'"
          style="border-radius: unset">
    <!--    <div :class="bp.mdAndUp ? 'text-h2' : 'text-h4'"  class="text-center fade-in-up text-capitalize" align="center" >-->
    <!--      {{ title }}-->
    <!--    </div>-->

    <v-row class="d-flex justify-center">
      <v-col cols="12" xs="2" sm="8" md="6" class="px-15">
        <v-text-field
          rounded
          color="white"
          outlined
          hide-details
          placeholder="Search your desired product"
          class="px-0 secondary">
          <template v-slot:append>
            <v-icon @click.prevent="" color="primary">
              mdi-magnify
            </v-icon>
          </template>
        </v-text-field>

      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "BlackCard",
  props: {
    title: {
      type: String,
    },
    breadcrumbs: {
      type: Array,
      required: false
    }
  },

}
</script>

<style scoped>
.txt {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* You can add additional styling if needed */
}
</style>

