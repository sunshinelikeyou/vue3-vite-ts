import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import ('@/components/Login.vue')
    },
    {
        path: '/todo',
        component: () => import ('@/components/TodoList.vue')
    },
    {
        path: '/login',
        component: () => import ('@/components/Login.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
