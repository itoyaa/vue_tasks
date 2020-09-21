import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(router).mount('#app')

var Vue = require('vue');

new Vue({
    el: '#app',
});