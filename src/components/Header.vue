<template>
  <div class="grid grid-cols-4 p-0">
    <div class="name-wrapper flex justify-content-start">Greenfighters</div>
    <div class="global-links flex justify-content-start">
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

<style lang="scss">
.link-item {
  &:hover {
    background-color: var(--p-emerald-600);
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
</style>
