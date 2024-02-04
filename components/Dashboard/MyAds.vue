<template>
  <v-card flat>
    <v-row>
      <v-col cols="6" class="">
        <div class="text-h5 font-weight-bold">
          {{ $t('my_ads') }}
        </div>
        <div class="text-caption">
          {{ $t("ad_note") }}
        </div>
      </v-col>
      <v-col cols="6" class="" align="end">
        <v-btn rounded small class="primary px-5 text-capitalize" @click.prevent="emitCreateAdEvent">
          {{ $t('post_ad') }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>

      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="items"
          class="elevation-1"
        >
          <template v-slot:item.image="{ item }">
            <v-img :src="item.image" alt="Image" width="100" height="100"/>
          </template>
          <template v-slot:item.status="{ item }">
            <v-chip small :color="getColorInfo(item.status)">
              {{ item.status }}
            </v-chip>
          </template>
          <template v-slot:item.action="{ item }">
            <v-btn icon small>
              <v-icon small>mdi-pencil-circle-outline</v-icon>
            </v-btn>
            <v-btn icon small @click.prevent="openDeleteDialog">
              <v-icon small color="red lighten-2">mdi-trash-can-outline</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialogDelete"
      persistent
      max-width="390"
    >
      <v-card align="center">
        <v-card-text class="text-center pa-5 pp-body-reg-2">
          <v-icon color="red" large>
            mdi-alert-outline
          </v-icon>
        </v-card-text>
        <v-card-text class="text-center pa-5 pp-body-reg-2">
          You are about to delete this Item, do you want to proceed?
        </v-card-text>
        <v-card-actions class="pb-5">
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            outlined
            rounded
            class="px-5"
            @click="closeDeleteDialog"
          >
            {{ $t('No') }}
          </v-btn>
          <v-btn
            class="primary px-5"
            rounded
            :loading="btnLoading"
            @click="makeDelete"
          >
            {{ $t('yes') }}
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-card>
</template>

<script>
import CardHeader from "@/components/Common/CardHeader";

export default {
  name: "MyAds",
  components: {CardHeader},
  data() {
    return {
      headers: [
        {text: 'Image', value: 'image',},
        {text: 'Date', value: 'date',},
        {text: 'Status', value: 'status'},
        {text: 'Points', value: 'points'},
        {text: 'Action', value: 'action'},
      ],
      items: [
        {
          image: 'https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png',
          date: '2024-02-02',
          status: 'Sold',
          points: 100,
          action: 'Credit'
        },
        {
          image: 'https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png',
          date: '2024-02-01',
          status: 'Not Approved',
          points: 50,
          action: 'Debit'
        },
        {
          image: 'https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png',
          date: '2024-01-31',
          status: 'Sold',
          points: 75,
          action: 'Credit'
        },
        {
          image: 'https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png',
          date: '2024-01-30',
          status: 'Sold',
          points: 80,
          action: 'Credit'
        },
        {
          image: 'https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png',
          date: '2024-01-29',
          status: 'Pending',
          points: 30,
          action: 'Debit'
        },
        {
          image: 'https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png',
          date: '2024-01-28',
          status: 'Sold',
          points: 60,
          action: 'Credit'
        },
        {
          image: 'https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png',
          date: '2024-01-27',
          status: 'Sold',
          points: 90,
          action: 'Credit'
        },
        {
          image: 'https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png',
          date: '2024-01-26',
          status: 'Pending',
          points: 40,
          action: 'Debit'
        },
        {
          image: 'https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png',
          date: '2024-01-25',
          status: 'Sold',
          points: 70,
          action: 'Credit'
        },
        {
          image: 'https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png',
          date: '2024-01-24',
          status: 'Sold',
          points: 85,
          action: 'Credit'
        }
      ],
      dialogDelete: false,
      btnLoading: false,
    }
  },
  methods: {
    getColorInfo(status) {
      switch (status) {
        case 'Not Approved':
          return 'red'
        case 'Sold':
          return 'primary'
        case 'Pending':
          return "info"
        case "Approved":
          return 'success'
        default:
          return 'gray'
      }
    },
    emitCreateAdEvent() {
      this.$emit('create-ad');
    },
    makeDelete() {
      this.$toast.success('Item deleted')
      this.closeDeleteDialog()
    },
    closeDeleteDialog() {
      this.dialogDelete = false
    },
    openDeleteDialog() {
      this.dialogDelete = true
    },
  }
}
</script>

<style scoped>

</style>
