<template>
  <div>
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
                {{ $t('1000') }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t('use_credit') }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-card
              elevation="8"
              class="transparent primary px-2"
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
                {{ $t('0') }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t('used_credit') }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-card
              elevation="8"
              class="transparent primary px-2"
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
              <v-chip small :color="item.action === 'credit' ? 'success' : 'primary'">
                {{ item.action }}
              </v-chip>
            </template>
          </v-data-table>
        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardHeader from "@/components/Common/CardHeader";

export default {
  name: "WalletViewCard",
  components: {CardHeader},
  data() {
    return {
      headers: [
        {text: 'TrxID', value: 'trxID',},
        {text: 'Date', value: 'date',},
        {text: 'Action', value: 'action'},
        {text: 'Gateway', value: 'gateway'},
        {text: 'Points', value: 'points'}
      ],
      items: [
        {trxID: 'TrxYSba7as', date: '20/01/01', action: 'credit', gateway: 'Bkash', points: 10},
        {trxID: 'dTxYSba7aae', date: '20/01/02', action: 'debit', gateway: 'Nagad', points: 20},
        {trxID: '2rxYSba7as', date: '20/01/03', action: 'credit', gateway: 'Bkash', points: 15},
        {trxID: 'TrxYSba7as', date: '20/01/04', action: 'credit', gateway: 'Bkash', points: 10},
        {trxID: 'dTxYSba7aae', date: '20/01/05', action: 'debit', gateway: 'Nagad', points: 20},
        {trxID: '2rxYSba7as', date: '20/01/06', action: 'credit', gateway: 'Bkash', points: 15},
        {trxID: 'TrxYSba7as', date: '20/01/07', action: 'credit', gateway: 'Bkash', points: 10},
        {trxID: 'dTxYSba7aae', date: '20/01/08', action: 'debit', gateway: 'Nagad', points: 20},
        {trxID: '2rxYSba7as', date: '20/01/09', action: 'credit', gateway: 'Bkash', points: 15},
        {trxID: 'TrxYSba7as', date: '20/01/10', action: 'credit', gateway: 'Bkash', points: 10},
        {trxID: 'dTxYSba7aae', date: '20/01/11', action: 'debit', gateway: 'Nagad', points: 20},
        {trxID: '2rxYSba7as', date: '20/01/12', action: 'credit', gateway: 'Bkash', points: 15},
        {trxID: 'TrxYSba7as', date: '20/01/13', action: 'credit', gateway: 'Bkash', points: 10},
        {trxID: 'dTxYSba7aae', date: '20/01/14', action: 'debit', gateway: 'Nagad', points: 20},
        {trxID: '2rxYSba7as', date: '20/01/15', action: 'credit', gateway: 'Bkash', points: 15},
        {trxID: 'TrxYSba7as', date: '20/01/16', action: 'credit', gateway: 'Bkash', points: 10},
        {trxID: 'dTxYSba7aae', date: '20/01/17', action: 'debit', gateway: 'Nagad', points: 20},
        {trxID: '2rxYSba7as', date: '20/01/18', action: 'credit', gateway: 'Bkash', points: 15},
        {trxID: 'TrxYSba7as', date: '20/01/19', action: 'credit', gateway: 'Bkash', points: 10},
        {trxID: 'dTxYSba7aae', date: '20/01/20', action: 'debit', gateway: 'Nagad', points: 20},

      ]
    }
  }

}
</script>

<style scoped>

</style>
