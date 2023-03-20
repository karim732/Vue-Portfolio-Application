// Composables
import { createRouter, createWebHistory } from "vue-router";
const ifAuthenticated = (to, from, next) => {
  if (localStorage.getItem("isLoggedIn") === "true") {
    next();
    return;
  }
  next("/");
};

const routes = [
  {
    path: "/",
    component: () => import("@/components/Login.vue"),
  },
  {
    path: "/profile",
    components: {
      default: () => import("@/components/Profile.vue"),
      Header: () => import("@/layouts/AppBar.vue"),
      LeftSidebar: () => import("@/layouts/NavLeft.vue"),
      RightSidebar: () => import("@/layouts/NavRight.vue"),
    },
    props: {
      default: true,
      Header: true,
      LeftSidebar: true,
      RightSidebar: true,
    },
    beforeEnter: ifAuthenticated,
    // component: () => import("@/components/Profile.vue"),
  },
  {
    path: "/experience",
    components: {
      default: () => import("@/components/Experience.vue"),
      Header: () => import("@/layouts/AppBar.vue"),
      LeftSidebar: () => import("@/layouts/NavLeft.vue"),
      RightSidebar: () => import("@/layouts/NavRight.vue"),
    },
    props: {
      default: true,
      Header: true,
      LeftSidebar: true,
      RightSidebar: true,
    },
    beforeEnter: ifAuthenticated,
    // component: () => import("@/components/Experience.vue"),
  },
  {
    path: "/projects",
    components: {
      default: () => import("@/components/Projects.vue"),
      Header: () => import("@/layouts/AppBar.vue"),
      LeftSidebar: () => import("@/layouts/NavLeft.vue"),
      RightSidebar: () => import("@/layouts/NavRight.vue"),
    },
    props: {
      default: true,
      Header: true,
      LeftSidebar: true,
      RightSidebar: true,
    },
    beforeEnter: ifAuthenticated,
    // component: () => import("@/components/Projects.vue"),
  },
  {
    path: "/education",
    components: {
      default: () => import("@/components/Education.vue"),
      Header: () => import("@/layouts/AppBar.vue"),
      LeftSidebar: () => import("@/layouts/NavLeft.vue"),
      RightSidebar: () => import("@/layouts/NavRight.vue"),
    },
    props: {
      default: true,
      Header: true,
      LeftSidebar: true,
      RightSidebar: true,
    },
    beforeEnter: ifAuthenticated,
    // component: () => import("@/components/Education.vue"),
  },
  {
    path: "/skills",
    components: {
      default: () => import("@/components/Skills.vue"),
      Header: () => import("@/layouts/AppBar.vue"),
      LeftSidebar: () => import("@/layouts/NavLeft.vue"),
      RightSidebar: () => import("@/layouts/NavRight.vue"),
    },
    props: {
      default: true,
      Header: true,
      LeftSidebar: true,
      RightSidebar: true,
    },
    beforeEnter: ifAuthenticated,
    // component: () => import("@/components/Skills.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
