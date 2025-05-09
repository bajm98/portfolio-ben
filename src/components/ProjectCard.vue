<template>
    <div class="bg-white p-4 shadow rounded">
      <h3 class="text-xl font-bold">{{ project.title }}</h3>
      <p class="mt-2 text-sm">{{ project.description }}</p>
      <a :href="project.link" class="text-blue-600 mt-2 inline-block" target="_blank">View Project</a>
    </div>
  </template>
  
  <script setup>
  defineProps({
    project: Object
  })
  </script>