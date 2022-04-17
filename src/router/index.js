import { createRouter, createWebHistory } from 'vue-router'

// Page imports
import Home from '@/views/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home }
]

const router = createRouter({
    history: createWebHistory(),
    // Page routes
    routes
})

export default router;