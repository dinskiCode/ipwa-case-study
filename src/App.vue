<template>
  <div class="app-container">
    <Header />
    <BaseContent />
    <Footer />
  </div>
</template>

<script setup>
// own vue components
import Header from "./components/Header.vue";
import BaseContent from "./components/BaseContent.vue";
import Footer from "./components/Footer.vue";
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

body {
  margin: 0;
  overflow-x: hidden;
}
</style>
