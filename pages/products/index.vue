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
                open-on-click
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
            <v-col  v-show="loading" cols="12" md="4" v-for="n in 8" :key="n*100">
              <v-skeleton-loader type="card, article"></v-skeleton-loader>
            </v-col>
            <v-col v-show="!loading" cols="12" sm="12" md="4" v-for="(item, n) in 6" :key="n">
              <v-card
                class="mx-auto"
                flat
                outlined
              >

                <v-carousel
                  :continuous="false"
                  :cycle='false'
                  :show-arrows="false"
                  hide-delimiter-background
                  height="250"
                >
                  <v-carousel-item
                    v-for="(slide, i) in 4"
                    :key="i"
                  >
                    <v-img
                      height="250"
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                      lazy-src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>
                  </v-carousel-item>
                </v-carousel>


                <v-card-title>Samsung Galaxy Z10</v-card-title>

                <v-card-text>
                  <div class="text-subtitle-1">
                    {{ $t('price') }} • 1200 TK
                  </div>

                  <div>
                    {{ $t('location') }}  : 29/A, Bismillah Tower, Badda, 1212 Dhaka'
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
export default {
  name: "index",
  data() {
    return {
      active: [],
      avatar: null,
      open: [],
      categories: [
        {
          name: 'Mobiles',
          children: [
            {name: 'Smartphones'},
            {name: 'Feature phones'},
            {name: 'Accessories'}
          ]
        },
        {
          name: 'Electronics',
          children: [
            {name: 'Computers & Laptops'},
            {name: 'Tablets & E-readers'},
            {name: 'Cameras & Photography'},
            {name: 'Audio & Headphones'},
            {name: 'TVs & Home Theater'},
            {name: 'Video Games & Consoles'}
          ]
        },
        {
          name: 'Vehicles',
          children: [
            {name: 'Cars'},
            {name: 'Motorcycles'},
            {name: 'Trucks & Commercial Vehicles'},
            {name: 'Boats & Watercraft'},
            {name: 'RVs & Campers'},
            {name: 'Parts & Accessories'}
          ]
        },
        {
          name: 'Property',
          children: [
            {name: 'Houses & Apartments for Sale'},
            {name: 'Houses & Apartments for Rent'},
            {name: 'Commercial Property'},
            {name: 'Land & Plots'},
            {name: 'Vacation Rentals'}
          ]
        },
        {
          name: 'Living',
          children: [
            {name: 'Furniture'},
            {name: 'Home Appliances'},
            {name: 'Home Decor & Garden'},
            {name: 'Kitchen & Dining'},
            {name: 'Bedding & Linens'}
          ]
        },
        {
          name: 'Pets',
          children: [
            {name: 'Dogs'},
            {name: 'Cats'},
            {name: 'Birds'},
            {name: 'Fish & Aquariums'},
            {name: 'Pet Supplies & Accessories'}
          ]
        },
        {
          name: "Men's Fashion",
          children: [
            {name: 'Clothing'},
            {name: 'Shoes'},
            {name: 'Accessories'}
          ]
        },
        {
          name: "Women's Fashion",
          children: [
            {name: 'Clothing'},
            {name: 'Shoes'},
            {name: 'Accessories'}
          ]
        },
        {
          name: 'Sports & Kids',
          children: [
            {name: 'Sports Equipment'},
            {name: 'Fitness & Exercise'},
            {name: 'Outdoor & Camping'},
            {name: 'Toys & Games'}
          ]
        },
        {
          name: 'Business',
          children: [
            {name: 'Business for Sale'},
            {name: 'Office Equipment & Furniture'},
            {name: 'Services'}
          ]
        },
        {
          name: 'Essentials',
          children: [
            {name: 'Groceries & Food'},
            {name: 'Health & Beauty'},
            {name: 'Baby & Kids Essentials'},
            {name: 'Cleaning & Household'}
          ]
        },
        {
          name: 'Education',
          children: [
            {name: 'Textbooks & Study Materials'},
            {name: 'Online Courses & Tutorials'},
            {name: 'School Supplies'}
          ]
        },
        {
          name: 'Agriculture',
          children: [
            {name: 'Farm Equipment & Machinery'},
            {name: 'Livestock'},
            {name: 'Seeds & Plants'},
            {name: 'Agricultural Services'}
          ]
        },
        {
          name: 'Jobs',
          children: [
            {name: 'Job Openings'},
            {name: 'Freelance & Part-Time'},
            {name: 'Internships'}
          ]
        },
        {
          name: 'Services',
          children: [
            {name: 'Home Services'},
            {name: 'Beauty & Wellness'},
            {name: 'Tutoring & Lessons'},
            {name: 'Event Planning & Catering'}
          ]
        },
        {
          name: 'Overseas',
          children: [
            {name: 'International Real Estate'},
            {name: 'International Jobs'},
            {name: 'Travel & Vacation Rentals'},
            {name: 'Import & Export'}
          ]
        }
      ],
      selectedComponent: '',
      loading: false,
      selection: 1,
    };
  },
  methods: {
    fetchData(item) {
      console.log('Item => ', item.name)
    },
    toggleExpanded(item, value) {
      item.expanded = value;
      console.log(item)
    },
    init() {
      this.loading = true
      setTimeout(() => (this.loading = false), 1500)
    },
    gotoDetails(item) {
      this.$router.push('/products/' + item)
    }
  },
  created() {
    this.init()
  }
};
</script>

<style scoped>
.active-item {
  background-color: #f0f0f0; /* Your desired background color */
  color: #333; /* Your desired text color */
}
</style>
