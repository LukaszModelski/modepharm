import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import Home from './components/Home.vue'
import Category from './components/Category.vue'
import Page from './components/Page.vue'

Vue.use(Router);
Vue.use(Meta);

export default new Router({
    routes: [
        { path: '/', component: Home },
        { path: '/:slug/', component: Category },
        { path: '/:slug/:slug2', component: Page }
    ]
});