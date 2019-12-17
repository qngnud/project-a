import Vue from "vue";
import Vuex from 'vuex'


Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        layout: 'grid',
        currentPage: 'Home',
        router: [
            {
                icon: 'mdi-home',
                name: 'Home',
                router: '/',
                active: true
            },
            {
                icon: 'mdi-compass',
                name: 'Explore',
                router: '/explore',
                active: false
            },
            {
                icon: 'mdi-share',
                name: 'Share',
                router: '/share',
                active: false
            },
            {
                icon: 'mdi-message',
                name: 'Feedback',
                router: '/feedback',
                active: false
            }
        ]
    },
    mutations: {
        changeLayoutToGrid(state) {
            state.layout = 'grid'
        },
        changeLayoutToList(state) {
            state.layout = 'list'
        }
    }
});
