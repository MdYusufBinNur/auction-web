<template>
  <div>
    <div v-if="!chats.length > 0 && this.user?.room_id">
      <NoMessage />
    </div>
    <div class="" v-else>
      <v-card-title class="py-0 py-2">
        {{ user ? user.full_name : '' }}
      </v-card-title>
      <v-divider/>
      <v-card flat height="57vh" class="overflow-y-auto d-flex flex-column scroll-to-me" :loading="loading">
        <div v-for="(chat, i) in chats" :key="i" class="" v-if="!loading">
          <v-card
            v-if="chat.user_id !== userID"
            class="d-flex flex-row transparent"
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
        <v-form ref="form" @submit.prevent="sendMessage">
          <v-text-field v-model="message.message" placeholder="Type you message here" outlined>
            <template v-slot:append>
              <v-btn type="submit" icon class="transparent">
                <v-icon >
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
import NoMessage from "@/components/Common/NoMessage";
export default {
  name: 'Chat',
  components: {NoMessage},
  props: {
    receiverId: {
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
    userID: null,
    user: null,
    pollingInterval: null
  }),
  mounted() {
    this.setUserInfo();
    this.getRecentChats();
    // this.startPolling();
  },
  beforeDestroy() {
    this.stopPolling();
  },
  created() {
    this.userID = this.$auth.user.data.id;
  },
  watch: {
    receiverId(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.setUserInfo()
        this.getRecentChats();
      }
    }
  },

  methods: {
    sendMessage() {
      if (this.message.message !== null) {
        let formData = new FormData()
        formData.append('receiver_id', this.user?.id)
        formData.append('message', this.message.message)
        const js = {
          receiver_id : this.user?.id,
          message : this.message.message,
        }
        this.$socket.emit('new_chat', js)
        this.$axios.post('chats', formData)
          .then((response) => {
            this.chats.push(response.data.data)
            this.message.message = null;
            this.scrollToElement()
            this.emitTransformedData(response.data.data);
          })
          .catch((err) => {
            this.$toast.error(err.response.data.message)
          })
          .finally(() => {
            this.loading = false
          })

      }
    },
    emitTransformedData(response) {
      const { receiver, id, room_id, seen,created_at, message  } = response;
      const formattedCreatedAt = new Date(created_at).toISOString().split('T')[0];
      const truncatedMessage = message.length > 150 ? message.substring(0, 150) + '...' : message;

      const transformedData = {
        full_name: receiver.full_name,
        photo: receiver.photo,
        id: receiver.id,
        room_id: room_id,
        message: {
          id: id,
          message: truncatedMessage,
          seen: seen,
          created_at: formattedCreatedAt,
        },


      };

      // Emit the transformed data to the parent component
      this.$emit('message-sent', transformedData);
    },
    getRecentChats() {
      this.loading = true;
      this.$axios.get('chats/' + this.user?.room_id)
        .then((response) => {
          this.chats = response.data.data;

          this.scrollToElement()
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getChatUpdate() {
      this.$axios.get('chats/' + this.user?.room_id)
        .then((response) => {
          this.chats = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
        });
    },
    setUserInfo(){
      this.user = this.receiverId
    },

    scrollToElement() {
      const el = this.$el.getElementsByClassName('scroll-to-me')[0];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    startPolling() {
      this.pollingInterval = setInterval(this.getChatUpdate, 3000);
    },

    stopPolling() {
      clearInterval(this.pollingInterval);
    }
  }
};
</script>

<style scoped>
</style>
