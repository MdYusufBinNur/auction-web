<template>
  <v-row class="">
    <v-col cols="6" class="">
      <div class="text-h5 font-weight-bold">
        {{ title }}
      </div>
    </v-col>
    <v-col cols="6" class="" align="end" v-if="button">
      <v-btn rounded small class="primary px-5 text-capitalize" @click.prevent="addCredit">
        {{ $t('buy_credit')}}
      </v-btn>
    </v-col>
    <GlobalOnlinePayment order_id="1" @CloseGlobalPaymentDialog="handleCloseEvent" v-if="showGlobalPaymentDialog"/>

  </v-row>
</template>

<script>
import GlobalOnlinePayment from "@/components/Payment/GlobalOnlinePayment";

export default {
  name: "CardHeader",
  components: {GlobalOnlinePayment},
  props: {
    title: {
      type: String,
      required: true
    },
    button: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      showGlobalPaymentDialog: false,
    }
  },
  methods: {
    handleCloseEvent() {
      this.showGlobalPaymentDialog = false
    },
    addCredit() {
      this.showGlobalPaymentDialog = true
    }
  }
}
</script>

<style scoped>

</style>
