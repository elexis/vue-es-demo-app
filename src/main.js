import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueEs from '@col.panic/vue-es'

Vue.config.productionTip = false

Vue.use(VueEs, {
  getHostname: function () {
      return "es.localhost:8480" // required
  },
  store,
  router,
  oauth: {
        client_id: "sample-project-app", // required, set the name of your app
        scopes: "fhir esadmin openid profile", // optional
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
