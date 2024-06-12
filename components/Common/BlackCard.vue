<template>
  <v-card :flat="true" class="px-0 txt" color="primary" :min-height="'200px'" style="border-radius: unset; display: flex; align-items: center">
    <v-row class="d-flex justify-center mx-2">
      <v-col cols="12" xs="2" sm="8" md="6">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              rounded
              color="white"
              outlined
              v-model="searchKey"
              :dense="bp.smAndDown"
              hide-details
              @input="searchAds"

              placeholder="Search your desired product"
              class="px-0 secondary"
              v-bind="attrs"
              v-on="on"
            >
              <template v-slot:append>
                <v-icon @click.prevent="" color="primary">
                  mdi-magnify
                </v-icon>
              </template>
            </v-text-field>
          </template>
          <v-card style=" max-height: 200px; scroll-behavior: auto; overflow-y: auto">
            <v-list>
              <v-list-item v-for="(item, index) in searchResults" :key="index" @click="selectItem(item)">
                <v-list-item-content>
                  <v-list-item-title v-text="item.title" class="text--black black--text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-if="loading">
                <v-list-item-content>
                  <v-list-item-title>Loading...</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-if="!loading && searchResults.length === 0">
                <v-list-item-content>
                  <v-list-item-title class="text--black black--text">No results found</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "BlackCard",
  props: {
    title: {
      type: String,
    },
    breadcrumbs: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      searchKey: null,
      searchResults: [],
      loading: false,
      menu: false,
    }
  },
  methods: {
    searchAds() {
      if (!this.searchKey) {
        this.searchResults = []
        this.menu = false
        return
      }
      this.searchResults = []
      this.loading = true
      this.menu = true
      let formData = new FormData()
      formData.append('title', this.searchKey)
      this.$axios.get('search-ad', formData)
        .then((response) => {
          this.searchResults = response.data.data
        })
        .catch((error) => {
          console.log(error.response)
        })
        .finally(() => {
          this.loading = false
        })
    },
    selectItem(item) {
      this.menu = false
      this.$router.push('products/'+ item.slug)
      this.searchResults = []

    }
  }
}
</script>

