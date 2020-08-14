<template>
  <div>
    <v-toolbar group>
      <v-col class="text-right">
        <v-btn v-if="!$store.state.token" to="/login" text color="light-green darken-2">Login</v-btn>
        <v-btn
          v-if="$store.state.token"
          @click="$store.commit('logout')"
          text
          color="light-green darken-2"
        >Logout</v-btn>
        <v-btn v-if="!$store.state.token" to="/register" text color="light-green darken-2">Register</v-btn>
      </v-col>
    </v-toolbar>
    <br />

    <v-flex>
      <NewMessage v-if="$store.state.token" />
      <br />
      <Messages />
    </v-flex>
  </div>
</template>

<script>
import Messages from "./Messages.vue";
import NewMessage from "./NewMessage.vue";
export default {
  name: "MessagesParent",
  components: {
    Messages,
    NewMessage,
  },
};
</script>
