import Vue from 'vue'
import App from './App.vue'

import io from 'socket.io-client';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    socket: null
  },

  beforeMount() {
    this.socket = io('http://localhost:3000');
  }
}).$mount('#app')
