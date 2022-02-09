import Vue from 'vue'
import { MutationTree } from 'vuex'
import { defaultState } from './'
import { Globals } from '@/config/globals'
import { ConsoleEntry, ConsoleState } from './types'

export const mutations: MutationTree<ConsoleState> = {
  /**
   * Reset state
   */
  setReset (state) {
    Object.assign(state, defaultState())
  },

  /**
   * Adds a console entry
   */
  setConsoleEntry (state, entry: ConsoleEntry) {
    if (entry.id === undefined) {
      state.consoleEntryCount++
      entry.id = state.consoleEntryCount
    }
    while (state.console.length >= Globals.CONSOLE_HISTORY_RETENTION) {
      state.console.shift()
    }
    state.console.push(entry)
  },

  /**
   * Sets all console entries from moonraker store.
   */
  setAllEntries (state, payload: ConsoleEntry[]) {
    state.consoleEntryCount = payload.length
    state.console = payload
  },

  /**
   * Defines the list of available commands
   */
  setGcodeHelp (state, payload) {
    Vue.set(state, 'availableCommands', payload)
  },

  /**
   * Inits the console history from db
   */
  setInitConsole (state, payload: ConsoleState) {
    if (payload) Object.assign(state, payload)
  },

  /**
   * Inits the console history from file
   */
  setUpdateCommandHistory (state, payload: string[]) {
    if (payload) {
      state.commandHistory = [...payload]
    }
  },

  /**
   * Maintains the current console command
   */
  setConsoleCommand (state, payload) {
    state.consoleCommand = payload
  },

  /**
   * Sets auto scroll
   */
  setAutoScroll (state, payload) {
    state.autoScroll = payload
  }
}
