<template>
  <main class="content-wrapper">
    {{ isLtr }}
    <div class="content grid grid-cols-4 gap-4">
      <div
        :class="`hidden sm:block llm-wrapper bg-white rounded-lg col-span-1 p-3`"
        v-if="showLocalLinksMenu"
      >
        <LocalLinksMenu :data="data" />
      </div>
      <router-view
        v-slot="{ Component }"
        :class="`col-span-4 ${
          showLocalLinksMenu ? 'sm:col-span-3' : ''
        } bg-white rounded-lg p-3`"
      >
        <component :is="Component"></component>
      </router-view>
    </div>
  </main>
</template>

<script setup>
import { computed } from "vue";
import LocalLinksMenu from "@/components/LocalLinksMenu.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const showLocalLinksMenu = computed(
  () => route.matched[0]?.children && route.matched[0].children?.length
);

const data = computed(() => {
  return {
    header: route.meta?.localLinksMenu.header,
    links: route.matched[0].children,
  };
});

const isLtr = computed(() => document.documentElement.dir);
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
