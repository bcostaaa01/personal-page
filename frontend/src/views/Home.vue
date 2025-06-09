<template>
  <div class="flex min-h-screen w-full flex-col items-center justify-center">
    <div class="flex flex-wrap px-8 pt-4">
      <span class="text-3xl font-bold whitespace-nowrap text-white"
        >Welcome to my blog about software engineering. I am an expert in</span
      >
      <div class="ml-2 flex flex-wrap items-center gap-x-2 gap-y-2">
        <div
          class="bg-opacity-90 flex h-16 w-16 max-w-16 min-w-16 items-center justify-center rounded-xl bg-gray-800 transition-all duration-300 hover:bg-gray-700"
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
        <span class="text-3xl font-bold text-white">,</span>
        <div
          class="bg-opacity-90 flex h-16 w-16 max-w-16 min-w-16 items-center justify-center rounded-xl bg-gray-800 transition-all duration-300 hover:bg-gray-700"
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
        <span class="text-3xl font-bold text-white">and</span>
        <div
          class="bg-opacity-90 flex h-16 w-16 max-w-16 min-w-16 items-center justify-center rounded-xl bg-gray-800 transition-all duration-300 hover:bg-gray-700"
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
  </div>
</template>
