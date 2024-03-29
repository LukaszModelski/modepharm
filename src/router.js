import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import Home from './components/Home.vue';
import Category from './components/Category.vue';
import Page from './components/Page.vue';
import PageNotFound from './components/PageNotFound.vue';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/page-not-found', component: PageNotFound },
        { path: '/:slug/', component: Category },
        { path: '/:slug/:slug2', component: Page },
    ],
    scrollBehavior () {
        return { x: 0, y: 0 };
    }
});