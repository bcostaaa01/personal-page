<script setup lang="ts">
import TopNavigation from './components/navigation/TopNavigation.vue';
</script>

<template>
  <div class="relative min-h-screen w-full">
    <img
      src="https://images.ctfassets.net/nnkxuzam4k38/2SvDjcgyav5C1DOb79JKXl/d3b06db5bb6bdb4ab237f666b5b4980e/compute-ea4c57a4.png"
      alt="background"
      class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
    />
    <div class="flex w-full flex-col">
      <TopNavigation class="z-10" />
      <router-view />
    </div>
  </div>
</template>
