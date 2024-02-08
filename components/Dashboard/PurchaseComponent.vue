<template>
  <v-card flat>
    <v-row>
      <v-col cols="6" class="">
        <div class="text-h5 font-weight-bold">
          {{ $t('purchase_list') }}
        </div>
        <div class="text-caption">
          {{ $t("purchase_note") }}
        </div>
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
              <v-icon small>mdi-eye-circle-outline</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CardHeader from "@/components/Common/CardHeader";

export default {
  name: "PurchaseComponent",
  components: {CardHeader},
  data() {
    return {
      headers: [
        {text: 'Image', value: 'image',},
        {text: 'Date', value: 'date',},
        {text: 'Seller', value: 'seller'},
        {text: 'Points', value: 'points'},
        {text: 'Action', value: 'action'},
      ],
      items: [
        {
          image: 'https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png',
          date: '2024-02-02',
          seller: 'Yusuf',
          points: 100,
          action: 'Credit'
        },
        {
          image: 'https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png',
          date: '2024-02-01',
          seller: 'Rakib',
          points: 50,
          action: 'Debit'
        },
        {
          image: 'https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png',
          date: '2024-01-31',
          seller: 'Asif',
          points: 75,
          action: 'Credit'
        },
        {
          image: 'https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png',
          date: '2024-01-30',
          seller: 'Sayed',
          points: 80,
          action: 'Credit'
        },
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
