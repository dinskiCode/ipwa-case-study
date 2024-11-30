<template>
  <div class="app-container">
    <Header class="header" />
    <main class="content-wrapper">
      <div class="local-links-menu"></div>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
    <footer class="footer">
      <span>&copy;footer</span>
    </footer>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
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
  background-color: white;
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
