<template>
  <v-dialog v-model="dialog" max-width="500px" persistent>
    <v-card>
      <v-card-title>
        <span class="headline">Selected Payment Method: {{ selectedMethod }}</span>
      </v-card-title>
      <v-card-text class="">
        <v-img :src="selectedMethod === 'bkash' ? bkash : nagad " :alt="selectedMethod" width="150" class="px-0"/>
        <p>You can send money from {{ selectedMethod }} manually to {{ number }} </p>
        <p>Please enter your transaction ID below for payment verification</p>
        <v-text-field v-model="trxId" label="Transaction ID" outlined hide-details></v-text-field>
      </v-card-text>
      <v-card-actions class="pb-8 px-5">
        <v-btn class="primary white--text text-capitalise px-5" small rounded @click="submitTRXId" :loading="loading">
          {{ $t('submit_transaction') }}
        </v-btn>
        <v-btn rounded small class="px-5" color="primary" outlined text @click.prevent="closeDialog">
          {{ $t('close') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import bkash from '/static/payment/bkash.png'
import nagad from '/static/payment/nagad.png'

export default {
  name: "SelectedPaymentModal",
  props: {
    selectedMethod: {
      type: String,
      required: true
    },
    selectedImage: {
      type: String,
      required: false
    },
    orderId: {
      required: true
    }
  },
  data() {
    return {
      bkash,
      nagad,
      loading: false,
      number: '01873149414',
      dialog: true,
      trxId: ''
    };
  },
  methods: {
    submitTRXId() {
      if (!this.trxId)
        return this.$toast.warning('Put your valid trxID')
      this.loading = true
      let formData = new FormData()
      formData.append('trxID', this.trxId)
      formData.append('gateway', this.selectedMethod)
      this.$axios.post('submit-transaction', formData)
        .then((response) => {
          this.$toast.success(response.data.message)
          this.closeDialog()
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message)
        })
        .finally(() => {
          this.loading = false
        })

    },
    closeDialog() {
      this.$emit('CloseSelectedDialog')
      this.dialog = false
    }
  }
}
</script>

<style scoped>
/* Component styles here */
</style>
