import Vue from "vue";
import Vuex from "vuex";
import { setToken, getToken, removeToken } from "../utils/local-storage";
import randomId from "../utils/random-id";

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
        token: getToken()
      },
      getters: {
        isAuthenticated(state) {
          return Boolean(state.token);
        }
      },
      actions: {
        login({ commit }) {
          commit("setToken", randomId());
        },
        logout({ commit }) {
          removeToken();
          commit("setToken", "");
        }
      },
      mutations: {
        setToken(state, payload) {
          setToken(payload);
          state.token = payload;
        }
      }
    }
  }
});
