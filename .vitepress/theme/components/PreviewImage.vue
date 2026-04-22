<script setup>
import { useData } from "vitepress";
import { computed } from "vue";

const { isDark } = useData();
const { light, dark } = defineProps(["light", "dark"]);
const srcUrl = computed(() => isDark.value ? dark : light);
</script>

<template>
  <ClientOnly>
    <div class="preview-container">
      <img :src="srcUrl" alt="preview-image"/>
    </div>
  </ClientOnly>
</template>
