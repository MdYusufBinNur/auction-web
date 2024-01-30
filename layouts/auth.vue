<template>
  <v-app>
    <v-app-bar elevation="0" flat color="background" fixed>
      <v-container class="d-flex flex-row align-center">
        <v-spacer v-if="bp.smAndDown" />
        <v-app-bar-nav-icon :ripple="false">
          <template v-slot:default>
            <v-img @click="$router.push('/')">
              <LogoSVG/>
            </v-img>
          </template>
        </v-app-bar-nav-icon>
        <v-spacer/>
      </v-container>
    </v-app-bar>
    <v-main class="bg-white">
      <nuxt />
    </v-main>
    <BottomNavigation v-if="bp.smAndDown" />
    <Footer v-if="bp.mdAndUp" />
  </v-app>
</template>

<script>
import LogoSVG from "assets/icons/logoSVG.svg";
import BottomNavigation from "@/components/Common/BottomNavigation";
export default {
  name: "auth",
  components: {BottomNavigation, LogoSVG},
  data: () => {

  }
}
</script>

<style scoped>

</style>
