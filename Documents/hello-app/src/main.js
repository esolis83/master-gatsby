import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import titleMixin from "./mixins/titleMixin";
import vuetify from "./plugins/vuetify";
Vue.mixin(titleMixin);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
