<template>
  <v-container class="pa-5">
    <v-card flat color="grey lighten-4" class="pa-10">
      <div class="text-h4 font-weight-bold pb-5 fade-in-right" style="font-family: Outfit, sans-serif">
        Send a message
      </div>
      <div>
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6">
            <v-text-field v-model="editedItem.first_name" outlined label="First Name" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <v-text-field v-model="editedItem.last_name" outlined label="Last Name" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <v-text-field v-model="editedItem.subject" outlined label="Subject"></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <v-text-field v-model="editedItem.email" label="Email" outlined type="email" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="12">
            <v-textarea v-model="editedItem.message" label="Message" outlined required></v-textarea>
          </v-col>
        </v-row>

        <v-btn type="submit" color="primary" :loading="loading" @click="submitForm">Submit</v-btn>
      </div>
    </v-card>
    <v-snackbar
      v-model="dialog"
    >
      Your mail has been sent
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="dialog = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: "SupportComponent",
  head: {
    title: "Contact Us",
  },
  data() {
    return {
      editedItem: {
        first_name: '',
        last_name: '',
        email: '',
        subject: '',
        message: '',
      },
      defaultItem: {
        first_name: '',
        last_name: '',
        email: '',
        subject: '',
        message: '',
      },
      loading: false,
      dialog: false,
    };
  },
  methods: {
    submitForm() {
      this.loading = true
      this.$axios.post('mail-us', this.editedItem)
        .then((response) => {
          this.dialog = true
          this.editedItem = Object.assign({}, this.defaultItem)
        }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>
/* Add CSS animations */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
