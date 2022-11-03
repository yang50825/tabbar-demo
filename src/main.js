import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/iconfont/iconfont.css'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3001'

// 自动获取聚焦
Vue.directive('focus', {
    inserted (el) {
        el.focus()
    }
})

new Vue({
    render: (h) => h(App),
}).$mount('#app')
