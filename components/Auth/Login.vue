<template>
  <div class="centered_div_content pa-10"
       style="display: flex; justify-content: center; align-items: center; height: 100%">
    <v-form
        ref="form"
        lazy-validation>
      <v-card
          class="py-8 px-6 mx-auto  border"
          elevation="0"
          max-width="400"
          width="100%"
      >
        <h3 class="text-h6 mb-8">Login your Account</h3>

          <v-row class="justify-center">
            <v-col cols="12">
              <v-text-field
                  outlined
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
                  required
                  :helper-text="'Hi'"
              >

              </v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0">
              <v-btn
                  :block="true"
                  :ripple="false"
                  size="large"
                  class="mb-2 text-capitalize"
                  type="submit"
                  color="primary"

              >
                {{ 'Log in' }}
              </v-btn>
            </v-col>
            <v-col cols="12" class="pa-0">
              <v-card-actions class="px-0">
                <v-btn variant="text" class="text-capitalize" @click.prevent="$router.push('/auth/registration')">
                  Register here
                </v-btn>
                <v-spacer/>
                <v-btn type="submit" size="x-small" variant="text" color="info" :ripple="false" align="right"
                       class="text-capitalize font-italic" @click.prevent="$router.push('/auth/forgot')"
                >{{ 'forget password ?' }}
                </v-btn>
              </v-card-actions>

            </v-col>
          </v-row>


      </v-card>
    </v-form>
  </div>
</template>
<script >
export default {
  name: 'Login'

}
</script>

<style scoped>


</style>
