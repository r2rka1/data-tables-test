import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueColumnsResizableVuetify from 'vue-columns-resizable-vuetify';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './sync.css';
Vue.use(ElementUI)
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.config.productionTip = false
Vue.use(VueColumnsResizableVuetify);
Vue.use(Antd);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
