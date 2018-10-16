// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "core-js/es6/promise"
import "core-js/es6/string"
import "core-js/es7/array"
// import cssVars from 'css-vars-ponyfill'

import Vue from "vue"
import BootstrapVue from "bootstrap-vue"
import App from "./App"
import router from "./router"
import store from "./store"
import "./registerServiceWorker"
// todo
// cssVars()
// import "./util/accounting"

Vue.use(BootstrapVue)
Vue.config.productionTip = false

// toastr
import "toastr/build/toastr.min.css"
window.toastr = require("toastr")

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
