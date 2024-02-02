<template>
  <div>
    <CardHeader :title="$t('home')" :button="false"/>
  </div>
</template>

<script>
import CardHeader from "@/components/Common/CardHeader";

export default {
  name: "Home",
  components: {CardHeader}
}
</script>

<style scoped>

</style>
