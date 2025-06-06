<template>
    <div class="relative" ref="dropdownRef">
        <button @mouseover="toggleOpen"
            class="bg-transparent rounded-md text-white hover:text-gray-300 h-10 w-32 flex items-center justify-center transition-all duration-200 hover:underline focus:outline-none cursor-pointer shadow-md">
            {{ props.label }}
            <FontAwesomeIcon :icon="props.icon" />
        </button>
        <transition name="dropdown-scale-fade">
            <div v-if="isOpen"
                class="absolute top-full right-0 min-w-[10rem] max-w-xs bg-gray-900 bg-opacity-95 border border-gray-700 rounded-lg mt-2 shadow-xl z-50 py-1 backdrop-blur-md">
                <ul>
                    <li v-for="item in items" :key="item.label">
                        <a :href="item.href"
                            class="flex justify-center items-center gap-2 px-4 py-2 text-white hover:bg-gray-700 hover:text-blue-400 focus:bg-gray-700 focus:text-blue-400 rounded transition-colors duration-150 text-base outline-none"
                            tabindex="0">
                            <FontAwesomeIcon v-if="item.icon" :icon="item.icon" />
                            <span>{{ item.label }}</span>
                        </a>
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
    transition: opacity 0.18s cubic-bezier(0.4, 0, 0.2, 1), transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
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