import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    auth: {
      namespaced: true,
      state: {
        token: ""
      },
      getters: {
        isAuthenticated(state) {
          console.log("token", state.token);
          return Boolean(state.token);
        }
      },
      actions: {
        login({ commit }) {
          commit(
            "setToken",
            Math.floor(Math.random() * 200) + Math.floor(Math.random() * 200)
          );
        },
        logout({ commit }) {
          commit("setToken", "");
        }
      },
      mutations: {
        setToken(state, payload) {
          state.token = payload;
        }
      }
    }
  }
});
