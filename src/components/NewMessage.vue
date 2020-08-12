<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-toolbar color="grey lighten-3">
                <v-toolbar-title>Write a new message</v-toolbar-title>
              </v-toolbar>
              <v-text-field
                v-model="msgBody"
                label="Message"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-btn class="mr-4" @click="submitMsg">submit</v-btn>
        </v-container>
        <v-spacer></v-spacer>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'NewMessage',
  data() {
    return {
      msgBody: '',
    };
  },
  methods: {
    submitMsg() {
      this.$store.dispatch('postNewMessage', this.msgBody);
      this.msgBody = '';
    },
  },
};
</script>
