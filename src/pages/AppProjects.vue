<script>
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store.js';
import axios from 'axios';
export default {
    name: 'AppProjects',
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
            projects: []
        }
    },
    created() {
        this.getProjects()
    },
    methods: {
        
        getProjects() {
            axios.get(`${this.store.baseurl}api/projects`).then((response) => {
                this.projects = response.data.results
                console.log(this.projects)
            })
        }

    },
}
</script>

<template>

    <div class="container">

        <div class="row my-5 justify-content-center">
            <div class="col-12 mb-3 text-center">
                <h3>Projects</h3>
            </div>
            <div class="col-6">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, blanditiis magni. Commodi neque repellendus consectetur harum ipsum, ducimus exercitationem maiores eligendi. Voluptatibus rerum harum facere. Blanditiis impedit repellendus accusamus tenetur!</p>
            </div>
        </div>

        <div class="row">
            <ProjectCard v-for="project, index in projects" :key="index" :project="project"/>
        </div>

    </div>
    
</template>

<style lang="scss">
    @use '../styles/general.scss';
</style>