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
        @click="scrollToNextSection('topics')"
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
        ref="autoScrollTriggerHero"
        class="pointer-events-none absolute bottom-0 left-0 h-2 w-full"
      ></div>
    </section>

    <!-- the my favourite topics section -->
    <section
      id="topics"
      class="relative min-h-screen w-full bg-gray-900 px-4 py-20"
    >
      <div class="mx-auto max-w-2xl px-0">
        <h2 class="mb-8 text-center text-2xl font-bold text-white md:text-4xl">
          My favourite topics
        </h2>
      </div>

      <!-- button to scroll to the next section -->
      <button
        @click="scrollToNextSection('links')"
        class="absolute bottom-10 left-1/2 -translate-x-1/2 transform rounded-full bg-white/10 p-4 text-white transition-all duration-300 hover:bg-white/20"
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
      <!-- Invisible trigger for auto-scroll to links -->
      <div
        ref="autoScrollTriggerTopics"
        class="pointer-events-none absolute bottom-0 left-0 h-2 w-full"
      ></div>
    </section>

    <!-- the external links section -->
    <section id="links" class="min-h-screen w-full bg-black px-4 py-20">
      <div class="mx-auto max-w-2xl px-0">
        <h2 class="mb-8 text-center text-2xl font-bold text-white md:text-4xl">
          You can find me on the following platforms:
        </h2>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/bcostaaa01"
            target="_blank"
            class="text-white hover:text-gray-300"
            >GitHub</a
          >
          <a
            href="https://www.linkedin.com/in/bruno-miguel-alves-costa/"
            target="_blank"
            class="text-white hover:text-gray-300"
            >LinkedIn</a
          >
        </div>

        <span
          class="mt-4 block w-full text-center text-2xl font-bold text-white"
        >
          My articles on Dev.to
        </span>

        <div class="mt-4 flex flex-wrap justify-center gap-4">
          <a
            href="https://dev.to/bcostaaa01"
            class="bg-opacity-90 group relative flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gray-800 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-blue-500 hover:bg-gray-700 hover:shadow-lg"
          >
            <img
              src="../assets/dev-to.png"
              alt="dev-to"
              class="h-full rounded-xl object-contain shadow-md transition-all duration-300 group-hover:brightness-50"
            />
            <div
              class="absolute inset-0 flex items-center justify-center px-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="bg-opacity-70 rounded-lg bg-black p-2">
                Dev.to Profile
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const autoScrollTriggerHero = ref<HTMLElement | null>(null);
const autoScrollTriggerTopics = ref<HTMLElement | null>(null);
let observerHero: IntersectionObserver | null = null;
let observerTopics: IntersectionObserver | null = null;

// scroll to the links section
const scrollToNextSection = (section: string) => {
  const nextSection = document.getElementById(section);
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
  if (autoScrollTriggerHero.value) {
    observerHero = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // when user reaches the bottom of the hero section, scroll to the topics section
          scrollToNextSection('topics');
        }
      },
      {
        root: null,
        threshold: 1.0,
      }
    );
    observerHero.observe(autoScrollTriggerHero.value);
  }
  if (autoScrollTriggerTopics.value) {
    observerTopics = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // when user reaches the bottom of the topics section, scroll to the links section
          scrollToNextSection('links');
        }
      },
      {
        root: null,
        threshold: 1.0,
      }
    );
    observerTopics.observe(autoScrollTriggerTopics.value);
  }
});

onBeforeUnmount(() => {
  if (observerHero && autoScrollTriggerHero.value) {
    observerHero.unobserve(autoScrollTriggerHero.value);
  }
  if (observerTopics && autoScrollTriggerTopics.value) {
    observerTopics.unobserve(autoScrollTriggerTopics.value);
  }
});
</script>
