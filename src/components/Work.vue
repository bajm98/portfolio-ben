<template>
  <section id="work" class="body-font bg-gray-100 text-gray-600">
    <div class="container mx-auto px-5 py-24">
      <div class="mb-20 flex w-full flex-col text-center">
        <h2 class="title-font mb-1 text-xs font-medium tracking-widest text-blue-500">
          {{ t.workSubtitle }}
        </h2>
        <h1 class="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
          {{ t.workTitle }}
        </h1>
        <p class="mx-auto text-base leading-relaxed lg:w-2/3">
          {{ t.workDescription }}
        </p>
      </div>

      <div class="flex flex-wrap">
        <FeatureCard
          v-for="(feature, index) in features"
          :key="index"
          :title="t[feature.title]"
          :description="t[feature.description]"
          :tags="feature.tags"
          :url="feature.url"
        />
      </div>
      <a href="https://github.com/bajm98" target="_blank" rel="noopener">
        <button
          class="mx-auto mt-16 flex rounded border-0 bg-blue-500 px-8 py-2 text-lg text-white hover:bg-blue-600 focus:outline-none"
        >
          {{ t.btnGitHub }}
        </button>
      </a>
    </div>
  </section>
</template>

<script setup>
  import FeatureCard from './FeatureCard.vue' // Import the FeatureCard component
  import { useTranslation } from '../composables/useTranslation'

  const t = useTranslation()
  const features = [
    {
      title: 'Projet web front-end fictif',
      description:
        'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
      tags: ['Vue.js', 'Tailwind CSS', 'Responsive Design'],
      url: 'https://www.google.com/',
    },
    {
      title: 'Projet full-stack fictif',
      description:
        'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
      tags: ['Vue.js', 'Node.js', 'Express'],
      url: '#',
    },
    {
      title: 'Projet backend fictif',
      description:
        'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
      tags: ['Node.js', 'Express', 'MongoDB'],
      url: '#',
    },
    {
      title: 'projectSpotifyTitle',
      description: 'projectSpotifyDescription',
      tags: ['Vue.js', 'Node.js', 'Express'],
      url: '#',
    },
  ]
</script>
