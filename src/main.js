import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(router).mount('#app')

var Vue = require('vue');

new Vue({
    el: '#app',
    data() {
        return {
                name: 'Masha',
                age: '18',
                myImage: 'https://clck.ru/Qyi6G'
            };
    },
    computed: {
        ageInFive: function() {
            return this.age + 5;
        }
    }
});
