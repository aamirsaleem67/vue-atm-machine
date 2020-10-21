import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import VueCardFormat from "vue-credit-card-validation";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(VueCardFormat);

new Vue({
  render: h => h(App)
}).$mount("#app");
