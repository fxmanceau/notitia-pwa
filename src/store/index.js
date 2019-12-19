import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl:
      "http://localhost:8888/Classes/Dev/Projects/H3/semaine_rentre%CC%81e/hack4help/notitia-pwa/dist",
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
