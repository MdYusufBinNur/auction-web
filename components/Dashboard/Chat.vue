<template>
  <div>
    <v-card flat height="63vh" class="overflow-y-auto d-flex flex-column" >
      <v-divider />

      <v-card-title>
        Yusuf
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-list>
          <v-list-item v-for="(message, index) in messages" :key="index">
            <v-list-item-avatar v-if="message.user_id === 1">
              <v-img :src="message.avatar" alt="User1 Avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content v-if="message.user_id === 1">
              <v-list-item-subtitle>{{ message.message }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content v-else class="justify-end text-right">
              <v-list-item-subtitle>{{ message.message }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    <div class="justify-end align-self-end bottom-center">
      <v-text-field append-icon="mdi-send" placeholder="Type you message here" outlined></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
