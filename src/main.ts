import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import loading from 'vue-nice-loading'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// internal icons
import { faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
  faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
  faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload } from "@fortawesome/free-solid-svg-icons";

import axios from 'axios';
import VueAxios from 'vue-axios';

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

Vue.use(VueAxios,axios);

library.add(faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload);
library.add(fas)
library.add(fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy,{
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
})
Vue.use(loading)

Vue.config.productionTip = false
Vue.prototype.toPage = function(page: string, param? : {}){
  this.$router.push({name: page, params:param})
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
