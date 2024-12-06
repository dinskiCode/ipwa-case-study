<template>
  <div
    class="accordion-wrapper sm:hidden sticky z-10 top-0 mb-5"
    v-if="showLocalLinksMenu"
  >
    <Accordion
      expandIcon="pi pi-bars"
      collapseIcon="pi pi-bars"
      v-model:value="mobileLocalLinksMenuOpen"
    >
      <AccordionPanel
        expandIcon="pi pi-bars"
        collapseIcon="pi pi-bars"
        class="rounded"
      >
        <AccordionHeader class="bg-white px-3 pt-4"></AccordionHeader>
        <AccordionContent>
          <LocalLinksMenu :data="data" />
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
  <main class="content-wrapper">
    <div class="content grid grid-cols-4 gap-4">
      <div
        :class="`hidden sm:block llm-wrapper bg-white rounded-lg col-span-1 p-3 ${
          rtlMode ? 'order-2' : ''
        }`"
        v-if="showLocalLinksMenu"
      >
        <LocalLinksMenu :data="data" :isRtl="rtlMode" />
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
// own vue components
import LocalLinksMenu from "@/components/LocalLinksMenu.vue";
// own js files
import { isRTL } from "@/utils";
// vue imports
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
// primevue components
import {
  Accordion,
  AccordionPanel,
  AccordionHeader,
  AccordionContent,
} from "primevue";

const route = useRoute();
const showLocalLinksMenu = computed(
  () => route.matched[0]?.children && route.matched[0].children?.length
);

const data = computed(() => {
  return {
    header: route.meta?.localLinksMenu?.header,
    links: route.matched[0]?.children,
  };
});

const mobileLocalLinksMenuOpen = ref(false);

const rtlMode = isRTL();
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
