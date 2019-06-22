<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <!-- Brand -->
        <router-link to="/" class="navbar-brand">Stock trader</router-link>

        <!-- Links -->
        <ul class="navbar-nav mr-auto">
            <router-link to="/portfolio"  class="nav-item" activeClass="active" tag="li"><a class="nav-link">Portfolio</a> </router-link>
            <router-link to="/stocks" class="nav-item" activeClass="active" tag="li"><a class="nav-link">Stocks</a> </router-link>
        </ul>
        <span class="navbar-text">
         <strong class="text-white"> Funds : ${{funds}}</strong>
        </span>

        <a href="#" class="nav-link"  @click="endDay">End Day</a>
    </nav>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "Header",
        computed:{
            funds(){
                return this.$store.getters.funds;
            }
        },
        methods:{
            ...mapActions([
                'randomizeStocks'
            ]),
            endDay(){
                this.randomizeStocks();
            }
        }
    }
</script>

<style scoped>

</style>