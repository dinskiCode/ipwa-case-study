<template>
  <div class="local-links-menu bg-white rounded-lg p-2">
    <h3 class="font-bold mb-3 text-slate-900">
      {{ props.data.header }}
    </h3>
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
import { useRoute } from "vue-router";
import { computed, reactive } from "vue";

const props = defineProps({
  data: { required: false },
});
</script>

<style scoped>
.router-link-active {
  color: var(--p-slate-900);
}
</style>
