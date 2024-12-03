<template>
  <div class="local-links-menu bg-white rounded-lg">
    <h3>See also:</h3>
    <ul>
      <li v-for="link in props.links">
        <router-link :to="link.path">{{ link.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  links: [],
});
</script>

<style></style>
