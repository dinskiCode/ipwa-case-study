<template>
  <div class="local-links-menu bg-white rounded-lg p-2">
    <h2 class="font-bold mb-3 text-slate-700 text-lg">
      {{ props.data.header }}
    </h2>
    <ul>
      <li v-for="link in props.data.links" class="mb-2">
        <router-link
          :to="link.path"
          class="text-slate-500 hover:text-slate-900"
          >{{ link.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  data: { required: false },
});
</script>

<style scoped>
.router-link-active {
  color: var(--p-slate-700);
  font-weight: 500;
}
</style>
