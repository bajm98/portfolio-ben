<template>
  <main class="bg-white font-sans text-gray-900">
    <Header />
    <HeroSection />
    <About />
    <Work />
    <Contact />
    <!-- <Footer /> -->
  </main>
</template>

<script setup>
  import About from './components/About.vue'
  import Projects from './components/Projects.vue'
  import Contact from './components/Contact.vue'
  import HeroSection from './components/HeroSection.vue'
  import Header from './components/Header.vue'
  import Work from './components/Work.vue'
  import Footer from './components/Footer.vue'
  import { ref, computed, provide } from 'vue'
  import { translations } from './i18n'

  // Store the current language as a reactive variable (defaulting to 'en' or using saved preference)
  const currentLang = ref(localStorage.getItem('lang') || 'en')
  // Compute the translation object dynamically based on currentLang
  // t.value will contain all translated strings for the active language
  const t = computed(() => translations[currentLang.value])
  // Make currentLang available to any child component via inject()
  // This allows language toggling buttons to update the language
  provide('currentLang', currentLang)
  // Make the translation dictionary (t) available globally to child components
  // Any component can then access t.greeting, t.description, etc.
  provide('t', t)
</script>
