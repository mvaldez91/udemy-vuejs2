<template>
    <div>

        <div class="container">
            <appHeader></appHeader>
            <div class="row">
                <div class="col-md-12">
                    <router-view/>
                </div>
            </div>

        </div>

    </div>
</template>

<script>

import Header from './components/Header.vue';

 export default {
     components: {
         appHeader: Header
     },
     created(){
         this.$store.dispatch('initStocks');
     }
}
</script>

<style>
    body{
        margin-top:10px;
    }
</style>
