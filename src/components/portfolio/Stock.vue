<template>
    <div class="col-sm-6 col-md-4 main">
        <div class="card">
            <div class="card-header bg-success text-white">
                <h3 >{{stock.name}} <small>Price: {{stock.price}} | Quantity: {{stock.quantity}} </small> </h3>
            </div>
            <div class="card-body">
                <div class="pull-left">
                    <input type="number"
                           class="form-control"
                           placeholder="Quantity"
                           v-model="quantity">
                </div>
                <div class="pull-right">
                    <button
                            class="btn btn-success"
                            @click="sellStock"
                            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity*1)">
                         {{insufficientQuantity? 'Not enough Stocks': 'Sell'}}
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        props:['stock'],
        data (){
            return{
                quantity:0
            }
        },
        computed: {
            insufficientQuantity(){
                return this.quantity * 1 > this.stock.quantity * 1;
            }
        },
        methods:{
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
          sellStock(){
              const order = {
                  stockId: this.stock.id,
                  stockPrice: this.stock.price,
                  quantity: this.quantity
              };
              this.placeSellOrder(order);
              this.quantity = 0;
          }
        }
    }
</script>

<style scoped>
    .main{
        margin-top:3px;
    }
    .form-control{
        width: 90%;
    }
</style>