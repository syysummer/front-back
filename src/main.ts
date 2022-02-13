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

// Import ECharts
// import * as echarts from 'echarts'
import { plugin } from 'echarts-for-vue'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { Grid3DComponent } from 'echarts-gl/components'
import { SurfaceChart } from 'echarts-gl/charts'
import {
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  LegendComponent,
  VisualMapComponent
} from 'echarts/components'

import { SVGRenderer, CanvasRenderer } from 'echarts/renderers'

// Configure echarts
echarts.use([
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  LegendComponent,
  LineChart,
  VisualMapComponent,
  SurfaceChart,
  Grid3DComponent,
  SVGRenderer,
  CanvasRenderer
])
Vue.use(plugin, { echarts })

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
