<template>
  <div class="space-y-8 p-8">
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
      <p class="text-white">{{ subtexts[index] }}</p>
    </div>
    <div class="mt-4 flex flex-col">
      <h2 class="text-2xl font-semibold text-white">Download my CV</h2>
      <a
        href="https://drive.google.com/file/d/1R3qXv7ukgp8lQbOtL4FAmxTEZeLt72B3/view?usp=sharing"
        target="_blank"
        class="mt-4 text-white"
      >
        <button
          class="cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Download
        </button>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const texts = [
  'Bruno Costa',
  'Software Engineer',
  'Always excited to create and experience',
];

const subtexts = [
  'Software Engineer',
  'Passionate about software development, good design and flawless user experiences',
  'Hobbies: Lego, reading, coding, cycling, traveling and learning new things',
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
