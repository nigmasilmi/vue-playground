import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import vuetify from './plugins/vuetify';

Vue.use(Vuetify);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
