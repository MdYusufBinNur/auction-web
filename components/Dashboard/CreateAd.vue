<template>
  <div>
    <v-card flat>
      <v-card-title class="headline">{{ $t('create_new_ad') }}</v-card-title>
      <v-card-text>
        <!-- Form fields for creating new post -->
        <v-form ref="form">
          <v-row class="">
            <v-col cols="12">
              <v-card-text class="px-0 py-2">
                {{$t('product_information')}}
              </v-card-text>
            </v-col>
            <v-col cols="12">
              <v-select :items="['new', 'used']" v-model="newPost.condition" :label="$t('Condition')" outlined hide-details="auto"></v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="newPost.name" :label="$t('product_name')" outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-select v-model="newPost.category_id" :items="categories" item-text="name" item-value="id"
                        :label="$t('category')" outlined hide-details="auto" @change="setSub(newPost.category_id)"></v-select>
            </v-col>
            <v-col cols="6">
              <v-select v-model="newPost.sub_category_id" :items="subCategories" item-text="name" item-value="id"
                        :label="$t('sub_category')" outlined hide-details="auto"></v-select>
            </v-col>
            <v-col cols="6">
              <v-select v-model="newPost.division_id" :items="divisions" item-text="name" item-value="id"
                        :label="$t('division')" outlined hide-details="auto" @change="setDistricts(newPost.division_id)"></v-select>
            </v-col>
            <v-col cols="6">
              <v-select v-model="newPost.district_id" :items="districts" item-text="name" item-value="id"
                        :label="$t('district')" outlined hide-details="auto"  @change="setSubDistricts(newPost.district_id)"></v-select>
            </v-col>
            <v-col cols="6">
              <v-select v-model="newPost.sub_district_id" :items="sub_districts" item-text="name" item-value="id"
                        :label="$t('sub_district')" outlined hide-details="auto"></v-select>
            </v-col>


            <v-col cols="6">
              <v-text-field v-model="newPost.price" :label="$t('price')" outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="newPost.location" :label="$t('location')" outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="newPost.color" :label="$t('color')" outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="newPost.size" :label="$t('size')" outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea rows="4" v-model="newPost.features" :label="$t('write_product_details')" hide-details="auto" outlined />
            </v-col>

            <v-col cols="12">
              <v-card-text class="px-0 py-2">
                {{$t('add_photo_details')}}
              </v-card-text>
            </v-col>
            <v-col v-for="(image, index) in 4" :key="index" cols="12" sm="6" xs="6" md="3">
              <div class="custom_block" style="padding: 10px">
                <v-row v-if="logoPreviewURL[index]" class="text-center">
                  <v-col cols="12" class="d-flex justify-center">
                    <v-img :src="logoPreviewURL[index]" max-width="120" height="auto"/>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      :disabled="!canUpload(index)"
                      color="primary"
                      rounded
                      x-small
                      outlined
                      class="text-capitalize py-2"
                      @click.prevent="openFileInput(index)">
                      <UploadSVG/>
                      <span class="px-2">{{$t('change_image')}}</span>
                    </v-btn>
                    <v-btn
                      color="error"
                      rounded
                      x-small
                      outlined
                      class="text-capitalize py-2"
                      v-if="logoPreviewURL[index]"
                      @click.prevent="removeImage(index)">
                      <v-icon x-small>
                        md-close-circle-outline
                      </v-icon>
                      <span class="px-2">{{$t('remove_image')}}</span>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-btn
                  v-else
                  :disabled="!canUpload(index)"
                  color="primary"
                  rounded
                  outlined
                  x-small
                  class="text-capitalize"
                  @click.prevent="openFileInput(index)">
                  <UploadSVG/>
                  <span class="px-2">{{$t('upload_image')}}</span>
                </v-btn>
                <input ref="fileInputs" type="file" style="display: none" @change="onImageChange($event, index)">
              </div>
            </v-col>
            <v-col cols="12" class="text-right">
              <div class="text-caption text-center">
                {{$t('upload_photo_hint')}}
              </div>
            </v-col>

          </v-row>

          <v-row class="mb-5">
            <v-col cols="12">
              <v-card-text class="px-0 py-2">
                {{$t('contact_details')}}
              </v-card-text>
            </v-col>

            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="newPost.name" label="Your Name" outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="newPost.email" label="Your Email" outlined hide-details="auto"></v-text-field>
            </v-col>
          </v-row>
          <v-row class="border">
            <v-col cols="12" class="py-0">
              <v-checkbox label="Show Contact Number" class="py-0"/>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="newPost.mobile" :label="$t('contact_number')" hint="01x xxx xxx xxx" outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="newPost.additional_mobile" hint="01x xxx xxx xxx" :label="$t('additional_contact_number')" outlined hide-details="auto"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-checkbox :label="$t('accept_terms_conditions')">

              </v-checkbox>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions align="right">
        <!-- Buttons to cancel or save the new post -->
        <v-btn color="" rounded class="primary white--text px-5 mb-5" text>{{ $t('Publish') }}</v-btn>
      </v-card-actions>
    </v-card>

  </div>
</template>

<script>
import UploadSVG from "~/components/SVG/UploadSVG.vue";
import error from "~/layouts/error.vue";

export default {
  name: "CreateAd",
  components: {UploadSVG},
  data() {
    return {
      categories: [],
      subCategories: [],
      divisions: [],
      districts: [],
      sub_districts: [],
      dialogCreatePost: false,
      categoryLoader: false,
      subCategoryLoader: false,
      newPost: {
        name: '',
        image: [],
        price: '',
        location: '',
        color: '',
        condition: '',
        size: '',
        mobile: '',
        email: '',
        additional_mobile: '',
        sub_category_id: '',
        category_id: '',
        division_id: '',
        district_id: '',
        sub_district_id: '',
        features: '',
      },
      logoPreviewURL: [],
    }
  },
  created() {
    this.getCategories()
    this.getDivisions()
  },
  methods: {
    onImageChange(event, index) {
      const file = event.target.files[0];
      if (!file) return; // Handle case when no file is selected
      const reader = new FileReader();
      reader.onload = () => {
        this.$set(this.logoPreviewURL, index, reader.result); // Update the preview URL
        // Force re-render of the component
        this.$forceUpdate();
      };
      reader.readAsDataURL(file); // Read the file as a data URL
      this.newPost.image[index] = file; // Store the file in the appropriate index
    },
    openFileInput(index) {
      // Programmatically open the file input corresponding to the given index
      this.$refs.fileInputs[index].click();
    },
    canUpload(index) {
      for (let i = 0; i < index; i++) {
        if (!this.newPost.image[i]) {
          return false; // Disable upload if any preceding slot is empty
        }
      }

      if (this.newPost.image[index]) {
        return true; // Disable upload if the current slot is empty
      }

      return true; // Enable upload if all preceding slots are filled
    },
    removeImage(index) {
      this.$set(this.newPost.image, index, ''); // Reset the image file
      this.$set(this.logoPreviewURL, index, null); // Reset the preview URL
      // Force re-render of the component
      this.$forceUpdate();
    },
    setSub(categoryId) {

      console.log(categoryId)
      this.$axios.get(`sub-category-list/${categoryId}`)
        .then(response => {
          this.subCategories = response.data.data;
        })
        .catch(error => {
          console.error('Error fetching subcategories:', error);
        });
    },

    getCategories() {
      this.categoryLoader = true
      this.$axios.get('category-list')
        .then((response) => {
          this.categories = response.data.data
        })
        .catch((error) => {

        })
        .finally(() => {
          this.categoryLoader = false
        })
    },
    getDivisions() {
      this.$axios.get('divisions')
        .then((response) => {
          this.divisions = response.data.data
        })
        .finally(() => {
        })
    },
    setDistricts(divisionId) {
      this.$axios.get(`get-districts/${divisionId}`)
        .then((response) => {
          this.districts = response.data.data
        })
        .finally(() => {
        })
    },
    setSubDistricts(districtId) {
      console.log(districtId)
      this.$axios.get(`get-sub-districts/${districtId}`)
        .then((response) => {
          this.sub_districts = response.data.data
        })
        .finally(() => {
        })
    },
  }
}
</script>

<style scoped>
.border{
  border: 1px dotted;
  border-radius: 10px;
}
</style>
