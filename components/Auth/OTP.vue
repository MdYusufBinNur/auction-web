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
              type="number"
              variant="underlined"
              :length="4"
          ></v-otp-input>
        </v-sheet>

        <v-btn
            class="my-4"
            color="primary"
            height="40"
            v-text="'Verify'"
            :ripple="false"
            variant="flat"
            :block="true"
            @click.prevent="$router.push('/auth/reset')"
        ></v-btn>

        <div class="text-caption text-center">
          Didn't receive the code?
        </div>
        <div class="text-center">
          <v-btn text :ripple="false" class="text-capitalize" size="small" @click.prevent="$router.push('/auth/forgot')">Resend</v-btn>

        </div>
      </v-card>
    </v-form>
  </div>

</template>

<script>
export default {
  name: 'OTP'
}
</script>

<style scoped>

</style>
