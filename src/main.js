import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "@/assets/main.scss";
import "@/style.css";
import "primeicons/primeicons.css";
import "flag-icons/css/flag-icons.min.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: "light",
      cssLayer: {
        name: "primevue",
        order: "tailwind-base, primevue, tailwind-utilities",
      },
    },
  },
});

app.mount("#app");
