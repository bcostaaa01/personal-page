<script setup lang="ts">
import Home from './views/Home.vue';
import TopNavigation from './components/navigation/TopNavigation.vue';
</script>

<template>
  <div class="relative min-h-screen w-full">
    <img
      src="https://images.ctfassets.net/nnkxuzam4k38/2SvDjcgyav5C1DOb79JKXl/d3b06db5bb6bdb4ab237f666b5b4980e/compute-ea4c57a4.png"
      alt="background" class="absolute inset-0 w-full h-full object-cover -z-10 brightness-50" />
    <div class="flex flex-col w-full">
      <TopNavigation />
      <div class="flex-1 flex">
        <Home />
      </div>
    </div>
  </div>
</template>
