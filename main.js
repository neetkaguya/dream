import Vue from 'vue'
import App from './App'

// vuex
import store from '@/store'

let vuexStore = require('@/store/$u.mixin.js');


// 引入全局uView
import uView from '@/uni_modules/uview-ui'

import mixin from './common/mixin'

Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(uView)

Vue.mixin(vuexStore);

// #ifdef MP
// 引入uView对小程序分享的mixin封装
const mpShare = require('@/uni_modules/uview-ui/libs/mixin/mpShare.js')
Vue.mixin(mpShare)
// #endif

Vue.mixin(mixin)

const app = new Vue({
    store,
    ...App
})




import helper from '@/common/helper.js';
Vue.use(helper, app);

import wxHelper from '@/common/wxHelper.js';
Vue.use(wxHelper, app);
// 引入请求封装
require('./util/request/index')(app)

app.$mount()
