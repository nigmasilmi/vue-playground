<template>
  <div>
    <v-toolbar color="indigo darken-2" group>
      <v-col class="text-right">
        <v-btn text @click="listMode">Students List</v-btn>
        <v-btn text @click="editMode">New Student</v-btn>
      </v-col>
    </v-toolbar>
    <br />

    <v-flex>
      <Students v-if="showList" />
      <br />
      <NewStudent v-if="addNewOne" />
    </v-flex>
  </div>
</template>

<script>
import Students from './Students.vue';
import NewStudent from './NewStudent.vue';
export default {
  name: 'StudentManagerParent',
  components: {
    Students,
    NewStudent,
  },
  data() {
    return {
      showList: true,
      addNewOne: false,
    };
  },
  methods: {
    editMode() {
      this.showList = false;
      this.addNewOne = true;
    },
    listMode() {
      this.showList = true;
      this.addNewOne = false;
    },
  },
};
</script>
