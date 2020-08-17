<template>
  <div>
    <v-flex sm8 offset-sm2>
      <v-card>
        <v-toolbar dark color="indigo darken-2">
          <v-toolbar-title>Edit Student</v-toolbar-title>
        </v-toolbar>
        <div class="text-center" v-if="!isLoaded">
          <v-progress-circular :width="3" color="indigo darken-1" indeterminate></v-progress-circular>
        </div>
        <v-form>
          <v-container>
            <v-layout>
              <v-flex xs12 md4>
                <!-- If it is loaded with map getters -->
                <!-- <v-text-field v-model="findTheStudent(this.$route.params.id).name" label="Name" required></v-text-field> -->
                <v-text-field v-model="student.name" label="Name" required></v-text-field>
                <v-text-field v-model="student.lastname" label="Lastname" required></v-text-field>
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
// import axios from "axios";
import Students from "./Students";
import { mapGetters } from "vuex";

export default {
  name: "EditStudent",
  data() {
    return {};
  },
  created() {},
  computed: {
    student() {
      return this.$store.getters.findTheStudent(this.$route.params.id);
    },
    // ...mapGetters(["isLoaded", "findTheStudent"]),
    ...mapGetters(["isLoaded"]),
  },
  methods: {
    // submit() {
    //   axios
    //     .put(`http://localhost:3000/students/${this.$route.params.id}`, {
    //       name: this.student.name,
    //       lastname: this.student.lastname,
    //       id: this.$route.params.id,
    //     })
    //     .then((res) => {
    //       console.log(res);
    //       this.$store.dispatch("getStudents");
    //     });
    // },
    submit() {
      let updateData = {
        name: this.student.name,
        lastname: this.student.lastname,
        id: this.$route.params.id,
      };
      this.$store.dispatch("updateStudent", updateData);
    },
  },
  components: {
    Students,
  },
};
</script>
