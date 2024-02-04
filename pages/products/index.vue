<template>
  <v-container fluid class="pa-0">
    <CommonBlackCard :title="$t('search_here')"/>
    <v-container class="">
      <v-row>
        <v-col cols="12" md="3" class="hidden-sm-and-down">
          <v-card outlined class="mx-auto fill-height" flat style="min-height: 80vh">
            <v-list>
              <v-list-item
                v-for="item in categories"
                :key="item.name"
                :ripple="false"
                @click="fetchData(item)"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" v-if="bp.smAndDown" class="hidden-md-and-up">
          <v-chip-group
            active-class="primary--text"
            show-arrows
          >
            <v-chip
              v-for="tag in categories"
              :key="tag"
            >
              {{ tag.name }}
            </v-chip>
          </v-chip-group>
        </v-col>
        <v-col cols="12" md="9" sm="12">

          <v-row>
            <v-col cols="12">
              <v-card-text class="px-0">
                Categories / mobile
              </v-card-text>
            </v-col>
            <v-col cols="12" sm="12" md="4" v-for="n in 6" :key="n">
              <v-card
                :loading="loading"
                class="mx-auto"
              >
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                  height="250"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>

                <v-card-title>Samsung Galaxy Z10</v-card-title>

                <v-card-text>
                  <div class="text-subtitle-1">
                    Price • 1200 TK
                  </div>

                  <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                </v-card-text>

                <v-card-actions class="mb-2 text-right justify-end">
                  <v-btn
                    outlined
                    class="px-5"
                    small
                    rounded
                  >
                    More
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>

</template>

<script>
export default {
  name: "index",
  layout: 'products',
  data() {
    return {
      categories: [
        {name: 'Mobiles',}, {name: 'Electronics',},
        {name: 'Vehicles',}, {name: 'Property',}, {name: 'Living',}, {name: 'Pets',}, {name: "Men's Fashion",}, {name: "Women's Fashion",}, {name: 'Sports & Kids',}, {name: 'Business',}, {name: 'Essentials',}, {name: 'Education',}, {name: 'Agriculture',}, {name: 'Jobs',}, {name: 'Services',},
        {name: 'Overseas',},],
      selectedComponent: '',
      loading: false,
      selection: 1,
    };
  },
  methods: {
    fetchData() {

    },
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  }
};
</script>

<style scoped>
.active-item {
  background-color: #f0f0f0; /* Your desired background color */
  color: #333; /* Your desired text color */
}
</style>
