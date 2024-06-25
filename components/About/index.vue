<template>
  <v-container class="d-flex flex-row">
    <div class="pa-2 d-flex justify-center">
      <v-row class="">
        <v-col cols="12" class="text-center">
          <div :class="bp.smAndDown ? 'text-h6 py-2 font-weight-bold' : 'text-h5 py-2 font-weight-bold'">
            {{ $t('about_us') }}
          </div>
        </v-col>
        <v-col cols="12" class="" :class="bp.xs ? 'px-2' : ''">
          <v-card-text class="black--text text-center">
            {{ context }}
          </v-card-text>

        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import aboutImage from 'static/public/about/about.jpeg'

export default {
  name: "About",

  data() {
    return {
      aboutImage,
      context: "We started our journey in 2024 with a vision to become the leading e-commerce online marketplace to buy and sell stuff in Bangladesh. We are rapidly powering up our organization, our service and our technology. Working with adbarta.com will be an unforgettable period in your life at a time when internet growth is exploding in Bangladesh. We offer highly competitive compensation, amazing team mates, exciting challenges and non-stop learning opportunities."
    }
  }
}
</script>

<style scoped>

</style>
