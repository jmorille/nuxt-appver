<script setup lang="ts">
definePageMeta({ 
  icon: 'mdi-home',
  title: 'Hello',
  drawerIndex: 0,  
});


const { data } = await useFetch('/api/hello')
</script>

<template>
  <v-container fluid> 
      <pre>{{ data }}</pre>
  </v-container>
</template>