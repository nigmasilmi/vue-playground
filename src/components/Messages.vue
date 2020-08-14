<template>
  <div>
    <v-flex sm8 offset-sm2>
      <v-card color="light-green lighten-3">
        <v-toolbar color="light-green darken-2">
          <v-toolbar-title>Message list</v-toolbar-title>
        </v-toolbar>
        <v-list color="light-green lighten-3">
          <v-list-item
            v-for="(message, index) in $store.state.messages"
            :key="index"
            :to="'messages/' + index"
          >
            <v-list-item-content>
              <v-list-item-title v-text="message.text"></v-list-item-title>
              <v-list-item-subtitle v-text="message.user"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: "Messages",

  created() {
    this.$store.dispatch("getMessages");
  },
};
</script>
