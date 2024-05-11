<template>
<div>
  <ChatComponent />
</div>
</template>

<script>
import Chat from "@/components/Dashboard/Chat";
import ChatComponent from "@/components/Dashboard/ChatComponent";
export default {
  name: "index",
  layout: "dashboard",
  components: {ChatComponent, Chat}
}
</script>

<style scoped>

</style>
