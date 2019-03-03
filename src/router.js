import Vue from 'vue';
import Router from 'vue-router';
import Page from './components/Page.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/page/:slug', component: Page },
        { path: '/hello', component: HelloWorld }
    ]
});