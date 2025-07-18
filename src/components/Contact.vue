<template>
  <section id="contact" class="bg-gray-100 px-6 py-16 pb-36">
    <div class="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-2">
      <!-- Left column: Message -->
      <div>
        <h2 class="mb-4 text-3xl font-bold text-blue-600">Let’s work together</h2>
        <p class="mb-6 text-lg text-gray-700">
          I'm open to freelance projects and always happy to collaborate on interesting ideas. If
          you’re looking for a reliable and pragmatic developer — let’s talk!
        </p>
      </div>

      <!-- Right column: Contact card -->
      <div class="space-y-4 rounded-xl bg-white p-6 shadow-lg">
        <div class="justify-left flex items-center space-x-4 pl-28">
          <p class="text-sm text-gray-500">Upwork</p>
          <a
            href="https://github.com/bajm98"
            target="_blank"
            class="font-medium text-blue-600 hover:underline"
          >
            upwork.com/bajm98
          </a>
        </div>
        <div class="justify-left flex items-center space-x-4 pl-28">
          <p class="text-sm text-gray-500">Email</p>
          <a
            href="mailto:benoit.touss1@gmail.com"
            class="font-medium text-blue-600 hover:underline"
          >
            benoit.touss1@gmail.com
          </a>
        </div>
        <div class="justify-left flex items-center space-x-4 pl-28">
          <p class="text-sm text-gray-500">LinkedIn</p>
          <a
            href="https://linkedin.com/in/bajm98"
            target="_blank"
            class="font-medium text-blue-600 hover:underline"
          >
            linkedin.com/in/bajm98
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { useTranslation } from '../composables/useTranslation'

  const t = useTranslation()
</script>
