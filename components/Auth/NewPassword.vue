<template>
  <div class="centered_div_content pa-10"
       style="display: flex; justify-content: center; align-items: center; height: 100%">
    <v-form
        ref="form"
        lazy-validation
    >
      <v-card
          class="py-8 px-6 mx-auto ma-4 border"
          elevation="0"
          max-width="400"
          width="100%"
      >
        <h3 class="text-h6 ">Reset your password</h3>
        <div class="text-caption mb-4">
          For your security, please choose a password that is strong and unique
        </div>
        <v-sheet color="surface">
          <v-text-field
              type="password"
              outlined
              density="comfortable"
              class="mt-4"
          ></v-text-field>
          <v-text-field
              type="password"
              outlined
              density="comfortable"
              class="mt-4"
          ></v-text-field>
        </v-sheet>
        <v-btn
            class="my-2 text-capitalize"
            color="primary"
            height="40"
            v-text="'Change password'"
            :ripple="false"
            variant="flat"
            :block="true"
        ></v-btn>
        <div class="text-caption">
          Didn't receive the code? <a href="#">Resend</a>
        </div>
      </v-card>
    </v-form>
  </div>

</template>

<script>
export default {
  name: 'NewPassword'
}
</script>

<style scoped>

</style>
