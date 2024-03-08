import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: AppHome
        }
    ]
})