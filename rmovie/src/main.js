import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';
import VueCookies from 'vue-cookies'
Vue.use(VueCookies, { expire: '15m'})
Vue.prototype.$users = {user_name: "name"}
Vue.prototype.$accessToken ="start"



Vue.use(BootstrapVue)
Vue.config.productionTip = false


import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

