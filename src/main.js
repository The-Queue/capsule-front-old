import Vue from 'vue'
import App from './App.vue'

import io from 'socket.io-client';
import router from './router';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    socket: null
  },

  router,

  beforeMount() {
    this.socket = io('http://localhost:3000');
  }
}).$mount('#app')
