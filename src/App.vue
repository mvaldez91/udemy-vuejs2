<template>
    <div>

        <div class="container">
            <appHeader></appHeader>
            <div class="row">
                <div class="col-md-12">
                    <transition name="slide" mode="out-in">
                        <router-view/>
                    </transition>
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
    .slide-enter-active{
        animation: slide-in 200ms ease-out forwards;
    }
    .slide-leave-action{
        animation: slide-out 200ms ease-out forwards;
    }
    @keyframes slide-in{
        from{
            transform: translateY(-30px);
            opacity: 0;
        }
        to{
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out{
        from{
            transform: translateY(0);
            opacitiy: 1;
        }
        to{
            transform: translateY(-30px);
            opacitiy:0;
        }
    }
</style>
