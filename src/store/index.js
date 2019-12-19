import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: "",
    category: "all"
  },
  mutations: {
    updateCategory(state, value) {
      state.category = value;
    }
  },
  actions: {},
  modules: {}
});
