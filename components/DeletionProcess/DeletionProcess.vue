<template>
  <v-container>
    <v-card flat outlined>
      <div class="account-deletion pa-5">
        <h2>Account Deletion Process</h2>
        <p>
          At <strong>adbarta</strong>, we respect your privacy and provide you with the option to delete your account. If you wish to delete your account, please follow the steps below:
        </p>

        <h3>Steps to Request Account Deletion</h3>
        <ol>
          <li>
            <strong>Compose an Email</strong>
            <p>Open your email client and compose a new email.</p>
          </li>

          <li>
            <strong>Recipient Email Address</strong>
            <p>Address the email to <a href='#' style="color: #2585d3">hostmaster@adbarta.com</a></p>
          </li>

          <li>
            <strong>Subject Line</strong>
            <p>Use the subject line: <em>"Account Deletion Request"</em>.</p>
          </li>

          <li>
            <strong>Email Content</strong>
            <p>
              In the body of the email, please include the following information:
            </p>
            <ul>
              <li>Your full name</li>
              <li>Your registered email address</li>
              <li>A brief statement requesting the deletion of your account</li>
              <li>Any additional information that may help us verify your identity</li>
            </ul>
          </li>
        </ol>

        <p>
          Once we receive your request, we will process your account deletion in accordance with our privacy policy.
        </p>

        <!-- Optional: Button to prefill the email client -->
<!--        <button @click="sendDeletionEmail">Request Account Deletion</button>-->
      </div>

    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "DeletionProcess",

  methods: {
    sendDeletionEmail() {
      const subject = encodeURIComponent("Account Deletion Request");
      const body = encodeURIComponent(
        "Dear adbarta Support Team,\n\nI would like to request the deletion of my account. Please find my details below:\n\nFull Name: \nRegistered Email Address: \n\nThank you."
      );
      window.location.href = `mailto:hostmaster@adbarta.com?subject=${subject}&body=${body}`;
    }
  }
};
</script>
<style scoped>
.account-deletion {
  max-width: 600px;
  margin: 0 auto;
}

button {
  background-color: #ff6347;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ff4500;
}
</style>
