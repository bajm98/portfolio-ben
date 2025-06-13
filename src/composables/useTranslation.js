import { inject } from 'vue'

export function useTranslation() {
  const t = inject('t')
  if (!t) {
    throw new Error('Translation not provided')
  }
  return t
}
// This composable function retrieves the translation function `t` from the Vue context.
// It throws an error if the translation function is not available, ensuring that components using this composable can rely on the presence of translations.
// This is useful for components that need to display text in different languages based on user preferences or application settings.
// The `t` function is expected to be provided by a global translation setup, such as Vue I18n or a custom translation mechanism.
// Usage example in a Vue component:
// <template>
//   <div>
//     <h1>{{ t('greeting') }}</h1>
//     <p>{{ t('description') }}</p>
//   </div>
// </template>
// <script setup>
// import { useTranslation } from '@/composables/useTranslation'
// const t = useTranslation()
// </script>