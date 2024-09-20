<template>
  <v-container :fluid="true" class="pa-0">
    <DeletionProcess />
  </v-container>
</template>

<script>
import DeletionProcess from "@/components/DeletionProcess/DeletionProcess";
export default {
  name: 'IndexPage',
  components: {DeletionProcess}
}
</script>
