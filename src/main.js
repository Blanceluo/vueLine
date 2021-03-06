import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import http from './libs/http';
import api from './libs/api';

Vue.config.productionTip = false;

Vue.prototype.$http = http;
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
