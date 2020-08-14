<template>
  <div>
    <v-flex sm8 offset-sm2>
      <v-toolbar color="light-green darken-1">
        <v-toolbar-title>Reading a message</v-toolbar-title>
      </v-toolbar>
      <v-card color="light-green lighten-3">
        <v-card-text v-text="this.$store.state.message"> </v-card-text>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      msgBody: this.$store.state.message,
    };
  },

  created() {
    this.$store.dispatch('getSingleMessage', this.$route.params.id);
  },
};
</script>
