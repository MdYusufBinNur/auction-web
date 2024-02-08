<template>
  <v-container class="pa-5 d-flex flex-row">
    <div class="pa-2 d-flex justify-center">
      <v-row class="">
        <v-col cols="12" class="text-center">
          <div :class="bp.smAndDown ? 'text-h6 py-2 font-weight-bold' : 'text-h5 py-2 font-weight-bold'">
            {{ $t('about_us') }}
          </div>
        </v-col>
        <v-col cols="12" class="" :class="bp.xs ? 'px-5' : ''">
          <v-card-text class="black--text">
            {{ context }}
          </v-card-text>

        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import aboutImage from 'static/public/about/about.jpeg'

export default {
  name: "About",

  data() {
    return {
      aboutImage,
      context: "About Auction, The Largest Marketplace in Bangladesh!\n" +
        "Auction is a platform on which you can buy and sell almost everything! We help people buy and sell vehicles, find properties, get jobs or recruit employees, buy and sell mobile phones, purchase electronic products, and much more. With more than 50 categories our solutions are built to be safe, smart, and convenient for our customers.\n" +
        "\n" +
        "Buy, Sell, Rent, or Find Jobs in Bangladesh\n" +
        "Every month, hundreds of millions of people use Auction to find and sell mobiles, musical instruments, cars, houses, jobs, and more through classified ads. To sell new items or sell used items quickly, Auction offers Ad Promotion features.\n" +
        "\n" +
        "Auction has an extensive collection of new and used goods, making it easier for users to quickly buy new items or buy used items at their desired location. To buy online, users easily can reach their desired products through filtering options.\n" +
        "\n" +
        "For businesses, Auction has introduced the ‘Membership’ service, which helps them expand their businesses online. Members will have their virtual shop with a Auction URL with free promotions of their goods. With different membership categories, businesses can flourish as verified members and authorized dealers.\n" +
        "\n" +
        "With millions of unique monthly visitors, thousands of interested buyers, and thousands of active dealers on our platform, Auction is the Largest Marketplace in Bangladesh.\n" +
        "\n" +
        "Benefits of Trading at Auction\n" +
        "At Auction, we make it so easy to connect people to buy, sell or rent goods and services as other classified sites.\n" +
        "\n" +
        "Fast & Easy Experience: Navigated buying and selling experience in Bangladesh which is simpler, faster, and easier. Shop and sell on the go and get your desired products in just a few clicks.\n" +
        "Post Ads Free: As a free classified website, we offer free ad posting features in many categories for the convenience of the users based on their locations.\n" +
        "Safe & Secure Shopping: We have listed our verified members and authorized dealers to create a safe shopping experience for our users."
    }
  }
}
</script>

<style scoped>

</style>
