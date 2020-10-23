import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import VueCardFormat from "vue-credit-card-validation";
import VueRouter from "vue-router";
import router from "./router/index";
import "./guards/auth";
Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(VueCardFormat);
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
