<template>
  <div class="border-l-2 border-gray-200 border-opacity-60 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4">
    <h2 class="title-font mb-2 text-lg font-medium text-gray-900 sm:text-xl">{{ title }}</h2>
    <p class="mb-4 text-justify text-base leading-relaxed">{{ description }}</p>
    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="rounded-full bg-blue-300 px-3 py-1 text-xs font-medium text-gray-800"
      >
        {{ tag }}
      </span>
    </div>
    <a :href="url" class="inline-flex items-center py-4 text-blue-500">
      {{ t.projectLearnMoreBtn }}
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="ml-2 h-4 w-4"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
</template>

<script setup>
  import { useTranslation } from '../composables/useTranslation'

  const t = useTranslation()
  defineProps({
    title: String,
    description: String,
    tags: {
      type: Array,
      default: () => [],
    },
    url: String,
  })
</script>
