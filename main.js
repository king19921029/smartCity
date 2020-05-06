import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 网络请求
import WXrequest from './utils/wx_request.js'
Vue.prototype.$wxhttp = WXrequest

// 正则
import regularUtil from './utils/regularUtils.js'
Vue.prototype.regularUtil = regularUtil

// title
import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
Vue.component('uni-nav-bar',uniNavBar)

// alert
import comAlert from "@/components/com_alert/com_alert.vue"
Vue.component('com-alert',comAlert)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
