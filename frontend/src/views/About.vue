<template>
  <div class="space-y-12 p-8">
    <div
      v-for="(text, index) in texts"
      :key="index"
      ref="animatedElements"
      :class="[
        'opacity-0',
        'translate-x-[-20px]',
        'transition-all',
        'duration-700',
        visible[index] ? 'animate-slideRight translate-x-0 opacity-100' : '',
      ]"
    >
      <h2 class="text-2xl font-semibold text-white">{{ text }}</h2>
      <p class="mt-2 text-white">This text slides in as you scroll down.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const texts = [
  'First sliding text',
  'Second sliding text',
  'Third sliding text',
];

const animatedElements = ref([]);
const visible = ref(texts.map(() => false));

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = animatedElements.value.indexOf(entry.target);
          if (index !== -1) {
            visible.value[index] = true;
            observer.unobserve(entry.target);
          }
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.value.forEach((el) => {
    if (el) observer.observe(el);
  });
});
</script>
