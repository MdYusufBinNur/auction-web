<template>
  <v-container>
    <v-row>
      <v-col cols="12" >
        <Breadcrumbs :breadcrumbs="breadcrumbs"/>
      </v-col>
      <v-col cols="12">
        <v-card-title class="px-0">
          Mobile
        </v-card-title>
        <v-card-text class="px-0">
          <div class="text-caption">
            Posted on 05 Feb 8:29 pm, Cox's Bazar, Chattogram Division
          </div>
        </v-card-text>
      </v-col>
      <v-col cols="12" md="9" sm="12" class="">
        <v-card flat>
          <v-carousel>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
          <v-card-text class="px-0">
            <!-- Condition -->
            <v-row class="px-0">
              <v-col cols="12" sm="12">
                <v-card-title class="px-0">{{ $t('price') }}: 12000TK</v-card-title>
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <v-card-text class="px-0">{{ $t('Condition') }}: New</v-card-text>
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <v-card-text class="px-0">{{ $t('brand') }}: Samsung</v-card-text>
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <v-card-text class="px-0">{{ $t('model') }}: Samsung galaxy s22 Ultra</v-card-text>
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <v-card-text class="px-0">{{ $t('edition') }}: New</v-card-text>
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <v-card-text class="px-0">{{ $t('authenticity') }}: Official</v-card-text>
              </v-col>
              <v-col cols="12" class="py-0">
                <v-subheader class="px-0">Features:</v-subheader>
                <v-card-text class="px-0">{{ features }}</v-card-text>
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
                  Md Yusuf Bin Nur
                </v-card-subtitle>
                <v-card-subtitle class="py-0">
                  <v-icon  class="pr-2">
                    mdi-phone
                  </v-icon>
                  {{ showMobile ? '018 156 253 75' : '017 XXXX XXX XXX'}}
                  <div class="text-caption" style="cursor: pointer" @click.prevent="togglePhoneNumber">
                    Click to show mobile number
                  </div>
                </v-card-subtitle>
                <v-card-subtitle class="">
                  <v-icon  class="pr-2">
                    mdi-wechat
                  </v-icon>
                  Chat
                  <div class="text-caption">
                    Yo can chat with this seller
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
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
    ],
    breadcrumbs: [
      {
        text: 'Category',
        disabled: false,
        href: '/products',
      },
      {
        text: 'Mobile',
        disabled: true,
        href: '#',
      },

    ],
  }),
  methods: {
    togglePhoneNumber() {
      this.showMobile = !this.showMobile;
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
