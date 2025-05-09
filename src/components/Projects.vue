<template>
    <section class="bg-gray-100 py-12 px-6">
      <h2 class="text-2xl font-semibold mb-6">My Projects</h2>
      <div class="grid gap-6 md:grid-cols-2">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </section>
  </template>
  
  <script setup>
  import ProjectCard from './ProjectCard.vue'
  import projects from '../projects.json'
  </script>
  