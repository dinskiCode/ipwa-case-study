<template>
  <h2 class="text-slate-900 text-xl p-2">{{ route.name }}</h2>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
