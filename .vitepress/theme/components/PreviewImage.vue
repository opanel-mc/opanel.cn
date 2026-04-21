<script setup>
import { useData } from "vitepress";

const { isDark } = useData();
const { light, dark } = defineProps(["light", "dark"]);
</script>

<template>
  <ClientOnly>
    <div class="preview-container">
      <img v-if="isDark" :src="dark" alt="preview-image"/>
      <img v-else :src="light" alt="preview-image"/>
    </div>
  </ClientOnly>
</template>
