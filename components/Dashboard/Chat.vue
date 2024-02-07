<template>
  <div>
    <div>
      <v-card-title class="py-0 py-2">
        {{ user ? user.title : 'Yusuf' }}
      </v-card-title>
      <v-divider/>
      <v-card flat height="57vh" class="overflow-y-auto d-flex flex-column">
        <div v-for="(chat, i) in messages" :key="i">
          <v-card
            v-if="chat.user_id === 1"
            class="d-flex flex-row mb-6 transparent"
            flat
            tile
          >
            <v-list-item-avatar>
              <v-img :src="user ? user.avatar : chat.avatar" alt="User1 Avatar"></v-img>
            </v-list-item-avatar>
            <v-card
              class="pa-2 primary lighten-2 white--text rounded-tl-xl my-2 rounded px-5"
              flat
              tile
              color=""
              style="max-width: 70%;  border-radius: 35px 0 10px 10px;"
            >

              {{chat.message}}
            </v-card>
          </v-card>
          <v-card
            class="d-flex flex-row-reverse transparent"
            flat
            tile
            v-else
          >
            <v-card
              class="grey lighten-5 pa-2 px-5 my-2 rounded-tr-xl rounded"
              tile
              flat
              style="border-radius: 10px 35px 0 10px; max-width: 60%"
            >
              {{chat.message}}
            </v-card>
          </v-card>
        </div>
      </v-card>
      <div class="justify-end align-self-end bottom-center">
        <v-text-field v-model="message.message" placeholder="Type you message here" outlined
                      @submit="sendMessage">
          <template v-slot:append>
            <v-icon @click="sendMessage">
              mdi-send
            </v-icon>
          </template>
        </v-text-field>
      </div>
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
    },
    user: null,
  },
  data: () => ({
    message: {
      user_id: 2,
      message: null,
    }
  })
  ,
  methods: {
    sendMessage() {
      if (this.message.message !== null) {
        this.messages.push({
          user_id: 2,
          message: this.message.message
        })
        // this.scrollToElement()
      }

      this.message.message = null

    },
    scrollToElement() {
      const el = this.$el.getElementsByClassName('scroll-to-me')[0];

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({behavior: 'smooth'});
      }
    }
  }
}
</script>

<style scoped>
</style>
