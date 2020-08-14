<template>
  <v-flex sm8 offset-sm2>
    <v-card color="light-green lighten-3">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <!-- temporary -->
              <v-col v-if="loggedInUser">{{ loggedInUser }}</v-col>
              <v-toolbar color="light-green darken-1">
                <v-toolbar-title>Register and post your messages</v-toolbar-title>
              </v-toolbar>
              <v-text-field v-model="userName" label="username" required></v-text-field>
              <v-text-field v-model="pass" label="password" required></v-text-field>
            </v-col>
          </v-row>
          <v-btn class="mr-4" @click="register">Register</v-btn>
        </v-container>
        <v-spacer></v-spacer>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      userName: "",
      pass: "",
      loggedInUser: null,
    };
  },
  created() {},
  methods: {
    register() {
      this.$store.dispatch("register", {
        username: this.userName,
        password: this.pass,
      });
      this.userName = "";
      this.pass = "";
    },
  },
};
</script>
