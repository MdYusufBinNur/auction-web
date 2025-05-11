<template>
  <v-container class="pa-5">
    <v-card flat color="grey lighten-4" class="pa-10">
      <div class="text-h4 font-weight-bold pb-5 fade-in-right" style="font-family: Outfit, sans-serif">
        Send a message
      </div>
      <div>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-text-field
                v-model="editedItem.first_name"
                outlined
                label="First Name"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-text-field
                v-model="editedItem.last_name"
                outlined
                label="Last Name"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-text-field
                v-model="editedItem.subject"
                outlined
                label="Subject"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6">
              <v-text-field
                v-model="editedItem.email"
                outlined
                label="Email"
                type="email"
                :rules="[rules.required, rules.email]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="12">
              <v-text-field
                v-model="editedItem.mobile"
                outlined
                label="Mobile"
                type="text"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="12">
              <v-textarea
                v-model="editedItem.message"
                outlined
                label="Message"
                :rules="[rules.required]"
                required
              ></v-textarea>
            </v-col>
          </v-row>

          <v-btn
            type="submit"
            color="primary"
            :loading="loading"
            :disabled="!valid"
            @click="submitForm"
          >
            Submit
          </v-btn>
        </v-form>
      </div>
    </v-card>
      <v-snackbar v-model="dialog">
        Your mail has been sent
        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="dialog = false">
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
      valid: true,
      editedItem: {
        first_name: '',
        last_name: '',
        email: '',
        subject: '',
        message: '',
        mobile: '',
      },
      defaultItem: {
        first_name: '',
        last_name: '',
        email: '',
        subject: '',
        message: '',
        mobile: '',
      },
      loading: false,
      dialog: false,
      rules: {
        required: (value) => !!value || 'This field is required.',
        email: (value) => {
          const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return pattern.test(value) || 'Invalid email address.';
        },
        mobile: (value) => {
          const pattern = /^[0-9]{10}$/;
          return pattern.test(value) || 'Mobile number must be 10 digits.';
        },
      },
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.$axios
          .post('mail-us', this.editedItem)
          .then((response) => {
            this.dialog = true;
            this.editedItem = Object.assign({}, this.defaultItem);
            this.$refs.form.resetValidation();
          })
          .catch((error) => {
            console.error('Form submission error:', error);
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
  },
};
</script>

<style scoped>
/* Add CSS animations */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
