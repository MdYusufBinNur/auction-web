<template>
  <div class="centered_div_content pa-10">
    <v-form ref="form" lazy-validation>
      <v-card class="py-8 px-6 mx-auto border" elevation="0" max-width="400" width="100%" outlined>
        <h3 class="text-h6">Register Account</h3>
        <div class="text-caption mb-8">Register your account with a unique email</div>
        <v-row class="justify-center">
          <v-col cols="12">
            <v-text-field
              outlined
              hide-details="auto"
              required
              label="Email"
              append-inner-icon="mdi-account-outline"
              type="email"
              v-model="editedItem.email"
              :rules="emailRules"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              outlined
              append-inner-icon="mdi-eye-off"
              :label="'Password'"
              :type="'password'"
              hide-details="auto"
              required
              v-model="editedItem.password"
              :rules="passwordRules"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="pb-0">
            <v-btn
              :block="true"
              :ripple="false"
              large
              :loading="loading"
              @click.prevent="handleSubmit"
              class="mb-2 text-capitalize"
              color="primary"
            >
              {{ 'Sign up' }}
            </v-btn>
          </v-col>
          <v-col cols="12">
            <p>Already have an account? <NuxtLink to="/auth/login">Login here</NuxtLink></p>
          </v-col>
        </v-row>
      </v-card>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      loading: false,
      editedItem: {
        email: null,
        password: null,
      },
      emailRules: [
        value => !!value || 'Email is required',
        value => /.+@.+\..+/.test(value) || 'Email must be valid'
      ],
      passwordRules: [
        value => !!value || 'Password is required',
        value => (value && value.length >= 8) || 'Password must be at least 8 characters'
      ]
    }
  },
  methods: {
    handleSubmit() {
      this.loading = true;
      let formData = new FormData();
      formData.append('email', this.editedItem.email);
      formData.append('password', this.editedItem.password);
      this.$axios
        .post('signup', formData)
        .then((response) => {
          this.$toast.success(response.data.message);
          this.$router.push('/auth/send-otp');
          localStorage.setItem('token', response.data.data.token);
          localStorage.setItem('type', 'verify');
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
</style>
