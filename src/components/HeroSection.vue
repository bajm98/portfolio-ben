<template>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      
      <!-- IMAGE -->
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
        <img
          class="object-cover object-center rounded-full"
          alt="hero"
          :src="profileImg"
        />
      </div>

      <!-- TEXTE -->
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          {{ t.name }}
          <br class="hidden lg:inline-block" />
            {{ t.jobTitle }}
        </h1>
        <p class="mb-8 leading-relaxed">
            {{ t.description }}
        </p>

        <!-- BOUTONS -->
        <div class="flex justify-center">
          <button @click="downloadCV" class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            {{ t.btnResume }}
          </button>
          <a href="https://github.com/bajm98" target="_blank" rel="noopener">
            <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                {{ t.btnProjects }}
            </button>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
    import profileImg from '../assets/photo.jpg';
    import { useTranslation } from '../composables/useTranslation'

    const t = useTranslation();
    const downloadCV = () => {
        window.open('/Resume_Toussaint.pdf', '_blank');
    };
</script>
