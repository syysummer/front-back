import Vue from 'vue'
import Vuex from 'vuex'
import { RootState } from './types'
import { InitConfig } from './config/types'

// Modules
import { socket } from './socket'
import { auth } from './auth'
import { charts } from './charts'
import { files } from './files'
import { history } from './history'
import { printer } from './printer'
import { server } from './server'
import { config } from './config'
import { wait } from './wait'
import { version } from './version'
import { console } from './console'
import { notifications } from './notifications'

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  strict: (process.env.NODE_ENV === 'development'),
  state: {},
  modules: {
    socket,
    auth,
    charts,
    files,
    history,
    printer,
    server,
    config,
    wait,
    version,
    console,
    notifications,
  },
  mutations: {},
  actions: {
    /**
     * Resets all stores
     */
    async reset ({ dispatch }, payload: string[]) {
      // Reset our color set.
      // Vue.$colorset.forceResetAll()

      // Dispatch a reset for each registered module.
      const p: Promise<any>[] = []
      const keys = payload || Object.keys(this.state)
      keys.forEach((key) => {
        if (this.hasModule(key)) {
          p.push(dispatch(key + '/reset'))
        }
      })
      return Promise.all(p)
    },

    async init ({ dispatch, commit }, payload: InitConfig) {
      // Sets the version and hash of Fluidd.
      commit('version/setVersion', process.env.VERSION)
      commit('version/setHash', process.env.HASH)

      // Set the api connection state..
      commit('socket/setApiConnected', payload.apiConnected)

      // Init the host and local configs..
      return [
        await dispatch('config/initHost', payload),
        await dispatch('config/initLocal', payload)
      ]
    },

    /**
     * A void action. Some socket commands may not need processing.
     */
    void (_, payload) {
      // console.log('void action', payload)
    }
  }
})
