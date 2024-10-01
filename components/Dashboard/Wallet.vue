<template>
  <v-card flat>
    <Loader v-if="trxLoader" />
    <CardHeader :title="'Wallet'" :button="true"/>
    <v-row class="px-0 d-flex">
      <v-col cols="12" sm="12" md="6">
        <v-card
          class="mx-auto h-100"
          outlined
          flat
          elevation="0"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                {{ $t('Total Available Credit') }}
              </div>
              <v-list-item-title class="text-h5 mb-1">
                {{ available }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t('use_credit') }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-card
              elevation="8"
              class="primary px-2"
              dark
            >
              <v-icon color="white" class="pa-2">
                mdi-currency-usd
              </v-icon>
            </v-card>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <v-card
          class="mx-auto"
          outlined
          flat
          elevation="0"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                {{ $t('total_used_credit') }}
              </div>
              <v-list-item-title class="text-h5 mb-1">
                {{ used }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t('used_credit') }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-card
              elevation="8"
              class="primary px-2"
              dark
            >
              <v-icon color="white" class="pa-2">
                mdi-poll
              </v-icon>
            </v-card>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="6"></v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="text-h5">
          History
        </div>
      </v-col>
      <v-col cols="12">
        <template>
          <v-data-table
            :headers="headers"
            :items="items"
            :sort-desc="[false, true]"
            multi-sort
            class="elevation-1"
          >
            <template v-slot:item.action="{ item }">
              <v-chip small class="text-capitalize" :color="item.action === 'credit' ? 'success' : 'primary'">
                {{ item.points_type }}
              </v-chip>
            </template>
          </v-data-table>
        </template>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CardHeader from "@/components/Common/CardHeader";
import GlobalOnlinePayment from "@/components/Payment/GlobalOnlinePayment";
import Loader from "@/components/Common/Loader";

export default {
  name: "Wallet",
  components: {Loader, GlobalOnlinePayment, CardHeader},
  data() {
    return {
      showGlobalPaymentDialog: true,
      headers: [
        {text: 'TrxID', value: 'trxID',},
        {text: 'Date', value: 'date',},
        {text: 'Action', value: 'action'},
        {text: 'Gateway', value: 'gateway'},
        {text: 'Points', value: 'points'}
      ],
      items: [],
      loading: false,
      available: 0,
      used: 0,
      trxLoader: true
    }
  },
  created() {
    this.initWallet()
    if (this.$route.query['paymentID']) {
      this.executePayment()
    }
  },
  methods: {
    initWallet() {
      this.loading = false
      this.$axios.get('wallet')
        .then((response) => {
          this.available = response.data.data.available
          this.used = response.data.data.used
          this.items = response.data.data.history
        })
        .catch((err) => {})
        .finally(() => {
          this.loading = false
        })
    },
    executePayment() {
      this.trxLoader = true
      let formData = new FormData()
      formData.append('paymentID', this.$route.query['paymentID'])
      this.$axios.post('bkash-execute-payment', formData)
        .then((response) => {
          if (response?.data?.statusCode !== '0000') {
            this.$toast.error(response?.data?.statusMessage)
          } else {
            this.$toast.success('Payment completed')
          }
          this.$router.push('/dashboard/wallet')
          // this.initWallet()
          // this.$router.push('/')
        })
        .catch((error) => {
          // this.$toast.error(error.response.data.message)
          this.$toast.error('Payment error!')
          this.$router.push('/dashboard/wallet')
        })
        .finally(() => {
          this.trxLoader = false
        })
    }

  }

}
</script>

<style scoped>

</style>
