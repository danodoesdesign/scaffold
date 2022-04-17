import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'
import { createRouter, createWebHistory } from 'vue-router'

// Page imports
import Home from '@/views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    // Page routes
    routes: [
        { path: '/', name: 'Home', component: Home }
    ],
})

createApp(App)
    .use(router)
    .mount('#app')
