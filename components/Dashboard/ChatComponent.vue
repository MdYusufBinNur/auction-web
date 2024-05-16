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
      <Chat v-if="receiver" :receiver-id="receiver" />
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
export default {
  name: "ChatComponent",
  components: {Chat, CardHeader},
  data: () => ({
    recent: [
      {
        active: true,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Jason Oner',
      },
      {
        active: true,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Mike Carlson',
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Cindy Baker',
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Ali Connors',
      },
      {
        active: true,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Mike Carlson',
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Cindy Baker',
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Ali Connors',
      }, {
        active: true,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Mike Carlson',
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Cindy Baker',
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Ali Connors',
      },
    ],
    previous: [{
      title: 'Travis Howard',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    }],
    messages: [
      {
        sender : 2,
        message: 'Hello',
        file_name: '',
        file_image: '',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      },
      {
        user_id : 1,
        message: "How're you ?",
        file_name: '',
        file_image: '',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      },
      {
        user_id : 2,
        message: "I'm fine. Thank you",
        file_name: '',
        file_image: '',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      },
      {
        user_id : 2,
        message: "I'm fine. Thank you and You ?",
        file_name: '',
        file_image: '',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      },
      {
        user_id : 1,
        message: "I'm fine too",
        file_name: '',
        file_image: '',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      },
      {
        sender : 2,
        message: 'আমরা প্রিমিয়াম ব্যবহারকারীদের জন্য বান্ডল বিজ্ঞাপন প্রদান করি। আপনি প্রিমিয়াম বিজ্ঞাপনের জন্য সময়সীমা সেট করতে পারেন।',
        file_name: '',
        file_image: '',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      },
      {
        user_id : 1,
        message: "How're you ?",
        file_name: '',
        file_image: '',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      },
      {
        user_id : 2,
        message: "আমরা প্রিমিয়াম ব্যবহারকারীদের জন্য বান্ডল বিজ্ঞাপন প্রদান করি। আপনি প্রিমিয়াম বিজ্ঞাপনের জন্য সময়সীমা সেট করতে পারেন।",
        file_name: '',
        file_image: '',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      },
      {
        user_id : 2,
        message: "I'm fine. Thank you and You ?",
        file_name: '',
        file_image: '',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      },
      {
        user_id : 1,
        message: "I'm fine too",
        file_name: '',
        file_image: '',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      },
    ],
    chats: [],
    newMessage: '',
    userId: null,
    _token: null,
    messageKey: {
      receiver_id: 2,
      message: null,
    },
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
    receiver: null
  }),

  created() {
    this.getRecentChats()
  },
  methods: {
    openChat(item) {
      this.receiver = item.id
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

  }
}
</script>

<style scoped>

</style>
