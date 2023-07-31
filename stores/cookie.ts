import { defineStore } from "pinia";

export const useCookie = defineStore(
  "cookie",
  () => {
    const tooken = ref<string | null>(null);
    return {
      tooken,
    };
  },
  {
    persist: true,
  }
);
