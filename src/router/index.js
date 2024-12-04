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
    redirect: "/emissions/data",
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
      {
        path: "/emissions/trading-systems",
        name: "Trading Systems",
        component: () => import("@/views/Emissions/Mock.vue"),
      },
      {
        path: "/emissions/faq",
        name: "FAQ",
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
  {
    path: "/legal",
    name: "Legal",
    redirect: "/legal/imprint",
    component: () => import("@/views/Legal/Index.vue"),
    children: [
      {
        path: "/legal/imprint",
        name: "Imprint",
        component: () => import("@/views/Legal/Imprint.vue"),
      },
      {
        path: "/legal/privacy-policy",
        name: "Privacy Policy",
        component: () => import("@/views/Legal/Privacy.vue"),
      },
      {
        path: "/legal/disclaimer",
        name: "Disclaimer",
        component: () => import("@/views/Legal/Disclaimer.vue"),
      },
      {
        path: "/legal/terms-of-use",
        name: "Terms of Use",
        component: () => import("@/views/Legal/TermsOfUse.vue"),
      },
    ],
    meta: {
      isMenuItem: false,
      localLinksMenu: {
        show: true,
        header: "Legal",
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
