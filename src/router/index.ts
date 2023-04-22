/*
 * @Author: yin
 * @Date: 2023-03-26 23:09:35
 * @LastEditTime: 2023-04-22 00:58:22
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
        name: 'layout', path: '/layout', component: () => import("../pages/layout/index.vue"),
        children: [
            { name: 'page1', path: 'page1', component: () => import("../pages/singlePage/page1.vue") },
            { name: 'page2', path: 'page2', component: () => import("../pages/singlePage/page2.vue") },
            { name: 'page3', path: 'page3', component: () => import("../pages/singlePage/page3.vue") },
            { name: 'page4', path: 'page4', component: () => import("../pages/singlePage/page4.vue") },
        ]
    },
    {
        name: 'home', path: '/home', component: () => import("../pages/home/index.vue")
    },
    {
        name: 'course', path: '/course', component: () => import("../pages/course/index.vue")
    },
    {
        name: 'vip', path: '/vip', component: () => import("../pages/vip/index.vue")
    },
    {
        name: 'notes', path: '/notes', component: () => import("../pages/notes/index.vue")
    },
    {
        name: 'blog', path: '/blog', component: () => import("../pages/blog/index.vue")
    }
]
const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }), history: createWebHistory(), routes,
})
router.beforeEach((to, from, next) => {
    next()
})
export default router
