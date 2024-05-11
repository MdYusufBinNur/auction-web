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
        <v-btn rounded small class="primary px-5 text-capitalize" :disabled="this.$auth?.user?.data?.status !== 'approved'" @click.prevent="emitCreateAdEvent">
<!--        <v-btn rounded small class="primary px-5 text-capitalize"  @click.prevent="emitCreateAdEvent">-->
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
            <v-btn icon small @click.prevent="editAd(item)">
              <v-icon small>mdi-pencil-circle-outline</v-icon>
            </v-btn>
            <v-btn icon small @click.prevent="openDeleteDialog(item)">
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
        {text: 'Price', value: 'price'},
        {text: 'Action', value: 'action'},
      ],
      items: [],
      dialogDelete: false,
      btnLoading: false,
      loading : true,
      editedItem: {},
      editedIndex: -1,
    }
  },
  created() {
    this.initAds()
  },
  methods: {
    initAds() {
      this.loading = true
      this.$axios.get('products')
        .then((response) => {
          this.items = response.data.data
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message)
        })
        .finally(() => {
          this.loading = false
        })

    },
    makeDelete() {
      this.btnLoading = true
      this.$axios.delete('products/'+this.editedItem?.id)
        .then((response) => {
          this.items.splice(this.editedIndex, 1)
          this.initAds()
          this.closeDeleteDialog()
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message)
        })
        .finally(() => {
          this.btnLoading = false
        })

    },
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
      this.$router.push('/dashboard/ads/create')
    },
    closeDeleteDialog() {
      this.editedItem = {}
      this.editedIndex = -1
      this.dialogDelete = false
    },
    openDeleteDialog(item) {
      this.editedItem = item
      this.editedIndex = this.items.indexOf(item)
      this.dialogDelete = true
    },
    editAd(item) {
      const itemJSON = JSON.stringify(item);
      localStorage.setItem('edit-ad', itemJSON)
      this.$router.push('/dashboard/ads/create')
    }
  }
}
</script>

<style scoped>

</style>
