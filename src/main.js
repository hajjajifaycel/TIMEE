import Vue from 'vue';
// eslint-disable-next-line import/extensions
import App from './App.vue';
// eslint-disable-next-line import/first, import/no-unresolved
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// eslint-disable-next-line import/first, import/no-unresolved
import 'bootstrap/dist/css/bootstrap.css';
// eslint-disable-next-line import/first, import/no-unresolved
import 'bootstrap-vue/dist/bootstrap-vue.css';
// eslint-disable-next-line import/first, import/no-unresolved
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component('font-awesome-icon', FontAwesomeIcon);
new Vue({
  render: h => h(App),
}).$mount('#app');

