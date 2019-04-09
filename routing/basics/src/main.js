import Vue from 'vue';
import App from './app/app';
import { router } from './app/app';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
