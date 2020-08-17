import Vue from 'vue';
import store from './store.js';
import Vuetify from 'vuetify';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import StudentManagerParent from './components/StudentManagerParent.vue';
import NewStudent from './components/NewStudent.vue';
import EditStudent from './components/EditStudent.vue';
import MessagesParent from './components/MessagesParent.vue';
import Message from './components/Message.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Asteroids from './components/Asteroids.vue';

Vue.use(Vuetify);
Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const routes = [
  { path: "/NewStudent", component: NewStudent },
  { path: "/editStudent/:id", component: EditStudent },
  { path: '/manager', component: StudentManagerParent },
  { path: '/messages', component: MessagesParent },
  { path: '/messages/:id', component: Message },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/asteroids', component: Asteroids },
];

const router = new VueRouter({ routes });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
