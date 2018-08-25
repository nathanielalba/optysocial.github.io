import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'

// App imports
import App from './App.vue'
import router from './router'

Vue.use(VueRouter)
Vue.use(VueI18n)

Vue.config.productionTip = false

new Vue({
  router,
  // fix for .config error
  i18n: require('./lib/i18n').default,
  render: h => h(App)
}).$mount('#app')
