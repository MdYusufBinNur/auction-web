<template>
  <v-container :fluid="true" class="pa-0">
    <CommonBlackCard title="Search here" />
    <v-container>
      <Category />
      <About />
    </v-container>
    <div class="grey lighten-5">
      <Download />
    </div>
  </v-container>
</template>

<script>
import LogoSVG from "assets/icons/logoSVG.svg";
import Category from "@/components/Category";
import About from "@/components/About";
import Download from "@/components/Download";
export default {
  name: 'IndexPage',
  components: {Download, About, Category, LogoSVG}
}
</script>
