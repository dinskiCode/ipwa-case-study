<template>
  <div class="app-container">
    <Header class="header" />
    <main class="content-wrapper">
      <div class="content grid grid-cols-4 gap-4">
        <div
          :class="`hidden sm:block llm-wrapper bg-white rounded-lg col-span-1 p-3`"
        >
          <LocalLinksMenu />
        </div>
        <router-view v-slot="{ Component }" class="col-span-4 sm:col-span-3">
          <component :is="Component"></component>
        </router-view>
      </div>
    </main>
    <footer class="footer p-5">
      <span>&copy; Greenfighters</span>
    </footer>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import LocalLinksMenu from "./components/LocalLinksMenu.vue";
import { useRoute } from "vue-router";

const currentRoute = useRoute();
</script>

<style lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: 0;
}

.footer {
  background-color: var(--p-slate-900);
  color: white;
  text-align: center;
  flex-shrink: 0;
  width: 100%;
}

.content-wrapper {
  flex: 1;
  background-color: var(--p-slate-200);
  overflow-y: auto;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
}

body {
  margin: 0;
  overflow-x: hidden;
}
</style>
