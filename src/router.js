import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppDetails from "./pages/AppDetails.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/projects/:slug',
            name: 'project-details',
            component: AppDetails
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
    ]
})

export { router };