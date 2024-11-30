import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Start",
      component: () => import("@/views/Start.vue"),
      meta: {
        isMenuItem: true,
      },
    },
    {
      path: "/emissions-monitor",
      name: "Emissions Monitor",
      component: () => import("@/views/Emissions.vue"),
      meta: {
        isMenuItem: true,
      },
    },
  ],
});

router.beforeEach((toRoute, fromRoute, next) => {
  setPageTitle(toRoute.name);
  next();
});

function setPageTitle(routeName) {
  document.title = `Greenfighters | ${routeName}`;
}
export default router;
