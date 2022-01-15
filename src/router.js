import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Search from './components/Search';
import Queue from './components/Queue';

const routes = [
    { name: 'search', path: '/', component: Search },
    { name: 'queue', path: '/queue', component: Queue }
];

const router = new VueRouter({
    routes,
    mode: 'history',
    base: '/'
});

export default router;