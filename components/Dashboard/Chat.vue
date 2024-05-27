<template>
  <div>
    <div>
      <v-card-title class="py-0 py-2">
        {{ user ? user.title : 'Yusuf' }}
      </v-card-title>
      <v-divider/>
      <v-card flat height="57vh" class="overflow-y-auto d-flex flex-column">
        <div v-for="(chat, i) in chats" :key="i">
          <v-card
            v-if="chat.user_id !== userID"
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
        <v-form ref="form" @submit="sendMessage">
          <v-text-field v-model="message.message" placeholder="Type you message here" outlined>
            <template v-slot:append>
              <v-btn type="submit" icon class="transparent">
                <v-icon @click="sendMessage">
                  mdi-send
                </v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-form>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  props: {
    receiverId: {
      type: Number,
      required: true
    },
  },
  data: () => ({
    loading: true,
    message: {
      user_id: 2,
      message: null,
    },
    chats: [],
    userID: null
  }),
  mounted() {
    this.getRecentChats();
  },
  created() {
    this.userID = this.$auth.user.data.id;
  },
  watch: {
    receiverId(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getRecentChats();
      }
    }
  },


  methods: {
    sendMessage() {
      if (this.message.message !== null) {

        let formData = new FormData()
        formData.append('receiver_id', '')
        console.log(this.chats)
        this.chats.push({
          user_id: 2,
          message: this.message.message
        });
        this.message.message = null;
      }
    },
    getRecentChats() {
      this.loading = true;
      this.$axios.get('chats/' + this.receiverId)
        .then((response) => {
          this.chats = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    scrollToElement() {
      const el = this.$el.getElementsByClassName('scroll-to-me')[0];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
</style>
