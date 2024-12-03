<template>
  <main class="content-wrapper">
    <div class="content grid grid-cols-4 gap-4">
      <div
        :class="`hidden sm:block llm-wrapper bg-white rounded-lg col-span-1 p-3`"
        v-if="currentRoute?.children"
      >
        <LocalLinksMenu :route="currentRoute" />
      </div>
      <router-view v-slot="{ Component }" class="col-span-4 sm:col-span-3">
        <component :is="Component"></component>
      </router-view>
    </div>
  </main>
</template>

<script setup>
import {
  computed,
  onBeforeMount,
  onMounted,
  reactive,
  onBeforeUnmount,
  ref,
} from "vue";
import LocalLinksMenu from "@/components/LocalLinksMenu.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentRoute = computed(() => route.matched[route.matched.length - 1]);
</script>

<style lang="scss">
.content-wrapper {
  flex: 1;
  background-color: var(--p-slate-200);
  overflow-y: auto;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
}
</style>
