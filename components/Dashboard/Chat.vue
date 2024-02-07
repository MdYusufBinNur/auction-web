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
              <v-list-item-subtitle style="max-width: 70%;  border-radius: 10px" class="primary lighten-2 white--text pa-5">{{ message.message }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content v-else class="justify-end text-right">
              <div style="max-width: 60%;  border-radius: 10px" class="grey lighten-5 pa-5">{{ message.message }}</div>
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
  },
  methods: {
    getWidth(text) {
      // Calculate the width of the text in pixels
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.font = '14px Roboto'; // Adjust font size and family as needed
      const width = context.measureText(text).width;
      return `${Math.min(width, window.innerWidth * 0.7)}px`; // Set the width to maximum 70% of the window width
    }
  }
}
</script>

<style scoped>
</style>
