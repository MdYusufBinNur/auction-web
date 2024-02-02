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
              <span class="white--text px-5"> {{ editedItem.first_name }}</span>
              <v-spacer>
              </v-spacer>
              <v-btn rounded outlined color="primary" class="white--text  text-capitalize" @click="openDialog">
                Update Info
              </v-btn>
            </v-app-bar>
          </v-card-actions>
          <v-list class="">
            <v-list-item :three-line="bp.smAndDown">
              <v-list-item-subtitle>
                Name
              </v-list-item-subtitle>
              <v-list-item-subtitle class="font-weight-bold" v-show="editedItem.first_name">
                {{ editedItem.first_name + ' ' + editedItem.last_name }}
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
                {{ editedItem.mobile }}
              </v-list-item-subtitle>
            </v-list-item>
            <v-divider/>
            <v-divider/>
            <v-list-item :three-line="bp.smAndDown">
              <v-list-item-subtitle>
                Gender
              </v-list-item-subtitle>
              <v-list-item-subtitle class="font-weight-bold">
                {{ editedItem.gender }}
              </v-list-item-subtitle>
            </v-list-item>
            <v-divider/>
            <v-list-item :three-line="bp.smAndDown">
              <v-list-item-subtitle>
                Location
              </v-list-item-subtitle>
              <v-list-item-subtitle class="font-weight-bold">
                {{ editedItem.address }}
              </v-list-item-subtitle>
            </v-list-item>
            <v-divider/>
            <v-list-item :three-line="bp.smAndDown">
              <v-list-item-subtitle>
                Address
              </v-list-item-subtitle>
              <v-list-item-subtitle class="font-weight-bold" v-show="editedItem.sub_dist">
                {{ editedItem.sub_dist + ", " + editedItem.dist }}
              </v-list-item-subtitle>
            </v-list-item>
            <v-divider/>
            <v-list-item :three-line="bp.smAndDown"
                         v-show="editedItem.qualification">
              <v-list-item-subtitle>
                Qualification
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <v-timeline
                  dense
                  class="px-0"
                  :style="bp.mdAndUp ? 'margin-left: -35px' : ''"
                >
                  <v-timeline-item
                    v-for="(item, i) in editedItem.qualification"
                    :key="i"
                    small

                  >
                    <template v-slot:icon>
                      <v-icon x-small color="white">
                        mdi-check
                      </v-icon>
                    </template>
                    <div>
                      <div class="font-weight-normal">
                        <strong>{{ item }}</strong>
                      </div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-list-item-subtitle>
              <v-spacer/>
            </v-list-item>
            <div >
              <v-list-item :three-line="bp.smAndDown">
                <v-list-item-subtitle>
                  Blood Group
                </v-list-item-subtitle>
                <v-list-item-subtitle class="font-weight-bold">
                  {{ editedItem.patient ? editedItem.patient.blood_group : '-' }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-divider/>
              <v-list-item :three-line="bp.smAndDown">
                <v-list-item-subtitle>
                  Age
                </v-list-item-subtitle>
                <v-list-item-subtitle class="font-weight-bold">
                  {{ editedItem.patient ? editedItem.patient.age : '-' }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-divider/>
              <v-list-item :three-line="bp.smAndDown">
                <v-list-item-subtitle>
                  Date of Birth
                </v-list-item-subtitle>
                <v-list-item-subtitle class="font-weight-bold">
                  {{ editedItem.patient ? editedItem.patient.dob : '-' }}
                </v-list-item-subtitle>
              </v-list-item>
            </div>


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
          <v-col cols="12" md="6" class="pa-2">
            <label class="">{{ 'First Name' }}</label>
            <v-text-field
              outlined
              v-model="editedItem.first_name"
              dense
              hide-details="auto"
            />
          </v-col>
          <v-col cols="12" md="6" class="pa-2">
            <label class="">{{ 'Last Name' }}</label>
            <v-text-field
              outlined
              v-model="editedItem.last_name"
              dense
              hide-details="auto"
            />
          </v-col>

          <v-col cols="12" md="6" class="pa-2">
            <label class="">{{ 'Mobile' }}</label>
            <v-text-field
              outlined
              v-model="editedItem.mobile"
              dense
              type="numeric"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="12" md="6" class="pa-2">
            <label class="">{{ 'Select Gender' }}</label>
            <v-select
              :items="['male', 'female']"
              hide-details="auto"
              item-text="name"
              ref="sub_district"
              dense
              item-value="name"
              return-id
              outlined
              v-model="editedItem.gender"
            />
          </v-col>
          <v-col cols="12" md="6" class="pa-2">
            <label class="">Blood Group</label>
            <v-autocomplete
              hide-selected
              ref="blood"
              hide-details="auto"
              outlined
              v-model="editedItem.patient.blood_group"
              :items="blood"
              item-value="name"
              item-text="name"
              dense
            />
          </v-col>
          <v-col cols="12" md="6" class="pa-2">
            <label class="">Date Of Birth</label>
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="editedItem.patient.dob"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="editedItem.patient.dob"
                  outlined
                  readonly
                  v-bind="attrs"
                  dense
                  hide-details
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="editedItem.patient.dob"
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
                  @click="$refs.dialog.save(editedItem.patient.dob)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="12" md="12" class="pa-2">
            <label class="">{{ 'Street Address' }}</label>

            <v-textarea
              hide-details="auto"
              v-model="editedItem.address"
              outlined
              rows="4"
              dense
            />
          </v-col>

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
        first_name: null,
        last_name: null,
        mobile: null,
        email: null,
        gender: null,
        image: null,
        district_id: null,
        sub_district_id: null,
        address: null,
        doctor_category_id: null,
        designation: null,
        short_description: null,
        educations: null,
        password: null,
        bmdc_number: null,
        fee: null,
        qualification: null,
        dist: null,
        category: null,
        sub_dist: null,
        online_fee: null,
        chamber_fee: null,
        patient: {
          dob: null,
          blood_group: null
        }
      },
      blood: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
      defaultItem: {
        first_name: null,
        last_name: null,
        mobile: null,
        email: null,
        gender: null,
        image: null,
        district_id: null,
        sub_district_id: null,
        address: null,
        doctor_category_id: null,
        designation: null,
        short_description: null,
        password: null,
        educations: null,
        bmdc_number: null,
        fee: null,
        qualification: null,
        dist: null,
        sub_dist: null,
        category: null,
        online_fee: null,
        chamber_fee: null,
        patient: {
          dob: null,
          blood_group: null
        }
      },
    }
  },

  created() {
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
    addNew() {
      this.editedItem.educations.push(this.eduInfo)
      this.snackbar = true
    },
    removeInfo(indexNo) {

    },
    initUser() {
      this.$store.dispatch('profile/initProfile')
    },
    changePassword() {

    },
    updateProfileInfo() {
      this.$toast.success('Information updated')
      this.dialog = false
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
      this.editedItem.image = payload.target.files[0];
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
