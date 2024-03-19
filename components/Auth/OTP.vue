<template>
  <div class="centered_div_content pa-10"
       style="display: flex; justify-content: center; align-items: center; height: 100%">
    <v-form
      ref="form"
      lazy-validation>
      <v-card
        class="py-8 px-6 mx-auto ma-4 border"
        elevation="0"
        max-width="400"
        width="100%"
        outlined
      >
        <h3 class="text-h6">Verify Your Account</h3>
        <div class="text-body-2 mb-4">
          We sent a verification code to john..@gmail.com <br>
          Please check your email and paste the code below.
        </div>

        <v-sheet color="surface">
          <v-otp-input
            v-model="editedItem.otp"
            type="number"
            variant="underlined"
            :length="4"
            :rules="otpRules"
          ></v-otp-input>
        </v-sheet>

        <v-btn
          class="my-4"
          color="primary"
          height="40"

          :ripple="false"
          variant="flat"
          :block="true"
          :loading="loading"
          @click.prevent="checkOTP"
        >
          Verify
        </v-btn>

        <div class="text-caption text-center">
          Didn't receive the code?
        </div>
        <div class="text-center">
          <v-btn text :ripple="false" :loading="sendOtpLoading" class="text-capitalize" size="small"
                 @click.prevent="sendOTP">Resend
          </v-btn>
        </div>
      </v-card>
    </v-form>
  </div>

</template>

<script>
export default {
  name: 'OTP',
  data() {
    return {
      loading: false,
      sendOtpLoading: false,
      editedItem: {
        otp: null,
      },
      otpRules: [
        value => !!value || 'OTP is required',
        value => (value && value.length === 4) || 'OTP must be 4 digits'
      ]
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    checkOTP() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.loading = true
      const token = localStorage.getItem('token')
      if (!token) {
        this.$toast.error('Something went wrong!')
        return;
      }
      let formData = new FormData()
      formData.append('code', this.editedItem.otp)
      this.$axios.post('verify-user', formData, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          localStorage.setItem('secret', response?.data?.secret)
          const type = localStorage.getItem('type')
          if (type === 'verify') {
            this.$router.push('/auth/login')
          }
          if (type === 'reset') {
            this.$router.push('/auth/reset')
          }
          this.$toast.success(response.data.message)
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message)
        })
        .finally(() => {
          this.loading = false
        })
    },
    sendOTP() {
      const email = localStorage.getItem('email')
      if (!email) {
        this.$router.push('/auth/register')
        return;
      }
      this.sendOtpLoading = true
      this.$axios.post('send-reset-password-code', this.editedItem)
        .then((response) => {
          this.$toast.success(response.data.message)
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message)
        })
        .finally(() => {
          this.sendOtpLoading = false
        })
    },
  }
}
</script>

<style scoped>

</style>
