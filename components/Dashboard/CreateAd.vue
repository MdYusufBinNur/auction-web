<template>
  <div>
<!--    <v-card flat>-->
<!--      <v-card-title class="headline">{{ $t('create_new_ad') }}</v-card-title>-->
<!--      <v-card-text>-->
<!--        <v-form ref="form">-->
<!--          <v-row class="">-->
<!--            <v-col cols="12">-->
<!--              <v-card-text class="px-0 py-2">-->
<!--                {{ $t('product_information') }}-->
<!--              </v-card-text>-->
<!--            </v-col>-->
<!--            <v-col cols="12">-->
<!--              <v-select :items="adType" :disabled="disableAdTypeSelection" v-model="newPost.product_type"-->
<!--                        item-text="name" item-value="value"-->
<!--                        :rules="[v => !!v || 'Item is required']" :label="$t('Ad Type')" outlined hide-details="auto"-->
<!--                        required></v-select>-->
<!--            </v-col>-->
<!--            <v-col cols="12">-->
<!--              <v-select :items="['new', 'used']" v-model="newPost.condition" :rules="[v => !!v || 'Item is required']"-->
<!--                        :label="$t('Condition')" outlined hide-details="auto" required></v-select>-->
<!--            </v-col>-->
<!--            <v-col cols="12">-->
<!--              <v-text-field v-model="newPost.title" :rules="rules.required" :label="$t('product_name')" outlined-->
<!--                            hide-details="auto"></v-text-field>-->
<!--            </v-col>-->
<!--            <v-col cols="6">-->
<!--              <v-select v-model="newPost.category_id" :rules="rules.required" :items="categories" item-text="name"-->
<!--                        item-value="id"-->
<!--                        :label="$t('category')" outlined hide-details="auto"-->
<!--                        @change="setSub(newPost.category_id)"></v-select>-->
<!--            </v-col>-->
<!--            <v-col cols="6">-->
<!--              <v-select v-model="newPost.sub_category_id" :rules="rules.required" :items="subCategories"-->
<!--                        item-text="name" item-value="id"-->
<!--                        :label="$t('sub_category')" outlined hide-details="auto"></v-select>-->
<!--            </v-col>-->
<!--            <v-col cols="6">-->
<!--              <v-select v-model="newPost.division_id" :rules="rules.required" :items="divisions" item-text="name"-->
<!--                        item-value="id"-->
<!--                        :label="$t('division')" outlined hide-details="auto"-->
<!--                        @change="setDistricts(newPost.division_id)"></v-select>-->
<!--            </v-col>-->
<!--            <v-col cols="6">-->
<!--              <v-select v-model="newPost.district_id" :rules="rules.required" :items="districts" item-text="name"-->
<!--                        item-value="id"-->
<!--                        :label="$t('district')" outlined hide-details="auto"-->
<!--                        @change="setSubDistricts(newPost.district_id)"></v-select>-->
<!--            </v-col>-->
<!--            <v-col cols="6">-->
<!--              <v-select v-model="newPost.sub_district_id" :rules="rules.required" :items="sub_districts"-->
<!--                        item-text="name" item-value="id"-->
<!--                        :label="$t('sub_district')" outlined hide-details="auto"></v-select>-->
<!--            </v-col>-->

<!--            <v-col cols="6">-->
<!--              <v-text-field v-model="newPost.location" :rules="rules.required" :label="$t('location')" outlined-->
<!--                            hide-details="auto"></v-text-field>-->
<!--            </v-col>-->
<!--            <v-col cols="6">-->
<!--              <v-text-field v-model="newPost.price" :rules="rules.required" :label="$t('price')" outlined-->
<!--                            hide-details="auto"></v-text-field>-->
<!--            </v-col>-->

<!--            <v-col cols="6">-->
<!--              <v-text-field v-model="newPost.color" :rules="rules.required" :label="$t('color')" outlined-->
<!--                            hide-details="auto"></v-text-field>-->
<!--            </v-col>-->
<!--            <v-col cols="6">-->
<!--              <v-text-field v-model="newPost.size" :label="$t('size')" outlined hide-details="auto"></v-text-field>-->
<!--            </v-col>-->
<!--            <v-col cols="12">-->
<!--              <v-textarea rows="4" v-model="newPost.features" :rules="rules.required"-->
<!--                          :label="$t('write_product_details')" hide-details="auto" outlined/>-->
<!--            </v-col>-->

<!--            <v-col cols="12">-->
<!--              <v-card-text class="px-0 py-2">-->
<!--                {{ $t('add_photo_details') }}-->
<!--              </v-card-text>-->
<!--            </v-col>-->
<!--            <v-col v-for="(image, index) in 4" :key="index" cols="12" sm="6" xs="6" md="3">-->
<!--              <div class="custom_block" style="padding: 10px">-->
<!--                <v-row v-if="logoPreviewURL[index]" class="text-center">-->
<!--                  <v-col cols="12" class="d-flex justify-center align-stretch">-->
<!--                    <v-img :src="logoPreviewURL[index]" max-width="120" height="auto"/>-->
<!--                  </v-col>-->
<!--                  <v-col cols="12">-->
<!--                    <v-btn-->
<!--                      :disabled="!canUpload(index)"-->
<!--                      color="primary"-->
<!--                      rounded-->
<!--                      x-small-->
<!--                      outlined-->
<!--                      class="text-capitalize py-2"-->
<!--                      @click.prevent="openFileInput(index)">-->
<!--                      <UploadSVG/>-->
<!--                      <span class="px-2">{{ $t('change_image') }}</span>-->
<!--                    </v-btn>-->
<!--                    <v-btn-->
<!--                      color="error"-->
<!--                      rounded-->
<!--                      x-small-->
<!--                      outlined-->
<!--                      class="text-capitalize py-2"-->
<!--                      v-if="logoPreviewURL[index]"-->
<!--                      @click.prevent="removeImage(index)">-->
<!--                      <v-icon x-small>-->
<!--                        md-close-circle-outline-->
<!--                      </v-icon>-->
<!--                      <span class="px-2">{{ $t('remove_image') }}</span>-->
<!--                    </v-btn>-->
<!--                  </v-col>-->
<!--                </v-row>-->
<!--                <v-btn-->
<!--                  v-else-->
<!--                  :disabled="!canUpload(index)"-->
<!--                  color="primary"-->
<!--                  rounded-->
<!--                  outlined-->
<!--                  :loading="imageLoader[index]"-->
<!--                  x-small-->
<!--                  class="text-capitalize"-->
<!--                  @click.prevent="openFileInput(index)">-->
<!--                  <UploadSVG/>-->
<!--                  <span class="px-2">{{ $t('upload_image') }}</span>-->
<!--                </v-btn>-->
<!--                <input ref="fileInputs" type="file" style="display: none" @change="onImageChange($event, index)">-->
<!--              </div>-->
<!--            </v-col>-->
<!--            <v-col cols="12" class="text-right">-->
<!--              <div class="text-caption text-center">-->
<!--                {{ $t('upload_photo_hint') }}-->
<!--              </div>-->
<!--            </v-col>-->

<!--          </v-row>-->
<!--          <v-row class="mb-5">-->
<!--            <v-col cols="12">-->
<!--              <v-card-text class="px-0 py-2">-->
<!--                {{ $t('contact_details') }}-->
<!--              </v-card-text>-->
<!--            </v-col>-->

<!--            <v-col cols="12" sm="12" md="6">-->
<!--              <v-text-field v-model="newPost.name" label="Your Name" outlined hide-details="auto"></v-text-field>-->
<!--            </v-col>-->
<!--            <v-col cols="12" sm="12" md="6">-->
<!--              <v-text-field v-model="newPost.email" label="Your Email" outlined hide-details="auto"></v-text-field>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--          <v-row class="border">-->
<!--            <v-col cols="12" class="py-0">-->
<!--              <v-checkbox label="Show Contact Number" class="py-0" v-model="newPost.show_contact_number"/>-->
<!--            </v-col>-->
<!--            <v-col cols="12" sm="12" md="6">-->
<!--              <v-text-field v-model="newPost.mobile" :rules="rules.required" :label="$t('contact_number')"-->
<!--                            hint="01x xxx xxx xxx" outlined hide-details="auto"></v-text-field>-->
<!--            </v-col>-->
<!--            <v-col cols="12" sm="12" md="6">-->
<!--              <v-text-field v-model="newPost.additional_mobile" hint="01x xxx xxx xxx"-->
<!--                            :label="$t('additional_contact_number')" outlined hide-details="auto"></v-text-field>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--          <v-row>-->
<!--            <v-col cols="12">-->
<!--              <v-checkbox :label="$t('accept_terms_conditions')" v-model="newPost.accept_terms"-->
<!--                          :rules="[v => !!v || 'You must agree to continue!']">-->

<!--              </v-checkbox>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--        </v-form>-->
<!--      </v-card-text>-->
<!--      <v-card-actions align="right">-->
<!--        &lt;!&ndash; Buttons to cancel or save the new post &ndash;&gt;-->
<!--        <v-btn v-if="!newPost.id" color="" rounded class="primary white&#45;&#45;text px-5 mb-5" :loading="loading" text-->
<!--               @click.prevent="submit">-->
<!--          {{ $t('Publish') }}-->
<!--        </v-btn>-->
<!--        <v-btn v-if="newPost.id" color="" rounded class="primary white&#45;&#45;text px-5 mb-5" :loading="loading" text-->
<!--               @click.prevent="update">-->
<!--          {{ $t('Update') }}-->
<!--        </v-btn>-->
<!--      </v-card-actions>-->
<!--    </v-card>-->
    <v-card flat>
      <v-card-title class="headline">{{ $t('create_new_ad') }}</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-row class="">
            <v-col cols="12">
              <v-card-text class="px-0 py-2">
                {{ $t('product_information') }}
              </v-card-text>
            </v-col>
            <v-col cols="12">
              <v-select :items="adType" :disabled="disableAdTypeSelection" v-model="newPost.product_type"
                        item-text="name" item-value="value"
                        :label="$t('Ad Type')" outlined hide-details="auto"
                        ></v-select>
            </v-col>
            <v-col cols="12">
              <v-select :items="['new', 'used']" v-model="newPost.condition"
                        :label="$t('Condition')" outlined hide-details="auto" required></v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="newPost.title" :label="$t('product_name')" outlined
                            hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-select v-model="newPost.category_id" :items="categories" item-text="name"
                        item-value="id"
                        :label="$t('category')" outlined hide-details="auto"
                        @change="setSub(newPost.category_id)"></v-select>
            </v-col>
            <v-col cols="6">
              <v-select v-model="newPost.sub_category_id" :items="subCategories"
                        item-text="name" item-value="id"
                        :label="$t('sub_category')" outlined hide-details="auto"></v-select>
            </v-col>
            <v-col cols="6">
              <v-select v-model="newPost.division_id" :items="divisions" item-text="name"
                        item-value="id"
                        :label="$t('division')" outlined hide-details="auto"
                        @change="setDistricts(newPost.division_id)"></v-select>
            </v-col>
            <v-col cols="6">
              <v-select v-model="newPost.district_id" :items="districts" item-text="name"
                        item-value="id"
                        :label="$t('district')" outlined hide-details="auto"
                        @change="setSubDistricts(newPost.district_id)"></v-select>
            </v-col>
            <v-col cols="6">
              <v-select v-model="newPost.sub_district_id" :items="sub_districts"
                        item-text="name" item-value="id"
                        :label="$t('sub_district')" outlined hide-details="auto"></v-select>
            </v-col>

            <v-col cols="6">
              <v-text-field v-model="newPost.location" :label="$t('location')" outlined
                            hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="newPost.price" :label="$t('price')" outlined
                            hide-details="auto"></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field v-model="newPost.color" :label="$t('color')" outlined
                            hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="newPost.size" :label="$t('size')" outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea rows="4" v-model="newPost.features"
                          :label="$t('write_product_details')" hide-details="auto" outlined/>
            </v-col>

            <v-col cols="12">
              <v-card-text class="px-0 py-2">
                {{ $t('add_photo_details') }}
              </v-card-text>
            </v-col>
            <v-col v-for="(image, index) in 4" :key="index" cols="12" sm="6" xs="6" md="3">
              <div class="custom_block" style="padding: 10px">
                <v-row v-if="logoPreviewURL[index]" class="text-center">
                  <v-col cols="12" class="d-flex justify-center align-stretch">
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
                      <span class="px-2">{{ $t('change_image') }}</span>
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
                      <span class="px-2">{{ $t('remove_image') }}</span>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-btn
                  v-else
                  :disabled="!canUpload(index)"
                  color="primary"
                  rounded
                  outlined
                  :loading="imageLoader[index]"
                  x-small
                  class="text-capitalize"
                  @click.prevent="openFileInput(index)">
                  <UploadSVG/>
                  <span class="px-2">{{ $t('upload_image') }}</span>
                </v-btn>
                <input ref="fileInputs" type="file" style="display: none" @change="onImageChange($event, index)">
              </div>
            </v-col>
            <v-col cols="12" class="text-right">
              <div class="text-caption text-center">
                {{ $t('upload_photo_hint') }}
              </div>
            </v-col>

          </v-row>
          <v-row class="mb-5">
            <v-col cols="12">
              <v-card-text class="px-0 py-2">
                {{ $t('contact_details') }}
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
              <v-checkbox label="Show Contact Number" class="py-0" v-model="newPost.show_contact_number"/>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="newPost.mobile" :label="$t('contact_number')"
                            hint="01x xxx xxx xxx" outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field v-model="newPost.additional_mobile" hint="01x xxx xxx xxx"
                            :label="$t('additional_contact_number')" outlined hide-details="auto"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-checkbox :label="$t('accept_terms_conditions')" v-model="newPost.accept_terms"
              >

              </v-checkbox>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions align="right">
        <!-- Buttons to cancel or save the new post -->
        <v-btn v-if="!newPost.id" color="" rounded class="primary white--text px-5 mb-5" :loading="loading" text
               @click.prevent="submit">
          {{ $t('Publish') }}
        </v-btn>
        <v-btn v-if="newPost.id" color="" rounded class="primary white--text px-5 mb-5" :loading="loading" text
               @click.prevent="update">
          {{ $t('Update') }}
        </v-btn>
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
      adType: [
        {
          name: 'Top Ad',
          value: 'premium'
        },
        {
          name: 'Normal Ad',
          value: 'normal'
        },
      ],
      categories: [],
      disableAdTypeSelection: false,
      subCategories: [],
      divisions: [],
      districts: [],
      sub_districts: [],
      loading: false,
      dialogCreatePost: false,
      imageLoader: [],
      categoryLoader: false,
      subCategoryLoader: false,
      newPost: {
        title: null,
        productImage: [],
        price: null,
        location: null,
        color: null,
        condition: null,
        size: null,
        mobile: null,
        email: null,
        additional_mobile: null,
        sub_category_id: null,
        category_id: null,
        division_id: null,
        district_id: null,
        sub_district_id: null,
        features: null,
        name: null,
        product_type: 'normal',
        accept_terms: 0,
        show_contact_number: 0,
      },
      defaultNewPost: {
        title: null,
        productImage: [],
        price: null,
        location: null,
        color: null,
        condition: null,
        size: null,
        mobile: null,
        email: null,
        additional_mobile: null,
        sub_category_id: null,
        category_id: null,
        division_id: null,
        district_id: null,
        sub_district_id: null,
        features: null,
        name: null,
        product_type: null,
        accept_terms: 0,
        show_contact_number: 0,
      },
      logoPreviewURL: [],
      rules: {
        required: [
          v => !!v || 'Field is required',
        ],
        emailRules: [
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        // Other built-in rules can be added here, such as 'email', 'maxLength', etc.
      }
    }
  },
  created() {
    this.getCategories()
    this.getDivisions()
    if (this.$auth?.user?.data?.type === 'free') {
      this.newPost.product_type = 'normal'
      this.disableAdTypeSelection = true
    }


    this.getLocalStorageAdData()

  },
  beforeDestroy() {
    localStorage.removeItem('edit-ad');
  },
  methods: {
    onImageChange(event, index) {
      const file = event.target.files[0];
      if (!file) return; // Handle case when no file is selected
      // const reader = new FileReader();
      // reader.onload = () => {
      //   this.$set(this.logoPreviewURL, index, reader.result); // Update the preview URL
      //   // Force re-render of the component
      //   this.$forceUpdate();
      // };
      // reader.readAsDataURL(file);

      let formData = new FormData()
      formData.append('image', file)
      this.$set(this.imageLoader, index, true);
      this.$axios.post('upload-image', formData)
        .then((response) => {
          this.newPost.productImage[index] = response.data.data
          this.logoPreviewURL[index] = response.data.data
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message)
        })
        .finally(() => {
          this.$set(this.imageLoader, index, false);
        })
      // this.newPost.productImage[index] = file;
      // Store the file in the appropriate index
    },
    openFileInput(index) {
      this.$refs.fileInputs[index].click();
    },
    canUpload(index) {
      for (let i = 0; i < index; i++) {
        if (!this.newPost.productImage[i]) {
          return false; // Disable upload if any preceding slot is empty
        }
      }

      if (this.newPost.productImage[index]) {
        return true; // Disable upload if the current slot is empty
      }

      return true; // Enable upload if all preceding slots are filled
    },
    removeImage(index) {
      this.newPost.productImage.splice(index, 1);  // Remove the image file from the array
      this.logoPreviewURL.splice(index, 1);        // Remove the preview URL from the array

      // Force re-render of the component
      this.$forceUpdate();
    },
    setSub(categoryId) {
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
      if (this.$auth?.user?.data?.categories && this.$auth?.user?.data?.categories.length > 0) {
        this.categories = this.$auth?.user?.data?.categories
        this.categoryLoader = false
      } else {
        this.$axios.get('category-list')
          .then((response) => {
            this.categories = response.data.data
          })
          .catch((error) => {

          })
          .finally(() => {
            this.categoryLoader = false
          })
      }

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
      this.$axios.get(`get-sub-districts/${districtId}`)
        .then((response) => {
          this.sub_districts = response.data.data
        })
        .finally(() => {
        })
    },
    submit() {
      if (!this.$refs.form.validate()) {
        return
      }
      this.loading = true
      let formData = new FormData()

      // Helper function to append only non-null and non-empty values
      const appendIfNotNull = (key, value) => {
        if (value !== null && value !== undefined && value !== '') {
          formData.append(key, value)
        }
      }

      // Use the helper function to append form data
      appendIfNotNull('category_id', this.newPost.category_id)
      appendIfNotNull('sub_category_id', this.newPost.sub_category_id)
      appendIfNotNull('division_id', this.newPost.division_id)
      appendIfNotNull('district_id', this.newPost.district_id)
      appendIfNotNull('product_type', this.newPost.product_type)
      appendIfNotNull('sub_district_id', this.newPost.sub_district_id)
      appendIfNotNull('location', this.newPost.location)
      appendIfNotNull('price', this.newPost.price)
      appendIfNotNull('authenticity', this.newPost.authenticity)
      appendIfNotNull('edition', this.newPost.edition)
      appendIfNotNull('brand', this.newPost.brand)
      appendIfNotNull('condition', this.newPost.condition)
      appendIfNotNull('title', this.newPost.title)
      appendIfNotNull('size', this.newPost.size)
      appendIfNotNull('color', this.newPost.color)
      appendIfNotNull('contact_name', this.newPost.name)
      appendIfNotNull('features', this.newPost.features)
      appendIfNotNull('contact_email', this.newPost.email)
      appendIfNotNull('contact_number', this.newPost.mobile)
      appendIfNotNull('additional_contact_number', this.newPost.additional_mobile)
      appendIfNotNull('show_contact_number', this.newPost.show_contact_number)

      // Handle images (this assumes images should always be sent)
      for (let i = 0; i < this.newPost.productImage.length; i++) {
        formData.append(`image[${i}]`, this.newPost.productImage[i])
      }

      // Send the request
      this.$axios.post('products', formData)
        .then((response) => {
          this.$toast.success(response.data.message)
          this.newPost = Object.assign({}, this.defaultNewPost)
          this.logoPreviewURL = []
          localStorage.setItem('selectedComponent', 'MyAdsComponent')
          this.$refs.form.reset()
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message)
        })
        .finally(() => {
          this.loading = false
        })
    },
    update() {
      if (!this.$refs.form.validate()) {
        return
      }
      this.loading = true
      let formData = new FormData()
      formData.append('category_id', this.newPost.category_id)
      formData.append('sub_category_id', this.newPost.sub_category_id)
      formData.append('division_id', this.newPost.division_id)
      formData.append('district_id', this.newPost.district_id)
      formData.append('product_type', this.newPost.product_type)
      formData.append('sub_district_id', this.newPost.sub_district_id)
      formData.append('location', this.newPost.location)
      formData.append('price', this.newPost.price)
      formData.append('authenticity', this.newPost.authenticity)
      formData.append('edition', this.newPost.edition)
      formData.append('brand', this.newPost.brand)
      formData.append('condition', this.newPost.condition)
      formData.append('title', this.newPost.title)
      formData.append('size', this.newPost.size)
      formData.append('color', this.newPost.color)
      formData.append('contact_name', this.newPost.name)
      formData.append('features', this.newPost.features)
      formData.append('contact_email', this.newPost.email)
      formData.append('contact_number', this.newPost.mobile)
      formData.append('additional_contact_number', this.newPost.additional_mobile)
      formData.append('show_contact_number', this.newPost.show_contact_number)
      formData.append('_method', 'put')
      for (let i = 0; i < this.newPost.productImage.length; i++) {
        formData.append(`image[${i}]`, this.newPost.productImage[i])
      }
      this.$axios.post('products/' + this.newPost.id, formData)
        .then((response) => {
          this.$toast.success(response.data.message)
          this.newPost = Object.assign({}, this.defaultNewPost)
          localStorage.setItem('selectedComponent', 'MyAdsComponent')
          this.$refs.form.reset()
          this.logoPreviewURL = []
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message)
        })
        .finally(() => {
          this.loading = false
        })
    },

    getLocalStorageAdData() {
      if (process.client) {
        const itemJSON = localStorage.getItem('edit-ad');
        if (itemJSON) {
          const item = JSON.parse(itemJSON);
          this.newPost = Object.assign({}, item)
          this.newPost.additional_mobile = item.additional_contact_number
          this.newPost.name = item.contact_name
          this.newPost.email = item.contact_email
          this.newPost.mobile = item.contact_number
          this.newPost.productImage = []
          this.newPost.product_type = item.ad_type === "Normal Ad" ? "normal" : "premium"
          this.newPost.condition = item.condition === "New" ? "new" : 'used'
          this.setSub(this.newPost.category_id)
          this.setDistricts(this.newPost.division_id)
          this.setSubDistricts(this.newPost.district_id)
        }
      }

    }
  }
}
</script>

<style scoped>
.border {
  border: 1px dotted;
  border-radius: 10px;
}
</style>
