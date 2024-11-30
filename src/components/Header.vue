<template>
  <div class="grid grid-cols-4">
    <div class="name-wrapper flex justify-content-start">Greenfighters</div>
    <div class="global-links flex justify-content-start">
      <div class="link-item mr-5 p-2" v-for="link in globalLinks">
        <router-link :to="link.path">{{ link.name }}</router-link>
      </div>
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

<style></style>
