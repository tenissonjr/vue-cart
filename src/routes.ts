import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Product from './pages/Product.vue'
import Cart from './pages/Cart.vue'
import PesquisaVisitantesEntradas from './pages/PesquisaVisitantesEntradas.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/product/:productId', component: Product },
    { path: '/cart', component: Cart },
    { path: '/pesquisar', component: PesquisaVisitantesEntradas }    ,
    
];

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export default router