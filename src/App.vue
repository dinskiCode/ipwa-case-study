<template>
  <div class="app-container">
    <Header class="header" />
    <BaseContent />
    <Footer />
  </div>
</template>

<script setup>
import { computed, onBeforeMount, onMounted, reactive } from "vue";
import Header from "./components/Header.vue";
import BaseContent from "./components/BaseContent.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from "vue-router";

const state = reactive({
  route: null,
});

onMounted(() => {
  state.route = useRoute();
});
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
