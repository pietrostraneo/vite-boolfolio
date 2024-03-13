<script>
import { store } from '../store.js'
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <header>
        <div class="container-fluid">
            <div class="row mx-3">
                <div class="col-12 d-flex justify-content-between align-items-center p-3">
                    <h1>Boolfolio</h1>
                    <nav
                        class="nav justify-content-center  "
                    >
                        <ul class="d-flex text-white list-unstyled ">
                            <li v-for="item, index in store.menuItems" :key="index" class="mx-3">
                                <router-link :to="{ name: item.name }">{{item.label}}</router-link>
                            </li>
                        </ul>
                    </nav>
                    
                </div>
            </div>
        </div>
        
    </header>
</template>

<style lang="scss">
    @use '../styles/general.scss';
    header{
        background-color: rgb(30, 30, 30);

        h1{
            color: orange;
        }
    }
</style>