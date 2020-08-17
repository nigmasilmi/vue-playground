<template>
  <v-app>
    <v-app-bar app color="pink darken-2" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Vue Playground</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn dark to="/asteroids" color="lime darken-1">Asteroids</v-btn>
      <v-btn to="/messages" dark color="light-green darken-2">Messages</v-btn>
      <v-btn to="/manager" dark color="indigo darken-3">Student Manager</v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
      <v-snackbar
        color="pink darken-3"
        v-model="$store.state.errorMod.showError"
      >{{$store.state.errorMod.errorText}}</v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
// import Asteroids from './components/Asteroids.vue';

export default {
  name: "App",
};
</script>
