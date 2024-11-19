<template>
  <v-row>
    <v-col cols="12">
      <CardHeader :title="'chat'" :button="false"/>
    </v-col>
    <v-col cols="12" sm="12" class="py-0" v-show="bp.smAndDown">
      <v-divider />
      <v-slide-group
        multiple
        show-arrows
      >
        <v-slide-item
          v-for="(chat, i) in chats"
          :key="i"
        >
          <v-btn
            text
            plain
            :ripple="false"
            large
            style="min-height: 70px"
            class="px-0 py-0"
            @click.prevent="openChat(chat)"
          >
            <template v-slot:default>
              <v-card flat rounded class="transparent py-0">
                <v-avatar color="grey" size="40" v-if="!chat.photo">
                  <v-icon dark>
                    mdi-account-circle
                  </v-icon>
                </v-avatar>
                <v-avatar v-else size="40">
                  <v-img
                    :alt="`${chat.title} avatar`"
                    :src="chat.photo"
                  ></v-img>
                </v-avatar>

                <v-card-actions class="py-0">
                  <v-card-text class="py-0 text-caption text-capitalize">
                    {{ chat.full_name }}
                  </v-card-text>
                </v-card-actions>
              </v-card>
            </template>

          </v-btn>
        </v-slide-item>
      </v-slide-group>
      <v-divider />

    </v-col>
    <v-col cols="12" sm="12" md="8" class="py-0">

      <Chat v-if="receiver" :receiver-id="receiver" @message-sent="handleMessageSent" />
      <NoMessage v-else/>
    </v-col>
    <v-col cols="12" sm="12" md="4" v-if="bp.mdAndUp">
      <v-card flat height="70vh" class="overflow-y-auto" outlined>
        <v-list subheader>
          <v-subheader>Recent chat</v-subheader>
          <v-divider />
          <v-list-item
            v-for="(chat, i) in chats"
            :key="i"
            @click.prevent="openChat(chat)"
          >
            <v-list-item-avatar color="grey" size="40" v-if="!chat.photo">
              <v-icon dark>
                mdi-account-circle
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-avatar v-else>
              <v-img
                :alt="`${chat.title} avatar`"
                :src="chat.photo"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="chat.full_name"></v-list-item-title>
              <v-card-text class="px-0 py-0 text-caption text--lighten-2">
               {{ chat?.message?.message }}
              </v-card-text>
            </v-list-item-content>


          </v-list-item>
        </v-list>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import CardHeader from "@/components/Common/CardHeader";
import Chat from "@/components/Dashboard/Chat";
import NoMessage from "@/components/Common/NoMessage";
export default {
  name: "ChatComponent",
  components: {NoMessage, Chat, CardHeader},
  data: () => ({
    chats: [],
    newMessage: '',
    userId: null,
    _token: null,
    receivers: [],
    avatarImage: '',
    isSelecting: false,
    receiver_name: null,
    imagePreviewURL: null,
    messageFileRemoveKey: false,
    messageFile: null,
    selectedFileName: '',
    messageErrorMessage: null,
    messageFiles: {
      receiver_id: null,
      file_name: null,
      message: null
    },
    loading: false,
    user : 'Yusuf',
    receiver: null,
    pollingInterval: null
  }),


  created() {
    this.getRecentChats();
    this.initSelectedUser();
    // this.startPolling();
  },

  beforeDestroy() {
    this.stopPolling();
  },
  methods: {
    openChat(item) {
      this.receiver = item
    },
    initSelectedUser() {
      let query = this.$route.query['user']
      if (!query) return;
      this.$axios.get('check-chats/' + query)
        .then((response) => {
          this.receiver = response.data?.data?.receiver
        })
        .catch((error) => {
          console.log(error.response)
        })
        .finally(() => {})

    },
    getRecentChats() {
      this.loading = true
      this.$axios.get('chats')
        .then((response) => {
          this.chats = response.data.data
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.loading = false
        })
    },
    handleMessageSent(data) {
      const index = this.chats.findIndex(chat => chat.id === data.id);
      // If the user's id is found in the chats array
      if (index !== -1) {
        // Update the existing chat message
        this.chats[index].message = data.message;
        // Move the updated chat to the top of the chats array
        const updatedChat = this.chats.splice(index, 1);
        this.chats.unshift(updatedChat[0]);
      } else {
        // If the user's id is not found, add the new chat to the beginning of the chats array
        this.chats.unshift(data);
      }
    },
    startPolling() {
      this.pollingInterval = setInterval(this.getRecentChats, 3000);
    },

    stopPolling() {
      clearInterval(this.pollingInterval);
    }
  }
}
</script>

<style scoped>

</style>
