import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import VueCardFormat from "vue-credit-card-validation";
import VueRouter from "vue-router";
import router from "./router/index";
import "./guards/auth";
import store from "./store/index";
import VModal from "vue-js-modal";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(VueCardFormat);
Vue.use(VModal, {
  dialog: true,
  dynamicDefaults: {
    draggable: true,
    resizable: true,
    height: "auto",
  },
});
Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
