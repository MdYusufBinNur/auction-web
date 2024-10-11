<template>
  <div>
    <CardHeader :button="false" :title="$t('profile')" />
    <v-row>
      <v-col cols="12" sm="12" md="8">
        <v-card flat rounded>
          <v-card-actions class="pa-0">
            <v-app-bar class="secondary " style="border-top-left-radius: 10px; border-top-right-radius: 10px;  " flat>
              <v-avatar size="50">
                <v-img :src="logoPreviewURL ? logoPreviewURL : image" class="rounded-circle" :alt="image">
                </v-img>
              </v-avatar>
              <span class="white--text px-5"> {{ editedItem.name }}</span>
              <v-spacer>
              </v-spacer>
              <v-btn rounded outlined color="black" class="text-capitalize" @click="openDialog">
                Update Info
              </v-btn>
            </v-app-bar>
          </v-card-actions>
          <v-list class="">
            <v-list-item :three-line="bp.smAndDown">
              <v-list-item-subtitle>
                Name
              </v-list-item-subtitle>
              <v-list-item-subtitle class="font-weight-bold" v-show="editedItem.name">
                {{ editedItem.name}}
              </v-list-item-subtitle>
            </v-list-item>
            <v-divider/>
            <v-list-item :three-line="bp.smAndDown">
              <v-list-item-subtitle>
                Email
              </v-list-item-subtitle>
              <v-list-item-subtitle class="font-weight-bold">
                {{ editedItem.email }}
              </v-list-item-subtitle>
            </v-list-item>
            <v-divider/>
            <v-list-item :three-line="bp.smAndDown">
              <v-list-item-subtitle>
                Mobile
              </v-list-item-subtitle>
              <v-list-item-subtitle class="font-weight-bold">
                {{ editedItem.phone }}
              </v-list-item-subtitle>
            </v-list-item>
            <v-divider/>

            <v-list-item :three-line="bp.smAndDown">
              <v-list-item-subtitle>
                Date of birth
              </v-list-item-subtitle>
              <v-list-item-subtitle class="font-weight-bold">
                {{ editedItem.dob }}
              </v-list-item-subtitle>
            </v-list-item>
            <v-divider/>
            <v-list-item :three-line="bp.smAndDown">
              <v-list-item-subtitle>
                Address
              </v-list-item-subtitle>
              <v-list-item-subtitle class="font-weight-bold" v-show="editedItem.sub_district">
                {{ editedItem.street + ', ' +editedItem.sub_district + ", " + editedItem.district }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="750">
      <v-card flat rounded class="pa-4">
        <v-card-title>
          Update Profile
        </v-card-title>
        <hr>
        <v-row class="mt-2" no-gutters>
          <v-col cols="12" sm="6" md="2" align="center">
            <v-avatar size="120">
              <v-img :src="logoPreviewURL ? logoPreviewURL : image" class="rounded-circle" :alt="image">
              </v-img>
            </v-avatar>
            <input type="file" ref="file_new" style="display: none" @change="onImageInput">
          </v-col>
          <v-col cols="12" md="4" sm="6" :align="bp.mdAndUp ? 'left' : 'center'">
            <v-container bg fill-height grid-list-md text-xs-center>
              <v-layout row wrap align-center>
                <v-flex>
                  <v-btn class="active2 text-capitalize" small rounded @click="$refs.file_new.click()" dark v-model="im">
                    <v-icon small class="pr-2 px-2">
                      mdi-upload
                    </v-icon>
                    Upload
                  </v-btn>
                  <div>
                    <v-btn color="red" small rounded outlined class="mt-2 text-capitalize white--text" @click="clearPreview">
                      <v-icon small class="pr-2">
                        mdi-delete-outline
                      </v-icon>
                      Remove
                    </v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-col>
        </v-row>
        <v-row class="pa-5">
          <v-col cols="12" md="12" class="pa-2">
            <label class="">{{ 'Name' }}</label>
            <v-text-field
              outlined
              v-model="editedItem.name"
              dense
              hide-details="auto"
            />
          </v-col>
          <v-col cols="12" md="6" class="pa-2">
            <label class="">{{ 'Email' }}</label>
            <v-text-field
              outlined
              v-model="editedItem.email"
              dense
              hide-details="auto"
            />
          </v-col>

          <v-col cols="12" md="6" class="pa-2">
            <label class="">{{ 'Phone' }}</label>
            <v-text-field
              outlined
              v-model="editedItem.phone"
              dense
              type="numeric"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="12" md="12" class="pa-2">
            <label class="">Date Of Birth</label>
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="editedItem.dob"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="editedItem.dob"
                  outlined
                  readonly
                  v-bind="attrs"
                  dense
                  hide-details
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="editedItem.dob"
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="modal = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dialog.save(editedItem.dob)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="6">
            <label class="">{{ 'Select District' }}</label>

            <v-select v-model="editedItem.district_id" dense :rules="rules.required"  :items="districts" item-text="name" item-value="id"
                       outlined hide-details="auto"  @change="setSubDistricts(editedItem.district_id)"></v-select>
          </v-col>
          <v-col cols="6">
            <label class="">{{ 'Select Sub District' }}</label>

            <v-select v-model="editedItem.sub_district_id" :rules="rules.required" :items="sub_districts" item-text="name" item-value="id"
                       dense outlined hide-details="auto"></v-select>
          </v-col>
          <v-col cols="12" md="12" class="pa-2">

            <label class="">{{ 'Street Address' }}</label>

            <v-textarea
              hide-details="auto"
              v-model="editedItem.street"
              outlined
              rows="2"
              dense
            />
          </v-col>
<!--          <v-col cols="12" md="6" class="pa-2">-->

<!--            <label class="">{{ 'NID' }}</label>-->

<!--            <v-file-input-->
<!--              hide-details="auto"-->
<!--              v-model="editedItem.nid_one"-->
<!--              outlined-->
<!--              hint="Front part of your NID"-->
<!--              dense-->
<!--              prepend-icon=""-->
<!--              persistent-hint-->
<!--              append-icon="mdi-file"-->
<!--            />-->
<!--          </v-col>-->
<!--          <v-col cols="12" md="6" class="pa-2">-->

<!--            <label class="">{{ 'NID' }}</label>-->

<!--            <v-file-input-->
<!--              hide-details="auto"-->
<!--              v-model="editedItem.nid_two"-->
<!--              outlined-->
<!--              persistent-hint-->
<!--              hint="Back part of your NID"-->
<!--              dense-->
<!--              prepend-icon=""-->
<!--              append-icon="mdi-file"-->
<!--            />-->
<!--          </v-col>-->

        </v-row>
        <v-row no-gutters>
          <v-col cols="12" md="12" align="right" class="mt-2">
            <v-btn class="primary white--text px-8" small rounded depressed :loading="loadingSaveData"
                   @click="updateProfileInfo">
              save
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import image from '/static/profile.png'
import CardHeader from "@/components/Common/CardHeader";
export default {
  name: "Profile",
  components: {CardHeader},
  data() {
    return {
      im: '',
      url: null,
      dialog: false,
      imageCrop: false,
      modal: false,
      image,
      pasLoading: false,
      snackbar: false,
      logoPreviewURL: false,
      loadingSaveData: false,
      btnLoading: false,
      subDistVal: false,
      subDistLoading: false,
      showPassword: false,
      sub_districts: [],
      districts: [],
      divisions: [],
      setItem: [],
      eduInfo: {
        degree: null,
        duration: null,
        id: 0,
        institute_location: null,
        institute_name: null,
        passing_year: null
      },
      editedItem: {
        name: null,
        email: null,
        uid: null,
        photo: null,
        phone: null,
        website: null,
        company: null,
        about: null,
        role: null,
        email_verified_at: null,
        district: null,
        sub_district: null,
        last_activity: null,
        district_id: null,
        sub_district_id: null,
        active: null,
        status: null,
        nid_one: null,
        nid_two: null,
        dob: null,
        street: null
      },
      blood: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
      defaultItem: {
        name: null,
        email: null,
        uid: null,
        photo: null,
        phone: null,
        website: null,
        company: null,
        about: null,
        role: null,
        email_verified_at: null,
        district: null,
        sub_district: null,
        district_id: null,
        sub_district_id: null,
        last_activity: null,
        active: null,
        status: null,
        nid_one: null,
        nid_two: null
      },
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
    if (this.$auth?.user?.data){
      this.editedItem = Object.assign({}, this.$auth?.user?.data)
      this.image = this.editedItem.photo
    }
    this.setDistricts()
  },

  methods: {
    openDialog() {
      this.dialog = true
      this.$nextTick(() => {
        if (this.editedItem.image !== null || this.editedItem.image !== 'null') {
          this.logoPreviewURL = this.editedItem.image
        }
        this.setSelectedIDs()
      })
    },
    setSelectedIDs() {

    },
    setDistricts() {
      this.$axios.get(`get-district`)
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
    removeInfo(indexNo) {

    },
    initUser() {
      this.$store.dispatch('profile/initProfile')
    },
    changePassword() {

    },
    updateProfileInfo() {
      this.loadingSaveData = true

      let formData = new FormData()
      formData.append('full_name', this.editedItem.name)
      formData.append('phone', this.editedItem.phone)
      formData.append('sub_district_id', this.editedItem.sub_district_id)
      formData.append('district_id', this.editedItem.district_id)
      formData.append('street', this.editedItem.street)
      formData.append('dob', this.editedItem.dob)

      if (this.editedItem.photo && this.editedItem.photo instanceof Blob) {
        formData.append('image', this.editedItem.photo)
      }
      // if (this.editedItem.nid_one && this.editedItem.nid_one instanceof Blob) {
      //   formData.append('nid_one', this.editedItem.nid_one);
      // }
      // if (this.editedItem.nid_two && this.editedItem.nid_two instanceof Blob) {
      //   formData.append('nid_two', this.editedItem.nid_two);
      // }

      this.$axios.post(`profile-update`, formData)
        .then((res) => {
          this.$toast.success(res.data.message)
          this.editedItem = Object.assign({}, res.data.data)
          this.dialog = false
        })
        .catch((err) => {
          this.$toast.error(err.response.data.message)

        })
        .finally(() => {
          this.loadingSaveData = false
        })
    },
    removeFile() {
      this.profileImagePreviewURL = null
      this.authUserProfile = null
    },
    getSelectedDoctorCategory(item) {
      this.editedItem.doctor_category_id = item
    },
    getSelectedDistrict(item) {
      this.editedItem.district_id = item
    },
    getSubs(item) {
      this.sub_districts = item
    },
    setSubDistId(item) {
      this.editedItem.sub_district_id = parseInt(item);
    },
    onImageInput(payload) {
      // Console the payload
      this.editedItem.photo = payload.target.files[0];
      this.logoPreviewURL = URL.createObjectURL(payload.target.files[0]);
      // this.imageCrop = true
      URL.revokeObjectURL(payload.target.files[0]);
    },
    clearPreview() {
      this.editedItem.image = null
      this.logoPreviewURL = null
    },
    change({coordinates, canvas}) {
      // console.log(coordinates);
      // console.log(canvas);
    },
    savePhoto() {
      // this.imageCrop = false
    }
  }
}
</script>

<style scoped>
.cropper {
  height: 600px;
  background: #DDD;
}
</style>
