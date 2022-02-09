<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
// rem adaptation
import '@/utils/rem.ts'

// Init
import { appInit } from './init'
import { InitConfig } from './store/config/types'
import { Globals } from './config/globals'
// import plugins
import { SocketPlugin } from './plugins/socketClient'

import { Component, Mixins, Vue } from 'vue-property-decorator'
import { changeTheme, THEME_TYPE } from '@/config/colorConfig'

@Component({})
export default class App extends Mixins(Vue) {
  mounted () {
    appInit()
    .then((config: InitConfig) => {
      console.log('Loaded App Configuration', config)

      // Init the socket plugin
      Vue.use(SocketPlugin, {
        url: config.apiConfig.socketUrl,
        reconnectEnabled: true,
        reconnectInterval: Globals.SOCKET_RETRY_DELAY,
        store: this.$store
      })

      if (config.apiConfig.socketUrl && config.apiConnected && config.apiAuthenticated) {
        Vue.$socket.connect(config.apiConfig.socketUrl)
      }
    })
    .catch((e) => {
      console.log('Error attempting to init App:', e)
    })

    const theme: THEME_TYPE = localStorage.getItem('theme') as THEME_TYPE || 'theme1'
    changeTheme(theme)
  }

  changeTheme (e: Event) {
    const theme: THEME_TYPE = (e.target as HTMLInputElement).value as THEME_TYPE
    localStorage.setItem('theme', theme)
    changeTheme(theme)
  }
}

</script>

<style>
html, body, #app{
  width: 100%;
  height: 100%;
}
.about {
  width: 20rem;
  height: 20rem;
  background-color: var(--color2);
  border: 4px solid var(--color3);
  color: var(--color4);
}
</style>
