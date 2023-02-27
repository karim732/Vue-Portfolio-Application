// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/profile",
    component: () => import("@/components/Profile.vue"),
  },
  {
    path: "/experience",
    component: () => import("@/components/Experience.vue"),
  },
  {
    path: "/projects",
    component: () => import("@/components/Projects.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
