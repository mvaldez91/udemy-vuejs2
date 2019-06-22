import Vue from 'vue'
import App from './App.vue'
import {routes} from './routes';
import VueRouter from 'vue-router';
import store from './store/store';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
    router,
    store
}).$mount('#app');
