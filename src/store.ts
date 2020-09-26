import Vue from 'vue'
import Vuex from 'vuex'

import { createVuexStore } from 'vuex-simple'

import { Store } from './store/index'

Vue.use(Vuex)

const instance = new Store(new Date())

export default createVuexStore(instance, {
  strict: false,
  modules: {},
  plugins: []
})