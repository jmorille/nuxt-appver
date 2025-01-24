 
<script setup lang="ts">
// Source: https://github.com/kingyue737/vitify-nuxt/blob/main/app.vue

const route = useRoute();
const title = computed(() => {
  return route.meta?.title || route.matched[0].meta?.title || ''
});
useHead({
  title,
  titleTemplate: (title?: string) => !title ? 'Default title' : `${title} - My Site`,
  htmlAttrs: { lang: 'fr' },
  link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }, 
  ],
});

</script>
<template>
  <NuxtLayout >
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>
