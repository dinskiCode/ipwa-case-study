import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Start",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
  console.log(toRoute, fromRoute);
  setPageTitle(toRoute.name);
  next();
});

function setPageTitle(routeName) {
  document.title = `Greenfighters | ${routeName}`;
}
export default router;
