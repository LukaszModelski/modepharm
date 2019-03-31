import Vue from 'vue';
import Router from 'vue-router';
import Page from './components/Page.vue'

Vue.use(Router);

export default new Router({
    routes: [
        // { path: '/', redirect: '/page/14' },
        { path: '/:slug/', component: Page },
        { path: '/:slug/:slug2', component: Page }
    ]
});