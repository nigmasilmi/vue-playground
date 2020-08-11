<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container>
        <NewMessage />
        <v-spacer></v-spacer>
        <br />
        <Messages />
      </v-container>
      <!-- <Asteroids/> -->
    </v-main>
  </v-app>
</template>

<script>
// import Asteroids from './components/Asteroids.vue';
import Messages from './components/Messages.vue';
import NewMessage from './components/NewMessage.vue';

export default {
  name: 'App',

  components: {
    Messages,
    NewMessage,
    // Asteroids,
  },

  data: () => ({
    //
  }),
};
</script>
