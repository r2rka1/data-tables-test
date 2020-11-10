import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueColumnsResizableVuetify from 'vue-columns-resizable-vuetify';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue'

Vue.config.productionTip = false
Vue.use(VueColumnsResizableVuetify);
Vue.use(Antd);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
