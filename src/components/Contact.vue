<template>
    <section class="py-12 px-6 text-center">
      <h2 class="text-2xl font-semibold mb-4">Contact</h2>
      <p>{{ t.contactInfo }} <a href="mailto:benoit.touss1@gmail.com" class="text-blue-600">benoit.touss1@gmail.com</a></p>
    </section>
</template>

<script setup>
    import { useTranslation } from '../composables/useTranslation'

    const t = useTranslation();
</script>