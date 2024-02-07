<template>
  <v-row>
    <v-col cols="12">
      <CardHeader :title="'chat'" :button="false"/>
    </v-col>
    <v-col cols="12" sm="12" md="8">
      <Chat :messages="messages" />
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <v-card flat max-height="70vh" class="overflow-y-auto" outlined>
        <v-list subheader>
          <v-subheader>Recent chat</v-subheader>

          <v-list-item
            v-for="(chat, i) in recent"
            :key="i"
            @click.prevent="openChat(chat)"

          >
            <v-list-item-avatar>
              <v-img
                :alt="`${chat.title} avatar`"
                :src="chat.avatar"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="chat.title"></v-list-item-title>
              <v-card-text class="px-0 py-0 text-caption text--lighten-2">
                Hello this is very good product. You can check it...
              </v-card-text>
            </v-list-item-content>


          </v-list-item>
          <v-divider />
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
        sender : 1,
        message: 'Hey',
        file_name: '',
        file_image: '',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      },
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

  }),

  methods: {
    openChat(item) {

    },
    onButtonClick() {
      this.isSelecting = true
      window.addEventListener('focus', () => {
        this.isSelecting = false
      }, {once: true})
      this.$refs.uploader.click()
    },
    downloadItem({url, label}) {
      this.$axios.get(url, {responseType: 'blob'})
        .then(response => {
          const blob = new Blob([response.data], {type: 'application/pdf'})
          const link = document.createElement('a')
          link.href = URL.createObjectURL(blob)
          link.download = label
          link.click()
          URL.revokeObjectURL(link.href)
        }).catch(console.error)
    },
    scrollToElement() {
      const el = this.$el.getElementsByClassName('scroll-to-me')[0];

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({behavior: 'smooth'});
      }
    },
    cancelFile() {

    },
    sendMessage() {

    },
    onFileChange() {

    }
  }
}
</script>

<style scoped>

</style>
