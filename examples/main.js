import Vue from 'vue'
import App from './App.vue'
import inputOption from './packages/input/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.use(inputOption)

new Vue({
  render: h => h(App),
}).$mount('#app')
