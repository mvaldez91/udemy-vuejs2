<template>
<div>
    <h1>Trader or View your Portfolio</h1>
    <h6>
        You may Save & Load your Data
    </h6>
    <h6>Click on -End Day- to begin a New Day !</h6>
    <p>Your Funds: {{funds}}</p>
</div>
</template>

<script>
    export default {
        name: "Home",
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style scoped>

</style>