import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Command from "../views/Command.vue";
import Services from "../views/Services.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "command",
    meta: { layout: "command" },
    component: Command,
  },
  {
    path: "/home",
    name: "home",
    meta: { layout: "main" },
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/services",
    name: "services",
    meta: { layout: "main" },
    component: Services,
  },
  {
    path: "*",
    name: "404",
    meta: { layout: "error" },
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
