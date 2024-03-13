import { reactive } from 'vue';

export const store = reactive({
    baseurl: 'http://127.0.0.1:8000/',
    menuItems: [
        {
            name: 'home',
            label: 'Home'
        },
        {
            name: 'projects',
            label: 'Projects'
        },
        {
            name: 'about',
            label: 'About'
        },
    ],
})