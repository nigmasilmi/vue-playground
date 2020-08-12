import Vue from 'vue';
import store from './store.js';
import Vuetify from 'vuetify';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import vuetify from './plugins/vuetify';

Vue.use(Vuetify);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
