<template>
  <div class="items-right top-0 right-2 left-0 z-10 mt-2 mr-2 flex justify-end">
    <nav aria-label="Main navigation">
      <ul class="flex items-center gap-x-4 text-white">
        <li>
          <router-link
            to="/"
            class="text-white transition-colors duration-200 hover:text-gray-300 hover:underline"
            >Articles</router-link
          >
        </li>
        <li>
          <Dropdown
            label="Links"
            :items="[
              { label: 'About me', icon: faHouse, href: '/about' },
              { label: 'Contact me', icon: faEnvelope, href: '/contact' },
            ]"
            icon="fa-solid fa-link"
          />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { faHouse, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './UI/Dropdown.vue';
</script>
