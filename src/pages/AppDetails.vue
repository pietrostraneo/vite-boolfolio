<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'AppDetails',
    data() {
        return {
            store,
            project: []
        }
    },
    created() {
        this.getProjectDetails();
    },
    methods: {
        
        getProjectDetails() {
            axios.get(`${this.store.baseurl}api/projects/${this.$route.params.slug}`).then((response) => {
                this.project = response.data.results
                console.log(this.project)
            })
        }

    },
}
</script>
<template lang="">
    
    <div class="container">
        <div class="row justify-content-center">

            <div class="col-12 col-md-9">
                <h3>Details</h3>
                <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui corrupti natus, deleniti suscipit, eius at quasi corporis illum vero iste, ut nisi placeat perferendis amet? Optio obcaecati commodi molestiae!</p>
            </div>

            <div class="col-6">
                {{project.name}} 
            </div>
        </div>
    </div>

</template>
<style lang="">
    
</style>