import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import axios from 'axios'
import vueaxios from 'vue-axios'
Vue.use(vueaxios,axios)


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
