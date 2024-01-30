<template>
  <div class="centered_div_content pa-10">
    <v-form
      ref="form"
      lazy-validation>
      <v-card
        class="py-8 px-6 mx-auto  border"
        elevation="0"
        max-width="400"
        width="100%"
        outlined
      >
        <h3 class="text-h6 ">Register Account</h3>
        <div class="text-caption mb-8">
          Register your account with unique email
        </div>
        <v-form ref="form">
          <v-row class="justify-center">
            <v-col cols="12">
              <v-text-field
                outlined
                hide-details="auto"
                required
                label="Email"
                append-inner-icon="mdi-account-outline"
                type="email"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                :append-inner-icon="'mdi-eye-off'"
                :label="'Password'"
                :type="'password'"
                hide-details="auto"
                required
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0">
              <v-btn
                :block="true"
                :ripple="false"
                large
                class="mb-2 text-capitalize"
                color="primary"
              >
                {{ 'Sign up' }}
              </v-btn>
            </v-col>
            <v-col cols="12" class="">
              <p>
                Already have an account ? <NuxtLink to="/auth/login">Login here</NuxtLink>
              </p>

            </v-col>
          </v-row>
        </v-form>

      </v-card>
    </v-form>
  </div>
</template>
<script>
export default {
  name: 'Register'
}
</script>

<style scoped>


</style>
