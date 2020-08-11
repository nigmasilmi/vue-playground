<template>
  <div>
    <h1>Hello from Messages</h1>
    <ul>
      <li v-for="message in messages" :key="message">{{ message }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Messages',
  data() {
    return {
      messages: ['a', 'b', 'c'],
    };
  },
};
</script>
