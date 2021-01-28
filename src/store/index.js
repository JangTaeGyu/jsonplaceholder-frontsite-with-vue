import Vue from 'vue';
import Vuex from 'vuex';
import { getStoreModules } from '@/helpers/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: getStoreModules(),
});
