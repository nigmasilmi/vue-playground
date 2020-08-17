<template>
  <div>
    <v-flex sm8 offset-sm2>
      <v-card>
        <v-toolbar dark color="indigo darken-1">
          <v-toolbar-title>New Student</v-toolbar-title>
        </v-toolbar>
        <v-form>
          <v-container>
            <v-layout>
              <v-flex xs12 md4>
                <v-text-field v-model="name" label="Name" required></v-text-field>
                <v-text-field v-model="lastname" label="Lastname" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-btn @click="submit">submit</v-btn>
        </v-form>
      </v-card>
    </v-flex>
    <br />
    <Students />
  </div>
</template>

<script>
import axios from "axios";
import Students from "./Students";
import { mapMutations } from "vuex";

export default {
  name: "NewStudent",
  data() {
    return {
      name: "",
      lastname: "",
    };
  },
  methods: {
    submit() {
      axios
        .post("http://localhost:3000/students", {
          name: this.name,
          lastname: this.lastname,
        })
        // .then((res) => this.$store.commit("addNewStudent", res.data)); // without mapMutations
        .then((res) => this.addNewStudent(res.data));
      this.name = "";
      this.lastname = "";
    },
    ...mapMutations(["addNewStudent"]),
  },
  components: {
    Students,
  },
};
</script>
