<template>
  <div>
    <v-card>
      <v-card-title class="headline">{{ $t('create_new_ad') }}</v-card-title>
      <v-card-text>
        <!-- Form fields for creating new post -->
        <v-form ref="form">
          <v-row>
            <v-col cols="12">
              <v-select :items="['new', 'used']" v-model="newPost.condition" label="Condition" outlined hide-details="auto"></v-select>
            </v-col>
            <v-col cols="3 pa-3">
              <div class="custom_block" style="padding: 10px">
                <v-row v-if="logoPreviewURL" class="text-center">
                  <v-col cols="12" class="d-flex justify-center">
                    <v-img :src="logoPreviewURL" max-width="120" height="auto"/>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      color="primary"
                      rounded
                      x-small
                      outlined
                      class="text-capitalize py-2"
                      @click.prevent="$refs.file.click()">
                      <UploadSVG/>
                      <span class="px-2">
                            Change Image
                          </span>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-btn
                  v-else
                  color="primary"
                  rounded
                  outlined
                  x-small
                  class="text-capitalize"
                  @click.prevent="$refs.file.click()">
                  <UploadSVG/>
                  <span class="px-2">
                            upload Image
                          </span>
                </v-btn>
                <input ref="file" type="file" style="display: none" @change="onImageChange">
              </div>

            </v-col>
            <v-col cols="3 pa-3">
              <div class="custom_block" style="padding: 10px">
                <v-row v-if="logoPreviewURL" class="text-center">
                  <v-col cols="12" class="d-flex justify-center">
                    <v-img :src="logoPreviewURL" max-width="120" height="auto"/>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      color="primary"
                      rounded
                      x-small
                      outlined
                      class="text-capitalize py-2"
                      @click.prevent="$refs.file.click()">
                      <UploadSVG/>
                      <span class="px-2">
                            Change Image
                          </span>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-btn
                  v-else
                  color="primary"
                  rounded
                  outlined
                  x-small
                  class="text-capitalize"
                  @click.prevent="$refs.file.click()">
                  <UploadSVG/>
                  <span class="px-2">
                            upload Image
                          </span>
                </v-btn>
                <input ref="file" type="file" style="display: none" @change="onImageChange">
              </div>
            </v-col>
            <v-col cols="3 pa-3">
              <div class="custom_block" style="padding: 10px">
                <v-row v-if="logoPreviewURL" class="text-center">
                  <v-col cols="12" class="d-flex justify-center">
                    <v-img :src="logoPreviewURL" max-width="120" height="auto"/>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      color="primary"
                      rounded
                      x-small
                      outlined
                      class="text-capitalize py-2"
                      @click.prevent="$refs.file.click()">
                      <UploadSVG/>
                      <span class="px-2">
                            Change Image
                          </span>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-btn
                  v-else
                  color="primary"
                  rounded
                  outlined
                  x-small
                  class="text-capitalize"
                  @click.prevent="$refs.file.click()">
                  <UploadSVG/>
                  <span class="px-2">
                            upload Image
                          </span>
                </v-btn>
                <input ref="file" type="file" style="display: none" @change="onImageChange">
              </div>
            </v-col>
            <v-col cols="3 pa-3">
              <div class="custom_block" style="padding: 10px">
                <v-row v-if="logoPreviewURL" class="text-center">
                  <v-col cols="12" class="d-flex justify-center">
                    <v-img :src="logoPreviewURL" max-width="120" height="auto"/>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      color="primary"
                      rounded
                      x-small
                      outlined
                      class="text-capitalize py-2"
                      @click.prevent="$refs.file.click()">
                      <UploadSVG/>
                      <span class="px-2">
                            Change Image
                          </span>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-btn
                  v-else
                  color="primary"
                  rounded
                  outlined
                  x-small
                  class="text-capitalize"
                  @click.prevent="$refs.file.click()">
                  <UploadSVG/>
                  <span class="px-2">
                            upload Image
                          </span>
                </v-btn>
                <input ref="file" type="file" style="display: none" @change="onImageChange">
              </div>
            </v-col>
            <v-col cols="12">
              <div class="text-caption text-center">
                Upload in .jpg or .png format. Image maximum size is 2MB. First image will be the thumbnail image
              </div>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="newPost.name" label="Product Name" outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select v-model="newPost.category" :items="categories" item-text="name" item-value="name"
                        label="Category" outlined hide-details="auto"></v-select>
            </v-col>
            <v-col cols="12">
              <v-textarea rows="3" v-model="newPost.details" label="Write Product details" hide-details="auto" outlined />
            </v-col>

            <v-col cols="6">
              <v-text-field v-model="newPost.price" label="Price" outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="newPost.location" label="Location" outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="newPost.color" label="Color" outlined hide-details="auto"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="newPost.size" label="Size" outlined hide-details="auto"></v-text-field>
            </v-col>

          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <!-- Buttons to cancel or save the new post -->
        <v-btn color="blue darken-1" text>{{ $t('cancel') }}</v-btn>
        <v-btn color="blue darken-1" text>{{ $t('save') }}</v-btn>
      </v-card-actions>
    </v-card>

  </div>
</template>

<script>
import UploadSVG from "~/components/SVG/UploadSVG.vue";

export default {
  name: "CreateAd",
  components: {UploadSVG},
  data() {
    return {
      categories: [
        {name: 'Mobiles',}, {name: 'Electronics',},
        {name: 'Vehicles',}, {name: 'Property',}, {name: 'Living',}, {name: 'Pets',}, {name: "Men's Fashion",}, {name: "Women's Fashion",}, {name: 'Sports & Kids',}, {name: 'Business',}, {name: 'Essentials',}, {name: 'Education',}, {name: 'Agriculture',}, {name: 'Jobs',}, {name: 'Services',},
        {name: 'Overseas',},],
      dialogCreatePost: false,
      newPost: {
        name: '',
        image: '',
        price: '',
        location: '',
        color: '',
        condition: '',
        size: ''
      },
      logoPreviewURL: null,
    }
  },
  methods: {
    onImageChange(payload) {
      const file = payload.target.files[0];
      this.newPost.image = file;
      this.logoPreviewURL = URL.createObjectURL(file);
    },
  }
}
</script>

<style scoped>

</style>
