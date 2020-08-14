<template>
  <v-flex sm8 offset-sm2>
    <v-card color="light-green lighten-3">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-toolbar color="light-green darken-1">
                <v-toolbar-title>Write a new message</v-toolbar-title>
                <v-toolbar-title v-if="mustRegister">Please, register before submitting a message</v-toolbar-title>
              </v-toolbar>
              <v-text-field v-model="msgBody" label="Message" required></v-text-field>
            </v-col>
          </v-row>
          <v-btn class="mr-4" @click="submitMsg">submit</v-btn>
        </v-container>
        <v-spacer></v-spacer>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "NewMessage",
  data() {
    return {
      msgBody: "",
      mustRegister: false,
    };
  },
  methods: {
    submitMsg() {
      if (this.$store.state.token != "") {
        this.$store.dispatch("postNewMessage", {
          text: this.msgBody,
        });
        this.msgBody = "";
      } else {
        this.mustRegister = true;
        this.msgBody = "";
      }
    },
  },
};
</script>
