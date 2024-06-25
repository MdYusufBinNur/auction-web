<template>
  <v-container>
    <v-row>
      <v-col cols="12" >
        <Breadcrumbs :breadcrumbs="breadcrumbs"/>
      </v-col>
      <v-col cols="12">
        <v-card-title class="px-0">
          {{this.item?.title}}
        </v-card-title>
        <v-card-text class="px-0" v-if="this.item.date">
          <div class="text-caption">
            Posted on {{this.item.date + ', ' + this.item.location}}
          </div>
        </v-card-text>
      </v-col>
      <v-col cols="12" md="9" sm="12" class="">
        <v-card flat>
          <v-carousel>
            <v-carousel-item
              v-for="(item,i) in images"
              :key="i"
              :src="item.image"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
          <v-card-text class="px-0">
            <!-- Condition -->
            <v-row class="px-0">
              <v-col cols="12" sm="12">
                <v-card-title class="px-0">{{ $t('price') }}: {{ this.item?.price }}TK</v-card-title>
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <v-card-text class="px-0">{{ $t('Condition') }}: {{ this.item?.condition }}</v-card-text>
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <v-card-text class="px-0">{{ $t('brand') }}: {{ this.item?.brand }}</v-card-text>
              </v-col>
<!--              <v-col cols="12" sm="6" class="py-0">-->
<!--                <v-card-text class="px-0">{{ $t('model') }}: {{ this.item?.price }}</v-card-text>-->
<!--              </v-col>-->
              <v-col cols="12" sm="6" class="py-0">
                <v-card-text class="px-0">{{ $t('edition') }}: {{ this.item?.edition }}</v-card-text>
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <v-card-text class="px-0">{{ $t('authenticity') }}: {{ this.item?.authenticity }}</v-card-text>
              </v-col>
              <v-col cols="12" class="py-0">
                <v-subheader class="px-0">Features:</v-subheader>
                <v-card-text class="px-0">{{ this.item?.features  }}</v-card-text>
              </v-col>
            </v-row>

          </v-card-text>

        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="12">
        <v-row>
          <v-col cols="12">
            <div class="sticky-container">
              <v-card flat outlined  class="">
                <v-card-text>
                  {{$t('seller_info')}}
                </v-card-text>
                <v-divider />
                <v-card-subtitle class="">
                  {{ this.item?.contact_name }}
                </v-card-subtitle>
                <v-card-subtitle class="py-0">
                  <v-icon  class="pr-2">
                    mdi-phone
                  </v-icon>
                  {{ this.item.show_contact_number ? this.item.contact_number : '01X XXXX XXX XXX'}}
                  <div class="text-caption" style="cursor: pointer" @click.prevent="togglePhoneNumber">
                    Click to show mobile number
                  </div>
                </v-card-subtitle>
                <v-card-subtitle class="" style="cursor: pointer" @click.prevent="gotoRoute">
                  <v-icon  class="pr-2">
                    mdi-wechat
                  </v-icon>
                  Chat
                  <div class="text-caption" >
                    You can chat with this seller
                  </div>
                </v-card-subtitle>
              </v-card>

            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumbs from "@/components/Common/Breadcrumbs";

export default {
  name: "index",
  components: {Breadcrumbs},
  data: () => ({
    condition: 'Used',
    brand: 'Vivo',
    model: 'Y20G',
    edition: 'vivo y20G 6/128',
    authenticity: 'Original',
    showMobile : false,
    features: '4G, Dual SIM, Micro SIM, Mini SIM, Android, Expandable Memory, 6 GB RAM, Bluetooth, Wifi, Fingerprint Sensor',
    item: {
      id: null,
      category_id: null,
      user_id: null,
      sub_category_id: null,
      slug: null,
      title: null,
      size: null,
      ad_type: null,
      color: null,
      location: null,
      condition: null,
      brand: null,
      edition: null,
      authenticity: null,
      features: null,
      division_id: null,
      district_id: null,
      sub_district_id: null,
      view: null,
      status: null,
      points: null,
      price: null,
      contact_name: null,
      contact_email: null,
      contact_number: null,
      additional_contact_number: null,
      show_contact_number: null,
      accept_terms: null,
      created_at: null,
      updated_at: null,
      category_name: null,
      sub_category_name: null,
      image: null,
      date: null
    },
    images: [],
    breadcrumbs: [],
  }),
  created() {
    this.initAdDetails()
  },
  methods: {
    togglePhoneNumber() {
      this.item.show_contact_number = !this.item.show_contact_number;
    },
    gotoRoute() {
      if (this.item.user_id) {
        this.$router.push('/dashboard/chat?user=' + this.item?.user_id)
      }

    },

    initAdDetails() {
      let query = this.$route.params['id']
      if (!query) {
        this.$router.push('/products')
      }
      this.loading = true
      this.$axios.get('get-ads/' + query)
        .then((response) => {
          this.item = response.data?.data;
          this.images = this.item?.images
          this.setBreadcrumbs()
        })
        .catch((err) => {
          console.log(err.data.message)
        })
        .finally(() => {
          this.loading = false
        })
    },
    setBreadcrumbs() {
      // Clear existing breadcrumbs
      this.breadcrumbs = [];

      // Add the first breadcrumb for category
      if (this.item && this.item.category_name) {
        this.breadcrumbs.push({
          text: this.item.category_name,
          href: '/products',
        });
      }

      // Add the second breadcrumb for subcategory
      if (this.item && this.item.sub_category_name) {
        this.breadcrumbs.push({
          text: this.item.sub_category_name,
          disabled: true,
          href: '#',
        });
      }
    }

  }
}
</script>

<style scoped>
.sticky-container {
  position: sticky!important;
  top: 64px!important;
}

</style>
