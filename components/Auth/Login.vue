<template>
  <div class="centered_div_content">
    <v-form
      ref="form"
      lazy-validation>
      <v-card
        class="py-8 px-6 mx-auto ma-4"
        elevation="0"
        max-width="400"
        width="100%"
        outlined
      >
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
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              outlined
              append-icon="mdi-eye-off"
              :label="$t('password')"
              :type="'password'"
              required
              hide-details
              :helper-text="'Hi'"
            >

            </v-text-field>
          </v-col>
          <v-col cols="12" align-self="right" class="py-0">
            <v-card-actions class="py-0">
              <v-spacer/>
              <v-btn small text :ripple="false" align="right"
                     class="text-capitalize font-italic px-0" @click.prevent="$router.push('/auth/forgot')"
              >{{ $t('forgot_password') +' ?' }}
              </v-btn>

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

            >
              {{ $t('login') }}
            </v-btn>
          </v-col>
          <v-col cols="12" class="text-center">
            <p>
              {{ $t('no_account') }}
              <NuxtLink to="/auth/registration">{{ $t('reg_here') }}
              </NuxtLink>
            </p>
          </v-col>
        </v-row>


      </v-card>
    </v-form>
  </div>
</template>
<script>
export default {
  name: 'Login'

}
</script>

<style scoped>


</style>
