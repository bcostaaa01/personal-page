<template>
  <div class="relative" ref="dropdownRef">
    <button
      @mouseover="toggleOpen"
      class="flex h-10 w-32 cursor-pointer items-center justify-center rounded-md bg-transparent text-white shadow-md transition-all duration-200 hover:text-gray-300 hover:underline focus:outline-none"
    >
      {{ props.label }}
      <FontAwesomeIcon :icon="props.icon" />
    </button>
    <transition name="dropdown-scale-fade">
      <div
        v-if="isOpen"
        class="bg-opacity-95 absolute top-full right-0 z-50 mt-2 max-w-xs min-w-[10rem] rounded-lg border border-gray-700 bg-gray-900 py-1 shadow-xl backdrop-blur-md"
      >
        <ul>
          <li v-for="item in items" :key="item.label">
            <router-link
              :to="item.href"
              class="flex items-center justify-center gap-2 rounded px-4 py-2 text-base text-white transition-colors duration-150 outline-none hover:bg-gray-700 hover:text-blue-400 focus:bg-gray-700 focus:text-blue-400"
              tabindex="0"
            >
              <FontAwesomeIcon v-if="item.icon" :icon="item.icon" />
              <span>{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref, onMounted, onBeforeUnmount } from 'vue';

interface Props {
  label: string;
  icon: any;
  href: string;
  items: {
    label: string;
    icon?: any;
    href: string;
  }[];
}

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});

const props = defineProps<Props>();
</script>

<style scoped>
.dropdown-scale-fade-enter-active,
.dropdown-scale-fade-leave-active {
  transition:
    opacity 0.18s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-scale-fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.dropdown-scale-fade-enter-to {
  opacity: 1;
  transform: scale(1);
}

.dropdown-scale-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}

.dropdown-scale-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
