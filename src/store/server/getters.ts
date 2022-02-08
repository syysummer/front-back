import { GetterTree } from 'vuex'
import { ServerInfo, ServerConfig, ServerState, SystemInfo, ServerSystemStat } from './types'
import { RootState } from '../types'
import { Globals } from '@/globals'

export const getters: GetterTree<ServerState, RootState> = {
  /**
   * Get's the current server info
   */
  getInfo: (state): ServerInfo => {
    return state.info
  },

  /**
   * Gets the current system info
   */
  getSystemInfo: (state): SystemInfo | null => {
    return state.system_info
  },

  /**
   * Return server config
   */
  getConfig: (state): ServerConfig => {
    return state.config
  },

  /**
   * Return server process stats
   */
  getProcessStats: (state): ServerSystemStat[] => {
    return state.moonraker_stats
  },

  /**
   * Indicates if a component is enabled
   */
  componentSupport: (state) => (component: string) => {
    return (state.info.components.includes(component))
  },

  /**
   * Return a list of supported services.
   * (will come from state.system_info with a moonraker update..)
   */
  getSupportedServices: (state) => {
    return state.system_info?.available_services || []
  },

  /**
   * Maps configuration files to an object representing a config doc link,
   * along with a service name.
   */
  getConfigMapByFilename: (state, getters) => (filename: string) => {
    const configMap = Globals.CONFIG_SERVICE_MAP

    // First, see if can find an exact match.
    let item = configMap.find(o => o.filename?.toLowerCase() === filename.toLowerCase())

    // ...now, try prefixes.
    if (!item) {
      item = configMap.find(o => {
        if (o.prefix) {
          return filename.toLowerCase().startsWith(o.prefix.toLowerCase())
        }
      })
    }

    // Finally, try suffixes.
    if (!item) {
      item = configMap.find(o => {
        if (o.suffix) {
          return filename.endsWith(o.suffix.toLowerCase())
        }
      })
    }

    if (item) {
      // console.log('found item', item)
      return {
        serviceSupported: getters.getSupportedServices.includes(item.service),
        ...item
      }
    }

    return {}
  }
}
