import Vue from "vue";
import VueRouter from "vue-router";
import CartList from "../components/cart/CartList.vue";
import ProductList from "../components/product/ProductList.vue";
import ProductItem from "../components/product/ProductItem";
import NotFound from "../components/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/products", component: ProductList },
  { path: "/products/:id", component: ProductItem, props: true },
  { path: "/cart", component: CartList },
  { path: "/", redirect: "/products" },
  { path: "*", component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
