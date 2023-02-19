import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Plugins from './unit/vant'
import Vant from 'vant'
import 'vant/lib/index.less'
import '@/styles/common.less'

Vue.config.productionTip = false
// Plugins(Vue)
Vue.use(Vant)

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
console.dir(vm, 'vm')

function Sky(name, age) {
  this.name = name
  this.age = age
  console.dir(this)
}

Sky.prototype.getName = function () {
  return this.name
}
// eslint-disable-next-line no-new
new Sky('holy', 18)
console.dir(Sky)
