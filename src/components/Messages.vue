<template>
  <div>
    <v-flex sm8 offset-sm2>
      <v-card>
        <v-toolbar color="grey lighten-2">
          <v-toolbar-title>Message list</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-item v-for="message in messages" :key="message">
            <!-- <v-list-item-icon>
          <v-icon v-if="message.icon" color="pink">mdi-star</v-icon>
        </v-list-item-icon> -->

            <v-list-item-content>
              <v-list-item-title v-text="message"></v-list-item-title>
            </v-list-item-content>

            <!-- <v-list-item-avatar>
          <v-img :src="message.avatar"></v-img>
        </v-list-item-avatar> -->
          </v-list-item>
        </v-list>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Messages',
  data() {
    return {
      messages: [],
    };
  },
  created() {
    axios
      .get('http://localhost:3000/messages')
      .then((response) => (this.messages = response.data));
  },
};
</script>
