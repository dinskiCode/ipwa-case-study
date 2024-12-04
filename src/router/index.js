import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Start",
    component: () => import("@/views/Start.vue"),
    meta: {
      isMenuItem: true,
    },
  },
  {
    path: "/emissions",
    name: "Emissions",
    component: () => import("@/views/Emissions/Index.vue"),
    children: [
      {
        path: "/emissions/data",
        name: "Latest Data",
        component: () => import("@/views/Emissions/Data.vue"),
      },
      {
        path: "/emissions/personal-calculator",
        name: "Calculate your personal emissions",
        component: () => import("@/views/Emissions/Mock.vue"),
      },
    ],
    meta: {
      isMenuItem: true,
      localLinksMenu: {
        show: true,
        header: "Emissions",
      },
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  setPageTitle(toRoute.name);
  next();
});

function setPageTitle(routeName) {
  document.title = `Greenfighters | ${routeName}`;
}

function getMenuItems() {
  return routes.reduce((result, route) => {
    if (route.meta.isMenuItem) {
      result.push({ path: route.path, name: route.name });
    }
    return result;
  }, []);
}

export { getMenuItems, router };
export default router;
