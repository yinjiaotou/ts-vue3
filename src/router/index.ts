/*
 * @Author: yin
 * @Date: 2023-03-26 23:09:35
 * @LastEditTime: 2023-04-02 23:01:04
 * @LastEditors: yin
 * @Description: 
 */
import { createRouter, createWebHistory, } from 'vue-router'
export const routes = [
    {
        path: '/', redirect: '/login',
    },
    {
        name: 'login', path: '/login', component: () => import("../pages/login.vue")
    },
    {
        name: 'account', path: '/account', component: () => import("../pages/account.vue")
    },
    // {
    //     name: 'home', path: '/home', component: () => import("../pages/layout/index.vue")
    // },
    {
        name: 'home', path: '/home', component: () => import("../pages/swiper/index.vue")
    },
    {
        name: 'swiper', path: '/swiper', component: () => import("../pages/swiper/index.vue"),
        clildren: [
            { name: 'test', path: 'test', component: () => import("../pages/vip/index.vue") }
        ]
    },
    {
        name: 'course', path: '/course', component: () => import("../pages/course/index.vue")
    },
    {
        name: 'vip', path: '/vip', component: () => import("../pages/vip/index.vue")
    }
]
const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }), history: createWebHistory(), routes,
})
router.beforeEach((to, from, next) => {
    next()
})
export default router
