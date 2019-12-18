import Vue from "vue";
import VueRouter from "vue-router";
import Map from "../views/Map/Map.vue";
import Actu from "../views/Actus";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Map
  },
  {
    path: "/actus",
    name: "Actu",
    component: Actu
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
