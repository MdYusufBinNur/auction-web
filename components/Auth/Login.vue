<template>
  <div class="centered_div_content">
    <v-form ref="form" lazy-validation>
      <v-card class="py-8 px-6 mx-auto ma-4" elevation="0" max-width="400" width="100%" outlined>
        <h3 class="text-h6 mb-8">{{$t('login_your_account')}}</h3>

        <v-row class="justify-center">
          <v-col cols="12">
            <v-text-field
              outlined
              required
              :label="$t('email')"
              hide-details="auto"
              append-icon="mdi-account-outline"
              type="email"
              hint="Type your email"
              v-model="loginInfo.email"
              :rules="emailRules"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              outlined
              append-icon="mdi-eye-off"
              :label="$t('password')"
              :type="showPassword ? 'text' : 'password'"
              required
              hide-details
              :rules="passwordRules"
              v-model="loginInfo.password"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="py-0">
            <v-card-actions class="py-0">
              <v-spacer />
              <v-btn
                small
                text
                :ripple="false"
                align="right"
                class="text-capitalize font-italic px-0"
                @click.prevent="$router.push('/auth/forgot')"
              >{{ $t('forgot_password') + ' ?' }}</v-btn>
            </v-card-actions>
          </v-col>
          <v-col cols="12" class="pb-0">
            <v-btn
              :block="true"
              :ripple="false"
              large
              class="text-capitalize"
              type="submit"
              color="primary"
              :loading="isLoading"
              @click.prevent="userLogin"
            >
              {{ $t('login') }}
            </v-btn>
          </v-col>
          <v-col cols="12" class="text-center">
            <p>
              {{ $t('no_account') }}
              <NuxtLink to="/auth/registration">{{ $t('reg_here') }}</NuxtLink>
            </p>
          </v-col>
        </v-row>
      </v-card>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      isLoading: false,
      valid: true,
      showPassword: false,
      loginInfo: {
        email: '',
        password: ''
      },
      isLoggedIn: false,
      snackbar: false,
      errorMessage: '',
      errorColor: '',
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
    validate() {
      this.$refs.form.validate()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    gotoRegistrationPage() {
      this.$router.push('/auth/send-otp')
    },
    forgetPassword() {
      // return this.$router.push('/auth/forget')
    },
    async userLogin() {
      if (!this.$refs.form.validate()) {
        this.$toast.error('Please input valid data')
        return;
      }
      this.isLoading = true;
      let response = await this.$auth
        .loginWith('local', { data: this.loginInfo })
        .then((response) => {
          // this.$toast.success(response.data.message)
          // this.$auth.setUser(response.data.user)

          const redirectRoute = sessionStorage.getItem('redirect') || '/dashboard/home'; // default to dashboard
          sessionStorage.removeItem('redirect'); // clear the session storage

          // Redirect to the saved route
          this.$router.push(redirectRoute);
          // this.$router.push('/dashboard/home');
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message)
        })
        .finally(() => {
          this.isLoading = false
        });
    }
  }
}
</script>

<style scoped>
</style>
