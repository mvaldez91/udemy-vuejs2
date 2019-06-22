<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <!-- Brand -->
        <router-link to="/" class="navbar-brand">Stock trader</router-link>

        <!-- Links -->
        <ul class="navbar-nav mr-auto">
            <router-link to="/portfolio"  class="nav-item" activeClass="active" tag="li"><a class="nav-link">Portfolio</a> </router-link>
            <router-link to="/stocks" class="nav-item" activeClass="active" tag="li"><a class="nav-link">Stocks</a> </router-link>
        </ul>
        <a href="#" class="nav-link"  @click="endDay">End Day</a>

        <div class="dropdown" >
            <button class="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
            @click="isDropDownOpen = !isDropDownOpen">
                Save & Load
            </button>
            <div class="dropdown-menu" :class="{show: isDropDownOpen}" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#" @click="saveDataClick">Save Data</a>
                <a class="dropdown-item" href="#" @click="loadDataClick">Load Data</a>
            </div>
        </div>
        <span class="navbar-text">
         <strong class="text-white"> Funds : ${{funds}}</strong>
        </span>


    </nav>
</template>

<script>
    import {mapActions} from 'vuex';
    import config from '../config';

    export default {
        name: "Header",
        computed:{
            funds(){
                return this.$store.getters.funds;
            }
        },
        data (){
            return{
                isDropDownOpen: false
            }
        },
        methods:{
            ...mapActions({
                    randomizeStocks: 'randomizeStocks',
                    fetchData: 'loadData'}
            ),
            endDay(){
                this.randomizeStocks();
            },
            saveDataClick(){
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };
                fetch(config.BASE_URL + config.BASE_FIREBASE_STORE,
                    {
                        method: 'PUT',
                        body: JSON.stringify(data)
                    })

            },
            loadDataClick(){
                this.fetchData();
            }
        }
    }
</script>

<style scoped>

</style>