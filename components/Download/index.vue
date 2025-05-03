<template>
  <div class="pa-5 d-flex justify-center">
    <v-row>
      <v-col cols="12">
        <v-img :src="mobile" contain :aspect-ratio="8" />
      </v-col>
      <v-col cols="12" class="px-5 text-center">
        <h1 style="color: black;">
          {{ $t('download_the_app') }}
        </h1>
        <p class="black--text">
          {{ $t('make_life_easy') }}
        </p>
        <div class="d-flex flex-column py-4">
          <div class="py-4">
            <v-btn tile class="text-capitalize px-2" color="primary" @click="gotoDownloadLink('play_store')">
              <v-icon class="px-2">
                mdi-google-play
              </v-icon>
              Google Play
            </v-btn>
          </div>
          <div>
            <v-btn tile dark class="text-capitalize px-2" color="primary" @click="gotoDownloadLink('app_store')">
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
import mobile from 'static/public/mobile.png';

export default {
  name: 'Download',
  data() {
    return {
      mobile,
    };
  },
  methods: {
    gotoDownloadLink(type) {
      try {
        switch (type) {
          case 'play_store':
            window.location.href = 'https://play.google.com/store/apps/details?id=com.zobaer53.addbarta&pcampaignid=web_share';
            break;
          case 'app_store':
            // Replace with your actual App Store URL
            window.location.href = 'https://apps.apple.com/us/developer/md-shariful-islam/id1786848094'; // Update with correct App Store link
            break;
          default:
            console.error('Invalid download link type:', type);
        }
      } catch (error) {
        console.error('Error redirecting to download link:', error);
        // Optionally, show a user-friendly message
        alert('Failed to redirect to the store. Please try again later.');
      }
    },
  },
};
</script>

<style scoped>
.child {
  position: absolute;
  top: 35%;
  text-align: center;
  justify-content: center;
}

.parent {
  position: absolute;
}
</style>
