<template>
  <v-app>
    <v-app-bar elevation="0" flat color="background" fixed app>
      <v-container class="d-flex flex-row align-center">
        <v-spacer v-if="bp.smAndDown"/>
        <v-app-bar-nav-icon :ripple="false">
          <template v-slot:default>
            <v-img @click="$router.push('/')" :src="LogoSVG">

            </v-img>
          </template>
        </v-app-bar-nav-icon>
        <v-spacer/>
      </v-container>
    </v-app-bar>
    <v-main class="bg-white">
      <nuxt />
      <slot />
    </v-main>
    <BottomNavigation v-if="bp.smAndDown" />
    <Footer v-if="bp.mdAndUp" />
  </v-app>
</template>

<script>
import LogoSVG from "/static/icons/logoSVG.svg";
import BottomNavigation from "@/components/Common/BottomNavigation";
import Footer from "@/components/Common/Footer";

export default {
  name: "auth",
  components: {Footer, BottomNavigation},
  data() {
    return {
      LogoSVG,

    }

  }
}
</script>

<style scoped>
.v-navigation-drawer__border{
  display: none;
}
</style>
