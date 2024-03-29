import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '*',
        name: 'pagenotfound',
        component: () => import('../views/PageNotFound.vue')
    },
    {
        path: '/filmview/:id',
        name: 'filmview',
        component: () => import('../views/FilmView.vue'),
        props: true
    },
    {
        path: '/wishlist',
        name: 'wishlist',
        component: () => import('../views/WishList.vue')
    },
    {
        path: '/addfilm',
        name: 'addfilm',
        component: () => import('../views/AddFilm.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
