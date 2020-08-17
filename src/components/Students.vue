<template>
  <v-flex sm8 offset-sm2>
    <div class="text-center">
      <v-progress-circular
        v-if="!$store.getters.isLoaded"
        :width="3"
        color="indigo darken-1"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-card v-if="$store.getters.isLoaded">
      <v-toolbar dark color="indigo darken-1">
        <v-toolbar-title>Students</v-toolbar-title>
      </v-toolbar>
      <v-list-item
        v-for="(student, index) in $store.getters.students"
        :key="student.id"
        :to="'editStudent/' + index"
      >
        <v-list-item-title v-text="student.fullName"></v-list-item-title>
      </v-list-item>
    </v-card>
  </v-flex>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Students",
  data() {
    return {};
  },
  computed: mapState({
    // hace posible la reactividad al agregar un nuevo estudiante
    students: (state) => state.students,
  }),
  created() {
    // llena con los estudiantes iniciales al crearse el componente
    this.$store.dispatch("getStudents");
  },
};
</script>
