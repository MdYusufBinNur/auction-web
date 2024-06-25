<template>
  <div>
    <v-btn class="messenger-btn pa-8" color="blue" @click="gotoMessenger">
      <v-icon>mdi-facebook-messenger</v-icon>
    </v-btn>
    <v-btn class="whatsapp-btn pa-8" color="green" @click="gotoWhatsApp">
      <v-icon x-large color="white" class="">mdi-whatsapp</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="headline">WhatsApp Not Installed</v-card-title>
        <v-card-text>
          <div>Please install WhatsApp to continue.</div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>
export default {
  name: 'WhatsAppButton',
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    gotoWhatsApp() {
      // Redirect to WhatsApp if it's installed, otherwise show a message
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // WhatsApp URL
        const encodedUrl = encodeURI('https://adbarta.com/products/computers-laptops-product-1')
        const message = `Check out this product: ${encodedUrl}`;
        const encodedMessage = encodeURIComponent(message);
        window.location.href = `https://wa.me/+8801842127163?text=${encodedMessage}`;
      } else {
        // Show a message if WhatsApp is not installed
        this.dialog = true
      }
    },
    gotoMessenger() {
      // Open Messenger (replace the link with the actual Messenger URL)
      window.open('https://m.me/100297635444232', '_blank');
    },
    closeDialog() {
      this.dialog = false;
    }
  }
}
</script>

<style scoped>
.messenger-btn {
  position: fixed;
  bottom: 90px;
  right: 20px;
  z-index: 10000; /* Higher z-index to appear on top of WhatsApp button */
  /* Your Messenger button styles */
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #2585d3; /* WhatsApp green color */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.whatsapp-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #25d366; /* WhatsApp green color */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.whatsapp-btn:hover {
  background-color: #128c7e; /* Darker green color on hover */
}

.whatsapp-btn v-icon {
  font-size: 24px;
}
</style>
