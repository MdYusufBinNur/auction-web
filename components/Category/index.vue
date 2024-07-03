<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <div :class="bp.smAndDown ? 'text-h6 py-4 font-weight-bold' : 'text-h5 py-4 font-weight-bold'">
          {{ $t('browse_all_categories') }}
        </div>
      </v-col>
      <v-col v-if="loading" cols="2"  v-for="i in 18" :key="i">
        <v-skeleton-loader
          v-bind="attrs"
          type="card-avatar"
        ></v-skeleton-loader>
      </v-col>
      <v-col v-if="!loading" :cols="bp.mdAndUp ? 2 : 4" v-for="(cat, i) in categories" :key="i">
        <v-card :elevation="0" class="text-center" @click.prevent="$router.push('/products?category='+cat.id)">
          <v-img :src="cat.image" contain :aspect-ratio="bp.mdAndUp ? 6 : 4"/>
          <v-card-text class="pa-1">
            {{ cat.name }}
          </v-card-text>

          <v-card-text class="pa-1">
            {{ cat.ads + ' ads' }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Category",
  data() {
    return {
      categories: [],
      loading: false,
      attrs: {
        class: 'mb-6',
        boilerplate: false,
        elevation: 0,
      },
    }
  },

  methods: {
    init() {
      this.loading = true
      this.$axios
        .get('category-list')
        .then((response) => {
          this.categories = response.data.data
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
        this.loading = false
      })
    },
  },
  created() {
    this.init()
  }
}
</script>

<style scoped>

</style>
