<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            
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
                        <a class="nav-link active" href="#" aria-current="page"
                            >Project</a
                        >
                        <a class="nav-link" href="#">Info</a>
                        <a class="nav-link" href="#">Login</a>
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