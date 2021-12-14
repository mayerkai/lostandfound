// import { create } from "core-js/core/object";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../components/Items.vue"),
  },
  {
    path: "/lost",
    component: () => import("../components/Lost.vue"),
  },
  {
    path: "/found",
    component: () => import("../components/Found.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
