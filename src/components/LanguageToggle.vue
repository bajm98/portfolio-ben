<template>
  <button
    @click="toggleLang"
    class="inline-flex items-center px-4 py-2 rounded-lg font-semibold transition
          text-white"
    :class="currentLang === 'en' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-red-500 hover:bg-red-600'"
  >
    <span class="text-lg">
      {{ currentLang === 'en' ? '🇫🇷 FR' : '🇬🇧 EN' }}
    </span>
  </button>
</template>

<script setup>
    import { inject } from 'vue';

    const currentLang = inject('currentLang');

    const toggleLang = () => {
        currentLang.value = currentLang.value === 'en' ? 'fr' : 'en';
        localStorage.setItem('lang', currentLang.value);
    }

</script>