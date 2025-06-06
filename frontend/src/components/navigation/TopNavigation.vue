<template>
    <div class="flex items-right justify-end top-0 left-0 right-2 mr-2 z-10 mt-2">
        <nav aria-label="Main navigation">
            <ul class="flex items-center gap-x-4 text-white">
                <li>
                    <a href="/"
                        class="text-white hover:text-gray-300 hover:underline transition-colors duration-200">Articles</a>
                </li>
                <li>
                    <Dropdown label="Links" :items="[
                        { label: 'About me', icon: faHouse, href: '/about' },
                        { label: 'Contact me', icon: faEnvelope, href: '/contact' }
                    ]" />
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './UI/Dropdown.vue';
</script>