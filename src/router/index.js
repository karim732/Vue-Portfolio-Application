// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/profile",
  },
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
  {
    path: "/education",
    component: () => import("@/components/Education.vue"),
  },
  {
    path: "/skills",
    component: () => import("@/components/Skills.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
