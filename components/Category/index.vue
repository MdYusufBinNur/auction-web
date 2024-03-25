<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <div :class="bp.smAndDown ? 'text-h6 py-4 font-weight-bold' : 'text-h5 py-4 font-weight-bold'">
          {{ $t('browse_all_categories') }}
        </div>
      </v-col>
      <v-col :cols="bp.mdAndUp ? 2 : 4" v-for="(cat, i) in categories" :key="i">
        <v-card :elevation="0" class="text-center" @click.prevent="$router.push('/products')">
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
    <!-- Dialog for Creating New Post -->

  </v-container>
</template>

<script>
import education from 'static/public/category/book-open-cover.png'
import car from 'static/public/category/car-rear.png'
import pet from 'static/public/category/cat.png'
import sports from 'static/public/category/dice-d12.png'
import job from 'static/public/category/employee-man.png'
import living from 'static/public/category/fireplace.png'
import property from 'static/public/category/property.png'
import electronic from 'static/public/category/tv-music.png'
import mobile from 'static/public/category/mobile-button.png'
import fashion from 'static/public/category/tshirt.png'
import women from 'static/public/category/shirt-tank-top.png'
import business from 'static/public/category/suitcase-alt.png'
import essential from 'static/public/category/tools.png'
import agriculture from 'static/public/category/wheat-awn.png'
import overseas from 'static/public/category/airplan.png'
import service from 'static/public/category/user-headset.png'
import {mapGetters} from "vuex";

export default {
  name: "Category",
  data() {
    return {
      service, overseas, agriculture, education, essential, business, women, fashion,
      mobile, electronic, property, living, job, sports, pet, car,
      categories: [
        {name: 'Mobiles', ads: 59483, image: mobile},
        {name: 'Electronics', ads: 53760, image: electronic},
        {name: 'Vehicles', ads: 29829, image: car},
        {name: 'Property', ads: 18127, image: property},
        {name: 'Living', ads: 17242, image: living},
        {name: 'Pets', ads: 13787, image: pet},
        {name: "Men's Fashion", ads: 10880, image: fashion},
        {name: "Women's Fashion", ads: 8790, image: women},
        {name: 'Sports & Kids', ads: 7404, image: sports},
        {name: 'Business', ads: 3258, image: business},
        {name: 'Essentials', ads: 3058, image: essential},
        {name: 'Education', ads: 2902, image: education},
        {name: 'Agriculture', ads: 797, image: agriculture},
        {name: 'Jobs', ads: 657, image: job},
        {name: 'Services', ads: 646, image: service}, // You can add the image path if available
        {name: 'Overseas', ads: 0, image: overseas}
      ],
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      categoryList: 'category/getCategories'
    })
  },

  watch: {
    categoryList: {
      handler(nv, ov) {
        if (this.categoryList && this.categoryList.length) {
          this.categories = JSON.parse(JSON.stringify(this.categoryList))
        }
      },
      immediate: true,
      deep: true
    },
  },
  methods: {
    init() {
      this.loading = true
      this.$store.dispatch('category/init')
        .finally(() => {
          this.loading = false
        })
    },

  },
  created() {
    if (!this.categoryList) {
      this.init()
    }
  }
}
</script>

<style scoped>

</style>
