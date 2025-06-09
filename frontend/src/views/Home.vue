<template>
  <div class="min-h-screen overflow-x-hidden scroll-smooth">
    <!-- the hero section -->
    <section
      id="hero"
      class="relative flex min-h-screen w-full flex-col items-center justify-center px-4"
    >
      <div class="flex w-full flex-wrap justify-center px-0 pt-4">
        <span
          class="mb-4 w-full text-center text-2xl font-bold text-white md:text-3xl"
        >
          Welcome to my blog about software engineering. I am an expert in
        </span>
        <div
          class="ml-0 flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-2"
        >
          <div
            class="bg-opacity-90 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-800 transition-all duration-300 hover:bg-gray-700"
          >
            <a
              href="https://vuejs.org/"
              target="_blank"
              class="flex h-full w-full items-center justify-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
                alt="vue"
                class="h-10 object-contain"
              />
            </a>
          </div>
          <span class="text-2xl font-bold text-white md:text-3xl">,</span>
          <div
            class="bg-opacity-90 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-800 transition-all duration-300 hover:bg-gray-700"
          >
            <a
              href="https://www.thymeleaf.org/"
              target="_blank"
              class="flex h-full w-full items-center justify-center"
            >
              <img
                src="https://img.icons8.com/?size=512&id=iWpVsSkAqPpZ&format=png"
                alt="thymeleaf"
                class="h-10 object-contain"
              />
            </a>
          </div>
          <span class="text-2xl font-bold text-white md:text-3xl">and</span>
          <div
            class="bg-opacity-90 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-800 transition-all duration-300 hover:bg-gray-700"
          >
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              class="flex h-full w-full items-center justify-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
                alt="tailwind"
                class="h-10 object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll button -->
      <button
        @click="scrollToNextSection"
        class="absolute bottom-14 left-1/2 -translate-x-1/2 transform rounded-full bg-white/10 p-4 text-white transition-all duration-300 hover:bg-white/20"
        aria-label="Scroll to next section"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
      <!-- Invisible trigger for auto-scroll -->
      <div
        ref="autoScrollTrigger"
        class="pointer-events-none absolute bottom-0 left-0 h-2 w-full"
      ></div>
    </section>

    <!-- the external links section -->
    <section id="links" class="min-h-screen w-full bg-gray-900 px-4 py-20">
      <div class="mx-auto max-w-2xl px-0">
        <h2 class="mb-8 text-center text-2xl font-bold text-white md:text-4xl">
          You can find me on the following platforms:
        </h2>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            class="text-white hover:text-gray-300"
            >GitHub</a
          >
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            class="text-white hover:text-gray-300"
            >LinkedIn</a
          >
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            class="text-white hover:text-gray-300"
            >Twitter</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const autoScrollTrigger = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

// scroll to the links section
const scrollToNextSection = () => {
  // find the links section to scroll to
  const nextSection = document.getElementById('links');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
  if (autoScrollTrigger.value) {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // when user reaches the bottom of the hero section, scroll to the links section
          scrollToNextSection();
        }
      },
      {
        root: null,
        threshold: 1.0,
      }
    );
    observer.observe(autoScrollTrigger.value);
  }
});

onBeforeUnmount(() => {
  if (observer && autoScrollTrigger.value) {
    observer.unobserve(autoScrollTrigger.value);
  }
});
</script>
