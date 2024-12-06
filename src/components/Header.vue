<template>
  <div class="grid grid-cols-4 p-0 header">
    <div
      class="md:col-span-1 col-span-2 name-wrapper flex justify-content-start p-2"
    >
      <router-link to="/" class="logo-container bg-white rounded py-1 px-2">
        <img src="@/assets/logos/greenfighters-no-text.png" alt="" srcset="" />
      </router-link>
    </div>
    <div
      class="md:col-span-1 col-span-2 global-links flex justify-content-end items-end"
    >
      <router-link
        class="link-item mr-5 p-2"
        v-for="link in globalLinks"
        :to="link.path"
        >{{ link.name }}</router-link
      >
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { computed } from "vue";

const globalLinks = computed(() => {
  const routes = router.getRoutes();
  return routes.reduce((result, route) => {
    if (route.meta.isMenuItem) {
      result.push({ path: route.path, name: route.name });
    }
    return result;
  }, []);
});
</script>

<style lang="scss" scoped>
.link-item {
  &:hover {
    background-color: var(--p-emerald-600);
    color: white;
  }
}

.header {
  background-color: var(--p-emerald-700);
  color: white;
  text-align: center;
  flex-shrink: 0;
  width: 100%;
  border-bottom: 2px solid var(--p-emerald-900);
}

.router-link-active {
  border-bottom: 2px solid white;
}

img {
  width: 50px;
  height: auto;
}
</style>
