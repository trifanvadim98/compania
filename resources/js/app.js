//require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import router from './router';
import App from './components/App';
import route from './route';
import Lang from './lang';
import Vue from 'vue';

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
		render : h => h(App),
		router
});



