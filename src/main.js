// // import { createApp } from 'vue'
// // import App from './App.vue'
// // import router from './router'
// // // import router from './router'
// //
// // // import Vue from 'vue'
// // // import VueRouter from 'vue-router'
// //
// // // Vue.use(VueRouter).use(router)
// //
// // createApp(App).use(router).mount('#app')
// import Vue from 'vue'
// import router from './router'
// import App from './App.vue'
//
//
//
// Vue.config.productionTip = false
//
// const App = new Vue({
//     el: "#app",
//     router
// }).$mount('#app')
//
// // new Vue({
// //     router,
// //     render: h => h(App),
// // });

// import Vue from 'vue'
// import router from './router'
//
// Vue.config.productionTip = false
//
// const app = Vue.createApp({
//     router,
// })
//
// app.mount('#app')

import App from './App.vue'
import Vue from 'vue'
import router from './router'

Vue.createApp({
    el: '#app',
    render: h => h(App),
    router
}).mount('#app')

