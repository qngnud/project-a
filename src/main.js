import Vue from 'vue'
import App from './App'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Home from "./components/core/Home";
import Explore from "./components/core/Explore";
import FeedBack from "./components/core/FeedBack";
import Share from "./components/core/Share";
import InfiniteLoading from 'vue-infinite-loading';

import {store} from "./store";

Vue.use(InfiniteLoading);
Vue.use(VueRouter);

Vue.config.productionTip = false;

let router = new VueRouter({
    mode: 'history',
    hash: false,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/explore',
            name: 'explore',
            component: Explore
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: FeedBack
        },
        {
            path: '/share',
            name: 'share',
            component: Share
        }
    ]
});
router.replace({
    path: '',
    redirect: '/home'
})

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app');
