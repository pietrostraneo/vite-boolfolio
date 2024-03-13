<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    }
}
</script>

<template>
    <div class="col-12 col-md-3">
        <div class="card min-height">
    
            <div class="card-body">
                <router-link :to="{name: 'project-details', params: {slug: project.slug} }"><h4 class="card-title">{{ project.name }}</h4></router-link>
                
                <h6 class="card-subtitle mb-2 text-body-secondary">{{ project.assignment_date }}</h6>
                <!-- <img :src="project.preview" :alt=" project.name "
                    width="100px" v-if="project.preview != null">
                <p class="card-text">{{ project.description }}</p>
                <p class="card-text">
                    <strong>Type: </strong>
                    <span v-if="project.type != null">{{ project.type.name }}</span> 
                    <span v-if="project.type === null">No type assigned</span>                 
                </p>
                <p class="card-text">
                    <strong>Technologies:</strong>
                    <span v-if="project.technologies.length > 0" v-for="tech, index in project.technologies"> {{tech.name}}, </span>
                    <span class="text-danger" v-if="project.technologies.length === 0"> No technologies assigned for this project</span>
                </p>
                <p class="card-text"><strong>Supervisors: </strong>{{ project.supervisors }}</p>
                <p class="card-text"><strong>Framework: </strong>{{ project.framework }}</p> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .min-height{
        min-height: 515px;
    }
</style>