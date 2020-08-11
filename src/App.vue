<template>
  <div id="app">
    <div class="container">
      <!-- <Asteroids /> -->
      <Messages />
    </div>
  </div>
</template>

<script>
// import Asteroids from './components/Asteroids.vue';
import Messages from './components/Messages.vue';

export default {
  name: 'App',
  components: {
    // Asteroids,
    Messages,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
