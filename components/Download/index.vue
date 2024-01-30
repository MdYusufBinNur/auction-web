<template>
  <div class="pa-5 d-flex justify-center">
    <v-row>
      <v-col cols="12">
        <v-img :src="mobile" contain :aspect-ratio="8"/>
      </v-col>
      <v-col cols="12" :class="'px-5 text-center'">
        <h1 class="" style="color: black;">
          {{ $t('download_the_app')}}
        </h1>
        <p class="black--text">
          {{ $t('make_life_easy')}}
        </p>
        <div :class="'d-flex flex-column py-4'">
          <div class="py-4">
            <v-btn tile class="text-capitalize px-2" color="primary">
              <v-icon class="px-2">
                mdi-google-play
              </v-icon>
              Google Play
            </v-btn>
          </div>
          <div>
            <v-btn tile dark class="text-capitalize px-2" color="primary">
              <v-icon class="px-2">
                mdi-apple
              </v-icon>
              Apple Store
            </v-btn>
          </div>
        </div>

      </v-col>
    </v-row>
  </div>
</template>

<script>
import mobile from 'static/public/mobile.png'

export default {
  name: 'Download',
  data() {
    return {
      mobile
    }

  }
}
</script>

<style scoped>
.child {
  position: absolute;
  top: 35%;
  text-align: center;
  justify-content: center;;
}

.parent {
  position: absolute;
}
</style>
