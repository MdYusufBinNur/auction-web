<!-- ~/components/GlobalOnlinePayment.vue -->
<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">
            {{$t('select_payment_option')}}
          </span>
        </v-card-title>

        <v-card-actions>
          <v-radio-group class="mx-2">
            <v-radio
              :ripple="false"
              color="secondary"
              @click="showSelectedPaymentModal('bkash')"
            >
              <template v-slot:label>
                <v-img :src="bkash" alt="Bkash" max-width="100" max-height="100"/>
              </template>
            </v-radio>
            <v-radio
              :ripple="false"
              color="secondary"
              @click="showSelectedPaymentModal('nagad')"
            >
              <template v-slot:label>
                <v-img :src="nagad" alt="Nagad" max-width="100" max-height="100"/>
              </template>

            </v-radio>
          </v-radio-group>

        </v-card-actions>

        <v-card-actions>
          <v-btn rounded small class="px-5" color="primary" outlined text @click.prevent="closeDialog">
            {{ $t('close') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <SelectedPaymentModal v-if="selectedOption !== ''" @CloseSelectedDialog="closeDialog"
                          :selectedMethod="selectedOption"
                          :order-id="order_id"/>
  </div>

</template>

<script>
import SelectedPaymentModal from '~/components/Payment/SelectedPaymentModal.vue';
import bkash from '/static/payment/bkash.png'
import nagad from '/static/payment/nagad.png'

export default {
  name: "GlobalOnlinePayment",
  components: {
    SelectedPaymentModal
  },
  data() {
    return {
      dialog: true,
      selectedOption: '',
      selectedImage: '',
      bkash, nagad
    };
  },
  props: {
    order_id: {
      type: Number,
      required: true
    }
  },
  methods: {
    showSelectedPaymentModal(option) {
      this.selectedOption = option;
      this.dialog = false
    },
    closeDialog() {
      this.selectedOption = ''
      this.$emit('CloseGlobalPaymentDialog')
      this.dialog = false
    }
  }
}
</script>

<style scoped>
/* Component styles here */
</style>
