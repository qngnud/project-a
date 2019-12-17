import Vue from 'vue'
import App from './App'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Home from "./components/Home";
import Explore from "./components/Explore";
import FeedBack from "./components/FeedBack";
import Share from "./components/Share";
import { store} from "./store";

Vue.use(VueRouter);


Vue.config.productionTip = false;

let router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },        {
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
})

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app');
