import Vue from 'vue'
import App from './App.vue'

import store from './store'
import i18n from '@/plugins/i18n'
import router from './router'

// Vant
import './plugins/vant.ts'

// Import plugins
import { FiltersPlugin } from './plugins/filters'
import { ColorSetPlugin } from './plugins/colorSet'
import { DayJSPlugin } from './plugins/dayjs'


Vue.use(DayJSPlugin)
Vue.use(ColorSetPlugin)
Vue.use(FiltersPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
