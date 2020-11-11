import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import('@/views/Home.vue')
  },
  {
    path: "/about",
    name: "About",
    alias: '/ss',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/About.vue")
  },
  {
    path: '/baseType',
    name: 'Base-Type',
    component: () => import('@/views/BaseType.vue')
  },
  {
    path: '/genericParadigm',
    name: 'Generic-Paradigm',
    component: () => import('@/views/GenericParadigm.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
