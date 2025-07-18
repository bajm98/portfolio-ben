<template>
  <header class="body-font fixed top-0 z-50 w-full bg-white text-gray-600 shadow">
    <div class="container mx-auto flex flex-col flex-wrap items-center p-5 px-10 md:flex-row">
      <!-- Logo -->
      <a class="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0" href="#">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white"
        >
          BT
        </div>
        <span class="ml-3 text-xl">{{ t.portfolioTitle }}</span>
      </a>

      <!-- Navigation -->
      <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto">
        <a class="mr-5 hover:text-gray-900" href="#about">{{ t.navAbout }}</a>
        <a class="mr-5 hover:text-gray-900" href="#work">{{ t.navWork }}</a>
        <a class="mr-5 hover:text-gray-900" href="#contact">{{ t.navContact }}</a>
        <button
          @click="downloadCV"
          class="inline-flex rounded-lg border-0 bg-blue-500 px-6 py-2 text-lg text-white hover:bg-blue-600 focus:outline-none"
        >
          {{ t.btnResume }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-download ml-4"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
            <path d="M7 11l5 5l5 -5" />
            <path d="M12 4l0 12" />
          </svg>
        </button>
      </nav>
      <!-- Langue toggle -->
    </div>
    <LanguageToggle class="absolute right-4 top-1/2 -translate-y-1/2" />
  </header>
</template>

<script setup>
  import LanguageToggle from './LanguageToggle.vue' // Import the LanguageToggle component
  import { useTranslation } from '../composables/useTranslation'

  const t = useTranslation()
  const downloadCV = () => {
    window.open('/Resume_Toussaint.pdf', '_blank')
  }
</script>
