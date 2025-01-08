<template>
  <v-card flat class="black--text" color="primary" dark>
    <v-container grid-list-lg class="">
      <v-row class="mb-2">
        <v-col cols="4" class="text-center justify-center align-self-center">
          <div class="white--text" :style="bp.smAndDown ? 'text-align:center' : ''">
            <h2 class="mb-2 white--text">Get In touch</h2>
          </div>
          <a
              v-for="icon in icons"
              :key="icon.icon"
              class="mr-4"
              target="_blank"
              :href="icon.link"
          >
            <v-hover v-slot:default="{ hover }">
              <v-icon :color="`${hover ? icon.color : 'white'}`" class size="24px">{{ icon.icon }}</v-icon>
            </v-hover>
          </a>
        </v-col>

        <v-col cols="4" class="justify-center align-self-center">
          <div>
            <h2 class="mb-2 white--text">Quick Links</h2>
            <nuxt-link v-for="(item, i) in links" :key="i" :to="item.to" class="text-decoration-none white--text">
              <v-hover v-slot:default="{ hover }">
                <span class="mb-3 font-weight-light text-body-2">
                  {{ item.title }}
                </span>
              </v-hover>
              <br>
            </nuxt-link>
          </div>
        </v-col>
        <v-col cols="4" class="justify-center align-self-center">
          <h2 class="mb-2 white--text">Useful Links</h2>
          <a v-for="(item, i) in useful" :key="i" href="#" class="text-decoration-none white--text">
            <v-hover v-slot:default="{ hover }">
                <span class="mb-3 font-weight-light text-body-2">
                  {{ item.title }}
                </span>
            </v-hover>
            <br>
          </a>
        </v-col>
      </v-row>
      <v-divider/>
      <v-row>
        <v-col cols="12" class="text-center">
          <v-card-text class="white--text">
            Copyright@binnur {{ new Date().getFullYear() }} all right Reserved
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

export default {
  components: {},
  data: () => ({
    icons: [
      {
        icon: "mdi-facebook",
        link: "#",
        color: 'blue'
      },
      {
        icon: "mdi-youtube",
        link: "#",
        color: 'red'
      },
      {
        icon: "mdi-instagram",
        link: "#",
        color: 'pink lighten-1'
      },
    ],
    links: [
      {
        title: 'Home',
        to: '/'
      },
      {
        title: 'All Ads',
        to: '/products'
      },
      {
        title: 'Privacy policy',
        to: '/privacy-policy'
      },
      {
        title: 'Terms & Conditions',
        to: '/terms-condition'
      },
      {
        title: 'Account Delete',
        to: '/account-deletion-process'
      },
      {
        title: 'Support',
        to: '/support'
      },
    ],
    useful: [
      {
        title: 'Emergency services - 999',
        to: '#'
      },
      {
        title: 'National Identity Card - 105',
        to: '#'
      },
      {
        title: 'Disaster warning - 10941',
        to: '#'
      },
    ],

  }),
};
</script>
<style scoped>
</style>
