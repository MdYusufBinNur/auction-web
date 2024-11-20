<template>
  <v-container fluid class="pa-0">
    <CommonBlackCard :title="$t('search_here')"/>
    <v-container class="">
      <v-row>

        <v-col cols="12" md="3" class="hidden-sm-and-down">
          <v-card outlined class="mx-auto fill-height" flat style="min-height: 80vh">
            <v-card outlined class="mx-auto fill-height" flat style="min-height: 80vh">
              <v-card-text class="">
                {{ $t('all_categories') }}
              </v-card-text>
              <v-treeview
                :items="categories"
                item-key="name"
                :active.sync="active"
                :open.sync="open"
                activatable
                color="primary"
                item-children="sub"
                open-on-click
                :multiple-active="false"
                transition
                active-class="grey lighten-2"
              >
                <template v-slot:label="{ item }">
                  <v-btn small text :ripple="false" plain class="text-capitalize" @click="fetchData(item)">
                    {{ item.name }}
                  </v-btn>
                </template>
              </v-treeview>
            </v-card>
          </v-card>
        </v-col>

        <v-col cols="12" v-if="bp.smAndDown" class="hidden-md-and-up">
          <v-chip-group
            active-class="primary--text"
            show-arrows
          >
            <v-chip
              v-for="(tag, i) in categories"
              :key="i"
              @click="fetchData(tag)"
            >
              {{ tag.name }}
            </v-chip>
          </v-chip-group>
        </v-col>
        <v-col cols="12" md="9" sm="12">

          <v-row>
            <v-col cols="12">
              <v-card-text class="px-0">
                {{selectedCategory ? selectedCategory?.name : 'All'}}
              </v-card-text>
            </v-col>
            <v-col  v-show="loading" cols="12" md="4" v-for="n in 8" :key="n*100">
              <v-skeleton-loader type="card, article"></v-skeleton-loader>
            </v-col>
            <v-col v-show="!loading" cols="12" sm="12" md="4" v-for="(item, n) in items" :key="n">
              <v-card
                class="mx-auto"
                flat
                outlined
              >
                <div v-if="item.ad_type === 'premium'" class="premium-badge text-capitalize">
                  {{ $t('premium') }}
                </div>
                <v-carousel
                  :continuous="false"
                  :cycle='false'
                  :show-arrows="false"
                  hide-delimiter-background
                  height="250"
                >
                  <v-carousel-item
                    v-for="(slide, i) in item?.images"
                    :key="i*200"
                  >
                    <v-img
                      height="250"
                      :src="slide.image"
                      lazy-src="https://picsum.photos/id/11/100/60"
                    ></v-img>
                  </v-carousel-item>
                </v-carousel>


                <v-card-title>{{ item.title }}</v-card-title>

                <v-card-text>
                  <div class="text-subtitle-1">
                    {{ $t('price') }} • {{ item.price }} TK
                  </div>

                  <div>
                    {{ $t('location') }}  : {{ item.location }}
                  </div>
                </v-card-text>

                <v-card-actions class="mb-2 text-right justify-end">
                  <v-btn
                    outlined
                    class="px-5"
                    small
                    rounded
                    color="primary"
                    @click.prevent="gotoDetails(item)"
                  >
                    {{$t('more')}}
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
import {mapGetters} from "vuex";

export default {
  name: "index",
  data() {
    return {
      active: [],
      avatar: null,
      open: [],
      selectedCategory: {},
      categories: [],
      selectedComponent: '',
      loading: false,
      selection: 1,
      items: [],
      pagination: {}
    };
  },
  methods: {
    fetchData(item) {
      let searchQuery = null;
      let queryParams = '';
      this.selectedCategory = item
      if (!item?.sub) {
        searchQuery = 'sub_category_id=' + item.id;
      } else {
        searchQuery = 'category_id=' + item.id;
      }

      if (searchQuery) {
        queryParams = '?' + searchQuery;
      }

      this.loading = true;
      this.$axios.get('get-ads' + queryParams)
        .then((response) => {
          this.items = response.data.data.products;
          this.pagination = response.data.data.pagination;
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    toggleExpanded(item, value) {
      item.expanded = value;
      console.log(item)
    },
    gotoDetails(item) {
      this.$router.push('/products/' + item?.slug)
    },
    init() {
      this.loading = true
      // this.$store.dispatch('category/init')
      //   .finally(() => {
      //     this.loading = false
      //   })
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
    initAllAds() {
      let query = this.$route.query['category']
      let searchQuery = ''
      if (query) {
        searchQuery = '?category_id=' + query
      }
      this.loading = true
      this.$axios.get('get-ads' + searchQuery)
        .then((response) => {
          this.items = response.data.data.products;
          this.pagination = response.data.data.pagination;
           this.selectedCategory = query ? this.items[0]?.category : {}
        })
        .catch((err) => {
          console.log(err.data.message)
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  computed: {
    // ...mapGetters({
    //   categoryList: 'category/getCategories'
    // })
  },

  watch: {
    // categoryList: {
    //   handler(nv, ov) {
    //     if (this.categoryList && this.categoryList.length) {
    //       this.categories = JSON.parse(JSON.stringify(this.categoryList))
    //     }
    //   },
    //   immediate: true,
    //   deep: true
    // },
  },
  created() {
    this.initAllAds()
    if (!this.categories.length) {
      this.init()
    }
  }
};
</script>

<style scoped>
.active-item {
  background-color: #f0f0f0; /* Your desired background color */
  color: #333; /* Your desired text color */
}
.premium-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #c5ae00;
  color: white;
  font-weight: bold;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 12px;
  text-transform: uppercase;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
