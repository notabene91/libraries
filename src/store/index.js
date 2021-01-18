import Vue from 'vue'
import Vuex from 'vuex'
import Libraries from '@/assets/json/libraries.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    libraries: Libraries
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    libraries: s => s.libraries,
    libraryById: s => id => s.libraries.find(l => l.order === id)
  }
})
