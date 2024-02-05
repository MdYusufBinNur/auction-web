<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
      </v-col>
      <v-col cols="12" md="9" sm="12">
        <v-card flat outlined>
          <v-carousel>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-card>
        <v-card-text>
          <!-- Condition -->
          <v-row>
            <v-col cols="12" sm="12">
              <v-card-title>{{ $t('price') }}: 12000TK</v-card-title>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <v-card-text>{{ $t('Condition') }}: New</v-card-text>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <v-card-text>{{ $t('brand') }}: Samsung</v-card-text>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <v-card-text>{{ $t('model') }}: Samsung galaxy s22 Ultra</v-card-text>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <v-card-text>{{ $t('edition') }}: New</v-card-text>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <v-card-text>{{ $t('authenticity') }}: Official</v-card-text>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-subheader>Features:</v-subheader>
              <v-card-text>{{ features }}</v-card-text>
            </v-col>
          </v-row>

        </v-card-text>
      </v-col>
      <v-col cols="12" md="3" sm="12"></v-col>
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
}
</script>

<style scoped>

</style>
