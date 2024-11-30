import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useLocalLinksStore = defineStore("localLinks", () => {
  const links = [];

  return { count, doubleCount, increment };
});
